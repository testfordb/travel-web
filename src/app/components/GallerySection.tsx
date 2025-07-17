'use client';

import { FaBars, FaGlobeAsia } from 'react-icons/fa';

interface HeaderProps {
  activeNav: boolean;
  toggleNav: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeNav, toggleNav }) => {
  const navItems: string[] = ['Home', 'About', 'Destinations', 'Services', 'Gallery', 'Blogs'];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-[#222] flex items-center justify-between px-4 sm:px-6 md:px-[9%] py-4 sm:py-6">
      
      <div
        id="menu-btn"
        className="text-2xl text-white cursor-pointer md:hidden"
        onClick={toggleNav}
      >
        <FaBars />
      </div>

      
      <a
        href="#"
        className="text-xl sm:text-2xl text-white font-bold flex items-center"
        data-aos="zoom-in-left"
        data-aos-delay="150"
      >
        <FaGlobeAsia className="text-[#29d9d5] mr-2 text-2xl sm:text-3xl" />
        TravelBuddy
      </a>

      
      <nav className={`${activeNav ? 'block' : 'hidden'} md:flex md:items-center`}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="block md:inline-block text-base sm:text-lg text-[#aaa] mx-2 sm:mx-4 hover:text-[#29d9d5] mt-2 md:mt-0"
            data-aos="zoom-in-left"
            data-aos-delay={`${300 + index * 150}`}
          >
            {item}
          </a>
        ))}
      </nav>

      
      <a
        href="#book-form"
        className="hidden md:inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg text-[#29d9d5] border border-[#29d9d5] rounded-full hover:bg-[#29d9d5] hover:text-[#111] transition-all"
        data-aos="zoom-in-left"
        data-aos-delay="1300"
      >
        Book Now
      </a>
    </header>
  );
};

export default Header;
