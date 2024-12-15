import React from 'react';
import { Home, Building, Map, Bed } from 'lucide-react';

interface PropertyTypeSection {
  title: string;
  icon: React.ReactNode;
  options: string[];
}

const propertyTypes: PropertyTypeSection[] = [
  {
    title: 'Residential',
    icon: <Home className="w-5 h-5" />,
    options: ['Apartment', 'Villa', 'Independent House', 'Builder Floor', 'Studio Apartment']
  },
  {
    title: 'Commercial',
    icon: <Building className="w-5 h-5" />,
    options: ['Office Space', 'Retail Shop', 'Warehouse', 'Co-working Space', 'Industrial Properties']
  },
  {
    title: 'Land/Plots',
    icon: <Map className="w-5 h-5" />,
    options: ['Residential Plot', 'Commercial Plot', 'Agricultural Land', 'Farm Land']
  },
  {
    title: 'Others',
    icon: <Bed className="w-5 h-5" />,
    options: ['PG & Co-living', 'Shared Rooms', 'Serviced Apartments', 'Luxury Villas']
  }
];

export default function PropertyTypeFilter() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-4">
      <h2 className="text-xl font-semibold mb-4">Property Type</h2>

      {propertyTypes.map((section, index) => (
        <div key={index} className="mb-6 last:mb-0">
          <div className="flex items-center gap-2 mb-3">
            {section.icon}
            <h3 className="font-medium text-xl text-gray-900">{section.title}</h3>
          </div>

        <div className="ml-7 grid grid-cols-3 gap-x-4 gap-y-2">
            {section.options.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center gap-4">
                    <input
                        type="checkbox"
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-brand"
                    />
                    <span className=" text-gray-600">{option}</span>
                </label>
            ))}
        </div>
        </div>
      ))}
    </div>
  );
}
