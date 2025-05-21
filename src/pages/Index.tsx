
import React from 'react';
import Header from '../components/Header';
import RoutePlanner from '../components/RoutePlanner';
import ResourcePanel from '../components/ResourcePanel';
import TrackPanel from '../components/TrackPanel';
import VehiclePanel from '../components/VehiclePanel';
import MapOverlay from '../components/MapOverlay';

const convoyData = [
  { id: 'TL-15B-756', mission: 'TCPS', status: 'On Time' },
  { id: 'TL-15B-746', mission: 'TCPS', status: 'On Time' },
  { id: 'TL-4E-8', mission: 'TCPS', status: 'Delayed' },
  { id: 'TL-15B-746', mission: 'TCPS', status: 'On Time' },
  { id: 'TL-15B-746', mission: 'TCPS', status: 'On Time' },
  { id: 'TL-15B-746', mission: 'TCPS', status: 'On Time' },
  { id: 'TL-15B-746', mission: 'TCPS', status: 'On Time' },
];

const Index: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-black">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-[240px] bg-[#0B1015] overflow-y-auto">
          <RoutePlanner active={true} />
          
          <div className="mt-6">
            <ResourcePanel title="Personnels" active={true} />
            <ResourcePanel title="Equipments" active={true} />
            <ResourcePanel title="Commodities" warning={true} />
          </div>
          
          <div className="px-4 py-3 mt-2">
            <button className="w-full bg-[#FF8C00] text-black font-medium py-3 rounded text-center">
              Generate Plan
            </button>
          </div>
        </div>
        
        {/* Main Map Area */}
        <div className="flex-1 relative">
          <div className="w-full h-full map-container">
            <MapOverlay />
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-[240px] bg-[#0B1015]">
          <TrackPanel convoys={convoyData} />
        </div>
      </div>
      
      {/* Bottom Vehicle Panel */}
      <VehiclePanel />
    </div>
  );
};

export default Index;
