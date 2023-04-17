const MAX_CHARITIES = 4;
function getUserCauses() {
  var causes = [];
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === "T") {
      causes.push(localStorage.key(i));
    }
  }
  return causes;
}
async function getCompanyCauses(company) {
  const response = await fetch(
    `http://localhost:5000/api/companies/${company}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data[0].causes;
}
async function getCharities(causes) {
  charities = [];
  for (var i = 0; i < causes.length; i++) {
    const response = await fetch(
      `http://localhost:5000/api/charities/${causes[i]}`
    );
    charities.push(await response.json());
  }
  return charities;
}

function openWindow(url) {
  console.log(url);
  window.open(url);
}

function addListing(charity) {
  console.log(charity.main_website_url);
  console.log(charity.donation_url);
  document.getElementById("charities-list").insertAdjacentHTML(
    "beforeend",
    `<div class="charity-entry">
    <h3>${charity.name}</h3>
    <img style="margin: 3px" src="" />
    <p>
     ${charity.short_description} 
    </p>
    <div align="right" class="buttons">
      <button id = "${charity.name}_more"class="learn-more">Learn More</button>
      <button id = "${charity.name}_donate" class="donate">Donate</button>
    </div>
  </div>`
  );
  document
    .getElementById(charity.name + "_more")
    .addEventListener("click", () => {
      window.open(charity.main_website_url);
    });
  document
    .getElementById(charity.name + "_donate")
    .addEventListener("click", () => {
      window.open(charity.donation_url);
    });
}

window.onload = function () {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;
    console.log(url);
    const brand = url.split(".")[1];
    getCompanyCauses(brand).then((causes) => {
      var userCauses = getUserCauses();
      console.log(userCauses);
      console.log(causes);
      userCauses = userCauses.map((e) => e.trim());
      const filteredArray = causes.filter((value) =>
        userCauses.includes(value)
      );
      console.log(filteredArray);
      // get all charities from each category
      getCharities(filteredArray).then((charities) => {
        ptrs = [];
        finalChars = [];
        var total_chars = 0;
        for (var i = 0; i < charities.length; i++) {
          ptrs.push(0);
          total_chars += charities[i].length;
        }
        chars = 0;
        while (chars < Math.min(total_chars, MAX_CHARITIES)) {
          for (var i = 0; i < charities.length; i++) {
            if (chars >= MAX_CHARITIES) {
              break;
            }
            if (ptrs[i] < charities[i].length) {
              finalChars.push(charities[i][ptrs[i]]);
              ptrs[i] += 1;
              chars += 1;
            }
          }
        }
        console.log(finalChars);
        //remove initialListings
        const initialListing = document.getElementById("charities-list");
        console.log(initialListing);
        console.log(typeof initialListing[0]);
        while (initialListing.firstChild) {
          initialListing.removeChild(initialListing.firstChild);
        }
        // add new children
        for (var i = 0; i < finalChars.length; i++) {
          addListing(finalChars[i]);
        }
      });
    });
  });
};
