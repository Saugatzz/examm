import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:4000/blogs');

      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Unable to load blogs.');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="mt-4">
      <h1>Blogs</h1>

      {error && <p>{error}</p>}

      {data.length > 0 ? (
        data.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        !error && <p>No blogs available.</p>
      )}
    </div>
  );
};

export default Blogs;
