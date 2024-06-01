import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogs = useLoaderData();
    if (!Array.isArray(blogs)) {
        return <div>Error: Expected an array of blogs but got something else.</div>;
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Blog</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mb-10 gap-4 w-11/12 mx-auto'>

                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blog;