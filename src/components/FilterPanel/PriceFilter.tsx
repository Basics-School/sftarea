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
          <div className="w-1/2">
            <label className="block text-sm mb-1">Min Price</label>
            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">₹0</option>
              <option value="1000000">₹10 Lac</option>
              <option value="2000000">₹20 Lac</option>
              <option value="3000000">₹30 Lac</option>
              <option value="5000000">₹50 Lac</option>
              <option value="10000000">₹1 Cr</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block text-sm mb-1">Max Price</label>
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">No max</option>
              <option value="2000000">₹20 Lac</option>
              <option value="3000000">₹30 Lac</option>
              <option value="5000000">₹50 Lac</option>
              <option value="10000000">₹1 Cr</option>
              <option value="20000000">₹2 Cr</option>
            </select>
          </div>
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
