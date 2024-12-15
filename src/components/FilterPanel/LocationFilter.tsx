import React, { useState } from 'react';
import { MapPin, Navigation, Search } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

export default function LocationFilter() {
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [radius, setRadius] = useState('1');

  return (
    <FilterSection title="Location">
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Enter locality or landmark"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-gray-400" />
          <select
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="flex-1 py-2 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="1">Within 1 km</option>
            <option value="5">Within 5 km</option>
            <option value="10">Within 10 km</option>
          </select>
        </div>
      </div>
    </FilterSection>
  );
}