import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../Pages/BlogCard";
import { Link } from "react-router-dom";

const HomeSection1 = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        
            const getData = async () => {
                const { data } = await axios(`${import.meta.env.VITE_SERVER}/blogs`)
                setBlogs(data)
            }
            getData();
    },[])

    return (


        <>
        <h2 className="text-3xl text-center font-bold py-10">Blogs</h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mb-10 gap-4 w-11/12 container mx-auto'>
                {
                    blogs.slice(0,3).map((blog) => <BlogCard key={blog._id} blog={blog} />)
                }
            </div>

            <div className="flex justify-center items-center my-10">
                <Link to={'/blog'} className="bg-teal-600 px-10 py-3 rounded-sm shadow-md shadow-black/50 text-white">Show All</Link>
            </div>
        
       
        </>
        // <div className="w-11/12 container mx-auto my-10 bg-[url('../public/blogging-bg.jpg')] bg-cover bg-bottom rounded-md shadow shadow-black/20 flex flex-col justify-center items-center py-20 ">
        //     <div className="bg-transparent shadow-md shadow-black/30 p-5 rounded-md">
        //         <h2 className="text-center bg-blue-700 border-b-2 border-dotted py-1 text-white text-lg font-poppins">Our Blogging Feature</h2>
        //         <h2 className="text-center md:text-black mt-2 text-white md:text-4xl text-2xl font-bold font-poppins">Comming Soon...</h2>
        //     </div>
        // </div>
    );
};

export default HomeSection1;