
import React from 'react';

const RoutePlanner = ({ active = false }) => {
  return (
    <div className="bg-[#0B1015] overflow-hidden w-full">
      <div className="bg-[#121920] border-b border-gray-800 h-10 flex items-center px-4">
        <div className="h-7 w-7 bg-black rounded flex items-center justify-center mr-2">
          <span className="text-white font-bold">H</span>
        </div>
        <span className="font-medium text-white">Route Planner</span>
        <div className="ml-auto">
          <span className={`w-2.5 h-2.5 rounded-full inline-block ${active ? 'bg-green-500' : ''}`}></span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <label className="text-gray-400 text-sm block mb-2">Origin</label>
          <div className="bg-[#121920] rounded border border-gray-700 p-2">
            <input 
              type="text" 
              className="bg-transparent text-white w-full text-sm border-none outline-none" 
              placeholder="" 
            />
          </div>
        </div>

        <div>
          <div className="flex items-center">
            <div className="w-full">
              <select className="appearance-none bg-[#121920] text-white w-full text-sm p-2 border border-gray-700 rounded outline-none">
                <option>Halts</option>
              </select>
            </div>
            <div className="pointer-events-none absolute flex items-center px-2 text-gray-400 right-8">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="text-gray-400 text-sm block mb-2">Destination</label>
          <div className="bg-[#121920] rounded border border-gray-700 p-2">
            <input 
              type="text" 
              className="bg-transparent text-white w-full text-sm border-none outline-none" 
              placeholder="" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutePlanner;
