"use client"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useState } from "react"
import Image from "next/image"
const majorCities = [
    { name: "New Delhi", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-delhi.jpg" },
    { name: "Mumbai", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-mumbai.jpg" },
    { name: "Gurgaon", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-gurgaon.jpg" },
    { name: "Noida", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-noida.jpg" },
    { name: "Bangalore", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-bangalore.jpg" },
    { name: "Ahmedabad", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-ahmedabad.jpg" },
    { name: "Kolkata", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-kolkata.jpg" },
    { name: "Chennai", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-chennai.jpg" },
    { name: "Hyderabad", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-hyderabad.jpg" },
    { name: "Pune", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-pune.jpg" },
    { name: "Thane", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-thane.jpg" },
    { name: "Lucknow", icon: "https://static.realestateindia.com/rei/images/topcity/ebsrpi-lucknow.jpg" },
]

  const secondaryCities = [
    "Navi Mumbai", "Ghaziabad", "Greater Noida", "Zirakpur", "Jaipur", "Mohali", "Bhiwadi", "Nagpur", "Surat", "Faridabad", "Goa",
    "Visakhapatnam", "Bhubaneswar", "Sonipat", "Indore", "Vadodara", "Nashik", "Bhopal", "Ranchi", "Chandigarh", "Raipur", "Dehradun",
    "Palghar", "Durgapur", "Haridwar", "Panchkula", "Raigad", "Shimla", "Coimbatore", "Kochi", "Vijayawada", "Agra", "Guwahati", "Rewari",
    "Siliguri", "Varanasi", "Kanpur", "Ludhiana", "Patna", "Alwar"
  ]
export default function CityFinder() {
  const [showAll, setShowAll] = useState(false)



  const visibleCities = showAll ? secondaryCities : secondaryCities.slice(0, 24)

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-semibold mb-8">
        Find Your Property in Your{" "}
        <span className="text-brand">Preferred City</span>
      </h1>

      {/* Major Cities Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {majorCities.map((city) => (
          <div
            key={city.name}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={city.icon}
              alt={`${city.name} icon`}
            //   width={50}
            //   height={27}
              className="mb-2 h-12"

            />
            <span className="text-sm font-medium">{city.name}</span>
          </div>
        ))}
      </div>

      {/* Secondary Cities */}
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flex flex-wrap gap-2 py-4 items-center justify-center">
          {visibleCities.map((city) => (
            <Button
              key={city}
              variant="outline"
              className="rounded-full bg-white hover:bg-gray-100"
              size="default"
            >
              {city}
            </Button>
          ))}
          {!showAll && (
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-800"
              onClick={() => setShowAll(true)}
            >
              Show More
            </Button>
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
