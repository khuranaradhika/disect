const colorRed = 'lightcoral';
const colorYellow = 'khaki';
const colorGreen = 'lightgreen';
const units = ' kgs'; // need to allow this to change depending on user preference

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
  if (value < 1000) {
    return colorGreen;
  } else if (value >= 1000 && value < 5000) {
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

function getEmissions(user_lat, user_long, company){
  fetch(`http://localhost:5000/api/emissions/shipto/${user_lat},${user_long}&${company}`).then((response) => {
    if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }).then((data)=>{document.getElementById("co2-units-display-id").textContent = `${data.emissions.toFixed(2)} kg(s)`});
}

window.onload = function() {
  // Get numbers for display
  const ethicalityRating = 8;
  const emissionsEstimate = 40000;

  // Set colors/remark to display -- read values and convert to color depending on value
  const circleElement = document.getElementById('ethic-rater-circle-id');
  const boxElement = document.getElementById('co2-units-display-id');
  const circleColor = getColorEthic(ethicalityRating);
  const boxColor = getColorCO2(emissionsEstimate);
  console.log(circleColor, boxColor);

  // Put statistics into the HTML
  document.getElementById('ethic-rater-rating-id').innerHTML = ethicalityRating;
  document.getElementById('co2-units-display-id').innerHTML = emissionsEstimate + units;

  // Set the background color of the element
  circleElement.style.backgroundColor = circleColor;
  boxElement.style.backgroundColor = boxColor;

  // Add a fun fact... grab from backend eventually
  document.getElementById('funfact-id').innerHTML = 'X';
  // document.getElementById("co2-units-display-id").innerHTML = 4;
  navigator.geolocation.getCurrentPosition(function (pos) {
  const crd = pos.coords;
  userLat = crd.latitude;
  userLong = crd.longitude;
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log(url)
    getEmissions(userLat, userLong, url.split('.')[1]);
    // use `url` here inside the callback because it's asynchronous!
  });
});
}