const express = require("express");
const router = express.Router();

let Comment = require("../models/comment.model");
let Topic = require("../models/topic.model");

// get 5 topics sorted by most comments
// NEED TO SORT
router.route("/topics").get((req, res) => {
  Topic.find()
    .then(topics => res.json(topics))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// create a topic
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
    .then(comments => res.json(comments))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// get 10-20 comments?
// NEED TO SORT BY DATE
router.route("/comments").get((req, res) => {
  Comment.find()
    .then(comments => res.json(comments.slice(0, 20)))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// create a new comment
router.route("/:topicId/:parentId/new").post((req, res) => {
  const { text } = req.body;
  const { topicId, parentId } = req.params;
  // update the topic count
  Topic.findById(topicId).then(topic => {
    topic.commentCount++;
    topic
      .save()
      .then(() => res.json("Topic updated"))
      .catch(error => res.status(400).json(`Error: ${error}`));
  });

  // create the comment
  const newComment = new Comment({
    topicId,
    parentId,
    text
  });
  newComment
    .save()
    .then(() => res.json("Comment added"))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router;
