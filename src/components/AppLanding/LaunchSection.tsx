import React from 'react';
import { Smartphone } from 'lucide-react';

export default function LaunchSection() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-600 to-brand text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Launching This Month</h2>
          <p className="text-xl mb-8">Don't miss out on the ultimate real estate app experience.</p>

          <div className="mb-12">
            <Smartphone className="w-24 h-24 mx-auto text-white/80" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Sign Up Now to Access Exclusive Features</h3>
            <ul className="space-y-3 text-lg">
              <li>✨ Be the first to download</li>
              <li>🎁 Enjoy a free trial with premium features</li>
              <li>⭐️ Get priority updates and support</li>
            </ul>

            <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
