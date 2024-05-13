import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const UpdateServices = () => {
    const services = useLoaderData()
    const {
        serviceName, imgURL, serviceArea, price, description, providerEmail, providerPhoto, providerName
    } = services;
    // console.log('form upadate', services)

    const [img, setImg] = useState(imgURL);
    const handleImage = e => {
        const newimf = e.target.value;
        setImg(newimf)
        // console.log('maksud', img)
    }


    console.log(img)
    console.log(serviceName)
    return (
        <div className='w-11/12 mx-auto container bg-black/10 pt-10'>
            <Helmet>
                <title>StudyBee | Update Services</title>
            </Helmet>
            <img className='h-80 w-11/12 object-cover mx-auto mb-10 rounded-md shadow-md shadow-black' src={img} alt="" />
            <h2 className='text-3xl text-center font-bold font-poppins my-5'>Update your services!</h2>


            <div>
                <form className='grid grid-cols-1 p-5 md:p-10 gap-5 md:grid-cols-2'>
                    <div className='rounded-sm col-span-2 md:col-span-1'>
                        <span className='text-lg font-semibold '>Service Name:</span>
                        <input type="text" name="serviceName" defaultValue={serviceName} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md' />
                    </div>
                    <div className='rounded-sm col-span-2 md:col-span-1'>
                        <span className='text-lg font-semibold '>ImageURL:</span>
                        <input onKeyUp={handleImage} type="text" name="serviceName" defaultValue={imgURL} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md' />
                    </div>
                    <div className='rounded-sm col-span-2 md:col-span-2'>
                        <span className='text-lg font-semibold '>Description:</span>
                        <textarea type="text" name="serviceName" defaultValue={description} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md h-40' />
                    </div>
                    <div className='rounded-sm col-span-2 md:col-span-1'>
                        <span className='text-lg font-semibold '>Price:</span>
                        <input type="text" name="serviceName" defaultValue={price} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md' />
                    </div>
                    <div className='rounded-sm col-span-2 md:col-span-1'>
                        <span className='text-lg font-semibold '>Area:</span>
                        <input type="text" name="serviceName" defaultValue={serviceArea} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md' />
                    </div>
                    <div className='col-span-2 flex justify-between items-center border-t rounded-lg py-3 px-5 =py-1 bg-white/20 shadow-md'>
                        <img className='h-12 rounded-full object-cover' src={providerPhoto} alt="" />

                        <div>
                        <span className='font-semibold'>Provider Name:</span> 
                        <h2 className=''>{providerName}</h2>
                        </div>

                        <div>
                        <span className='font-semibold'>Provider Email:</span> 
                        <h2 className=''>{providerEmail}</h2>
                        </div>
                    </div>
                    <input type="submit" value={'Update'} className='btn btn-primary bg-blue-700 border-blue-700 col-span-2' />
                </form>
            </div>
        </div>
    );
};

export default UpdateServices;