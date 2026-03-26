import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  description: String,
  category: String,
  views: Number,
  status: Boolean
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
