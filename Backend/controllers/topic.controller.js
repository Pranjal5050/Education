const Topic = require("../models/topic.model");

// Create a new topic
const createTopic = async (req, res) => {
  try {
    const {
      title,
      slug,
      subject,
      chapter,
      description,
      videoUrl,
      sheetUrl,
      isPublished,
    } = req.body;

    // Validate required fields
    if (!title || !slug || !subject || !chapter) {
      return res.status(400).json({
        success: false,
        message: "Title, slug, subject and chapter are required.",
      });
    }

    // Check whether slug already exists
    const existingTopic = await Topic.findOne({ slug });

    if (existingTopic) {
      return res.status(409).json({
        success: false,
        message: "A topic with this slug already exists.",
      });
    }

    // Save topic in MongoDB
    const topic = await Topic.create({
      title,
      slug,
      subject,
      chapter,
      description,
      videoUrl,
      sheetUrl,
      isPublished,
    });

    return res.status(201).json({
      success: true,
      message: "Topic created successfully.",
      topic,
    });
  } catch (error) {
    console.error("Create topic error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create topic.",
    });
  }
};

// Get all topics
const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: topics.length,
      topics,
    });
  } catch (error) {
    console.error("Get topics error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch topics.",
    });
  }
};

// Get one topic by slug
const getTopicBySlug = async (req, res) => {
  try {
    const topic = await Topic.findOne({
      slug: req.params.slug,
      isPublished: true,
    });

    if (!topic) {
      return res.status(404).json({
        success: false,
        message: "Published topic not found.",
      });
    }

    return res.status(200).json({
      success: true,
      topic,
    });
  } catch (error) {
    console.error("Get topic error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch topic.",
    });
  }
};

module.exports = {
  createTopic,
  getAllTopics,
  getTopicBySlug,
};
