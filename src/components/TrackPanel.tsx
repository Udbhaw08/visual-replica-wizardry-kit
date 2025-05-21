
import React from 'react';

interface ConvoyProps {
  id: string;
  mission: string;
  status: 'On Time' | 'Delayed';
}

const Convoy: React.FC<ConvoyProps> = ({ id, mission, status }) => {
  return (
    <div className="bg-hyper-panel-darker rounded border border-hyper-panel-border px-2 py-1.5 mb-2">
      <div className="flex justify-between">
        <div className="text-sm font-medium">Convoy: {id}</div>
      </div>
      <div className="text-xs text-gray-300">Mission: {mission}</div>
      <div className="flex items-center text-xs">
        <span>Status: </span>
        <div className="flex items-center ml-1">
          <span className={`status-dot ${status === 'On Time' ? 'on-time' : 'delayed'}`}></span>
          <span>{status}</span>
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
    <div className="bg-hyper-panel-bg border border-hyper-panel-border rounded-sm overflow-hidden w-full max-h-full">
      <div className="route-panel-header">
        <span className="font-semibold">Tracks</span>
        <div className="ml-auto">
          <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="p-2 overflow-y-auto max-h-[calc(100vh-12rem)]">
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
