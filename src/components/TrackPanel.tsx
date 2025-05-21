
import React from 'react';

interface ConvoyProps {
  id: string;
  mission: string;
  status: 'On Time' | 'Delayed';
}

const Convoy: React.FC<ConvoyProps> = ({ id, mission, status }) => {
  return (
    <div className="bg-[#14232B] rounded border border-gray-700 mb-2 overflow-hidden">
      <div className="px-3 py-2">
        <div className="text-sm font-medium text-white">Convoy: {id}</div>
        <div className="text-xs text-gray-400">Motor + {mission}</div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-gray-400">Status</span>
          <div className="flex items-center">
            <span className={`w-2.5 h-2.5 rounded-full mr-1.5 ${status === 'On Time' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
            <span className={`text-xs ${status === 'On Time' ? 'text-green-500' : 'text-orange-500'}`}>{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TrackPanelProps {
  convoys: ConvoyProps[];
}

const TrackPanel: React.FC<TrackPanelProps> = ({ convoys }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#121920] border-b border-gray-800 h-10 flex items-center px-4 justify-between">
        <span className="font-medium text-white">Tracks</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
      <div className="p-3 overflow-y-auto flex-1">
        {convoys.map((convoy) => (
          <Convoy 
            key={convoy.id}
            id={convoy.id}
            mission={convoy.mission}
            status={convoy.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackPanel;
