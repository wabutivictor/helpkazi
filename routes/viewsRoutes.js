let express = require("express");
let authController = require("./../controller/authControler");
let viewController = require("./../controller/viewsController");

let router = express.Router();

router.use(authController.isLoggedin);
//pug rendering
router.get("/", authController.isLoggedin, viewController.login);
router.get("/signup", authController.isLoggedin, viewController.signup);
router.use(authController.protected);
router.get("/home", viewController.home);
router.get("/jobs", authController.isLoggedin, viewController.job);
router.get("/addjob", authController.isLoggedin, viewController.addjob);
router.get("/profile", authController.isLoggedin, viewController.profile);
router.get("/terms", authController.isLoggedin, viewController.terms);
router.get("/viewjob/:id", authController.isLoggedin, viewController.viewjob);

module.exports = router;
//modules.export =router
