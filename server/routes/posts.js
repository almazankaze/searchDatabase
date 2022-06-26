import express from "express";

import { getPosts, getPostsBySearch, getPage } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.get("/page", getPage);

export default router;
