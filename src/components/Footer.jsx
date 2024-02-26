import React, { useState } from "react";
import UserDropDown from "./UserDropDown";
import { FaUserCircle, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer({ userBtn, setUserBtn }) {
  const handleUser = () => {
    setUserBtn(!userBtn);
  }

  return (
    <div className="w-full p-2 fixed bottom-0 z-20 bg-green-700 shadow-gray-500 shadow-md">
      <div className="flex justify-between p-2 lg:w-full">
        <div className="flex space-x-8 lg:w-[30%] lg:justify-between ">
        <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://e7.pngegg.com/pngimages/327/982/png-clipart-government-of-india-startup-india-startup-company-entrepreneurship-india-company-text.png" alt="AatmaNirbhar Bharat" className="h-10 w-auto scale-[0.8] hover:scale-[1] cursor-pointer" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://seeklogo.com/images/A/aatmanirbhar-bharat-logo-224D708C71-seeklogo.com.png" alt="AatmaNirbhar Bharat" className="h-10 w-auto scale-[0.8] hover:scale-[1] cursor-pointer" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/G20_India_2023_logo.svg" alt="G20 India" className="h-10 w-auto scale-[0.8] hover:scale-[1] cursor-pointer" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://as2.ftcdn.net/v2/jpg/04/35/22/97/1000_F_435229702_WoWJJVPtR1l7k2Jl9Q8YVnsQGExQiel4.jpg" alt="Make in India" className="h-10 w-auto scale-[0.8] hover:scale-[1] cursor-pointer" />
          </a>
        </div>

        <div className="flex space-x-8 lg:w-[30%] lg:justify-between ">
        <Link to="/ContactUs" className="lg:text-bold text-xl text-white ">Contact Us</Link>
        <Link to="/ContactUs" className="lg:text-bold text-xl text-white ">About Us</Link>
        <Link to="/ContactUs" className="lg:text-bold text-xl text-white ">Customer feedback</Link>
        </div>
        <div className="flex space-x-8 lg:w-[30%] lg:justify-between ">
          <FaInstagram className="text-2xl hover:text-blue-600  text-white cursor-pointer" />
          <FaFacebook className="text-2xl hover:text-blue-600  text-white cursor-pointer" />
          <FaLinkedin className="text-2xl hover:text-blue-600  text-white cursor-pointer" />
          <FaTwitter className="text-2xl hover:text-blue-600  text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
