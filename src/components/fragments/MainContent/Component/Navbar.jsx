import react from 'react';
import ComponentShowcase from '../../../elements/ComponentShowcase';
import { Button } from '@nextui-org/react';

export const Navbar = () => {
  const buttonCode = `
    import React from 'react';

    const Button = ({ children, onClick }) => {
      return (
        <button
          className="px-4 py-2 text-white bg-blue-600 rounded"
          onClick={onClick}
        >
          {children}
        </button>
      );
    };

    export default Button;
  `;

  return (
    <nav>
      <div className="container mx-auto">
        <h1 className="mb-6 text-2xl font-bold font-poppins">Navbar</h1>
        <ComponentShowcase
          componentName="Navbar"
          componentCode={buttonCode}
          componentPreview={<Button>Click Me</Button>}
        />
      </div>
    </nav>
  )
}