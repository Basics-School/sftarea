import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Have Questions? We're Here to Help!</h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
              <Phone className="w-5 h-5" />
              <span>+91-XXXXXXXXXX</span>
            </a>
            <a href="mailto:support@sftarea.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              <span>support@sftarea.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}