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
  }
 

  return (
    <>
      <Header></Header>

      <div className="md: flex max-w-6xl mx-auto">
        {/* 3rd */}
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App
