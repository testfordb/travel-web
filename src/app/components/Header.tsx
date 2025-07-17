'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGlobeAsia } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Destinations', 'Services', 'Gallery', 'Blogs'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflowY = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-[#222] flex items-center justify-between px-[5%] py-4 md:px-[9%]">
      
      <a href="#" className="text-2xl text-white font-bold flex items-center gap-2">
        <FaGlobeAsia className="text-[#29d9d5] text-3xl" />
        TravelBuddy
      </a>

      
      <nav className="hidden md:flex items-center gap-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="text-base text-[#aaa] hover:text-[#29d9d5] transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="#book-form"
          className="ml-4 px-6 py-2 text-sm text-[#29d9d5] border border-[#29d9d5] rounded-full hover:bg-[#29d9d5] hover:text-[#111] transition-all"
        >
          Book Now
        </a>
      </nav>

      
      <button
        className="md:hidden text-2xl text-white relative z-[1100]"
        onClick={toggleMobileMenu}
        aria-label="Toggle Mobile Menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#111] flex flex-col justify-center items-center gap-8 text-2xl text-[#29d9d5] transition-transform duration-500 ease-in-out z-[1000] ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors"
            onClick={toggleMobileMenu}
          >
            {item}
          </a>
        ))}
        <a
          href="#book-form"
          className="mt-4 px-8 py-3 text-lg text-[#111] bg-[#29d9d5] rounded-full hover:bg-[#1fcac3] hover:text-white transition-all"
          onClick={toggleMobileMenu}
        >
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Header;