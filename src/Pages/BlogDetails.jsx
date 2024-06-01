import React from 'react';
import { BsCalendarHeart } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blog = useLoaderData();
    const {title, coverImg, blogBody, date, tag, author, authorEmail, authorImg} = blog;
    console.log('blog details',blog)

    return (
        <div className='bg-white dark:bg-slate-900 py-10'>
            <h2 className='text-2xl font-semibold px-5'>{title}</h2>
            <div className='flex gap-4 px-5'>
                    <div className='flex items-center gap-2'>
                        <FaUserAlt className='text-sm text-gray-600 pb-0.5' />
                        <h2 className='text-sm'>{author}</h2>
                    </div>

                    <div className='flex items-center gap-2'>
                        <BsCalendarHeart className='text-sm text-gray-600 pb-0.5' />
                        <h2 className='text-sm'>{date.split('T')[0]}</h2>
                    </div>
                </div>
                <hr className='mt-4 mx-5' />
                <img src={coverImg} className='h-60 lg:h-96 w-11/12 mx-auto rounded-md object-cover my-5' alt="" />
                <div className='px-5' dangerouslySetInnerHTML={{ __html: blogBody }}/>
                <hr className='my-5 mx-5' />
                <div className='flex justify-end'>
                <div className='flex items-center gap-4 mx-5'>
                    <p className='font-bold'>Written By:</p>
                    <div>
                        <img src={authorImg} className='h-20 rounded-full' alt="" />
                    </div>
                    <div>
                    <h4 className='text-lg font-semibold'>{author}</h4>
                    <p>{authorEmail}</p>
                    </div>

                </div>
                </div>

        </div>
    );
};

export default BlogDetails;