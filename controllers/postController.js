const Post = require("../models/Post");

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { content, authorId, authorName } = req.body;
    const image = req.file?.path;

    const post = new Post({
      content,
      image,
      authorId,
      authorName,
    });

    await post.save();
    req.io.emit("new-post", post);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error creating post" });
  }
};

// Get paginated feed
exports.getFeed = async (req, res) => {
  const page = parseInt(req.query.page || "0");
  const limit = 5;

  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip(page * limit)
      .limit(limit);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to load feed" });
  }
};

// Like or Unlike a post
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const { userId } = req.body;

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
    } else {
      post.likes = post.likes.filter((id) => id !== userId);
    }

    await post.save();
    req.io.emit("post-updated", post);
    res.json(post);
  } catch {
    res.status(500).json({ message: "Error liking post" });
  }
};

// Add a comment to a post
exports.commentOnPost = async (req, res) => {
  try {
    const { userId, userName, text } = req.body;
    const post = await Post.findById(req.params.id);

    post.comments.push({ userId, userName, text });
    await post.save();
    req.io.emit("post-updated", post);
    res.json(post);
  } catch {
    res.status(500).json({ message: "Error commenting on post" });
  }
};
// Get posts by a user
exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ authorId: req.params.userId }).sort({ createdAt: -1 });
    res.json(posts);
  } catch {
    res.status(500).json({ message: "Failed to load user's posts" });
  }
};

// Edit a post
exports.editPost = async (req, res) => {
  try {
    const { content } = req.body;
    const image = req.file?.path;
    const post = await Post.findById(req.params.id);

    if (content) post.content = content;
    if (image) post.image = image;

    await post.save();
    req.io.emit("post-updated", post);
    res.json(post);
  } catch {
    res.status(500).json({ message: "Error editing post" });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    req.io.emit("post-deleted", post._id);
    res.json({ success: true });
  } catch {
    res.status(500).json({ message: "Error deleting post" });
  }
};
