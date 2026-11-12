const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create the initial admin account
const createInitialAdmin = async (req, res) => {
  try {
    const { name, email, password, setupKey } = req.body;

    if (!name || !email || !password || !setupKey) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (!process.env.ADMIN_SETUP_KEY ||
        setupKey !== process.env.ADMIN_SETUP_KEY) {
      return res.status(403).json({
        success: false,
        message: "Invalid setup key.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters.",
      });
    }

    const existingAdmin = await Admin.findOne({
      email: email.toLowerCase().trim(),
    });

    if (existingAdmin) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists.",
      });
    }

    // Only allow initial setup when no admin account exists
    const adminCount = await Admin.countDocuments({ role: "admin" });

    if (adminCount > 0) {
      return res.status(403).json({
        success: false,
        message: "Initial admin has already been created.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = await Admin.create({
      name,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role: "admin",
    });

    return res.status(201).json({
      success: true,
      message: "Initial admin created successfully.",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Create initial admin error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create initial admin.",
    });
  }
};

// Admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const admin = await Admin.findOne({
      email: email.toLowerCase().trim(),
    }).select("+password");

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({
        success: false,
        message: "JWT secret is not configured.",
      });
    }

    const token = jwt.sign(
      {
        id: admin._id.toString(),
        role: admin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return res.status(500).json({
      success: false,
      message: "Login failed.",
    });
  }
};

module.exports = {
  createInitialAdmin,
  adminLogin,
};
