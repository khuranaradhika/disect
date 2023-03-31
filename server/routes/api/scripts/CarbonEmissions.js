export class CarbonEmissions {
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

    get_emissions() {
        const url = `https://distances.dataloy.com/route/route?point=${this.dest_lat},${this.dest_long}${this.additional_factories}&point=${this.user_lat},${this.user_long}&avoid_eca_factor=1&avoid_hra_factor=1&avoid_ice_factor=5`;
        console.log(url);
        const headers = new Headers();
        headers.append("X-API-Key", "YutCetLhgb2vzMWvW7EGa6HAV19bYiKl1Gyooaus");

        const requestOptions = {
            method: "GET",
            headers,
            redirect: "follow",
        };

        return fetch(url, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                const distanceValue = data.paths[0].distance;
                const co2 = (distanceValue * 8131).toFixed(2);
                return co2;
            })
            .catch((error) => {
                console.log("Error calculating distance: ", error);
            });
    }
}