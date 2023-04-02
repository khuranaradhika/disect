// Example function to determine color based on backend value
function getColor(value) {
  if (value < 4) {
    return 'red';
  } else if (4 <value < 7) {
    return 'yellow';
  } else if (value > 7) {
    return 'green';
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
  // Get the content of the element and convert it to a number
  const myElement = document.getElementById('ethic-rater-rating-id') ;
  const myNumber = parseFloat(myElement.textContent);

  // Get a reference to the HTML element
  const element = document.getElementById('ethic-rater-circle-id');

  // Get the color based on the backend value
  const color = getColor(myNumber);
  console.log(color);

  // Set the background color of the element
  element.style.backgroundColor = color;

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