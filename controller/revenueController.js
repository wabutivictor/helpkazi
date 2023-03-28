let model = require("../models/revenueModel");
let AsyncError = require("../utils/catchAsync");

exports.getAll = AsyncError(async function (req, res, next) {
  let results = await model.find();
  res.json({
    status: "success",
    response: results.length,
    results,
  });
});

exports.add = AsyncError(async function (req, res) {
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
