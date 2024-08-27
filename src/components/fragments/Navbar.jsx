import React from 'react';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-semibold">My Docs</a>
        <div className="block lg:hidden">
          <button
            onClick={toggleSidebar}
            className="focus:outline-none"
          >
            <div className={`w-8 h-0.5 bg-gray-300 mb-2 transition-transform rounded-full duration-300 ${isSidebarOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-8 h-0.5 bg-gray-300 transition-transform rounded-full duration-300 ${isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
        <div className="hidden lg:flex">
          <a href="#" className="text-gray-300 hover:text-white px-3">Home</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">Docs</a>
          <a href="#" className="text-gray-300 hover:text-white px-3">About</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
