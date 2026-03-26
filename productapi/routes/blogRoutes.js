import express from "express";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/getBlogs", getBlogs);
router.post("/createBlog", createBlog);
router.put("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

export default router;
