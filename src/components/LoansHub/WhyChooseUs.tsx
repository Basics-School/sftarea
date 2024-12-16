import React from 'react';
import { Settings, Zap, Shield, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: 'Flexible Solutions',
    description: 'Customized loan packages to fit every requirement.'
  },
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: 'Quick Approvals',
    description: 'Streamlined processes for fast loan disbursal.'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'Trusted Network',
    description: 'Partnered with leading financial institutions.'
  },
  {
    icon: <HeadphonesIcon className="w-12 h-12 text-blue-600" />,
    title: 'Expert Advice',
    description: 'Dedicated support to guide you every step of the way.'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Loans Hub is the Right Choice</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands, we simplify your financial journey with personalized services and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}