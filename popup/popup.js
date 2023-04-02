import { CarbonEmissions } from '../scripts/carbon_emissions.js';
import { CarbonEquivalence } from '../scripts/carbon_equivalence.js';

// Placeholder values
let userLat = -1;
let userLong = -1;
const destinationLat = 39.9166666666667;
const destinationLong = 116.4;


// Get user's current location when the extension is first opened
navigator.geolocation.getCurrentPosition(function (pos) {
    const crd = pos.coords;
    userLat = crd.latitude;
    userLong = crd.longitude;

    // Print user's current url
    getCurrentUrl(function (url) {
        console.log(url);
    });

    const emissions = new CarbonEmissions(destinationLat, destinationLong, userLat, userLong);

    // *** Commented out to avoid extra API calls, we get 500 per month, so only uncomment when you're testing that this feature works ***

    // emissions.get_emissions().then(co2 => {
    //     let co2_amount = co2;
    //     document.getElementById("co2-emissions").textContent = co2_amount;

    //     const carbonEquivalence = new CarbonEquivalence(co2_amount);
    //     const co2EmissionsText = carbonEquivalence.get_emissions();
    //     document.getElementById("co2-equivalence").textContent = co2EmissionsText;
    // }).catch(error => {
    //     console.log('Error calculating distance: ', error);
    // });
}, function (err) {
    console.error(`ERROR(${err.code}): ${err.message}`);
});


function getCurrentUrl(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var url = tabs[0].url;
        callback(url);
    });
}