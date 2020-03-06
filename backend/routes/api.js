const express = require("express");
const router = express.Router();

let Comment = require("../models/comment.model");
let Topic = require("../models/topic.model");

// get topics
router.route("/topics").get((req, res) => {
  Topic.find()
    .sort({ createdAt: 1 })
    .then(topics => res.json(topics))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// create topic
router.route("/topics/new").post((req, res) => {
  const { name } = req.body;
  const newTopic = new Topic({ name });
  newTopic
    .save()
    .then(() => res.json("Topic created"))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// get a topic
router.route("/topics/:name").get((req, res) => {
  const { name } = req.params;
  Topic.findOne({ name })
    .then(result => res.json(result))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// get topic's comments
router.route("/topics/:name/comments").get((req, res) => {
  const { name } = req.params;
  Comment.find({ topicName: name })
    .sort({ createdAt: -1 })
    .then(comments => {
      res.json(comments);
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// get comments
router.route("/comments").get((req, res) => {
  Comment.find()
    .sort({ createdAt: -1 })
    .then(comments => res.json(comments))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// create a comment
router.route("/comments/new").post((req, res) => {
  const { text, topicId, topicName } = req.body;
  Topic.findById(topicId).then(topic => {
    topic.commentCount++;
    topic.save().catch(error => res.status(400).json(`Error: ${error}`));
  });
  const newComment = new Comment({
    topicId,
    topicName,
    text
  });
  newComment
    .save()
    .then(() => res.json("Comment added"))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router;
