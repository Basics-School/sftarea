import Link from "next/link"
import { Building2, MapPin, Mail, Clock, Phone } from 'lucide-react'
import Image from "next/image"
 const cities = [
    "Hyderabad", "Bengaluru", "Delhi", "Mumbai", "Chennai",
    "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur",
    // "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
    // "Bhopal", "Visakhapatnam", "Amaravati (AP)", "Patna", "Vadodara"
  ]
export default function Footer() {


  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-10 ">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Flats for Sale */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Flats for Sale</h3>
            <ul className="space-y-2">
              {cities.map((city, index) => (
                <li key={`sale-${index}`}>
                  <Link href={`/flats-for-sale-in-${city.toLowerCase()}`} className="text-sm hover:text-white">
                    {`${index + 1}. Flats for Sale in ${city}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Estate */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Real Estate</h3>
            <ul className="space-y-2">
              {cities.map((city, index) => (
                <li key={`estate-${index}`}>
                  <Link href={`/real-estate-in-${city.toLowerCase()}`} className="text-sm hover:text-white">
                    {`${index + 1}. Real Estate in ${city}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* New Projects */}
          <div>
            <h3 className="font-semibold text-lg mb-4">New Projects</h3>
            <ul className="space-y-2">
              {cities.map((city, index) => (
                <li key={`projects-${index}`}>
                  <Link href={`/new-projects-in-${city.toLowerCase()}`} className="text-sm hover:text-white">
                    {`${index + 1}. New Projects in ${city}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rental Property */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Rental Property</h3>
            <ul className="space-y-2">
              {cities.map((city, index) => (
                <li key={`rental-${index}`}>
                  <Link href={`/rental-property-in-${city.toLowerCase()}`} className="text-sm hover:text-white">
                    {`${index + 1}. Rental Property in ${city}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/placeholder.svg"
                alt="SFTAREA Logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">PLOT NO.71, Aditya Arcade, Sundarayya Colony, Zirrakadpally, Hyderabad 500066</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1800 41 99099</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">sftnproperty@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">9:30 AM to 6:30 PM (Mon-Sun)</span>
              </div>
            </div>

            {/* Download Apps */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Download Our App</h3>
              <div className="flex flex-col gap-4">
                <Link href="#" className="w-40">
                  <Image
                    src="/placeholder.svg"
                    alt="Download on Play Store"
                    width={160}
                    height={48}
                  />
                </Link>
                <Link href="#" className="w-40">
                  <Image
                    src="/placeholder.svg"
                    alt="Download on App Store"
                    width={160}
                    height={48}
                  />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-sm hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="text-sm hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Building2 className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Building2 className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Building2 className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SFTAREA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
