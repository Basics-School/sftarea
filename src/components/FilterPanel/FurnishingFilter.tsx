import React from 'react';
import { Sofa, Armchair, Box, Smartphone, Settings } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const furnishingOptions = [
  { icon: <Sofa className="w-4 h-4" />, label: 'Fully Furnished' },
  { icon: <Armchair className="w-4 h-4" />, label: 'Semi-Furnished' },
  { icon: <Box className="w-4 h-4" />, label: 'Unfurnished' },
  { icon: <Smartphone className="w-4 h-4" />, label: 'Smart Home Furnishing' },
  { icon: <Settings className="w-4 h-4" />, label: 'Customizable Packages' },
];

export default function FurnishingFilter() {
  return (
    <FilterSection title="Furnishing">
      <div className="grid grid-cols-2 gap-4">
        {furnishingOptions.map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="flex items-center gap-2 text-sm text-gray-600">
              {option.icon}
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}