import React from 'react';
import { Video, TrendingDown, Sparkles, Zap } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const features = [
  { icon: <Video className="w-4 h-4" />, label: 'Virtual Tour Available' },
  { icon: <TrendingDown className="w-4 h-4" />, label: 'Price Drops' },
  { icon: <Sparkles className="w-4 h-4" />, label: 'Newly Listed Properties' },
  { icon: <Video className="w-4 h-4" />, label: '3D Walkthroughs' },
  { icon: <Zap className="w-4 h-4" />, label: 'Energy Efficiency Ratings' },
];

export default function AdditionalFeaturesFilter() {
  return (
    <FilterSection title="Additional Features">
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
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