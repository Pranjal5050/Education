const express = require("express");

const router = express.Router();

const {
  createTopic,
  getAllTopics,
  getTopicBySlug,
} = require("../controllers/topic.controller");

// Create a topic
router.post("/", createTopic);

// Get all topics
router.get("/", getAllTopics);

// Get a published topic by slug
router.get("/:slug", getTopicBySlug);

module.exports = router;
