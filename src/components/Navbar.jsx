// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
      <ul className="flex space-x-4 lg:space-x-6 uppercase font-medium text-gray-700">
        <li><a href="#home" className="hover:text-blue-500 transition-colors duration-200 text-sm md:text-base">HOME</a></li>
        <li><a href="#bag" className="hover:text-blue-500 transition-colors duration-200 text-sm md:text-base">BAG</a></li>
        <li><a href="#sneakers" className="hover:text-blue-500 transition-colors duration-200 text-sm md:text-base">SNEAKERS</a></li>
        <li><a href="#belt" className="hover:text-blue-500 transition-colors duration-200 text-sm md:text-base">BELT</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition-colors duration-200 text-sm md:text-base">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;