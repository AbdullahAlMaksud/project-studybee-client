import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ServicesCard from '../Shared/ServicesCard';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const AllServices = () => {

    const [cardPerPage, setCardPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0)

    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('')

    const [services, setServices] = useState([])


    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER}/allServices?page=${currentPage}&size=${cardPerPage}&search=${search}`)
            setServices(data)
        }
        getData()
    }, [currentPage, cardPerPage, search])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER}/totalService?search=${search}`)
            setCount(data.count)
        }
        getCount()
    }, [search])

    console.log(count)
    const numberOfPages = Math.ceil(count / cardPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)


    const handlePagination = value => {
        console.log(value)
        setCurrentPage(value)
    }
    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText);
    }

    console.log(search)

    return (
        <div className='container mx-auto w-11/12 my-10'>
            <h2 className='text-4xl text-center font-bold mb-10 font-poppins'>Services</h2>

            <div>
                <form onSubmit={handleSearch}>
                    <div>
                        <input onChange={e => setSearchText(e.target.value)} value={searchText} type="text" name='search' placeholder='Find your services...' />
                        <button ><FaMagnifyingGlass /> </button>
                    </div>
                </form>
            </div>


            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {services.map(service => (
                    <ServicesCard key={service._id} service={service} />
                ))}
            </div>


            <div>
                <button className='btn btn-outline' disabled={currentPage === 1} onClick={() => { handlePagination(currentPage - 1) }}>Previous</button>

                {
                    pages.map((buttonNumber) => <button onClick={() => handlePagination(buttonNumber)} className={`hidded ${currentPage === buttonNumber ? 'bg-blue-400' : ''} btn btn-circle`} key={buttonNumber}>{buttonNumber}</button>)
                }

                <button disabled={currentPage === numberOfPages} className='btn btn-outline' onClick={() => handlePagination(currentPage + 1)}>Next</button>
            </div>
        </div>
    );
};

export default AllServices;