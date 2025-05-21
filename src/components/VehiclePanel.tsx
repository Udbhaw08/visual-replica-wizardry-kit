
import React from 'react';

interface VehicleCategoryProps {
  title: string;
  color?: string;
}

const VehicleCategory: React.FC<VehicleCategoryProps> = ({ title, color = "#ffffff" }) => {
  return (
    <div className="px-3 py-1.5 bg-gray-800 rounded mr-2 text-white text-xs inline-block">
      {title}
    </div>
  );
};

interface VehicleItemProps {
  type: string;
  id: string;
  available?: boolean;
  speed?: string;
  range?: string;
  capacity?: string;
  status?: string;
  warning?: boolean;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ 
  type, 
  id,
  available = true,
  speed = "15 km/h",
  range = "600 km",
  capacity = "1200kg",
  status = "Available",
  warning = false
}) => {
  return (
    <div className={`bg-[#121920] border rounded-md overflow-hidden ${warning ? 'border-amber-500' : 'border-gray-700'}`}>
      <div className="px-2 py-1.5 text-xs">
        <div className="flex justify-between items-center">
          <div className="text-white">
            {type} {id}
          </div>
          {warning && (
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
          )}
        </div>
        <div className="flex justify-between text-gray-400 text-[10px] mt-1">
          <div>{speed}</div>
          <div>{range}</div>
          <div>{capacity}</div>
        </div>
        <div className="mt-3 flex items-center justify-center">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
            <rect width="50" height="15" x="5" y="15" fill="#555"/>
            <rect width="40" height="12" x="10" y="3" fill="#555"/>
            <circle cx="15" cy="22" r="6" fill="#333"/>
            <circle cx="30" cy="22" r="6" fill="#333"/>
            <circle cx="45" cy="22" r="6" fill="#333"/>
          </svg>
        </div>
        <div className="text-[10px] mt-2 flex justify-between">
          <span className="text-gray-400">Status:</span>
          <span className={`${available ? 'text-green-500' : 'text-orange-500'}`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

const VehiclePanel: React.FC = () => {
  // Based on the image
  const vehicleTypes = [
    { title: "Army Vehicles" },
    { title: "Civil Vehicles" },
    { title: "Support Vehicles" },
    { title: "Transit-Camps Vehicles" }
  ];

  const vehicles = [
    { type: "Tatra T815", id: "", warning: false, capacity: "1200kg", range: "600 km", speed: "15 km/h" },
    { type: "Tata LPTA", id: "", warning: true, capacity: "1200kg", range: "600 km", speed: "15 km/h" },
    { type: "Tata T815-7A", id: "", warning: false, capacity: "1200kg", range: "600 km", speed: "15 km/h" },
    { type: "AL-Station", id: "", warning: true, capacity: "1200kg", range: "600 km", speed: "15 km/h" },
    { type: "Force Gurkha", id: "", warning: false, capacity: "1200kg", range: "600 km", speed: "15 km/h" },
    { type: "Tata Safari Storm", id: "", warning: false, capacity: "1200kg", range: "600 km", speed: "15 km/h" },
    { type: "AL-Station", id: "", warning: false, capacity: "1200kg", range: "600 km", speed: "15 km/h" },
    { type: "Tata LPTA", id: "", warning: false, capacity: "1200kg", range: "600 km", speed: "15 km/h" },
  ];

  return (
    <div className="bg-black border-t border-gray-800 py-2">
      <div className="px-2 overflow-x-auto">
        <div className="flex space-x-4 mb-2">
          {vehicleTypes.map((type, idx) => (
            <VehicleCategory key={idx} title={type.title} />
          ))}
          <div className="ml-auto flex items-center bg-gray-800 px-3 py-1 rounded text-white text-xs">
            See more
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-2">
          {vehicles.map((vehicle, idx) => (
            <VehicleItem 
              key={idx}
              type={vehicle.type}
              id={vehicle.id}
              warning={vehicle.warning}
              capacity={vehicle.capacity}
              range={vehicle.range}
              speed={vehicle.speed}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-24 left-6 z-10 w-[210px] bg-[#0C2D4B] text-white p-4 rounded border border-blue-700 shadow-lg">
        <div className="font-medium mb-2">Confirm verification for exit of Convoy-15B-2025A52</div>
        <ul className="text-xs space-y-1 mb-3">
          <li className="flex">
            <span className="text-blue-300">•</span>
            <span className="ml-2">
              <span className="text-gray-400">Heading:</span> Heryano cantt.
            </span>
          </li>
          <li className="flex">
            <span className="text-blue-300">•</span>
            <span className="ml-2">
              <span className="text-gray-400">Load:</span> SC416 (HQ-P536)
            </span>
          </li>
          <li className="flex">
            <span className="text-blue-300">•</span>
            <span className="ml-2">
              <span className="text-gray-400">Status:</span> Exit verification
            </span>
          </li>
          <li className="flex">
            <span className="text-blue-300">•</span>
            <span className="ml-2">
              <span className="text-gray-400">Size:</span> 16 vehicles
            </span>
          </li>
          <li className="flex">
            <span className="text-blue-300">•</span>
            <span className="ml-2">
              <span className="text-gray-400">Command POS:</span> Cpt. Vijay Pratap (S-741)
            </span>
          </li>
        </ul>
        <div className="flex justify-between mt-4">
          <button className="bg-gray-700 text-white text-xs rounded px-6 py-2">Cancel</button>
          <button className="bg-blue-500 text-white text-xs font-medium rounded px-6 py-2">Verify</button>
        </div>
      </div>
    </div>
  );
};

export default VehiclePanel;
