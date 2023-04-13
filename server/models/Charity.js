const mongoose = require("mongoose");

const CharitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  main_website_url: {
    type: String,
    required: true
  },
  donation_url: {
    type: String,
  },
  short_description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  }
});

module.exports = mongoose.model("charity", CharitySchema);
