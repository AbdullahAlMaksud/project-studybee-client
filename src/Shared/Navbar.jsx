import { Link, NavLink } from "react-router-dom";
import DarkMode from "../utilities/DarkMode";
import { MdClose, MdHome, MdMenu, MdMiscellaneousServices } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import 'react-tooltip/dist/react-tooltip.css'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    console.log('from nav', user)

    const handleLogOut = () => {
        logOut()
    }


    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };


    const mainMenu = <>
        <li>
            <NavLink className={({isActive})=>isActive? 'border-b-2 border-blue-800 font-medium': 'hover:text-blue-600 hover:border-b hover:border-blue-800'} to={'/'}>Home</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=>isActive? 'border-b-2 border-blue-800 font-medium': 'hover:text-blue-600 hover:border-b hover:border-blue-800 '} to={'/services'}>All Services</NavLink>
        </li>
        <li>
            <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
            <NavLink to={'/faq'}>FAQ</NavLink>
        </li>
    </>


    const mobileMainMenu = <>
        <div className="flex flex-col items-end justify-center py-2 text-xl">
            <img src={user?.photoURL} className=" h-12 rounded-full border-blue-950 border-2 hover:cursor-pointer" alt="" />
            <p className="font-hind font-semibold">{user?.displayName}</p>
        </div>
        <hr />
        <div className="flex flex-col my-3 gap-3">

                <NavLink className={({isActive})=>isActive ? 'bg-blue-950 text-white py-1 rounded-lg pl-2': 'hover:bg-gray-800 hover:text-white py-1 rounded-lg pl-2'} to={'/addServices'} >Add Service</NavLink>
            
                <NavLink to={'/'} className={({isActive})=>isActive ? 'bg-blue-950 text-white py-1 rounded-lg pl-2': 'hover:bg-gray-800 hover:text-white py-1 rounded-lg pl-2'}>Manage Service</NavLink>
            
                <NavLink to={'/'} className={({isActive})=>isActive ? 'bg-blue-950 text-white py-1 rounded-lg pl-2': 'hover:bg-gray-800 hover:text-white py-1 rounded-lg pl-2'}>Booked-Services</NavLink>
            
                <NavLink to={'/'} className={({isActive})=>isActive ? 'bg-blue-950 text-white py-1 rounded-lg pl-2': 'hover:bg-gray-800 hover:text-white py-1 rounded-lg pl-2'}>Service-To-Do</NavLink>
        </div>
           

        <hr className="" />
        <div className="flex items-center justify-center gap-1 my-3">
            <NavLink to={'/'} className={({isActive})=>isActive ? "font-medium border-b-2 border-transparent border-b-blue-900 hover:font-semibold p-1.5 rounded-lg dark:bg-gray-800 tooltip" : "font-medium border-b-2 border-transparent hover:border-b-blue-900 hover:font-semibold p-1.5 rounded-lg dark:bg-gray-800 tooltip" }
            
            data-tip="Home"><MdHome className="text-xl" /></NavLink>
            <NavLink to={'/services'} className={({isActive})=>isActive ? "font-medium border-b-2 border-transparent border-b-blue-900 hover:font-semibold p-1.5 rounded-lg dark:bg-gray-800 tooltip" : "font-medium border-b-2 border-transparent hover:border-b-blue-900 hover:font-semibold p-1.5 rounded-lg dark:bg-gray-800 tooltip" } data-tip="All Services"><MdMiscellaneousServices className="text-xl" /></NavLink>
            <NavLink className="font-medium border-b-2 border-transparent tooltip tooltip-top hover:border-b-blue-900 hover:font-semibold rounded-lg" data-tip="Dark Mode"><DarkMode /></NavLink>

        </div>
        <div>
            <button onClick={handleLogOut} className="bg-blue-700 text-white w-full py-2 rounded-full">Log out</button>
        </div>
    </>





    return (
        <div className="fixed font-poppins h-16 lg:min-h-20 w-full bg-transparent backdrop-blur-md dark:text-white dark:bg-slate-900 rounded-b-sm shadow shadow-black/10 z-50">
            <div className="w-11/12  container mx-auto">
                <div className="flex ">
                    <div className="flex justify-start items-center h-16 lg:min-h-20">
                        <Link className="text-2xl lg:text-3xl font-medium">Study<span className="text-blue-600">Bee</span></Link>
                    </div>
                    <div className="hidden lg:flex flex-1 items-center justify-center  min-h-20 pr-6">
                        <ul className="flex gap-5">
                            {mainMenu}
                        </ul>
                    </div>



                    <div className="flex flex-1 lg:flex-none items-center justify-end gap-2">
                        <div className="hidden md:flex"><DarkMode /></div>
                        {/* Login & User */}

                        {!user &&
                            <Link to={'/login'}>
                                <button className="rounded-full px-5 py-2 bg-blue-800 text-white">Log In</button>
                            </Link>

                        }



                        {/* DropDown Menu Button */}
                        {
                            user && <div className="relative">
                                {
                                    !isOpen ? <div className="flex rounded-full border-2 gap-1 md:py-1 md:px-1 bg-blue-100 shadow-sm shadow-black/40">
                                        <button onClick={handleDropdown} className="font-semibold text-white bg-blue-950 px-3 md:px-4 rounded-full ">Dashboard</button>
                                        <img src={user?.photoURL} className="rounded-full h-8 border-2 border-blue-900" />
                                    </div>

                                        : <div className="flex rounded-full border-2 gap-1 md:py-1 md:px-1 bg-blue-600 shadow-sm shadow-black/40">
                                            <button onClick={handleDropdown} className="font-semibold text-white bg-blue-950 px-3 md:px-4 rounded-full">Dashboard</button>
                                            <img src={user?.photoURL} className="rounded-full h-8 border-2 border-blue-900" />
                                        </div>
                                }
                                {/* Dropdown Menu */}
                                {isOpen && (
                                    <div className="absolute top-11  -right-3 md:-right-8 bg-white/95 dark:bg-slate-900 backdrop-blur-md rounded shadow-lg mt-2 py-5 px-5 w-60">
                                        {/* Dropdown Items */}
                                        {mobileMainMenu}
                                    </div>
                                )}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;