const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    topicId: { type: String },
    parentId: { type: String, default: null },
    text: { type: String, required: true },
    votes: { type: Number, default: 0 },
    topicName: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
