import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { FaRegSadTear } from 'react-icons/fa';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const ServiceToDo = () => {
    const [bookedServices, setBookServices] = useState([]);
    const servicesOltStatus = bookedServices.map(service => (service.serviceStatus)).toString();
    const [newServiceStatus, setNewServicesStatus] = useState('')

    const serId = bookedServices.map(service => (service._id));
    // console.log(serId)
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER}/myPendingService/${user?.email}`)
            setBookServices(data)
        }
        getData()
    }, [user])
    
    useEffect(() => {
        setNewServicesStatus(servicesOltStatus)
    }, [servicesOltStatus])

    // console.log('this is from state', newServiceStatus)




    const handleStatus = (e) => {
        // e.preventDefault()
        const working = e.target.value;
        // console.log(e._id)
        // console.log(working)
        setNewServicesStatus(working)
        const data ={working}
        console.log(newServiceStatus)

        fetch(`${import.meta.env.VITE_SERVER}/booking/${serId}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Service Status Has been Changed.')
                }
            })
    }



    return (
        <div className='w-11/12 container mx-auto my-10'>
            <Helmet>
                <title>StudyBee | Service To Do</title>
            </Helmet>
            {
                bookedServices.length === 0 && <div className='flex flex-col justify-center items-center min-h-[calc(100vh-850px)] gap-2 '>
                    <FaRegSadTear className='text-7xl opacity-30' />
                    <h2 className='font-bold opacity-50'>Sorry! You have no services to do yet!</h2>
                </div>
            }
            <section className={bookedServices.length === 0 && "hidden" || "container px-4 mx-auto"}>
                <h2 className='text-3xl font-bold text-center my-10'>My Service TO-DO</h2>
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md shadow-black/10 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                                    <thead className="bg-gray-50/60 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Service Name
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Service Booked By
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Date
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-white/30 divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900/30">
                                        {
                                            bookedServices.map((services, idx) =>
                                                <tr key={services._id}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">

                                                            <span>{idx + 1}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {services.serviceName}
                                                    </td>

                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div className="flex items-center gap-x-2">
                                                            {/* <img
                                                className="object-cover w-8 h-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                alt=""
                                            /> */}
                                                            <div>
                                                                <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                                                    {services.userName}
                                                                </h2>
                                                                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                                                    {
                                                                        services.userEmail
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <select onChange={handleStatus} className={newServiceStatus == 'pending' && "inline-flex items-center px-3 py-0.5 rounded-full gap-x-2 text-red-500 bg-red-100/60 capitalize dark:bg-gray-800" || "inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-black-600 bg-black-100/90 capitalize dark:bg-gray-800"} defaultValue={services.serviceStatus} >


                                                            <option defaultValue={'pending'} disabled={newServiceStatus === "pending"}>
                                                                pending
                                                            </option>
                                                            <option value={'working'} disabled={newServiceStatus === "working"}>
                                                                working
                                                            </option>
                                                            <option value={'complete'} disabled={newServiceStatus === "complete"}>
                                                                complete
                                                            </option>
                                                        </select>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <p className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                                                {services.serviceDate}
                                                            </p>

                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    );
};

export default ServiceToDo;