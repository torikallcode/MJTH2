import React from 'react'
import NavbarComponent from '../fragments/NavbarComponent'
import Sidebar from '../fragments/SideBar'
import MainContent from '../fragments/MainContent'
import { useState } from 'react'
import Navbar from '../fragments/Navbar'

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
    <div className="flex flex-col h-screen">
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1 pt-16">
        <Sidebar isOpen={isSidebarOpen} onSelect={handleSelect} />
        <MainContent selected={selectedContent} />
      </div>
    </div>
  )
}
