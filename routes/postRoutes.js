const express = require("express");
const router = express.Router();
const multer = require("multer");
const { storage } = require("../utils/cloudinary");
const upload = multer({ storage });

// ...existing code
const {
    createPost,
    getFeed,
    likePost,
    commentOnPost,
    getUserPosts,
    editPost,
    deletePost,
  } = require("../controllers/postController");
  router.post("/create", upload.single("image"), createPost);
  router.get("/feed", getFeed);
  router.post("/:id/like", likePost);
  router.post("/:id/comment", commentOnPost);
  router.get("/user/:userId", getUserPosts);
  router.put("/:id/edit", upload.single("image"), editPost);
  router.delete("/:id", deletePost);
  

module.exports = router;
