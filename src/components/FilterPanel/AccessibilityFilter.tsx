import React from 'react';
import {  Dog, Heart, Shield } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const accessibilityOptions = [
  { icon: <Heart className="w-4 h-4" />, label: 'Wheelchair Accessible' },
  { icon: <Dog className="w-4 h-4" />, label: 'Pets Allowed' },
  { icon: <Heart className="w-4 h-4" />, label: 'Smoking Allowed' },
  { icon: <Heart className="w-4 h-4" />, label: 'Senior Citizen-Friendly' },
  { icon: <Shield className="w-4 h-4" />, label: 'Child Safety Features' },
];

export default function AccessibilityFilter() {
  return (
    <FilterSection title="Accessibility">
      <div className="grid grid-cols-2 gap-4">
        {accessibilityOptions.map((option, index) => (
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