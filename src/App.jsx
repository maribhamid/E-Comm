import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import { products } from './data';
import { BsGridFill, BsListUl } from 'react-icons/bs';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-6">
          <HeroBanner />
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 text-sm">13 items</span>
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-gray-600 text-sm">Sort By</span>
                <select className="border rounded-md py-1 px-2 text-gray-700 text-sm">
                  <option>Name</option>
                  <option>Price</option>
                </select>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-gray-600 text-sm">Show</span>
                <select className="border rounded-md py-1 px-2 text-gray-700 text-sm">
                  <option>12</option>
                  <option>24</option>
                  <option>48</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <BsGridFill className="text-xl text-blue-500" />
              <BsListUl className="text-xl" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-sm">1</button>
            <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded-full text-sm">2</button>
            <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded-full text-sm">3</button>
            <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded-full text-sm">4</button>
            <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded-full text-sm">5</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;