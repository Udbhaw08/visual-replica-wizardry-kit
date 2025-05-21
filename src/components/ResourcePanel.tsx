
import React from 'react';

interface ResourcePanelProps {
  title: string;
  active?: boolean;
  warning?: boolean;
}

const ResourcePanel: React.FC<ResourcePanelProps> = ({ title, active = false, warning = false }) => {
  return (
    <div className="bg-hyper-panel-bg border border-hyper-panel-border rounded-sm overflow-hidden w-full">
      <div className="route-panel-header">
        <div className="w-7 h-7 bg-gray-700 rounded mr-2 flex items-center justify-center">
          {title === 'Personnels' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21M23 21V19C23 16.7909 21.2091 15 19 15M19 11C16.7909 11 15 9.20914 15 7M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {title === 'Equipments' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 8.5C10.5 8.5 11.5 7.5 12.5 7.5C13.5 7.5 14.5 8.5 14.5 8.5M19 21H5C3.89543 21 3 20.1046 3 19V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V19C21 20.1046 20.1046 21 19 21ZM16.5 13C16.5 14.3807 15.3807 15.5 14 15.5C12.6193 15.5 11.5 14.3807 11.5 13C11.5 11.6193 12.6193 10.5 14 10.5C15.3807 10.5 16.5 11.6193 16.5 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {title === 'Commodities' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16V12M12 16V8M8 16V14M3 3H21V21H3V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span className="font-semibold">{title}</span>
        <div className="ml-auto flex">
          <span className={`status-dot ${active ? 'on-time' : ''} ${warning ? 'warning' : ''}`}></span>
          <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ResourcePanel;
