// 16 th: bookmark component creation

// 19th
import PropTypes from 'prop-types';

// 17th
const Bookmark = ({ bookmark }) => {
    // 20th
    const { title } = bookmark;
    return (
        <div>
            {/* 21th */}
            <h3 className='text-3xl'>{ title }</h3>
            
        </div>
    );
};

// 18th
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;