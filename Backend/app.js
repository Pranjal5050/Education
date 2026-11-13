const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-site.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Postman/curl jaise requests ke liye
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const db = require("./db/db");
db();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const topicRoutes = require("./routes/topic.routes");
const adminRoutes = require("./routes/admin.route");
const userRoutes = require("./routes/user.route");

app.use("/api/auth", userRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/admin", adminRoutes);

module.exports = app;