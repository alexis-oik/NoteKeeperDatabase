import express from "express";
import { getPosts, createPosts, deletePosts } from "../controllers/posts.js";

const router = express.Router();

router
  .route("/")

  .get(getPosts)

  .post(createPosts);

router
  .route("/:id")

  .delete(deletePosts);

export default router;
