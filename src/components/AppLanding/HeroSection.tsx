import React from 'react';
import { Bell, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-24">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Real Estate Made Easy – Anytime, Anywhere
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-blue-100">
            Experience the future of real estate with SFTArea App, launching soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Bell className="w-5 h-5" />
              Notify Me on Launch
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}