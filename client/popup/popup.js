const colorRed = "lightcoral";
const colorYellow = "khaki";
const colorGreen = "lightgreen";
const units = " kgs"; // need to allow this to change depending on user preference
const MAX_HYPHENS = 2;

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

// Determine ethicality rating circle color based on backend value
function getColorEthic(value) {
  if (value < 4) {
    return colorRed;
  } else if (4 <= value && value < 7) {
    return colorYellow;
  } else {
    return colorGreen;
  }
}

// Determine color of co2 emissions box based on value
function getColorCO2(value) {
  if (value < 50) {
    return colorGreen;
  } else if (value >= 50 && value < 200) {
    return colorYellow;
  } else {
    return colorRed;
  }
}

// Determine ethicality rating remark based on backend value
function getRemark(value) {
  if (value < 4) {
    return "Bad";
  } else if (4 <= value && value < 7) {
    return "Okay";
  } else {
    return "Good";
  }
}

function getCurrentUrl(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    callback(url);
  });
}

async function getEmissions(user_lat, user_long, company) {
  const response = await fetch(
    `http://localhost:5000/api/emissions/shipto/${user_lat},${user_long}&${company}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}

function getEthicality(brand) {
  const hyphenCombinations = [];

  // Add the brand name without hyphens as the first combination
  hyphenCombinations.push(brand);

  // Generate combinations with hyphens
  for (let i = 1; i < brand.length; i++) {
    hyphenCombinations.push(`${brand.slice(0, i)}-${brand.slice(i)}`);
  }

  // Generate combinations with two or more hyphens
  for (
    let hyphenCount = 2;
    hyphenCount <= /* brand.length */ MAX_HYPHENS;
    hyphenCount++
  ) {
    for (let i = 1; i < brand.length - hyphenCount + 1; i++) {
      const combination = `${brand.slice(0, i)}-${brand.slice(
        i,
        i + hyphenCount - 1
      )}-${brand.slice(i + hyphenCount - 1)}`;
      hyphenCombinations.push(combination);
    }
  }

  // Try each combination until a valid URL is found
  let index = 0;

  function tryCombination() {
    if (index >= hyphenCombinations.length) {
      console.log(`No valid URL found for brand '${brand}'`);
      return;
    }

    const good_on_you_url = `https://directory.goodonyou.eco/brand/${hyphenCombinations[index]}`;
    console.log(`Trying URL: ${good_on_you_url}`);

    fetch(good_on_you_url)
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        const parser = new DOMParser();
        const html = parser.parseFromString(data, "text/html");
        const element = html.querySelector("#__NEXT_DATA__");
        if (element) {
          const jsonData = JSON.parse(element.textContent);
          const brandData = jsonData.props.pageProps.brand;
          const laborRating = brandData.labourRating;
          const environmentRating = brandData.environmentRating;
          const animalRating = brandData.animalRating;

          // Update ethicality score
          const ethicallityScore = (
            (animalRating + laborRating + environmentRating) /
            6
          ).toFixed(0);
          console.log(
            `Ethicality score for brand '${brand}' found using URL: ${good_on_you_url} is ${ethicallityScore}`
          );
          document.getElementById("ethic-rater-rating-id").innerHTML =
            ethicallityScore;

          // Update product name with the correct name of the company
          const words = hyphenCombinations[index].split("-");
          const capitalizedWords = words.map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
          );
          const capName = capitalizedWords.join(" ");
          document.getElementById(
            "product-name"
          ).innerHTML = `Product Name (${capName})`;

          // Update ethicality score color
          const circleColor = getColorEthic(ethicallityScore);
          const circleElement = document.getElementById(
            "ethic-rater-circle-id"
          );
          circleElement.style.backgroundColor = circleColor;

          // Update remark
          const remark = getRemark(ethicallityScore);
          document.getElementById("ethic-rater-remarks-id").innerHTML = remark;
        } else {
          console.log(
            `Element with ID '__NEXT_DATA__' not found for URL: ${good_on_you_url}`
          );
          index++;
          tryCombination();
        }
      })
      .catch((error) => {
        console.error(
          `Error occurred while fetching data from URL: ${good_on_you_url}`,
          error
        );
        index++;
        tryCombination();
      });
  }

  tryCombination();
}

window.onload = function () {
  // Put statistics into the HTML
  document.getElementById("ethic-rater-rating-id").innerHTML = "-";
  document.getElementById("co2-units-display-id").innerHTML = "";

  // document.getElementById("co2-units-display-id").innerHTML = 4;
  navigator.geolocation.getCurrentPosition(function (pos) {
    const crd = pos.coords;
    userLat = crd.latitude;
    userLong = crd.longitude;
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      let url = tabs[0].url;
      console.log(url);
      const base_url = url.split("/").slice(0, 3).join("/");
      const brand = url.split(".")[1];
      getEthicality(brand);
      getEmissions(userLat, userLong, brand).then((response) => {
        emissions = response.emissions;
        message = response.message;
        document.getElementById(
          "co2-units-display-id"
        ).textContent = `${emissions.toFixed(2)} ${units}`;
        const boxColor = getColorCO2(emissions);
        const boxElement = document.getElementById("co2-units-display-id");
        boxElement.style.backgroundColor = boxColor;
        // TODO: Add a fun fact... grab from backend eventually
        document.getElementById("funfact-id").innerHTML = message;
      });
      document.getElementById("base-brand-url").innerHTML = base_url;
    });
  });
};
