const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
