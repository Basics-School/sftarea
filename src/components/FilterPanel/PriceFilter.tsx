import React, { useState } from 'react';
import { IndianRupee, Calculator } from 'lucide-react';
import { FilterSection } from './common/FilterSection';
import { RangeInput } from './common/RangeInput';

export default function PriceFilter() {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <FilterSection title="Price/Budget">
      <div className="space-y-4">
        <div className="flex gap-4">
          <RangeInput
            label="Min Price"
            value={minPrice}
            onChange={setMinPrice}
            placeholder="₹0"
          />
          <RangeInput
            label="Max Price"
            value={maxPrice}
            onChange={setMaxPrice}
            placeholder="No max"
          />
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <IndianRupee className="w-4 h-4" />
            <span className="text-sm">Price Per Sq. Ft.</span>
          </button>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <Calculator className="w-4 h-4" />
            <span className="text-sm">EMI Calculator</span>
          </button>
        </div>
      </div>
    </FilterSection>
  );
}