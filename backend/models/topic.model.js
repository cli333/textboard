const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    commentCount: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
