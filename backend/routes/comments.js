const router = require("express").Router();
let Comment = require("../models/comment.model");

router.route("/").get((req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route("/new").post((req, res) => {
  const { parentId, username, text } = req.body;
  const newComment = new Comment({
    parentId,
    username,
    text
  });
  newComment
    .save()
    .then(() => res.json("Comment added"))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route("/:id").delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Comment deleted"))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route("/update/:id").post((req, res) => {
  const { username, text } = req.body;
  Comment.findById(req.params.id)
    .then(comment => {
      comment.text = text;

      comment
        .save()
        .then(() => res.json("Comment updated"))
        .catch(error => res.status(400).json(`Error: ${error}`));
    })
    .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router;
