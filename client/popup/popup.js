const colorRed = 'lightcoral';
const colorYellow = 'khaki';
const colorGreen = 'lightgreen';
const units = ' kgs'; // need to allow this to change depending on user preference

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
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
    return 'Bad';
  } else if (4 <= value && value < 7) {
    return 'Okay';
  } else {
    return 'Good';
  }
}

function getCurrentUrl(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var url = tabs[0].url;
        callback(url);
    });
}

async function getEmissions(user_lat, user_long, company){
  const response = await fetch(`http://localhost:5000/api/emissions/shipto/${user_lat},${user_long}&${company}`)
  if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data.emissions;
}

window.onload = function() {
  // Get numbers for display
  const ethicalityRating = 8;

  // Set colors/remark to display -- read values and convert to color depending on value
  const circleElement = document.getElementById('ethic-rater-circle-id');
  const boxElement = document.getElementById('co2-units-display-id');
  // Put statistics into the HTML
  document.getElementById('ethic-rater-rating-id').innerHTML = ethicalityRating;
  document.getElementById('co2-units-display-id').innerHTML = "";


  // document.getElementById("co2-units-display-id").innerHTML = 4;
  navigator.geolocation.getCurrentPosition(function (pos) {
  const crd = pos.coords;
  userLat = crd.latitude;
  userLong = crd.longitude;
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log(url)
    const base_url = url.split('/').slice(0, 3).join('/')
    const brand = url.split('.')[1];
    getEmissions(userLat, userLong, brand).then((emissions) => {
      document.getElementById("co2-units-display-id").textContent = `${emissions.toFixed(2)} ${units}`;
      const circleColor = getColorEthic(ethicalityRating);
      const boxColor = getColorCO2(emissions);
      // Set the background color of the element
      circleElement.style.backgroundColor = circleColor;
      boxElement.style.backgroundColor = boxColor;
      // TODO: Add a fun fact... grab from backend eventually
      document.getElementById('funfact-id').innerHTML = 'X';
    });
    document.getElementById("product-name").innerHTML = `Product Name (${brand.capitalize()})` 
    document.getElementById("base-brand-url").innerHTML = base_url;
  });
});
}