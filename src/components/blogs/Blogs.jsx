import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
// 11th
import PropTypes from "prop-types";

// 4th
// time04 hmar prps received
const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h2 className="text-3xl">blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          //   5th
          handleAddToBookmark={handleAddToBookmark}
          // time06 hmar prps passed to blog component
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};

// 10th
Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  // t5
  handleMarkAsRead: PropTypes.func
};

export default Blogs;
