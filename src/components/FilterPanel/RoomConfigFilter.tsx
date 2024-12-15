import React from 'react';
import { Bed, Bath, Layout } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const ConfigOption: React.FC<{ icon: React.ReactNode; label: string; options: string[] }> = ({
  icon,
  label,
  options
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
    <div className="flex gap-2">
      {options.map((option, index) => (
        <button
          key={index}
          className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default function RoomConfigFilter() {
  return (
    <FilterSection title="Room Configuration">
      <div className="space-y-6">
        <ConfigOption
          icon={<Bed className="w-4 h-4 text-gray-500" />}
          label="Bedrooms"
          options={['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK']}
        />
        <ConfigOption
          icon={<Bath className="w-4 h-4 text-gray-500" />}
          label="Bathrooms"
          options={['1', '2', '3', '4', '5+']}
        />
        <ConfigOption
          icon={<Layout className="w-4 h-4 text-gray-500" />}
          label="Balconies"
          options={['1', '2', '3', '4+']}
        />
        <ConfigOption
            icon={<Layout className="w-4 h-4 text-gray-500" />}
            label="Facing"
            options={['East', 'South', 'North', 'North-East', 'South-East', 'North-West', 'South-West', 'West']}
        />
        <ConfigOption
            icon={<Layout className="w-4 h-4 text-gray-500" />}
            label="Floor"
            options={['Basement', 'Ground', '5-8', '9-12', '13-16', '16+']}
        />
      </div>
    </FilterSection>
  );
}
