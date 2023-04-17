const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  causes: {
    type: Array,
    required: true,
    default: [],
  },
});

module.exports = mongoose.model("company", CompanySchema);
