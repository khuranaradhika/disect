const express = require("express");
const router = express.Router();
const Charity = require("../../models/Charity");

// @route: GET api/charities/get_charities
// @desc: Get all charities under the given category
// @access Public
router.get("/:category", async (req, res) => {
  try {
    const charities = await Charity.find({category: req.params.category});

    // Show Error when empty profile!
    if (!charities) {
      return res.status(400).json({ msg: `There are no charities under the ${req.category} category.`});
    }
    res.json(charities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;