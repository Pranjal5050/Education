const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

// Middleware
app.use(
  cors({
    origin: "https://pexis.netlify.app/",
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