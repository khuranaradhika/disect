const express = require("express");
const router = express.Router();
const Company = require("../../models/Company");

// @route: GET api/charities/get_charities
// @desc: Get all charities under the given category
// @access Public
router.get("/:company", async (req, res) => {
  try {
    const companies = await Company.find({ company: req.params.company });

    // Show Error when empty profile!
    if (!companies) {
      return res.status(400).json({
        msg: `There is no company named ${req.params.company} in our directory.`,
      });
    }
    res.json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
