const express = require("express");
const router = express.Router();

// Import the controller
const UserController = require("../Controller/UserController");

// Import middleware functions
const { signupvalidation, signinvalidation } = require("../Middleware/UserMiddleware");

// Define routes
router.post("/signup", signupvalidation, UserController.signUp);
router.post("/signin", signinvalidation, UserController.signIn);

module.exports = router;
