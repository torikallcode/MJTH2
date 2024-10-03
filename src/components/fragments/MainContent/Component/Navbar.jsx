import React, { useState, useEffect } from 'react'; // Correct import
import ComponentShowcase from '../../../elements/ComponentShowcase';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const buttonCode = `
    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';

    const Onavbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      return (
        <header
          className={\`fixed w-full transition-all duration-200 ease-in-out  \${isScrolled || isMenuOpen ? 'bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border-b border-gray-100' : 'bg-transparent'}\`}
          style={{ zIndex: 1000 }}
        >
          <nav className="flex items-center justify-between p-5 mx-auto max-w-7xl lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 flex justify-center items-center">
                <img src="./img/logou.png" alt="Logo" className="w-9" />
                <h1 className="text-2xl font-semibold text-gray-800">tailwindcss</h1>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" onClick={toggleMenu}>
                <span className={\`my-2 block h-[2px] w-[30px] bg-gray-800 rounded-full dark:bg-yellow-500 transition-all duration-300 ease-in-out \${isMenuOpen ? 'rotate-45 translate-y-[10px]' : 'rotate-0 translate-y-0'}\`}></span>
                <span className={\`my-2 block h-[2px] w-[30px] bg-gray-800 rounded-full dark:bg-white transition-all duration-300 ease-in-out \${isMenuOpen ? 'scale-0' : 'scale-100'}\`}></span>
                <span className={\`my-2 block h-[2px] w-[30px] bg-gray-800 rounded-full dark:bg-white transition-all duration-300 ease-in-out \${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : 'rotate-0 translate-y-0'}\`}></span>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/" className="text-base font-medium text-gray-800">Home</Link>
              <Link to="/" className="text-base font-medium text-gray-800">About</Link>
              <Link to="/" className="text-base font-medium text-gray-800">Contact</Link>
              <Link to="/test" className="text-base font-medium text-gray-800">Profil</Link>
            </div>
          </nav>

          <div className={\`lg:hidden overflow-hidden transition-all duration-300 h-screen ease-in-out \${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}\`}>
            <div className="z-10 flex flex-col w-full px-6 py-3 gap-y-7">
              <Link to="/" className="text-lg font-semibold text-gray-500 hover:text-gray-800">Home</Link>
              <Link to="/" className="text-lg font-semibold text-gray-500 hover:text-gray-800">About</Link>
              <Link to="/" className="text-lg font-semibold text-gray-500 hover:text-gray-800">Contact</Link>
              <Link to="/" className="text-lg font-semibold text-gray-500 hover:text-gray-800">Profil</Link>
            </div>
          </div>
        </header>
      );
    };

    export default Onavbar;
  `;

  return (
    <nav>
      <div className="container mx-auto">
        <h1 className="mb-6 text-2xl font-bold font-poppins">Navbar</h1>
        <ComponentShowcase
          componentName="Navbar Basic"
          componentCode={buttonCode}
          componentPreview={
            <div className='relative w-full'>
              <header
                className={` w-full transition-all duration-200 ease-in-out `}
                style={{ zIndex: 1000 }}
              >
                <nav className="flex items-center justify-between p-5 mx-auto bg-white max-w-7xl lg:px-8" aria-label="Global">
                  <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 flex justify-center items-center">
                      {/* <img src="./img/logou.png" alt="Logo" className="w-9" /> */}
                      <h1 className="text-2xl font-semibold text-gray-800">tailwindcss</h1>
                    </a>
                  </div>
                  <div className="flex lg:hidden">
                    <button
                      type="button"
                      onClick={toggleMenu}
                    >
                      <span className={`my-2 block h-[2px] w-[30px] bg-gray-800 rounded-full dark:bg-yellow-500 transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : 'rotate-0 translate-y-0'}`}></span>
                      <span className={`my-2 block h-[2px] w-[30px] bg-gray-800 rounded-full dark:bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'scale-0' : 'scale-100'}`}></span>
                      <span className={`my-2 block h-[2px] w-[30px] bg-gray-800 rounded-full dark:bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : 'rotate-0 translate-y-0'}`}></span>
                    </button>
                  </div>
                  <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-base font-medium text-gray-800">Home</Link>
                    <Link to="/" className="text-base font-medium text-gray-800">About</Link>
                    <Link to="/" className="text-base font-medium text-gray-800">Contact</Link>
                    <Link to="/test" className="text-base font-medium text-gray-800">Profil</Link>
                  </div>
                </nav>
              </header>
            </div>
          }
        />
      </div>
    </nav>
  );
};
