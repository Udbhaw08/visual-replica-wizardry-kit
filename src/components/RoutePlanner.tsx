
import React from 'react';

interface RoutePlannerProps {
  active?: boolean;
}

const RoutePlanner: React.FC<RoutePlannerProps> = ({ active = false }) => {
  return (
    <div className="bg-hyper-panel-bg border border-hyper-panel-border rounded-sm overflow-hidden w-full">
      <div className="route-panel-header">
        <div className="w-7 h-7 bg-gray-700 rounded mr-2 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 20L3 17V7L9 4M9 20L15 17M9 20V4M15 17L21 20V10L15 7M15 17V7M9 4L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-semibold">Route Planner</span>
        <div className="ml-auto">
          <span className={`status-dot ${active ? 'on-time' : ''}`}></span>
        </div>
      </div>

      <div className="p-3 space-y-4">
        <div>
          <label className="text-gray-300 text-sm block mb-1">Origin</label>
          <div className="bg-hyper-panel-darker rounded p-2 border border-hyper-panel-border">
            <select className="bg-hyper-panel-darker text-white w-full text-sm border-none outline-none">
              <option>Hoth</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-gray-300 text-sm block mb-1">Destination</label>
          <div className="bg-hyper-panel-darker rounded p-2 border border-hyper-panel-border">
            <input type="text" placeholder="Enter destination" className="bg-transparent text-white w-full text-sm border-none outline-none" />
          </div>
        </div>

        <button className="w-full bg-hyper-orange text-black font-semibold py-2 rounded text-center mt-4">
          Generate Plan
        </button>
      </div>
    </div>
  );
};

export default RoutePlanner;
