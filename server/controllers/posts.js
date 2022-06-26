import mongoose from "mongoose";
import Post from "../models/post.js";

// get all posts from database
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const getPostsBySearch = async (req, res) => {
  const searchQuery = req.query.searchQuery;
  const page = 1;

  try {
    const title = new RegExp(searchQuery, "i");

    const result = {};
    result.page = page;

    result.result = await Post.find({ name: title });
    result.pages = result.result.length;

    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

// get all posts a page at a time from database
export const getPage = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;

    const result = {};

    const count = await Post.estimatedDocumentCount();

    /*
    if (endIndex < count) {
      result.next = { page: page + 1, limit: limit };
    }

    if (startIndex > 0) {
      result.prev = { page: page - 1, limit: limit };
    }
    */

    result.page = page;
    result.pages = Math.ceil(count / limit);
    result.result = await Post.find().limit(limit).skip(startIndex).exec();

    res.status(200).json(result);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
