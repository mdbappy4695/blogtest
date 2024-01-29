const Comment = require("../models/commentModel");

// Create Comment
const createCommentController = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// Get All Comments for a Blog controller
const allCommentController = async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId });
    res.send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createCommentController, allCommentController };
