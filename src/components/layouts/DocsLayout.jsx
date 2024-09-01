import React, { useState } from 'react';
import Navbar from '../fragments/Navbar';
import Sidebar from '../fragments/SideBar';
import MainContent from '../fragments/MainContent/Index';
export const DocsLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelect = (item) => {
    setSelectedContent(item);
    setIsSidebarOpen(false); // Optionally close the sidebar after selection on mobile
  };

  return (
    <div className={`flex flex-col h-screen max-w-[100rem] mx-auto ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
      {/* <div id='background'></div> */}
      <div className='fixed top-0 -z-10 w-full h-[100vh] bg-cover bg-center overflow-hidden'>
        <svg viewBox="0 0 1108 632" aria-hidden="true" className="absolute top-10 left-[calc(50%-4rem)] -z-10 w-[69.25rem] max-w-none transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <path fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)" fillOpacity=".2" d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z"></path>
          <defs>
            <linearGradient id="175c433f-44f6-4d59-93f0-c5c51ad5566d" x1="1220.59" x2="-85.053" y1="432.766" y2="638.714" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4F46E5"></stop>
              <stop offset="1" stopColor="#80CAFF"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      < Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex pt-16">
        <div className=''>
          <Sidebar isOpen={isSidebarOpen} onSelect={handleSelect} />
        </div>
        <div
          className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'blur-lg  bg-opacity-30 lg:backdrop-blur-none lg:bg-transparent' : ''}`}
        >
          <MainContent selected={selectedContent} />
        </div>
      </div>
    </div >
  );
};
