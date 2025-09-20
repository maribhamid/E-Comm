import React, { useState } from 'react';

const Sidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  
  const handlePriceChange = (e) => {
    setPriceRange([priceRange[0], e.target.value]);
  };

  return (
    <aside className="hidden md:block md:w-64 bg-white p-6 rounded-lg shadow-md flex-shrink-0">
      <div className="mb-6">
        <h4 className="font-bold text-lg mb-2">Hot Deals</h4>
        <ul className="text-xl flex flex-col gap-9 my-9">
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Nike</span><span className="text-xs text-gray-400 hover:text-blue-600">2</span>
          </li>
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Airmax</span><span className="text-xs text-gray-400 hover:text-blue-600">48</span>
          </li>
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Nike</span><span className="text-xs text-gray-400 hover:text-blue-600">14</span>
          </li>
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Adidas</span><span className="text-xs text-gray-400 hover:text-blue-600">15</span>
          </li>
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Vans</span><span className="text-xs text-gray-400 hover:text-blue-600">23</span>
          </li>
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>All Stars</span><span className="text-xs text-gray-400 hover:text-blue-600">1</span>
          </li>
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Adidas</span><span className="text-xs text-gray-400 hover:text-blue-600">1</span>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg mb-2">Prices</h4>
        <div className="price-slider-container">
          <label className="text-sm text-gray-600">
            Range: ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
          </label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg mb-2">Color</h4>
        <div className="flex space-x-2">
          <span className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer border border-transparent hover:border-blue-700"></span>
          <span className="w-6 h-6 rounded-full bg-gray-500 cursor-pointer border border-transparent hover:border-gray-700"></span>
          <span className="w-6 h-6 rounded-full bg-black cursor-pointer border border-transparent hover:border-gray-700"></span>
          <span className="w-6 h-6 rounded-full bg-yellow-400 cursor-pointer border border-transparent hover:border-yellow-700"></span>
          <span className="w-6 h-6 rounded-full bg-pink-500 cursor-pointer border border-transparent hover:border-pink-700"></span>
          <span className="w-6 h-6 rounded-full bg-orange-200 cursor-pointer border border-transparent hover:border-orange-500"></span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg mb-2">Brand</h4>
        <ul className="text-xl flex flex-col gap-9 my-9">
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Nike</span><span className="text-xs text-gray-400">99</span>
          </li>
          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Adidas</span><span className="text-xs text-gray-400">99</span>
          </li>

          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Nike</span><span className="text-xs text-gray-400">99</span>
          </li>

          <li className="flex justify-between items-center text-gray-600 mb-1 hover:text-blue-600 cursor-pointer">
            <span>Siemens</span><span className="text-xs text-gray-400">99</span>
          </li>
        </ul>
      </div>

      <button className="w-full py-2 text-black font-bold rounded-md hover:bg-blue-700 transition-colors duration-200 hover:text-white">
        MORE
      </button>
    </aside>
  );
};

export default Sidebar;