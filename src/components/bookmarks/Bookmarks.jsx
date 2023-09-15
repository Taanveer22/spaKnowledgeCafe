// 23th
import PropTypes from "prop-types";
// 25th
import Bookmark from "../bookmark/Bookmark";
// 14th
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3">
            {/* 15th */}
            <h2 className="text-3xl"> bookmarked blogs: {Bookmarks.length}</h2>
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
Bookmarks.propTypes = {
    bookmarks : PropTypes.array
}
export default Bookmarks;