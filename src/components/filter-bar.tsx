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

    return (
        <div className="flex flex-wrap gap-2 p-4 max-w-screen-xl mx-auto bg-white border-b items-center">

        <Select defaultValue="buy">
            <SelectTrigger className="w-[140px]">
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

            <div className="relative flex-1 min-w-[200px]">
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

            <Select defaultValue="this-area">
                <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Radius" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="this-area">This area only</SelectItem>
                    <SelectItem value="1">Within 1 mile</SelectItem>
                    <SelectItem value="3">Within 3 miles</SelectItem>
                    <SelectItem value="5">Within 5 miles</SelectItem>
                </SelectContent>
            </Select>

            <Select defaultValue="1-3">
                <SelectTrigger className="w-[140px]">
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
                <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="any">Any price</SelectItem>
                    <SelectItem value="100-300">£100k - £300k</SelectItem>
                    <SelectItem value="300-500">£300k - £500k</SelectItem>
                    <SelectItem value="500+">£500k+</SelectItem>
                </SelectContent>
            </Select>

            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-[140px]">
                        Property type
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px]">
                    <div className="grid gap-2">
                        <Label className="flex items-center space-x-2">
                            <Checkbox id="bungalow" />
                            <span>Bungalows</span>
                        </Label>
                        <Label className="flex items-center space-x-2">
                            <Checkbox id="detached" />
                            <span>Detached</span>
                        </Label>
                        <Label className="flex items-center space-x-2">
                            <Checkbox id="semi" />
                            <span>Semi-detached</span>
                        </Label>
                        <Label className="flex items-center space-x-2">
                            <Checkbox id="flats" />
                            <span>Flats</span>
                        </Label>
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
                <SheetContent className="w-full sm:max-w-[800px] overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Filter your results</SheetTitle>
                    </SheetHeader>
                    <div className="min-h-screen bg-gray-100 p-6">
                        <div className="max-w-2xl mx-auto space-y-4">
                            <VerifiedProperties />
                            <PropertyTypeFilter />
                            <PriceFilter />
                            <LocationFilter />
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
