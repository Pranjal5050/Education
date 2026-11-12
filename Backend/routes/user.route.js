const express = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} = require("../controllers/user.controller");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


// Register
router.post("/register", registerUser);


// Login
router.post("/login", loginUser);


// Logout
router.post("/logout", logoutUser);


// Current logged-in user
router.get("/me", authMiddleware, getCurrentUser);


module.exports = router;