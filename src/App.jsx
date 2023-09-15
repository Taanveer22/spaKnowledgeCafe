import './App.css'
import Header from './components/header/header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks';
import { useState } from 'react';


function App() {
// 1st
  const [bookmarks, setBookmarks] = useState([]);
// 2nd
  const handleAddToBookmark = blog => {
    console.log('bookmarks adding soon');
    // 12th
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
 

  return (
    <>
      <Header></Header>

      <div className="md: flex max-w-6xl mx-auto">
        {/* 3rd */}
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        {/* 13th */}
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App
