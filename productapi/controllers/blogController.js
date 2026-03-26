import Blog from "../model/product.js";
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const createdBlog = await Blog.create(req.body);
    res.json(createdBlog);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.send("Blog deleted successfully");
  } catch (error) {
    res.json({ error: error.message });
  }
};
