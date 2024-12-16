"use client"

import * as React from "react"
import { Check, ChevronDown, MapPin } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  region: "nearby" | "popular" | "other"
}

const cities: City[] = [
  // Nearby Cities
  { name: "Ujjain", region: "nearby" },
  { name: "Indore", region: "nearby" },
  { name: "Bhopal", region: "nearby" },
  { name: "Jabalpur", region: "nearby" },

  // Popular Cities
  { name: "Mumbai", region: "popular" },
  { name: "Delhi", region: "popular" },
  { name: "Bangalore", region: "popular" },
  { name: "Chennai", region: "popular" },
  { name: "Kolkata", region: "popular" },
  { name: "Pune", region: "popular" },
  { name: "Hyderabad", region: "popular" },
  { name: "Ahmedabad", region: "popular" },

  // Other Cities
  { name: "Agra", region: "other" },
  { name: "Varanasi", region: "other" },
  { name: "Lucknow", region: "other" },
  { name: "Jaipur", region: "other" },
  { name: "Chandigarh", region: "other" },
  { name: "Bhubaneswar", region: "other" },
  { name: "Coimbatore", region: "other" },
  { name: "Nagpur", region: "other" },
  // Add more cities as needed
]

export default function TopcitiesDropdownList() {
  const [selectedCity, setSelectedCity] = React.useState("Gwalior")

  const nearbyCities = cities.filter(city => city.region === "nearby")
  const popularCities = cities.filter(city => city.region === "popular")
  const otherCities = cities.filter(city => city.region === "other")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="text-foreground justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {selectedCity}
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[800px]" align="start">
        <ScrollArea className="h-[400px]">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Nearby Properties</DropdownMenuLabel>
            <div className="grid grid-cols-5 gap-1">
              {nearbyCities.map((city) => (
                <DropdownMenuItem
                  key={city.name}
                  onClick={() => setSelectedCity(city.name)}
                >
                  {city.name}
                  {selectedCity === city.name && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>Top Rated Properties</DropdownMenuLabel>
            <div className="grid grid-cols-5 gap-1">
              {[...popularCities, ...otherCities].map((city) => (
                <DropdownMenuItem
                  key={city.name}
                  onClick={() => setSelectedCity(city.name)}
                >
                  {city.name}
                  {selectedCity === city.name && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuGroup>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
