import React from 'react';
import { MapPin, Bell, ClipboardList, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: <MapPin className="w-12 h-12 text-blue-600" />,
    title: 'Find Properties Instantly',
    description: 'Search by location, price, or property type.'
  },
  {
    icon: <Bell className="w-12 h-12 text-blue-600" />,
    title: 'Stay Updated',
    description: 'Get real-time notifications on properties you love.'
  },
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
    title: 'Easy Management',
    description: 'Post, track, and manage listings effortlessly.'
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-blue-600" />,
    title: 'Connect Quickly',
    description: 'Directly chat with sellers, buyers, or agents.'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Smart, Simple, Seamless</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience a revolutionary way to handle real estate transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-50 rounded-2xl">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}