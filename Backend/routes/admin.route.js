const express = require("express");

const router = express.Router();

const {
  createInitialAdmin,
  adminLogin,
} = require("../controllers/admin.controller");

router.post("/setup", createInitialAdmin);
router.post("/login", adminLogin);

module.exports = router;
