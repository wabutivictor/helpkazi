let mongoose = require("mongoose");

let schema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: "userModel",
  },
  jobID: {
    type: mongoose.Schema.ObjectId,
    ref: "jobmodel",
  },
  employerID: {
    type: mongoose.Schema.ObjectId,
    ref: "userModel",
  },
  date: {
    type: Date,
    default: Date.now(),
  },

  approved: {
    type: String,
    default: "Pending",
  },
});

let model = mongoose.model("applicationModel", schema);
module.exports = model;
