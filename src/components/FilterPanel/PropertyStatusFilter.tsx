import React from 'react';
import { Home, Construction, Repeat, Rocket, Gavel, AlertTriangle } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const statusOptions = [
  { icon: <Home className="w-4 h-4" />, label: 'Ready to Move' },
  { icon: <Construction className="w-4 h-4" />, label: 'Under Construction' },
  { icon: <Repeat className="w-4 h-4" />, label: 'Resale' },
  { icon: <Rocket className="w-4 h-4" />, label: 'Pre-Launch' },
  { icon: <Gavel className="w-4 h-4" />, label: 'Auction Properties' },
  { icon: <AlertTriangle className="w-4 h-4" />, label: 'Distressed Properties' },
];

export default function PropertyStatusFilter() {
  return (
    <FilterSection title="Property Status">
      <div className="grid grid-cols-2 gap-8">
        {statusOptions.map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-brand"
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
