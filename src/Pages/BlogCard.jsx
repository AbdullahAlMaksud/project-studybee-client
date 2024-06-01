import React from 'react';
import { BsCalendarDate, BsCalendarHeart } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { _id, title, coverImg, blogBody, date, tag, author } = blog;

    // const = 

    return (
        <div className='container mx-auto '>
            <div className='bg-base-200 dark:bg-slate-800 shadow-lg py-5 rounded-md h-full flex flex-col'>
                <p className='font-thin text-sm bg-green-200 w-fit px-3 rounded-full text-green-900 py-0.5 mb-2 mx-5'>{tag.split(',')[0]}</p>
                <h2 className='text-xl font-semibold px-5'> {title}</h2>

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
                <img src={coverImg} className='h-32  mt-3 shadow-md w-11/12 mx-auto object-cover rounded-t-sm' alt="" />


                <div className='px-5 mt-4 flex-1 flex flex-col'>
                    <h2 className='flex-1'>{blogBody.slice(0, 100)}...</h2>

                    {/* <div dangerouslySetInnerHTML={{ __html: blogBody }}/> */}
                    <Link to={`/blog/${_id}`} className='bg-red-900 text-white px-4 rounded-sm mt-2 py-0.5 font-thin text-center w-fit hover:cursor-pointer hover:scale-95'>Read more</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;