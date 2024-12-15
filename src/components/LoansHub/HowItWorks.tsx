import React from 'react';
import { Search, CheckCircle, FileText, Check } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Choose Your Loan Type',
    description: 'Pick the loan that matches your needs.'
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Check Eligibility',
    description: 'Use our calculators and tools to ensure you qualify.'
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Apply Online',
    description: 'Submit the required details and documents.'
  },
  {
    icon: <Check className="w-8 h-8" />,
    title: 'Get Approved',
    description: 'Receive approval and disbursal in record time.'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Four Simple Steps to Your Loan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}