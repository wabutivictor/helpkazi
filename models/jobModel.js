let mongoose = require("mongoose");

let schema = mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  details: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  employees: {
    type: Number,
    default: 1,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  employerID: {
    type: mongoose.Schema.ObjectId,
    ref: "userModel",
  },
  salary: {
    type: String,
  },
  hours: {
    type: String,
  },
});

let model = mongoose.model("jobmodel", schema);
module.exports = model;
