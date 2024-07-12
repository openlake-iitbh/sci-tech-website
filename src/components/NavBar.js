import { Link } from "react-router-dom";

import React, { useState } from 'react';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="pl-8 pr-8 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Link to="/"><img className="h-20 w-20" src="Sci-Tech-Council.png" alt="logo" /></Link>
                <Link to="/"><h1 className="font-bold font-[poppins] text-white">SCITECH COUNCIL</h1></Link>
            </div>
            <div className="hidden md:flex justify-evenly items-center">
                <ul className="flex justify-evenly list-none space-x-4 text-white">
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/#blogs">Blogs</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/#clubs" className="bg-blue-500 rounded hover:bg-blue-700 text-white py-1 px-2">Clubs</Link></li>
                </ul>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed inset-0 flex justify-end z-40">
                    <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMobileMenu}></div>
                    <div className="w-48 bg-gray-800 p-4 z-50">
                        <button onClick={toggleMobileMenu} className="text-white focus:outline-none mb-4">
                            <i className="fas fa-times"></i>
                        </button>
                        <ul className="flex flex-col list-none space-y-4 text-white">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/#blogs">Blogs</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/#clubs" className="bg-blue-500 rounded hover:bg-blue-700 text-white py-1 px-2">Clubs</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
