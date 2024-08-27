import React from 'react';

const Sidebar = ({ isOpen, onSelect }) => {
  const menuItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'customization', label: 'Customization' },
    { id: 'components', label: 'Components' },
  ];

  return (
    <aside className={`fixed top-16 left-0 h-full w-64 bg-white p-4 border-r border-gray-200 lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSelect(item.id)}
              className="block w-full text-left p-2 text-gray-700 hover:bg-gray-200 rounded"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
