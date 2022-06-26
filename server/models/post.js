import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  element: String,
});

const Post = mongoose.model("post", postSchema);

export default Post;
