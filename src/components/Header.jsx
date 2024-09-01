import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { FiDownload } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [nav, setNav] = useState(false);
  const navHandler = () => {};

  return (
    <div className="flex w-full h-20 px-4 text-white bg-gray-600  fixed justify-between items-center ">
      <img src={Logo}></img>
      <div className="hidden md:flex">
        <ul className="flex">
          <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
            Home
          </li>
          <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
            About
          </li>
          <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
            Skills
          </li>
          <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
            Project
          </li>
          <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
            Contact Me
          </li>
        </ul>
      </div>
      <div className=" hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-4 rounded  hover:bg-slate-950 hover:text">
        <button>Resume</button>
        <FiDownload />
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <div className=" flex flex-col items-center justify-between absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          <ul className="">
            <li className="px-4 cursor-pointer py-6 text-4xl">Home</li>
            <li className="px-4 cursor-pointer py-6 text-4xl">About</li>
            <li className="px-4 cursor-pointer py-6 text-4xl">Skills</li>
            <li className="px-4 cursor-pointer py-6 text-4xl">Project</li>
            <li className="px-4 cursor-pointer py-6 text-4xl">Contact Me</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
