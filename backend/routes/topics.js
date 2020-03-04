const router = require("express").Router();
let Topic = require("../models/topic.model");

router.route("/").get((req, res) => {
  Topic.find()
    .then(topics => res.json(topics))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route("/new").post((req, res) => {
  const { name } = req.body;
  const newTopic = new Topic({
    name
  });
  newTopic
    .save()
    .then(() => res.json("Topic added"))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router;
