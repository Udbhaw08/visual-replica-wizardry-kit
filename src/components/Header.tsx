
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-hyper-panel-darker border-b border-hyper-panel-border h-10 flex items-center px-4">
      <div className="font-bold text-white text-lg">Hyper-Tensor OS</div>
      <div className="ml-auto flex gap-2">
        {/* Header controls could go here */}
      </div>
    </header>
  );
};

export default Header;
