import { useEffect, useState } from "react";


const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => console.log(data))
        
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Blog;