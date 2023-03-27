let userLat = -1;
let userLong = -1;

// On the load of the extension, get user's current location
window.addEventListener("load", function (evt) {

    let id;
    let options;

    function success(pos) {
        const crd = pos.coords;
        console.log(crd);
        console.log(crd.latitude);
        console.log(crd.longitude);
        userLat = crd.latitude;
        userLong = crd.longitude;
    }

    function error(err) {
        console.error(`ERROR(${err.code}): ${err.message}`);
    }

    options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
    };

    id = navigator.geolocation.watchPosition(success, error, options);

});