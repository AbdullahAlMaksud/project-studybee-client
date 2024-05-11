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
                        <Link to={"/login"}><button className="px-5 bg-blue-800 rounded-md text-white py-2 uppercase text-sm font-semibold hover:bg-blue-900 active:scale-95 ">Login</button></Link>

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