import React from 'react';
import { Wind, Layout, Building, Trees, User, Film, Droplets } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const features = [
  { icon: <Wind className="w-4 h-4" />, label: 'Air Conditioning' },
  { icon: <Layout className="w-4 h-4" />, label: 'Balcony' },
  { icon: <Building className="w-4 h-4" />, label: 'Terrace' },
  { icon: <Trees className="w-4 h-4" />, label: 'Garden' },
  { icon: <Wind className="w-4 h-4" />, label: 'Modular Kitchen' },
  { icon: <User className="w-4 h-4" />, label: 'Servant Room' },
  { icon: <Wind className="w-4 h-4" />, label: 'Private Pool' },
  { icon: <Film className="w-4 h-4" />, label: 'Home Theater' },
  { icon: <Droplets className="w-4 h-4" />, label: 'Water Features' },
];

export default function PropertyFeaturesFilter() {
  return (
    <FilterSection title="Property Features">
      <div className="grid grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-brand"
            />
            <span className="flex items-center gap-2 text-sm text-gray-600">
              {feature.icon}
              {feature.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}
