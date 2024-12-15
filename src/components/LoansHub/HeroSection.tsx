import React from 'react';
import { Search, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Loans Hub: Simplify Your Financial Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Comprehensive Loan Solutions for Every Dream
          </p>
          <p className="text-lg mb-12 text-blue-50">
            Explore tailored loan plans to meet your goals—be it homeownership, commercial ventures, or mortgage solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Find the Right Loan
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Connect with Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}