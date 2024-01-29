const express = require("express");
const {
  crateBlogController,
  updateBlogController,
  deleteController,
  getAllBlogController,
  getSingleBlogController,
} = require("../controller/blogControllers");

const router = express.Router();

//create Blog || post
router.post("/blogs", crateBlogController);

//update blog || put
router.put("/blogs/:id", updateBlogController);

//Delete Blog || delete
router.delete("/blogs/:id", deleteController);

//get all Blogs || get
router.get("/blogs", getAllBlogController);

//single Blogs || get
router.get("/blogs/:id", getSingleBlogController);

module.exports = router;
