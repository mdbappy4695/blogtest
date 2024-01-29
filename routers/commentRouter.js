const express = require("express");
const {
  createCommentController,
  allCommentController,
} = require("../controller/commentController");

const router = express.Router();

//create comment || post
router.post("/comments", createCommentController);

//Get All Comment for a Blog
router.get("/comments/:blogId", allCommentController);

module.exports = router;
