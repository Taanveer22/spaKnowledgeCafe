import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
    <div>
      <img src={cover} />
      <div className="flex justify-between items-center">
        <div className="flex justify-around items-center gap-5">
          <img src={author_image} className="w-14 text-xl" />
          <div className="">
            <h5>{author}</h5>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="">
          <p>{reading_time} min read</p>
          <button>new</button>
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
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};
export default Blog;
