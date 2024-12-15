'use client'

import * as React from 'react'
import { X, ChevronDown, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import VerifiedProperties from './FilterPanel/VerifiedProperties'
import PropertyTypeFilter from './FilterPanel/PropertyTypeFilter'
import PriceFilter from './FilterPanel/PriceFilter'
import LocationFilter from './FilterPanel/LocationFilter'
import RoomConfigFilter from './FilterPanel/RoomConfigFilter'
import AmenitiesFilter from './FilterPanel/AmenitiesFilter'
import AccessibilityFilter from './FilterPanel/AccessibilityFilter'
import VastuFilter from './FilterPanel/VastuFilter'
import PropertyStatusFilter from './FilterPanel/PropertyStatusFilter'
import OwnershipFilter from './FilterPanel/OwnershipFilter'
import FurnishingFilter from './FilterPanel/FurnishingFilter'
import NearbyFacilitiesFilter from './FilterPanel/NearbyFacilitiesFilter'
import AdditionalFeaturesFilter from './FilterPanel/AdditionalFeaturesFilter'
import PropertyFeaturesFilter from './FilterPanel/PropertyFeaturesFilter'
import TransactionTypeFilter from './FilterPanel/TransactionTypeFilter'

export function PropertyFilterBar() {
    const [activeFilters, setActiveFilters] = React.useState(0)
    const [location, setLocation] = React.useState('Hydrabad, India')
    const [selectedMinPrice, setSelectedMinPrice] = React.useState(0)
    const [selectedMaxPrice, setSelectedMaxPrice] = React.useState('any')

    return (
        <div className="flex flex-wrap gap-2 p-4 max-w-screen-xl mx-auto bg-white border-b items-center">

        <Select defaultValue="buy">
            <SelectTrigger className="w-[140px] ring-black ring-1">
                <SelectValue placeholder="Property For" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="plots">Plots/Lands</SelectItem>
                <SelectItem value="pg">PG/Co-Living</SelectItem>
                <SelectItem value="launch">New Launch</SelectItem>
                <SelectItem value="projects">New Projects</SelectItem>
            </SelectContent>
        </Select>

            <Popover>
                <PopoverTrigger asChild>
                    <div className="relative flex-1 min-w-[200px] ring-black ring-1 rounded-md">
                        <Input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter a location"
                            className="pr-8"
                        />
                        {location && (
                            <button
                                onClick={() => setLocation('')}
                                className="absolute right-2 top-1/2 -translate-y-1/2"
                            >
                                <X className="h-4 w-4 text-muted-foreground" />
                            </button>
                        )}
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0" align="start">
                    <div className="grid gap-2 p-4">
                        <h4 className="font-medium">Popular Locations</h4>
                        <div className="grid gap-2">
                            {[
                                { city: "Mumbai", areas: ["Andheri", "Bandra", "Juhu", "Powai"] },
                                { city: "Delhi", areas: ["Connaught Place", "Dwarka", "South Delhi", "Rohini"] },
                                { city: "Bangalore", areas: ["Whitefield", "Electronic City", "Koramangala", "Indiranagar"] },
                                { city: "Chennai", areas: ["T Nagar", "Anna Nagar", "Adyar", "Velachery"] }
                            ].map((location) => (
                                <div key={location.city}>
                                    {/* <div className="font-medium text-sm px-2 py-1 text-gray-600">
                                        {location.city}
                                    </div> */}
                                    {location.areas.map((area) => (
                                        <button
                                            key={area}
                                            className="flex items-center gap-2 w-full p-2 text-left text-sm hover:bg-gray-100 rounded-md"
                                            onClick={() => setLocation(`${location.city}, ${area}`)}
                                        >
                                            {location.city},{area}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            <Select defaultValue="this-area">
                <SelectTrigger className="w-[140px] ring-black ring-1 ">
                    <SelectValue placeholder="Radius" />
                </SelectTrigger>
                <SelectContent className='text-xl'>
                    <SelectItem value="this-area">This area only</SelectItem>
                    <SelectItem value="Near-me">Nearby me</SelectItem>
                    <SelectItem value="1">+ 1 km</SelectItem>
                    <SelectItem value="2">+ 2 km</SelectItem>
                    <SelectItem value="5">+ 5 km</SelectItem>
                    <SelectItem value="10">+ 10 km</SelectItem>
                    <SelectItem value="20">+ 20 km</SelectItem>
                    <SelectItem value="40">+ 40 km</SelectItem>
                    <SelectItem value="60">+ 60 km</SelectItem>
                </SelectContent>
            </Select>

            <Select defaultValue="1-3">
                <SelectTrigger className="w-[140px] ring-black ring-1">
                    <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1-3">1 - 3 beds</SelectItem>
                    <SelectItem value="2-4">2 - 4 beds</SelectItem>
                    <SelectItem value="3-5">3 - 5 beds</SelectItem>
                    <SelectItem value="4+">4+ beds</SelectItem>
                </SelectContent>
            </Select>

            <Select defaultValue="any">
                <SelectTrigger className="w-[140px] ring-black ring-1">
                    <SelectValue>
                        {`₹${selectedMinPrice/100000}L - ${selectedMaxPrice === 'any' ? '∞' : `₹${Number(selectedMaxPrice)/100000}L`}`}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <div className="flex gap-2 p-2">
                        <Select value={selectedMinPrice.toString()} onValueChange={(value) => setSelectedMinPrice(Number(value))}>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Min Price" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">₹0</SelectItem>
                                <SelectItem value="500000">₹5L</SelectItem>
                                <SelectItem value="1000000">₹10L</SelectItem>
                                <SelectItem value="2000000">₹20L</SelectItem>
                                <SelectItem value="3000000">₹30L</SelectItem>
                                <SelectItem value="5000000">₹50L</SelectItem>
                                <SelectItem value="10000000">₹1Cr</SelectItem>
                                <SelectItem value="20000000">₹2Cr</SelectItem>
                                <SelectItem value="50000000">₹5Cr</SelectItem>

                            </SelectContent>
                        </Select>
                        <span className="flex items-center">to</span>
                        <Select value={selectedMaxPrice} onValueChange={setSelectedMaxPrice}>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Max Price" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="any">No Limit</SelectItem>
                                <SelectItem value="1000000">₹10L</SelectItem>
                                <SelectItem value="2000000">₹20L</SelectItem>
                                <SelectItem value="3000000">₹30L</SelectItem>
                                <SelectItem value="5000000">₹50L</SelectItem>
                                <SelectItem value="10000000">₹1Cr</SelectItem>
                                <SelectItem value="20000000">₹2Cr</SelectItem>
                                <SelectItem value="50000000">₹5Cr</SelectItem>
                                <SelectItem value="100000000">₹10Cr</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </SelectContent>
            </Select>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[140px] ring-black ring-1">
                        Property type
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-4">
                    <div className="space-y-4">
                        {/* Residential Section */}
                        <div>
                            <h3 className="font-semibold mb-2">Residential</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="flat" />
                                    <span>Flat</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="1bhk" />
                                    <span>1 BHK</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="house-villa" />
                                    <span>House/Villa</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="2bhk" />
                                    <span>2 BHK</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="plot" />
                                    <span>Plot</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="3bhk" />
                                    <span>3 BHK</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="4bhk" />
                                    <span>4 BHK</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="5bhk" />
                                    <span>5 BHK</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="5plus-bhk" />
                                    <span>5+ BHK</span>
                                </Label>
                            </div>
                        </div>

                        {/* Commercial Section */}
                        <div>
                            <h3 className="font-semibold mb-2">Commercial</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="shop-showroom" />
                                    <span>Shop/Showroom</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="commercial-land" />
                                    <span>Commercial Land</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="office-space" />
                                    <span>Office Space</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="warehouse" />
                                    <span>Warehouse/Godown</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="industrial-building" />
                                    <span>Industrial Building</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="industrial-shed" />
                                    <span>Industrial Shed</span>
                                </Label>
                            </div>
                        </div>

                        {/* Other Section */}
                        <div>
                            <h3 className="font-semibold mb-2">Other Property Types</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="agricultural-land" />
                                    <span>Agricultural Land</span>
                                </Label>
                                <Label className="flex items-center space-x-2">
                                    <Checkbox id="farm-house" />
                                    <span>Farm House</span>
                                </Label>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="relative">
                        Filters
                        {activeFilters > 0 && (
                            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                                {activeFilters}
                            </span>
                        )}
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-[700px] overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Filter your results</SheetTitle>
                    </SheetHeader>
                    <div className="min-h-screen p-6">
                        <div className="max-w-2xl mx-auto space-y-4">
                            <VerifiedProperties />
                            <LocationFilter />
                            <PropertyTypeFilter />
                            <PriceFilter />
                            <RoomConfigFilter />
                            <AmenitiesFilter />
                            <AccessibilityFilter />
                            <VastuFilter />
                            <PropertyStatusFilter />
                            <OwnershipFilter />
                            <FurnishingFilter />
                            <NearbyFacilitiesFilter />
                            <AdditionalFeaturesFilter />
                            <PropertyFeaturesFilter />
                            <TransactionTypeFilter />
                            <div className="space-y-4 p-6 shadow-md">
                                <h3 className="text-lg font-semibold">Added to site</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <Label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-brand"
                                            id="anytime"
                                        />
                                        <span>Anytime</span>
                                    </Label>
                                    <Label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-brand"
                                            id="24hours"
                                        />
                                        <span>Last 24 hours</span>
                                    </Label>
                                    <Label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-brand"
                                            id="3days"
                                        />
                                        <span>Last 3 days</span>
                                    </Label>
                                    <Label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-brand"
                                            id="7days"
                                        />
                                        <span>Last 7 days</span>
                                    </Label>
                                    <Label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-brand"
                                            id="14days"
                                        />
                                        <span>Last 14 days</span>
                                    </Label>
                                    <Label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 accent-brand"
                                            id="30days"
                                        />
                                        <span>Last 30 days</span>
                                    </Label>
                                </div>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            <Button className="bg-primary hover:bg-primary/90">
                <Heart className="mr-2 h-4 w-4" />
                Save
            </Button>
        </div>
    )
}
