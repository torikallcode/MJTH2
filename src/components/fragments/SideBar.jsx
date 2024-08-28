import React from 'react';
import { useState } from 'react';
const Sidebar = ({ isOpen, onSelect }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      id: 'Golang Dasar',
      label: 'Golang Dasar',
      children: [
        { id: 'variable', label: 'Variable' },
        { id: 'integer', label: 'Integer & Float' },
        { id: 'boolean', label: 'Boolean' },
        { id: 'string', label: 'String' },
        { id: 'const', label: 'Constant' },
        { id: 'conversi', label: 'Conversi' },
        { id: 'typeDeklarasi', label: 'Type Deklarasi' },
        { id: 'opm', label: 'Operasi Matematika' },
        { id: 'perbandingan', label: 'Perbandingan' },
        { id: 'array', label: 'Array' },
        { id: 'slice', label: 'Slice' },
        { id: 'map', label: 'Map' },
        { id: 'if', label: 'If' },
      ],
    },
    {
      id: 'getting-started',
      label: 'Getting Started',
      children: [
        { id: 'basics', label: 'The Basics' },
        { id: 'advanced', label: 'Advanced' },
      ],
    },
    {
      id: 'customization',
      label: 'Customization',
      children: [
        { id: 'theme', label: 'Theme' },
        { id: 'layout', label: 'Layout' },
      ],
    },
    {
      id: 'components',
      label: 'Components',
      children: [
        { id: 'buttons', label: 'Buttons' },
        { id: 'cards', label: 'Cards' },
      ],
    },
  ];


  const handleMenuClick = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <aside className={`fixed top-14 left-0 h-full w-64 lg:w-72 lg:py-10 lg:pl-20 bg-white lg:bg-opacity-50 lg:backdrop-blur-md p-4 border-r border-gray-300 lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
      <ul className='font-poppins font-semibold text-end lg:text-sm'>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleMenuClick(item.id)}
              className="block w-full text-left text-dark-blue p-2 hover:bg-gray-200 rounded"
            >
              {item.label}
            </button>
            {activeMenu === item.id && item.children && (
              <ul className="pl-4 font-medium mb-3">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <button
                      onClick={() => onSelect(child.id)}
                      className="block w-full text-left p-2 text-hitam hover:bg-gray-300 rounded"
                    >
                      {child.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
