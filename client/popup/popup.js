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

// navigator.geolocation.getCurrentPosition(function (pos) {
//     const crd = pos.coords;
//     userLat = crd.latitude;
//     userLong = crd.longitude;

//     // Print user's current url
//     getCurrentUrl(function (url) {
//         console.log(url);
//     });

//     getEmissions(userLat, userLong, "xyr");

//     // emissions.get_emissions().then(co2 => {
//     //     let co2_amount = co2;
//     //     document.getElementById("co2-emissions").textContent = co2_amount;

//     //     const carbonEquivalence = new CarbonEquivalence(co2_amount);
//     //     const co2EmissionsText = carbonEquivalence.get_emissions();
//     //     document.getElementById("co2-equivalence").textContent = co2EmissionsText;
//     // }).catch(error => {
//     //     console.log('Error calculating distance: ', error);
//     // });
// }, function (err) {
//     console.error(`ERROR(${err.code}): ${err.message}`);
// });


// function getCurrentUrl(callback) {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         var url = tabs[0].url;
//         callback(url);
//     });
// }

function getEmissions(user_lat, user_long, company){
  fetch(`http://localhost:5000/api/emissions/shipto/${user_lat},${user_long}&${company}`).then((response) => {
    if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log("HELLO")
    return response.json();
  }).then((data)=>{document.getElementById("co2-units-display-id").textContent = `${data.emissions} kg(s)`});
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
  /*
    TODO:
      The call below is currently hardcoded to check emissions to a location of (1,1) from 
      company "xyr". Next steps are 
        1. Get the user's latitude and longitude and pass them to getEmissions
        2. Scrape the company of the website we are currently visiting and pass this
           instead of "xyr"
  */
  getEmissions(1, 1, "xyr");



}