"use client"
import * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronUp, Search, Settings2, Mic } from 'lucide-react'
import { SelectNeighbours } from "../layouts/selec-neigbour"
import { DualRangeSlider } from "../ui/dual-range-slider"



export default function SearchForm() {
    const [priceRange, setPriceRange] = React.useState([100, 650000])
    const [sizeRange, setSizeRange] = React.useState([500, 1500])
    const [showAdvanced, setShowAdvanced] = React.useState(false)
    const amenities = [
        "Air Condition", "Disabled Access", "Floor", "Heating",
        "Renovation", "Window Type", "Cable TV", "Elevator",
        "Furnishing", "Intercom", "Security", "Garage",
        "Ceiling Height", "Fence", "Parking", "WiFi"
    ]

    return (
        <div className="bg-white  max-w-screen-xl rounded-2xl flex flex-col shadow-md overflow-hidden mx-auto absolute translate-x-1/2 right-1/2 justify-between top-3/4 min-h-40">
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
                                <SelectItem value="apartments">Apartments</SelectItem>
                                <SelectItem value="bungalow">Bungalow</SelectItem>
                                <SelectItem value="homestay">HomeStay</SelectItem>
                                <SelectItem value="office">Office</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <SelectNeighbours />
                </div>
                <div className="flex px-2 border rounded-md items-center w-full">
                    <Search className="text-gray-400" />
                    <Input
                        placeholder="Search &quot;Farm house in punjab below 1 cr&quot;"
                        className="outline-none focus-visible:ring-0 w-80 focus-visible:ring-ring border-none focus-within:outline-none ring-0"
                    />
                </div>
                <div className="flex gap-6 w-full">
                    <button className="bg-brand/10 text-purple-600 p-2 rounded-md hover:text-white hover:bg-brand">
                        <Mic className="" />
                    </button>
                    <button
                    type="button"
                        className="bg-brand/10 text-purple-600 p-2 rounded-md hover:text-white hover:bg-brand"
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        aria-expanded={showAdvanced}
                        aria-controls="advanced-options"
                    >
                        <Settings2 className="" />
                    </button>
                    <button className="bg-brand text-nowrap p-2 rounded-md font-bold flex gap-4 flex-1 justify-around text-white hover:bg-brand">
                        <span>Search Now</span>
                        <Search />
                    </button>
                </div>
            </form>
            <div
                id="advanced-options"
                className={`space-y-6 overflow-hidden transition-all duration-300 ease-in-out  ${showAdvanced ? 'max-h-[1000px] opacity-100 p-6' : 'max-h-0 opacity-0'
                    }`}
                aria-hidden={!showAdvanced}
            >
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <Label className="mb-2 block">Price Range</Label>
                        <div className="flex justify-between mb-2">
                            <span>from ${priceRange[0]}</span>
                            <span>to ${priceRange[1]}</span>
                        </div>
                        <DualRangeSlider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            min={100}
                            max={650000}
                            step={100}
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
                            min={500}
                            max={1500}
                            step={10}
                            className="mb-6"
                        />
                    </div>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    {["Rooms", "Bathrooms", "Bedrooms", "Type"].map((label) => (
                        <div key={label}>
                            <Label htmlFor={label.toLowerCase()} className="mb-2 block">{label}</Label>
                            <Select>
                                <SelectTrigger id={label.toLowerCase()} className="w-full">
                                    <SelectValue placeholder="2" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
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
                                <Checkbox id={amenity.toLowerCase().replace(/\s+/g, '-')} />
                                <Label
                                    htmlFor={amenity.toLowerCase().replace(/\s+/g, '-')}
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
    )
}
