import express from "express";

import { getPosts, getPage } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/page", getPage);

export default router;
