import React from 'react';
import { Book, RefreshCw, Key, Clock, Building, AlertTriangle } from 'lucide-react';
import { FilterSection } from './common/FilterSection';

const transactionTypes = [
  { icon: <Book className="w-4 h-4" />, label: 'New Booking' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Resale' },
  { icon: <Key className="w-4 h-4" />, label: 'Rent' },
  { icon: <Clock className="w-4 h-4" />, label: 'Lease-to-Buy' },
  { icon: <Building className="w-4 h-4" />, label: 'Pre-Leased' },
  { icon: <AlertTriangle className="w-4 h-4" />, label: 'Foreclosure' },
];

export default function TransactionTypeFilter() {
  return (
    <FilterSection title="Transaction Type">
      <div className="grid grid-cols-2 gap-8">
        {transactionTypes.map((type, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 accent-brand"
            />
            <span className="flex items-center gap-2 text-sm text-gray-600">
              {type.icon}
              {type.label}
            </span>
          </label>
        ))}
      </div>
    </FilterSection>
  );
}
