import React from 'react';
import { Star, Building2, Crown, Percent, UserCheck, Clock } from 'lucide-react';

interface FilterToggleProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  onChange: (checked: boolean) => void;
}

const FilterToggle: React.FC<FilterToggleProps> = ({ icon, title, items, onChange }) => (
  <div className="border-b border-gray-200 py-4">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <span className="text-gray-600">{icon}</span>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" onChange={(e) => onChange(e.target.checked)} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
    <ul className="ml-8 space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-sm text-gray-600">{item}</li>
      ))}
    </ul>
  </div>
);

export default function VerifiedProperties() {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Verified & Special Properties</h2>

            <div className="grid grid-cols-2 gap-8">
                <FilterToggle
                    icon={<Star className="w-5 h-5 text-amber-500" />}
                    title="Hot Properties"
                    items={['Newly Added', 'Trending & Popular Listings']}
                    onChange={(checked) => console.log('Hot Properties:', checked)}
                />

                <FilterToggle
                    icon={<Building2 className="w-5 h-5 text-blue-500" />}
                    title="RERA Verified"
                    items={['RERA Certified Properties', 'Registered Agents']}
                    onChange={(checked) => console.log('RERA Verified:', checked)}
                />

                <FilterToggle
                    icon={<Crown className="w-5 h-5 text-yellow-500" />}
                    title="Premium Listings"
                    items={['Verified Owner Listings', 'Featured Properties']}
                    onChange={(checked) => console.log('Premium Listings:', checked)}
                />

                <FilterToggle
                    icon={<Percent className="w-5 h-5 text-green-500" />}
                    title="Exclusive Offers"
                    items={['Price Drops', 'Properties with Discounts']}
                    onChange={(checked) => console.log('Exclusive Offers:', checked)}
                />

                <FilterToggle
                    icon={<UserCheck className="w-5 h-5 text-purple-500" />}
                    title="Certified Agents"
                    items={['Top-Rated Agents', 'Listings by Certified Brokers']}
                    onChange={(checked) => console.log('Certified Agents:', checked)}
                />

                <FilterToggle
                    icon={<Clock className="w-5 h-5 text-red-500" />}
                    title="Special Deals"
                    items={['Limited-Time Offers', 'Ready-to-Move-In Properties']}
                    onChange={(checked) => console.log('Special Deals:', checked)}
                />
            </div>
        </div>
    );
}
