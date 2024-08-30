import React, { useState } from 'react';

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
        { id: 'switch', label: 'switch' },
        { id: 'for', label: 'for' },
        { id: 'break', label: 'break' },
        { id: 'continue', label: 'continue' },
        { id: 'function', label: 'function' },
        { id: 'functionParameter', label: 'function Parameter' },
        { id: 'namedReturnValue', label: 'named return value' },
        { id: 'variadic_function', label: 'variadic function' },
        { id: 'fuctionValue', label: 'function return value' },
        { id: 'anonymousFunction', label: 'anonymous function' },
        { id: 'recursiveFunction', label: 'recursive function' },
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
    <aside
      className={`fixed lg:sticky top-14 left-0 min-h-full w-64 lg:w-72 lg:py-10 lg:pl-20 bg-white lg:bg-opacity-50 lg:backdrop-blur-md p-4 border-r border-gray-300 lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
      style={{ maxHeight: 'calc(100vh - 56px)' }} // Adjusting maxHeight for the sidebar to fit in the viewport
    >
      <ul className='font-semibold font-poppins text-end lg:text-sm'>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleMenuClick(item.id)}
              className="block w-full p-2 text-left rounded text-dark-blue hover:bg-gray-200"
            >
              {item.label}
            </button>
            {activeMenu === item.id && item.children && (
              <ul className="pl-4 mb-3 font-medium">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <button
                      onClick={() => onSelect(child.id)}
                      className="block w-full p-2 text-left rounded text-hitam hover:bg-gray-300"
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
