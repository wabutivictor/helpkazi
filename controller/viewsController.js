let appError = require("./../utils/classError");
let Email = require("./../utils/email");

// let bookingmodel = require('./../models/bookingModel');
let userModel = require("./../models/userModel");
let application = require("./../models/applicationModel");
let revenue = require("./../models/revenueModel");
let job = require("./../models/jobModel");
let AsyncError = require("./../utils/catchAsync");

exports.login = function (req, res, next) {
  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "default-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js  ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render("_login", {
      title: "Login",
    });
};
exports.signup = function (req, res, next) {
  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "default-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js  ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render("_signup", {});
};
exports.home = async function (req, res, next) {
  let id = String(req.user._id);

  let appliedJobs = await application
    .find({
      userID: id,
    })
    .populate("jobID");
  let approvedJobs = await application
    .find({
      userID: id,
      approved: "Approved",
    })
    .populate("jobID")
    .populate("employerID");

  console.log("approvedJobs", approvedJobs);

  let kshObject = await revenue.find({
    userID: id,
  });

  let ksh = kshObject[0].balance;

  let totalapplied = appliedJobs.length;

  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "default-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js  ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render("_home", {
      totalapplied,
      ksh,
      appliedJobs,
      approvedJobs,
    });
};
exports.job = async function (req, res, next) {
  let jobs = await job.find().populate("employerID");

  let id = String(req.user._id);
  let applications = await application.find({
    userID: id,
  });
  let totalapplications = applications.length;

  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "default-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js  ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render("_job", {
      jobs,
      totalapplications,
    });
};
exports.addjob = async function (req, res, next) {
  let userJobs = await job.find({
    employerID: req.user._id,
  });

  let totalJobs = userJobs.length;

  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "default-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js  ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render("_addjob", {
      totalJobs,
      userJobs,
    });
};
exports.profile = function (req, res, next) {
  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "default-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js  ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render("_profile", {});
};
exports.terms = function (req, res, next) {
  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "default-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js  ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render("_terms", {});
};
exports.viewjob = async function (req, res, next) {
  let selectedJob = await job.findById(req.params.id);

  let jobApplicants = await application
    .find({
      jobID: req.params.id,
    })
    .populate("userID");

  res
    .status(200)
    .set(
      "Content-Security-Policy",
      "default-src 'self' https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js  ;base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src https://cdnjs.cloudflare.com https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js 'self' blob: ;script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests;"
    )
    .render("_viewjob", { selectedJob, jobApplicants });
};
