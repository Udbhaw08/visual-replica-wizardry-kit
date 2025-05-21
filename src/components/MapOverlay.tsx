
import React from 'react';

const MapOverlay: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 right-4 bg-hyper-panel-bg border border-hyper-panel-border rounded-sm p-2">
        <div className="text-xs text-white">
          <button className="bg-hyper-panel-darker px-2 py-1 rounded flex items-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Find more
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapOverlay;
