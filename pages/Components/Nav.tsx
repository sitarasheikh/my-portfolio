import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

type NavProps = {
  openNav: () => void; // Define the type of openNav prop
};

const Nav: React.FC<NavProps> = ({ openNav }) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      openNav(); // Open mobile navigation
    }
  };

  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB<span className="text-yellow-300">DEV</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="nav-link text-white hover:border-b-2 hover:border-yellow-300 cursor-pointer">Home</a>
          <a href="#about" className="nav-link text-white hover:border-b-2 hover:border-yellow-300 cursor-pointer">ABOUT</a>
          <a href="#services" className="nav-link text-white hover:border-b-2 hover:border-yellow-300 cursor-pointer">SERVICES</a>
          <a href="#project" className="nav-link text-white hover:border-b-2 hover:border-yellow-300 cursor-pointer">PROJECT</a>
          <a href="#blog" className="nav-link text-white hover:border-b-2 hover:border-yellow-300 cursor-pointer">BLOG</a>
          <a href="#contact" className="nav-link text-white hover:border-b-2 hover:border-yellow-300 cursor-pointer">CONTACT</a>
        </div>

        {/* Toggle Hamburger/Cross Icon */}
        <div onClick={toggleNav} className="md:hidden cursor-pointer">
          {nav ? (
            <XMarkIcon className="w-[2rem] h-[2rem] text-yellow-300" />
          ) : (
            <Bars3Icon className="w-[2rem] h-[2rem] text-yellow-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;

