import React from 'react';
import { Home, Building2,Building, Landmark, Users, Calculator } from 'lucide-react';

const categories = [
  {
    id: 'home',
    icon: <Home className="w-6 h-6" />,
    title: 'Home Loans',
    items: ['Home Loans', 'Construction Loans', 'Loan Against Property', 'Commercial Property Loans', 'Mortgage Refinancing', 'Project Finance Solutions']
  },
  {
    id: 'commercial',
    icon: <Building2 className="w-6 h-6" />,
    title: 'Commercial Loans',
    items: ['Office Space Loans', 'Retail Shop Loans', 'Warehouse Loans', 'Co-Working Space Loans', 'Business Expansion Loans', 'Lease Discount Loans']
  },
  {
    id: 'mortgage',
    icon: <Landmark className="w-6 h-6" />,
    title: 'Mortgage Loans',
    items: ['Loan Against Property', 'Reverse Mortgage', 'Commercial Mortgage', 'Agricultural Mortgage', 'Leasehold Mortgage']
  },
  {
    id: 'partners',
    icon: <Building className="w-6 h-6" />,
    title: 'Loan Partners',
    items: ['SBI Home', 'HDFC Ltd', 'Axis Bank', 'Canara Bank', 'Kotak Mahindra', 'Punjab National Bank']
  },
  {
    id: 'calculators',
    icon: <Calculator className="w-6 h-6" />,
    title: 'Calculators & Tools',
    items: ['EMI Calculator', 'Eligibility Checker', 'Stamp Duty Estimator', 'Property Tax Calculator', 'Rent vs. Buy Comparison', 'ROI Calculator']
  }
];

export default function LoanCategories() {
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Loan Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of loan services to cater to individual and business needs. Browse our categories below to find the right fit.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
                activeTab === category.id ? 'block' : 'hidden'
              }`}
            >
              {category.items.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}