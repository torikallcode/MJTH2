import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white max-w-[100rem] mx-auto bg-opacity-50 backdrop-blur-md p-4 w-full z-50 fixed top-0 lg:border-b lg:border-gray-300 ${hasScrolled ? 'border-b border-gray-200' : ''}`}>
      <div className="container mx-auto flex justify-between items-center max-w-[84rem]">
        <Link to={'/'} className="text-lg font-semibold tracking-widest text-hitam font-baskerville">MJTH</Link>
        <div className="block lg:hidden">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none"
          >
            <div className={`w-8 h-0.5 bg-hitam mb-2 transition-transform rounded-full duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-8 h-0.5 bg-hitam transition-transform rounded-full duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
        <div className="hidden lg:flex">
          <Link
            to={'/docs'}
          >
            <button className="px-5 py-3 font-medium text-blue-500 bg-blue-100 rounded-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
