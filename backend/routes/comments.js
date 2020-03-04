const router = require("express").Router();
let Comment = require("../models/comment.model");

// fetch all comments
router.route("/").get((req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

// create a new comment
router.route("/:topicId/:parentId/new").post((req, res) => {
  const { text } = req.body;
  const { topicId, parentId } = req.params;

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

// router.route("/:id").delete((req, res) => {
//   Comment.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Comment deleted"))
//     .catch(error => res.status(400).json(`Error: ${error}`));
// });

// router.route("/update/:id").post((req, res) => {
//   const { username, text } = req.body;
//   Comment.findById(req.params.id)
//     .then(comment => {
//       comment.text = text;

//       comment
//         .save()
//         .then(() => res.json("Comment updated"))
//         .catch(error => res.status(400).json(`Error: ${error}`));
//     })
//     .catch(error => res.status(400).json(`Error: ${error}`));
// });

module.exports = router;
