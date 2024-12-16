import React from 'react';
import { Download, UserPlus, Search } from 'lucide-react';

const steps = [
  {
    icon: <Download className="w-8 h-8" />,
    title: 'Download the App',
    description: 'Available for iOS and Android.'
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: 'Create Your Account',
    description: 'Sign up and set your preferences.'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Start Exploring',
    description: 'Find, list, and connect in just a few clicks.'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get Started in 3 Simple Steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-6 w-12 h-0.5 bg-blue-100"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Stay Updated
          </button>
        </div>
      </div>
    </div>
  );
}