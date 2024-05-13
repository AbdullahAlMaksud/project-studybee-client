import { Link } from 'react-router-dom';
import profile from '../../public/profile.png'
import { FaUser } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const ManagedServicesCard = ({service}) => {
    
    const { _id, imgURL, serviceName, description, providerPhoto, providerName, serviceArea } = service;

   
    console.log(service)

    const handleDelete = (_id) => {


        console.log(_id)
        Swal.fire({
            title: "Are you sure to DELETE This Item?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8c5729",
            cancelButtonColor: "4f7550",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_SERVER}/services/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted",
                                    text: "Selected Data has been Deleted",
                                    icon: "success"
                                });

                            }
                        })

                }
            }
            )
    }

    return (
        <div>
            <div className='border-b-2 shadow-md relative'>
                <div className='shadow-blue-800 border-b-8  border-blue-500 bg-blue-100/20 px-6 pt-6 rounded-sm'>
                    <img className='object-cover w-full h-36 rounded-sm border-white border-4 border-b-0' src={imgURL} alt="" />
                </div>

                <div className='p-5 flex flex-col items-end'>
                    <div className='flex border-b border-0 rounded-md w-full mb-3 px-1 py-0 mt-5 text-xs shadow-md'>
                        <div className='flex pb-2 w-full p-1 rounded-full  items-center justify-between'>
                            <div>
                                <p className='font-hind rounded-full dark:text-white text-center flex gap-2 items-center mb-1'><span className='font-semibold text-base'><FaUser /></span> {providerName}</p>
                                <p className='font-hind rounded-full dark:text-white text-center flex gap-2 items-center'><span className='font-semibold text-base'><FaMapLocationDot /></span> {serviceArea}</p>
                            </div>
                            <div>
                                <img className='rounded-full w-10 h-10 object-cover object-right' src={providerPhoto ? providerPhoto : profile} alt="" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2 className='text-2xl font-bold  pb-2'>{serviceName}</h2>
                            <p className=''>{description.slice(0,100)}...</p>
                        </div>

                        <div className='flex justify-between'>
                            <Link to={`/managed-service/update-service/${_id}`} className=' bg-blue-800 text-white text-sm font-semibold py-2 shadow-inner active:shadow-none rounded-sm hover:bg-green-900 shadow-black/60 w-1/3 my-3 flex justify-center items-center'>
                                <button>Update</button>
                            </Link>
                            <button onClick={() => handleDelete(service._id)} className=' bg-pink-800 text-white text-sm font-semibold py-2 shadow-inner active:shadow-none rounded-sm hover:bg-pink-900 shadow-black/60 w-1/3 my-3'>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManagedServicesCard;