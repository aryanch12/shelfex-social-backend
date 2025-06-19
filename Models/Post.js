const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    content: String,
    image: String,
    authorId: String,
    authorName: String,
    likes: { type: [String], default: [] },
    comments: [
      {
        userId: String,
        userName: String,
        text: String,
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
