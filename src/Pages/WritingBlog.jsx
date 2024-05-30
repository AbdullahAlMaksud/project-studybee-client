import { Helmet } from 'react-helmet-async';
import { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from '../AuthProvider/AuthProvider';


const WritingBlog = () => {
    const [value, setValue] = useState('');
    console.log(value)
    const {user} = useContext(AuthContext)

    const handleBlogSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const blogBody = value;
        const coverImg = form.coverImg.value;
        const date = form.published.value;
        const tag = form.tag.value;
        const author = user.displayName;
        const authorImg = user.photoURL;
        const authorEmail = user.email;

        console.log({title, coverImg, blogBody, date, tag, author, authorEmail, authorImg})
    }
    return (
        <div className='w-11/12 mx-auto container bg-white rounded-b-lg'>
            <Helmet>
                <title>StudyBee | Write a Blog</title>
            </Helmet>

        <div>
            <form onSubmit={handleBlogSubmit}>
            <div className='px-4'>
            <div className='py-4'>
                <label className='block font-semibold px-4 text-lg text-blue-900 bg-white rounded-t-sm border w-fit border-b-0 border-r-0 rounded-tl-md'>Title</label>
                <input name='title' type="text" className='w-full py-2 px-5  focus:outline-none border rounded-md rounded-tl-none text-2xl font-bold' />
            </div>
            <ReactQuill className='bg-white h-full' theme="snow"  value={value} onChange={setValue} />
            <div className='py-4'>
                <label className='block font-semibold px-4 text-lg text-blue-900 bg-white rounded-t-sm border w-fit border-b-0 border-r-0 rounded-tl-md'>Cover ImageURL:</label>
                <input name='coverImg' type="text" className='w-full py-2 px-5  focus:outline-none border rounded-md rounded-tl-none'  placeholder='https://example.com/img.jpg'/>
            </div>
            <div className='grid grid-cols-2 bg-white pb-2 gap-4'>
            <div className=''>
                <label className='block font-semibold px-4 text-lg text-blue-900 bg-white rounded-t-sm border w-fit border-b-0 border-r-0 rounded-tl-md'>Date:</label>
                <input name='published' type="date" className='w-full py-2 px-5  focus:outline-none border rounded-md rounded-tl-none' placeholder='pick a date'/>
            </div>
            <div>
                <label className='block font-semibold px-4 text-lg text-blue-900 bg-white rounded-t-sm border w-fit border-b-0 border-r-0 rounded-tl-md'>Tag:</label>
                <input name='tag' type="text" className='w-full py-2 px-5  focus:outline-none border rounded-md rounded-tl-none' placeholder='শিক্ষা, প্রযুক্তি, ......'/>
            </div>
            </div>
            </div>
            <div className='flex items-center justify-between bg-gray-100 px-10 py-3'>
                <div>
                    <h2 className='text-xl font-bold text-blue-900'>Writer Info:</h2>
                </div>
                <div className='flex items-center justify-end gap-10 flex-1'>
                <img src={user.photoURL} className='w-14 rounded-full' alt="" />
                <div>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                </div>
                </div>
            </div>
                <input type="submit" value={'Post'} className='btn btn-primary text-lg w-full rounded-t-none'/>

            </form>
        </div>

        </div>
    );
};

export default WritingBlog;
