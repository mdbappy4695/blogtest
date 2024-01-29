const Blog = require("../models/blogModel");

//create blog controller
const crateBlogController = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({
      success: true,
      message: "Create blog successfully",
      blog,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

//update blog controller
const updateBlogController = async (req, res) => {
  try {
    const { userId, title, body } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { userId, title, body },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error updating blog",
    });
  }
};

//delete blog controller
const deleteController = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.send({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all blog controller
const getAllBlogController = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.send(blogs);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get single blog controller
const getSingleBlogController = async (req, res) => {
  try {
    const singleBlog = await Blog.findById(req.params.id);
    res.status(200).send(singleBlog);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  crateBlogController,
  updateBlogController,
  deleteController,
  getAllBlogController,
  getSingleBlogController,
};
