import React, { useState } from 'react';
import Navbar from '../fragments/Navbar';
import Sidebar from '../fragments/SideBar';
import MainContent from '../fragments/MainContent';
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
    <div className={`flex flex-col h-screen ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={isSidebarOpen} onSelect={handleSelect} />
        <div
          className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'blur-lg  bg-opacity-30 lg:backdrop-blur-none lg:bg-transparent' : ''}`}
        >
          <MainContent selected={selectedContent} />
        </div>
      </div>
    </div>
  );
};
