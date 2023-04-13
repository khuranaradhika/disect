export class CarbonEquivalence {
    constructor(kgs_co2) {
        this.kgs_co2 = kgs_co2;
        // In metric tons (1000 kgs)
        this.conversion = new Map([
            [1, [0.215, "Equivalent to greenhouse gas emissions from ", " gasoline-powered passenger vehicles driven for one year."]],
            [2, [2482, "Equivalent to greenhouse gas emissions from ", " miles driven by a gasoline-powered passenger vehicle."]],
            [3, [113, "Equivalent to CO2 emissions from ", " gallons of gasoline consumed."]],
            [4, [98.2, "Equivalent to CO2 emissions from ", " gallons of diesel consumed."]],
            [5, [1106, "Equivalent to CO2 emissions from ", " pounds of coal burned."]],
            [6, [0.013, "Equivalent to CO2 emissions from ", " tanker trucks' worth of gasoline."]],
            [7, [0.126, "Equivalent to CO2 emissions from ", " homes' energy use for one year."]],
            [8, [0.195, "Equivalent to CO2 emissions from ", " homes' electricity use for one year."]],
            [9, [2.3, "Equivalent to CO2 emissions from ", " barrels of oil consumed."]],
            [10, [40.8, "Equivalent to CO2 emissions from ", " propane cylinders used for home barbeques."]],
            [11, [121683, "Equivalent to CO2 emissions from ", " smartphones charged."]],
            [12, [0.0000003, "Equivalent to CO2 emissions from ", " coal-fired power plants in one year."]],
            [13, [0.000003, "Equivalent to CO2 emissions from ", " natural gas-fired power plants in one year."]],
            [14, [0.006, "Equivalent to CO2 emissions from ", " railcars' worth of coal burned."]],
            [15, [0.346, "Equivalent to greenhouse gas emissions avoided by ", " tons of waste recycled instead of landfilled."]],
            [16, [0.049, "Equivalent to greenhouse gas emissions avoided by ", " garbage trucks of waste recycled instead of landfilled."]],
            [17, [43.3, "Equivalent to greenhouse gas emissions avoided by ", " trash bags of waste recycled instead of landfilled."]],
            [18, [0.0003, "Equivalent to greenhouse gas emissions avoided by ", " wind turbines running for a year."]],
            [19, [37.9, "Equivalent to greenhouse gas emissions avoided by ", " incandescent lamps switched to LEDs."]],
            [20, [16.5, "Equivalent to the amount of carbon sequestered by ", " tree seedlings grown for 10 years."]],
            [21, [1.2, "Equivalent to the amount of carbon sequestered by ", " acres of U.S. forests in one year."]],
            [22, [0.007, "Equivalent to the amount of carbon sequestered by ", " acres of U.S. forests preserved from conversion to cropland in one year."]]
        ]);
    }

    get_emissions() {
        // TODO: Make emissions equivalence non-random
        // Random number 1-23
        let rand = Math.floor(Math.random() * 23) + 1;
        const pair = this.conversion.get(rand);
        // Convert kg value to metric ton and find its equivalence
        let equiv = (this.kgs_co2 / 1000 * pair[0]).toFixed(2);
        return pair[1] + equiv.toString() + pair[2];
    }
}