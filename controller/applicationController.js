let model = require("../models/applicationModel");
let job = require("../models/jobModel");
let AsyncError = require("../utils/catchAsync");

exports.getAll = AsyncError(async function (req, res, next) {
  let result = await model.find();
  res.json({
    status: "success",
    response: result.length,
    result,
  });
});

exports.add = AsyncError(async function (req, res) {
  let userID = req.body.userID;
  let jobID = req.body.jobID;

  let availableJob = await model.find({
    userID,
    jobID,
  });

  if (availableJob.length != 0) {
    return res.status(200).json({ status: "applied" });
  }

  let jobEmployer = await job.findById(jobID);

  let employer = String(jobEmployer.employerID);
  let users = String(req.user._id);
  if (employer == users) {
    return res.status(200).json({ status: "similar" });
  }

  let newDoc = await model.create(req.body);

  res.status(200).json({ status: "success", data: newDoc });
});

exports.getOne = AsyncError(async function name(req, res, next) {
  let owner = await model.findById(req.params.id);
  res.status(200).json({ status: "successs", owner });
});

exports.delete = AsyncError(async function (req, res, next) {
  let deleted = await model.findOneAndDelete({ _id: req.params.id });
  res.status(204).json({ status: "success", data: null });
});

exports.update = AsyncError(async function (req, res, next) {
  let updated = await model.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runvalidators: true,
  });
  res.status(200).json({ status: "success", data: updated });
});
