import mongoose from "mongoose";
import Post from "../models/post.js";

// get all birthdays from database
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
