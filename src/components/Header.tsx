
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black border-b border-gray-800 h-10 flex items-center px-4">
      <div className="font-bold text-white text-lg">Hyper-Tensor OS</div>
      <div className="ml-auto flex gap-2">
        {/* Header controls would go here */}
      </div>
    </header>
  );
};

export default Header;
