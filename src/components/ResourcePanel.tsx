
import React from 'react';

const ResourcePanel = ({ title, active = false, warning = false }) => {
  return (
    <div className="bg-[#0B1015] overflow-hidden w-full border-b border-gray-800">
      <div className="h-10 flex items-center px-4">
        <div className="flex items-center w-full">
          {title === 'Personnels' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mr-2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          )}
          {title === 'Equipments' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mr-2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          )}
          {title === 'Commodities' && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mr-2">
              <path d="M16 16v-8M12 16V8M8 16v-4M4 4h16v16H4z"></path>
            </svg>
          )}
          <span className="font-medium text-white">{title}</span>
          
          <div className="ml-auto flex items-center">
            {active && !warning && (
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block mr-3"></span>
            )}
            {warning && (
              <span className="w-2.5 h-2.5 bg-amber-500 rounded-full inline-block mr-3"></span>
            )}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcePanel;
