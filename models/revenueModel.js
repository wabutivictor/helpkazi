let mongoose = require("mongoose");

let schema = mongoose.Schema({
  userID: {
    type: String,
  },

  balance: {
    type: Number,
  },
});

let model = mongoose.model("revenue", schema);
module.exports = model;
