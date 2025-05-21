
import React from 'react';
import Header from '../components/Header';
import RoutePlanner from '../components/RoutePlanner';
import ResourcePanel from '../components/ResourcePanel';
import TrackPanel from '../components/TrackPanel';
import VehiclePanel from '../components/VehiclePanel';
import MapOverlay from '../components/MapOverlay';

const convoyData = [
  { id: 'TL-158-749', mission: 'TGPB', status: 'On Time' },
  { id: 'TL-158-748', mission: 'TGPB', status: 'On Time' },
  { id: 'TL-4E-9', mission: 'TGPB', status: 'Delayed' },
  { id: 'TL-158-748', mission: 'TGPB', status: 'On Time' },
  { id: 'TL-158-746', mission: 'TGPB', status: 'On Time' },
  { id: 'TL-158-749', mission: 'TGPB', status: 'On Time' },
  { id: 'TL-158-749', mission: 'TGPB', status: 'On Time' },
];

const Index: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-hyper-dark-bg">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-60 bg-hyper-panel-bg border-r border-hyper-panel-border overflow-y-auto">
          <div className="p-2 space-y-2">
            <RoutePlanner active={true} />
            
            <div className="mt-4 space-y-2">
              <ResourcePanel title="Personnels" active={true} />
              <ResourcePanel title="Equipments" active={true} />
              <ResourcePanel title="Commodities" warning={true} />
            </div>
          </div>
        </div>
        
        {/* Main Map Area */}
        <div className="flex-1 relative">
          <div className="w-full h-full map-container">
            <MapOverlay />
          </div>
          
          {/* Bottom Vehicle Panel */}
          <VehiclePanel />
        </div>
        
        {/* Right Sidebar */}
        <div className="w-60 bg-hyper-panel-bg border-l border-hyper-panel-border overflow-y-auto">
          <div className="p-2">
            <TrackPanel convoys={convoyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
