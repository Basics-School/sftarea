"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp, Search, Settings2, Mic } from "lucide-react";
import { SelectNeighbours } from "../layouts/selec-neigbour";
import { DualRangeSlider } from "../ui/dual-range-slider";

export default function SearchForm() {
  const [priceRange, setPriceRange] = React.useState([500000, 5000000]);
  const [sizeRange, setSizeRange] = React.useState([500, 5000]);
  const [showAdvanced, setShowAdvanced] = React.useState(false);
  const [searchType, setSearchType] = React.useState<'rent' | 'sale'>('rent');

  const propertyTypes = [
    "Apartments / Flats",
    "Independent Houses / Villas",
    "Studio Apartments",
    "Builder Floors",
    "Residential Plots / Land",
    "Penthouses",
    "Duplex Villas",
    "Farmhouses",
  ];

  const roomOptions = [
    "1 BHK",
    "2 BHK",
    "3 BHK",
    "4 BHK",
    "5 BHK",
    "5+ BHK",
  ];

  const bathroomOptions = [
    "1 Bath",
    "2 Baths",
    "3 Baths",
    "4 Baths",
    "5+ Baths",
  ];

  const bedroomOptions = [
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4 Bedrooms",
    "5 Bedrooms",
    "5+ Bedrooms",
  ];

  const constructionStatus = [
    "Ready-to-Move",
    "Resale Properties",
    "New Launch/Booking",
    "Under-Construction Properties",
    "Pre-Launch Properties",
    "Foreclosure Properties",
    "Partially Completed",
    "Completed Projects",
  ];

  const amenities = [
    "Parking",
    "Lift/Elevator",
    "Power Backup",
    "Water Supply (24/7)",
    "Security Personnel",
    "CCTV Surveillance",
    "Children's Play Area",
    "Clubhouse",
    "Gymnasium",
    "Swimming Pool",
    "Park/Landscaped Gardens",
    "Visitor Parking",
    "Fire Safety Systems",
    "Gas Pipeline",
    "Gated Community",
  ];

  return (
    <div className="bg-white max-w-screen-xl rounded-2xl z-10 flex flex-col shadow-md overflow-hidden mx-auto absolute translate-x-1/2 right-1/2 justify-between top-3/4 min-h-40">
      <div className="flex justify-end gap-2 p-4">
        <Button
          variant={searchType === 'rent' ? 'default' : 'outline'}
          onClick={() => setSearchType('rent')}
        //   className="bg-brand text-background hover:bg-purple-500"
        >
          FOR RENT
        </Button>
        <Button
          variant={searchType === 'sale' ? 'default' : 'outline'}
          onClick={() => setSearchType('sale')}
        //   className="bg-brand text-background hover:bg-purple-500"
        >
          FOR SALE
        </Button>
      </div>
      <ul className="lg:flex w-full font-bold hidden">
        {["Buy", "Rent", "Commercial", "Plots / Land", "New Launch", "New Projects", "PG / CO-Living"].map((item) => (
          <button key={item} className="bg-white w-full py-3 text-xl focus:text-white focus:bg-brand">
            {item}
          </button>
        ))}
      </ul>
      <form className="flex-1 gap-6 flex flex-col relative lg:flex-row items-center p-6">
        <div className="flex gap-6 w-full">
          <Select>
            <SelectTrigger className="md:w-[240px] w-1/2 flex-1">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Property Type</SelectLabel>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <SelectNeighbours />
        </div>
        <div className="flex px-2 border rounded-md items-center w-full">
          <Search className="text-gray-400" />
          <Input
            placeholder='Search "Farmhouse in Punjab below 1 Cr"'
            className="outline-none focus-visible:ring-0 w-80 focus-visible:ring-ring border-none focus-within:outline-none ring-0"
          />
        </div>
        <div className="flex gap-6 w-full">
          <button
            className="bg-brand/10 text-purple-600 p-2 rounded-md hover:text-white hover:bg-brand"
            aria-label="Voice Search"
          >
            <Mic />
          </button>
          <button
            type="button"
            className="bg-brand/10 text-purple-600 p-2 rounded-md hover:text-white hover:bg-brand"
            onClick={() => setShowAdvanced(!showAdvanced)}
            aria-expanded={showAdvanced}
            aria-controls="advanced-options"
          >
            <Settings2 />
          </button>
          <button className="bg-brand text-nowrap p-2 rounded-md font-bold flex gap-4 flex-1 justify-around text-white hover:bg-brand">
            <span>Search Now</span>
            <Search />
          </button>
        </div>
      </form>
      <div
        id="advanced-options"
        className={`space-y-6 overflow-hidden transition-all duration-300 ease-in-out ${
          showAdvanced ? "max-h-[1000px] opacity-100 p-6" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!showAdvanced}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Input placeholder="Title" />
          <Input placeholder="Address" />
          <Input placeholder="Property ID" />

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Countries" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All States" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mh">Maharashtra</SelectItem>
              <SelectItem value="dl">Delhi</SelectItem>
              <SelectItem value="ka">Karnataka</SelectItem>
              <SelectItem value="tn">Tamil Nadu</SelectItem>
              <SelectItem value="gj">Gujarat</SelectItem>
              <SelectItem value="wb">West Bengal</SelectItem>
              <SelectItem value="up">Uttar Pradesh</SelectItem>
              <SelectItem value="ts">Telangana</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
              <SelectItem value="kolkata">Kolkata</SelectItem>
              <SelectItem value="pune">Pune</SelectItem>
              <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Neighborhoods" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bandra">Bandra</SelectItem>
              <SelectItem value="andheri">Andheri</SelectItem>
              <SelectItem value="juhu">Juhu</SelectItem>
              <SelectItem value="malad">Malad</SelectItem>
              <SelectItem value="powai">Powai</SelectItem>
              <SelectItem value="worli">Worli</SelectItem>
              <SelectItem value="chembur">Chembur</SelectItem>
              <SelectItem value="goregaon">Goregaon</SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-2 gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Min Land Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1000">1000 sq ft</SelectItem>
                <SelectItem value="2000">2000 sq ft</SelectItem>
                <SelectItem value="3000">3000 sq ft</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Max Land Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4000">4000 sq ft</SelectItem>
                <SelectItem value="5000">5000 sq ft</SelectItem>
                <SelectItem value="6000">6000 sq ft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Labels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hot">Hot</SelectItem>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="new">New</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Any Garages" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Garage</SelectItem>
              <SelectItem value="2">2 Garages</SelectItem>
              <SelectItem value="3">3+ Garages</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label className="mb-2 block">Price Range</Label>
            <div className="flex justify-between mb-2">
              <span>from ₹{priceRange[0].toLocaleString()}</span>
              <span>to ₹{priceRange[1].toLocaleString()}</span>
            </div>
            <DualRangeSlider
              value={priceRange}
              onValueChange={setPriceRange}
              min={500000}
              max={20000000}
              step={500000}
              className="mb-6"
            />
          </div>
          <div>
            <Label className="mb-2 block">Size Range</Label>
            <div className="flex justify-between mb-2">
              <span>from {sizeRange[0]} SqFt</span>
              <span>to {sizeRange[1]} SqFt</span>
            </div>
            <DualRangeSlider
              value={sizeRange}
              onValueChange={setSizeRange}
              min={200}
              max={10000}
              step={50}
              className="mb-6"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[roomOptions, bathroomOptions, bedroomOptions, constructionStatus].map((options, idx) => (
            <div key={idx}>
              <Label className="mb-2 block">
                {["Rooms", "Bathrooms", "Bedrooms", "Construction Status"][idx]}
              </Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        <div>
          <Label className="font-bold mb-2 block">Amenities:</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {amenities.map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox id={amenity.toLowerCase().replace(/\s+/g, "-")} />
                <Label
                  htmlFor={amenity.toLowerCase().replace(/\s+/g, "-")}
                  className="text-sm font-normal"
                >
                  {amenity}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
