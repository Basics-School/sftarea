import React from 'react';
import { School2, Building2, Train, ShoppingBag, Trees, Briefcase } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const facilities = [
  { icon: <School2 className="w-4 h-4" />, label: 'Schools' },
  { icon: <Building2 className="w-4 h-4" />, label: 'Hospitals' },
  { icon: <Train className="w-4 h-4" />, label: 'Public Transport' },
  { icon: <ShoppingBag className="w-4 h-4" />, label: 'Shopping Malls' },
  { icon: <Trees className="w-4 h-4" />, label: 'Parks' },
  { icon: <Briefcase className="w-4 h-4" />, label: 'Work Hubs' },
];

export default function NearbyFacilitiesFilter() {
  return (
    <FilterSection title="Nearby Facilities">
      <div className="grid grid-cols-2 gap-8">
        {facilities.map((facility, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-brand"
            />
            <span className="flex items-center gap-2 text-sm text-gray-600">
              {facility.icon}
              {facility.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}
