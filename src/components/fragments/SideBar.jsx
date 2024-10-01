import React, { useState } from 'react';

const Sidebar = ({ isOpen, onSelect }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
        { id: 'switch', label: 'Switch' },
        { id: 'for', label: 'For' },
        { id: 'breakNContinue', label: 'Break & Continue' },
        { id: 'function', label: 'Function' },
        { id: 'functionParameter', label: 'Function Parameter' },
        { id: 'namedReturnValue', label: 'Named Return Value' },
        { id: 'variadicFunction', label: 'Variadic Function' },
        { id: 'functionAsValue', label: 'Function As Value' },
        { id: 'functionAsParameter', label: 'Function As Parameter' },
        { id: 'variadicFunction', label: 'Variadic Function' },
        { id: 'functionReturn', label: 'Function Return Value' },
        { id: 'anonymousFunction', label: 'Anonymous Function' },
        { id: 'recursiveFunction', label: 'Recursive Function' },
        { id: 'closure', label: 'Closure' },
        { id: 'defer', label: 'Defer' },
        { id: 'panic', label: 'Panic' },
        { id: 'recover', label: 'Recover' },
        { id: 'struct', label: 'Struct' },
        { id: 'interface', label: 'Interface' },
        { id: 'nil', label: 'Nil' },
        { id: 'typeAssertions', label: 'Type Assertions' },
        { id: 'pointer', label: 'Pointer' },
        { id: 'asteriskOperator', label: 'Asterisk Operator' },
        { id: 'operatorNew', label: 'Operator New' },
        { id: 'pointerFunction', label: 'Pointer di Function' },
        { id: 'pointerStruct', label: 'pointer Struct' },
        { id: 'packageNImport', label: 'Package & Import' },
        { id: 'accessModifier', label: 'Access Modifier' },
        { id: 'packageInitialization', label: 'Package Initialization' },
        { id: 'error', label: 'error' },
      ],
    },
    {
      id: 'latihanSoal',
      label: 'Latihan Soal',
      children: [
        { id: 'mudah', label: 'Mudah' },
        { id: 'sedang', label: 'Sedang' },
        { id: 'lanjutan', label: 'Lanjutan' },
      ],
    },
    {
      id: 'standartLibrary',
      label: 'Standart Library',
      children: [
        { id: 'fmt', label: 'Fmt' },
        { id: 'errors', label: 'Errors' },
        { id: 'os', label: 'Os' },
        { id: 'flag', label: 'Flag' },
        { id: 'strings', label: 'Strings' },
        { id: 'strconv', label: 'Strconv' },
        { id: 'math', label: 'Math' },
        { id: 'containerList', label: 'Container List' },
        { id: 'containerRing', label: 'Container Ring' },
        { id: 'sort', label: 'Sort' },
        { id: 'time', label: 'Time' },
        { id: 'reflect', label: 'Reflect' },
        { id: 'regexp', label: 'Regexp' },
        { id: 'encoding', label: 'Encoding' },
        { id: 'slices', label: 'Slices' },
        { id: 'path', label: 'Path' },
        { id: 'io', label: 'io' },
        { id: 'bufio', label: 'Bufio' },
        { id: 'manipulation', label: 'Manipulation' },
      ],
    },
    {
      id: 'components',
      label: 'Components',
      children: [
        { id: 'navbar', label: 'Navbar' },
        { id: 'cards', label: 'Cards' },
      ],
    },
    {
      id: 'gomodules',
      label: 'Go modules',
      children: [
        { id: 'createModule', label: 'Create Module' },
        { id: 'tagModule', label: 'Tag/versi' },
        { id: 'addDependency', label: 'Add Dependency' },
        { id: 'upgradeModule', label: 'Upgrade Module' },
        { id: 'upgradeDependency', label: 'Upgrade Dependency' },
        { id: 'majorUpgrade', label: 'Major Upgrade' },
      ],
    },
  ];

  const handleMenuClick = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && filteredMenuItems.length > 0) {
      // Navigate to the first item in the filtered list when pressing Enter
      onSelect(filteredMenuItems[0].id);
    }
  };

  const filteredMenuItems = menuItems.flatMap((item) =>
    item.children
      .filter((child) => child.label.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((child) => ({ ...child, parentLabel: item.label }))
  );

  return (
    <aside
      className={`lg:inset-0 lg:top-[3.8125rem] lg:left-[max(0px,calc(50%-50rem))] lg:right-auto fixed min-h-full w-64 lg:w-52 xl:w-72 lg:py-10 xl:pl-20 bg-white lg:bg-opacity-50 lg:backdrop-blur-md p-4 border-r border-gray-300 lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
      style={{ maxHeight: 'calc(100vh - 56px)' }}
    >
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <ul className='font-semibold font-poppins text-end lg:text-sm'>
        {searchTerm ? (
          filteredMenuItems.map((child) => (
            <li key={child.id}>
              <button
                onClick={() => onSelect(child.id)}
                className="block w-full p-2 text-left rounded text-dark-blue hover:bg-gray-200"
              >
                {child.label} - <span className="italic">{child.parentLabel}</span>
              </button>
            </li>
          ))
        ) : (
          menuItems.map((item) => (
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
          ))
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
