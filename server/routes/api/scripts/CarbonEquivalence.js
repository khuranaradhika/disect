class CarbonEquivalence {
  constructor(kgs_co2) {
    this.kgs_co2 = kgs_co2;
    // In metric tons (1000 kgs)
    this.conversion = new Map([
      [
        1,
        [
          0.215,
          "This is roughly equivalent to greenhouse gas emissions from ",
          " gasoline-powered passenger vehicle(s) driven for one year.",
        ],
      ],
      [
        2,
        [
          2482,
          "This is roughly equivalent to greenhouse gas emissions from ",
          " mile(s) driven by a gasoline-powered passenger vehicle.",
        ],
      ],
      [
        3,
        [
          113,
          "This is roughly equivalent to CO2 emissions from ",
          " gallon(s) of gasoline consumed.",
        ],
      ],
      [
        4,
        [
          98.2,
          "This is roughly equivalent to CO2 emissions from ",
          " gallon(s) of diesel consumed.",
        ],
      ],
      [
        5,
        [
          1106,
          "This is roughly equivalent to CO2 emissions from ",
          " pound(s) of coal burned.",
        ],
      ],
      [
        6,
        [
          0.013,
          "This is roughly equivalent to CO2 emissions from ",
          " tanker trucks' worth of gasoline.",
        ],
      ],
      [
        7,
        [
          0.126,
          "This is roughly equivalent to CO2 emissions from ",
          " homes' energy use for one year.",
        ],
      ],
      [
        8,
        [
          0.195,
          "This is roughly equivalent to CO2 emissions from ",
          " homes' electricity use for one year.",
        ],
      ],
      [
        9,
        [
          2.3,
          "This is roughly equivalent to CO2 emissions from ",
          " barrel(s) of oil consumed.",
        ],
      ],
      [
        10,
        [
          40.8,
          "This is roughly equivalent to CO2 emissions from ",
          " propane cylinder(s) used for home barbeques.",
        ],
      ],
      [
        11,
        [
          121683,
          "This is roughly equivalent to CO2 emissions from charging ",
          " smartphone(s).",
        ],
      ],
      [
        12,
        [
          0.0000003,
          "This is roughly equivalent to CO2 emissions from ",
          " coal-fired power plant(s) in one year.",
        ],
      ],
      [
        13,
        [
          0.000003,
          "This is roughly equivalent to CO2 emissions from ",
          " natural gas-fired power plant(s) in one year.",
        ],
      ],
      [
        14,
        [
          0.006,
          "This is roughly equivalent to CO2 emissions from ",
          " railcars' worth of coal burned.",
        ],
      ],
      [
        15,
        [
          0.346,
          "This is roughly equivalent to greenhouse gas emissions avoided by ",
          " ton(s) of waste recycled instead of landfilled.",
        ],
      ],
      [
        16,
        [
          0.049,
          "This is roughly equivalent to greenhouse gas emissions avoided by ",
          " garbage truck(s) of waste recycled instead of landfilled.",
        ],
      ],
      [
        17,
        [
          43.3,
          "This is roughly equivalent to greenhouse gas emissions avoided by ",
          " trash bag(s) of waste recycled instead of landfilled.",
        ],
      ],
      [
        18,
        [
          0.0003,
          "This is roughly equivalent to greenhouse gas emissions avoided by ",
          " wind turbines(s) running for a year.",
        ],
      ],
      [
        19,
        [
          37.9,
          "This is roughly equivalent to greenhouse gas emissions avoided by ",
          " incandescent lamp(s) switched to LEDs.",
        ],
      ],
      [
        20,
        [
          16.5,
          "This is roughly equivalent to the amount of carbon sequestered by ",
          " tree seedling(s) grown for 10 years.",
        ],
      ],
      [
        21,
        [
          1.2,
          "This is roughly equivalent to the amount of carbon sequestered by ",
          " acre(s) of U.S. forests in one year.",
        ],
      ],
      [
        22,
        [
          0.007,
          "This is roughly equivalent to the amount of carbon sequestered by ",
          " acre(s) of U.S. forests preserved from conversion to cropland in one year.",
        ],
      ],
    ]);
  }

  get_emissions() {
    var equiv = 0.0;
    var pair = undefined;
    while (equiv < 1) {
      // Random number 1-23
      let rand = Math.floor(Math.random() * 23) + 1;
      pair = this.conversion.get(rand);
      // Convert kg value to metric ton and find its equivalence
      equiv = Math.floor((this.kgs_co2 / 1000) * pair[0]);
    }
    return pair[1] + equiv.toString() + pair[2];
  }
}
module.exports = CarbonEquivalence;
