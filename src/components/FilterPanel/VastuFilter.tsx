import React from 'react';
import { Compass } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const directions = [
  'East', 'West', 'North', 'South',
  'North-East', 'South-East', 'North-West', 'South-West'
];

export default function VastuFilter() {
  return (
    <FilterSection title="Facing Direction (Vastu)">
      <div className="grid grid-cols-2 gap-3">
        {directions.map((direction, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-brand"
            />
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <Compass className="w-4 h-4" />
              {direction}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}
