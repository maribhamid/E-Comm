import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import Navbar from './Navbar';
import logo from '../assets/products/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-8 bg-white shadow-md">
        <div className="flex items-center space-x-2">
            <div className='w-10 h-10 rounded-full bg-blue-400'>
              <img src={logo} alt="Logo" className="w-auto h-auto object-cover flex p-2" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-blue-600">E-Comm</div>
        </div>
      
      <Navbar />
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-gray-700">
          <FaShoppingCart className="text-xl" />
          <span className="hidden sm:inline">Items: $0.00</span>
        </div>
        <button className="md:hidden text-gray-600 text-xl">
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Header;