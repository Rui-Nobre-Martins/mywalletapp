const router = require("express").Router();
const authController = require("../controllers/authController");
const secretController = require("../controllers/secretController");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/secret", secretController.getSecret);

module.exports = router;