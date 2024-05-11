import { Link } from "react-router-dom";
import DarkMode from "../utilities/DarkMode";
import { MdClose, MdMenu } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    console.log('from nav', user)
    const mainMenu = <>
        <li>
            <Link>Products</Link>
        </li>
        <li>
            <Link>About</Link>
        </li>
        <li>
            <Link>FAQ</Link>
        </li>
        <li>
            <Link>Dashboard</Link>
        </li>
    </>
    const mobileMainMenu = <>
        <li>
            <Link>Products</Link>
        </li>
        <li>
            <Link>About</Link>
        </li>
        <li>
            <Link>FAQ</Link>
        </li>
        <li>
            <Link>Dashboard</Link>
        </li>
        <div>
            <img src={user?.photoURL} className=" h-12 rounded-full border-blue-950 border-2 hover:cursor-pointer" alt="" />
        </div>
    </>

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = () =>{
        logOut()
    }


    return (
        <div className="fixed h-16 lg:min-h-20 w-full bg-transparent backdrop-blur-md dark:text-white dark:bg-slate-900 rounded-b-sm shadow shadow-black/10 z-50">
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
                        <DarkMode />
                        {/* Login & User */}

                        {!user &&
                        <Link to={'/login'}>
                        <button className="rounded-lg px-5 py-2 bg-blue-800 text-white">Log In</button>
                        </Link>

                        }
                        {
                            user &&
                                <div>
                                    <img id="profiletooltip" src={user?.photoURL} className="hidden lg:flex h-12 rounded-full border-blue-950 border-2 hover:cursor-pointer" alt="" />
                                    <Tooltip anchorSelect="#profiletooltip" clickable>
                                        <div className="flex flex-col justify-center items-center px-3 py-2">
                                        <p>{user?.displayName}</p>
                                        <button className="px-4 py-2 rounded-md border-2 border-red-800 my-2 shadow-red-800/80 shadow-md" onClick={handleLogOut} >LOG OUT</button>
                                        </div>
                                    </Tooltip>
                                </div>
                                
                        }
                        {/* DropDown Menu Button */}
                        <div className="relative lg:hidden">
                            {
                                !isOpen ? <MdMenu onClick={handleDropdown} className="text-3xl" /> : <MdClose onClick={handleDropdown} className="text-3xl" />

                            }
                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute top-10 -right-8 bg-white dark:bg-slate-900 rounded shadow-lg mt-2 py-2 w-48">
                                    {/* Dropdown Items */}
                                    <ul className="px-5 py-2">
                                        {mobileMainMenu}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;