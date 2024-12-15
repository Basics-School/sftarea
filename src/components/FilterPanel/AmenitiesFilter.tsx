import React from 'react';
import { Wifi, Zap, Car, Wind, Dumbbell, Users, Shield, Camera, Dog, Trees } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const amenities = [
  { icon: <Wifi className="w-4 h-4" />, label: 'Wi-Fi' },
  { icon: <Zap className="w-4 h-4" />, label: 'Power Backup' },
  { icon: <Car className="w-4 h-4" />, label: 'Parking' },
  { icon: <Wind className="w-4 h-4" />, label: 'Air Conditioning' },
  { icon: <Wifi className="w-4 h-4" />, label: 'Swimming Pool' },
  { icon: <Dumbbell className="w-4 h-4" />, label: 'Gym' },
  { icon: <Users className="w-4 h-4" />, label: "Children's Play Area" },
  { icon: <Shield className="w-4 h-4" />, label: 'Gated Security' },
  { icon: <Camera className="w-4 h-4" />, label: 'CCTV Surveillance' },
  { icon: <Wifi className="w-4 h-4" />, label: 'EV Charging' },
  { icon: <Dog className="w-4 h-4" />, label: 'Pet-Friendly' },
  { icon: <Trees className="w-4 h-4" />, label: 'Dog Park' },
];

export default function AmenitiesFilter() {
  return (
    <FilterSection title="Amenities">
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="flex items-center gap-2 text-sm text-gray-600">
              {amenity.icon}
              {amenity.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}