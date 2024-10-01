import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Testing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative p-3 bg-white shadow dark:bg-gray-800">
      <div className='flex items-center justify-between'>
        <Link to={'/'} className="text-lg font-semibold tracking-widest text-hitam font-baskerville">MJTH</Link>

        {/* Hamburger menu - hidden on large screens */}
        <button
          className="focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu - always visible on large screens */}
        <ul className={`lg:flex lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block absolute lg:static right-0 mt-2 lg:mt-0 bg-white lg:bg-transparent border lg:border-0 shadow-lg lg:shadow-none`}>
          <li className="border-b lg:border-0">
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 lg:hover:bg-transparent lg:text-white">Home</Link>
          </li>
          <li className="border-b lg:border-0">
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 lg:hover:bg-transparent lg:text-white">About</Link>
          </li>
          <li>
            <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 lg:hover:bg-transparent lg:text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Testing;
