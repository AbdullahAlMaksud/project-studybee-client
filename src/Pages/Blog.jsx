import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogs = useLoaderData();

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-10'>Blog</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
            blogs.map(blog=><BlogCard key={blog._id} blog={blog}/>)    
            }
            </div>
        </div>
    );
};

export default Blog;