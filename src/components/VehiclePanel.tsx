
import React from 'react';

interface VehicleCategoryProps {
  title: string;
  count: number;
  color: string;
}

const VehicleCategory: React.FC<VehicleCategoryProps> = ({ title, count, color }) => {
  return (
    <div className="px-2 py-1 bg-hyper-panel-darker rounded-md inline-block mr-2">
      <span className="text-xs text-white">{title}</span>
      <span className={`ml-2 px-1.5 rounded text-xs font-semibold`} style={{backgroundColor: color, color: '#000'}}>
        {count}
      </span>
    </div>
  );
};

interface VehicleItemProps {
  type: string;
  id: string;
  color: string;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ type, id, color }) => {
  return (
    <div className="vehicle-item">
      <div className="flex justify-between items-center mb-1">
        <span>Type: <strong>{type}</strong></span>
        <span className="px-1.5 rounded text-xs" style={{backgroundColor: color, color: '#000'}}>{id}</span>
      </div>
      <div className="h-12 flex items-center justify-center">
        {/* Vehicle illustration would go here */}
        <div className="border border-gray-500 p-1">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="10" y="10" fill="#555"/>
            <rect width="30" height="8" x="5" y="2" fill="#555"/>
            <circle cx="10" cy="15" r="4" fill="#333"/>
            <circle cx="30" cy="15" r="4" fill="#333"/>
            <circle cx="20" cy="15" r="4" fill="#333"/>
          </svg>
        </div>
      </div>
      <div className="text-[10px] text-gray-300 mt-1">
        <div>Location: Grid A3-5</div>
        <div>Status: Available</div>
      </div>
    </div>
  );
};

const VehiclePanel: React.FC = () => {
  const categories = [
    { title: 'Army Vehicles', count: 12, color: '#3CFF9D' },
    { title: 'Civil Vehicles', count: 8, color: '#3D8AFF' },
    { title: 'Support Vehicles', count: 5, color: '#FFE600' },
    { title: 'Tactical Cargo Vehicles', count: 14, color: '#FF9D00' },
  ];

  const vehicles = [
    { type: 'T935', id: 'TSO', color: '#3CFF9D' },
    { type: 'T335-FTA', id: 'FTA', color: '#3D8AFF' },
    { type: 'T335-N6', id: 'N6', color: '#FFE600' },
    { type: 'A1-Station', id: 'A1', color: '#FF5252' },
    { type: 'Force Carrier', id: 'FC', color: '#FF9D00' },
    { type: 'Type Safari Sierra', id: 'SS', color: '#3CFF9D' },
    { type: 'J4-Station', id: 'J4', color: '#3D8AFF' },
    { type: 'T389-FTA', id: 'XA', color: '#FFE600' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-hyper-panel-darker border-t border-hyper-panel-border p-2">
      <div className="mb-2">
        <div className="text-white text-sm mb-2">
          <span className="text-xs text-blue-300">Confirm verification for exit of Convoy-15B-2025A52</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <VehicleCategory 
              key={cat.title} 
              title={cat.title} 
              count={cat.count} 
              color={cat.color} 
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-8 gap-2 overflow-x-auto">
        {vehicles.map((vehicle, idx) => (
          <VehicleItem 
            key={idx}
            type={vehicle.type}
            id={vehicle.id}
            color={vehicle.color}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <button className="bg-hyper-blue text-white text-xs rounded px-3 py-1">Cancel</button>
        <button className="bg-hyper-green text-black text-xs font-semibold rounded px-3 py-1">Verify</button>
      </div>
    </div>
  );
};

export default VehiclePanel;
