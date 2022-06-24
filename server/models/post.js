import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("post", postSchema);

export default Post;
