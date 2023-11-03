// 23th
import PropTypes from "prop-types";

// 25th
import Bookmark from "../bookmark/Bookmark";

// 14th
// t13 rt props passed
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2">

            {/* t15 */}
            <div className="">
                <h3
                    className="text-4xl">
                    spent time on read:
                    {readingTime}
                </h3>
            </div>

            {/* 15th */}
            <h2 className="text-3xl text-center">
                bookmarked blogs: {bookmarks.length}
            </h2>
            {/* 24th */}
            
            {
                bookmarks.map(bookmark => <Bookmark
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>

                )
            }
            
        </div>
    );
};

// 22th
// t14 readtm
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;