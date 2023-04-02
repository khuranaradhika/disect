const axios = require('axios/dist/node/axios.cjs'); 
const emissions_reduction_factor = 100000;
const c02_emissions_per_nautical_mile = 8131;
const CarbonEmissions  = class {
    constructor(dest_lat, dest_long, user_lat, user_long, additional_factories = "") {
        this.dest_lat = dest_lat;
        this.dest_long = dest_long;
        this.user_lat = user_lat;
        this.user_long = user_long;
        // Must be in format "&point=<lat>,<long>"
        this.additional_factories = additional_factories;
        if (this.additional_factories != "" && !this.additional_factories.includes("&point=")) {
            throw new Error("Improper additional_factories format - Must be in format \"&point=<lat>,<long>\"");
        }
    }

    async get_emissions() {
        const url = `https://distances.dataloy.com/route/route?point=${this.dest_lat},${this.dest_long}&point=${this.user_lat},${this.user_long}&avoid_eca_factor=1&avoid_hra_factor=1&avoid_ice_factor=5`;
        console.log(url);
        const headers = {"X-API-Key": "YutCetLhgb2vzMWvW7EGa6HAV19bYiKl1Gyooaus"}
        const requestOptions = {
            method: "GET",
            headers,
            redirect: "follow",
        };
        return 100;
        const response = await axios.get(url, requestOptions)
        if (response.status !== 200) {
            console.log(response.data);
            throw new Error(`HTTP error! ${response.status}: ${response.statusText}`);
        }
        const data = response.data
        const distanceValue = data.paths[0].distance;
        const co2 = (distanceValue * 8131).toFixed(2);
        return co2/emissions_reduction_factor;
    }
}
module.exports = CarbonEmissions;