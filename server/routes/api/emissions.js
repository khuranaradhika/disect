const express = require("express");
const router = express.Router();
const CompanyFactory = require("./scripts/CompanyFactory");
const CarbonEmissions = require("./scripts/CarbonEmissions");
const CarbonEquivalence = require("./scripts/CarbonEquivalence");
// @route: GET api/charities/get_charities
// @desc: Get all charities under the given category
// @access Public
router.get("/shipto/:location&:company", async (req, res) => {
  try {
    // Get location and company
    location = req.params.location;
    company = req.params.company;
    // Hard-coded bs because dataloy a hoe; comment out when we need to actually test, and an API key is available
    if (company === "nike") {
      res.json({
        emissions: 21.333333333,
        message: new CarbonEquivalence(21.3333333).get_emissions(),
      });
    } else if (company === "adidas") {
      res.json({
        emissions: 77.83,
        message: new CarbonEquivalence(77.83).get_emissions(),
      });
    } else if (company === "amazon") {
      res.json({
        emissions: 300.1,
        message: new CarbonEquivalence(300.1).get_emissions(),
      });
    } else if (company === "toms") {
      res.json({
        emissions: 713.27,
        message: new CarbonEquivalence(713.27).get_emissions(),
      });
    } else if (company === "puma") {
      res.json({
        emissions: 75.42,
        message: new CarbonEquivalence(75.42).get_emissions(),
      });
    } else if (company === "asics") {
      res.json({
        emissions: 92.1,
        message: new CarbonEquivalence(92.1).get_emissions(),
      });
    } else {
      res.json({ emissions: 0 });
    }
    return;

    // Get emissions of shipping to the given location from the company
    // Split location into lat and long
    let tmp = location.split(",");
    const lat = parseFloat(tmp[0]);
    const long = parseFloat(tmp[1]);
    // Get location of all company facilities
    const C = await CompanyFactory.getCompany(company.toLowerCase());
    if (C == undefined) {
      return res
        .status(400)
        .json({ msg: `${company} is not in our company directory` });
    }
    facilities = C.getFacilities();
    expected_emissions = 0;
    // Only use three facilities for now to minimize strain on dataloy distances api
    for (var i = 0; i < Math.min(3, facilities.length); i++) {
      // Compute emissions for shipping from each facility
      EmissionsCalculator = new CarbonEmissions(
        lat,
        long,
        facilities[i].latitude,
        facilities[i].longitude
      );
      expected_emissions += await EmissionsCalculator.get_emissions();
    }
    expected_emissions /= Math.min(3, facilities.length);
    // return expected emissions as json
    res.json({
      emissions: expected_emissions,
      message: new CarbonEquivalence(expected_emissions).get_emissions(),
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
