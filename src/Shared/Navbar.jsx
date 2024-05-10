import { Link } from "react-router-dom";
import DarkMode from "../utilities/DarkMode";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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

    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="fixed min-h-20 w-full bg-transparent backdrop-blur-md dark:text-white dark:bg-slate-900 rounded-b-sm shadow shadow-black/10">
            <div className="container mx-auto">
                <div className="flex ">
                    <div className="flex justify-start items-center h-full min-h-20">
                        <h2 className="text-xl px-4">Navbar</h2>
                    </div>
                    <div className="hidden lg:flex flex-1 items-center justify-center  min-h-20 pr-6">
                        <ul className="flex gap-5">
                            {mainMenu}
                        </ul>
                    </div>
                    <div className="flex flex-1 lg:flex-none items-center justify-end  min-h-20">
                        <DarkMode />

                        {/* Login & User */}
                        <Link><button className="mx-3 px-3 bg-blue-800 rounded-xl text-white py-1 uppercase text-sm font-semibold hover:bg-blue-900 active:scale-95 ">Login</button></Link>

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
                                        {mainMenu}
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