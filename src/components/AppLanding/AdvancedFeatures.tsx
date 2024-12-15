import React from 'react';
import { SlidersHorizontal, Map, Bell, Video, LineChart } from 'lucide-react';

const features = [
  {
    icon: <SlidersHorizontal className="w-6 h-6" />,
    title: 'Advanced Search Filters',
    description: 'Zero in on what you need.'
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Interactive Map View',
    description: 'Explore properties near you in real-time.'
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Smart Notifications',
    description: 'Get alerts on price drops and new listings.'
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: 'Virtual Tours',
    description: 'View properties without stepping out.'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Lead Tracking',
    description: 'For agents and sellers to manage inquiries seamlessly.'
  }
];

export default function AdvancedFeatures() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Revolutionizing Your Real Estate Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}