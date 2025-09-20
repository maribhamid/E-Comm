import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import logo from '../assets/products/logo.png';
import c1 from '../assets/products/c1.png';
import c2 from '../assets/products/c2.png';
import c3 from '../assets/products/c3.png';
import c4 from '../assets/products/c4.png';

const Footer = () => {
  return (
    <div className='bg-blue-200 text-gray-800 py-8 px-4 '>
        
    <footer className="flex flex-row flex-wrap justify-between mb-8">
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-40 mb-20 px-10'>
      <div className="footer-section">
        <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-400 mr-2" >
              <img src={logo} alt="Logo" className="object-cover p-3" />
            </div>
            <div className="text-xl font-bold mb-2">E-Comm</div>
        </div>
        
        <p className="text-sm">Lorem ipsum is simply dummy text of the printing and typesetting industry...</p>
      </div>
      <div className="footer-section">
        <h4 className="font-semibold mb-2">Follow Us</h4>
        <span>Since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
        <div className="social-icons flex space-x-5 mt-4">
          <FaFacebookF className="text-xl text-[#385C8E] hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-xl text-[#03A9F4] hover:text-blue-600 cursor-pointer" />
        </div>
      </div>
      <div className="footer-section">
        <h4 className="font-semibold mb-2">Contact Us</h4>
        <p className="text-sm">E-Comm, 4578 Marmaro Road...</p>
      </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-70 md:gap-50 lg:gap-70 mb:gap-50 sm:px-0  px-10'>
      <div className="footer-section">
        <h4 className="font-semibold mb-2">Information</h4>
        <ul className="text-sm space-y-1">
          <li>About Us</li>
          <li>Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="font-semibold mb-2">Service</h4>
        <ul className="text-sm space-y-1">
          <li>About Us</li>
          <li>Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="font-semibold mb-2">My Account</h4>
        <ul className="text-sm space-y-1">
          <li>About Us</li>
          <li>Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4 className="font-semibold mb-2">Our Offers</h4>
        <ul className="text-sm space-y-1">
          <li>About Us</li>
          <li>Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      </div>
      
    </footer>
    <div className='border-t border-white my-12 mt-20'></div>
    <div className='display flex justify-between items-center mt-6 flex-col md:flex-row gap-4 mb-20'>
        <p className='text-gray-400'>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <div className='flex space-x-8'>
            <img src={c1} alt="Master Card" />
            <img src={c2} alt="Visa Card" />
            <img src={c3} alt="Paypal" />
            <img src={c4} alt="Western Union" />
        </div>
    </div>
    </div>
  );
};

export default Footer;