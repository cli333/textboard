const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    parentId: { type: String, default: null },
    childIds: [],
    username: { type: String, default: "Anonymous" },
    text: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
