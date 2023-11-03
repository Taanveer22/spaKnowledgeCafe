import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
// 6th
// time07 hmas received in blog element
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_image,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover} />
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-around items-center gap-5">
          <img src={author_image} className="w-14 text-xl" />
          <div className="">
            <h5>{author}</h5>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="">
          <span>{reading_time} min read</span>
          {/* 7th and 8th(params passed) */}
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-600"
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl">{title}</h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="#"> #{hash}</a>
          </span>
        ))}
      </p>
      {/* t8 and t10(params passed) */}
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-800 underline font-bold" >
        mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  // 9th
  handleAddToBookmark: PropTypes.func,
  // time09
  handleMarkAsRead: PropTypes.func
};
export default Blog;
