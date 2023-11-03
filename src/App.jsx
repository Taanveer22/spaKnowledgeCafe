import "./App.css";
import Header from "./components/header/Header.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Bookmarks from "./components/bookmarks/Bookmarks.jsx";
import { useState } from "react";

function App() {
  // 1st
  const [bookmarks, setBookmarks] = useState([]);

  // time01
  const [readingTime, setReadingTime] = useState(0);

  // 2nd
  const handleAddToBookmark = (blog) => {
    // console.log('bookmarks adding soon');
    // 12th
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  // time02
  const handleMarkAsRead = (time) => {
    console.log("mark as read", time);
    // t11
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header></Header>

      <div className="md: flex max-w-6xl mx-auto">
        {/* 3rd */}

        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          // t3
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>

        {/* 13th */}
        <Bookmarks
          bookmarks={bookmarks}
          // t12
          readingTime={readingTime}
        ></Bookmarks>
      </div>
    </>
  );
}

export default App;
