"use client";
import { Share2, MapPin, X } from 'lucide-react'
import Image from "next/image"
import { useState } from 'react';
import { LoadScript } from '@react-google-maps/api';

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FilterBar } from "@/components/filter-bar"
import { FilterProvider, useFilters } from "@/components/contexts/filter-context"
import { MapProvider, useMap } from './contexts/map-context';
import GoogleAddressSearch from './google-address-search';
import GoogleMapSection from './google-map-section';

export default function PropertySearch() {
    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY!}
            libraries={['places']}
        >
            <FilterProvider>
                <MapProvider>
                    <PropertySearchContent />
                </MapProvider>
            </FilterProvider>
        </LoadScript>
    );
}

function PropertySearchContent() {
    const { selectedFilters, removeFilter, clearFilters } = useFilters();
    const { coordinates, setCoordinates, setSelectedAddress } = useMap();
    const [viewMode, setViewMode] = useState('list');

    return (
        <div className="min-h-screen relative">
            <header className="sticky z-10 top-20 w-full">
                <FilterBar />
            </header>

            <main className="container py-6 max-w-screen-xl mx-auto">
                <div className="mb-6 flex justify-between items-center">
                    <Tabs defaultValue="properties">
                        <TabsList>
                            <TabsTrigger value="properties">Properties (190)</TabsTrigger>
                            <TabsTrigger value="new-projects">New Projects</TabsTrigger>
                            <TabsTrigger value="top-agents">Top Agents</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Tabs defaultValue="list" onValueChange={value => setViewMode(value)}>
                        <TabsList>
                            <TabsTrigger value="list">List View</TabsTrigger>
                            <TabsTrigger value="map">Map View</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                {viewMode === 'list' ? (
                    <div className="grid gap-6">
                        {properties.map((property) => (
                            <Card key={property.id}>
                                <CardContent className="p-0">
                                    <div className="grid gap-4 md:grid-cols-[300px_1fr_200px] lg:grid-cols-[400px_1fr_200px]">
                                        <div className="relative">
                                            <Image
                                                src="/placeholder.svg?height=300&width=400"
                                                alt={property.title}
                                                width={400}
                                                height={300}
                                                className="h-full object-cover"
                                            />
                                            <Badge className="absolute left-2 top-2 bg-black/50">
                                                {property.photos}+ Photos
                                            </Badge>
                                            <div className="absolute bottom-2 left-2 text-xs text-white">
                                                Updated {property.updated} ago
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-start justify-between">
                                                <h2 className="text-xl font-semibold">{property.title}</h2>
                                                <Button size="icon" variant="ghost">
                                                    <Share2 className="h-4 w-4" />
                                                </Button>
                                            </div>

                                            <div className="mt-2 text-sm text-muted-foreground">
                                                <MapPin className="mr-1 inline-block h-4 w-4" />
                                                {property.location}
                                            </div>

                                            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                                                <div>
                                                    <div className="text-muted-foreground">CARPET AREA</div>
                                                    <div>{property.carpetArea} sqft</div>
                                                </div>
                                                <div>
                                                    <div className="text-muted-foreground">STATUS</div>
                                                    <div>{property.status}</div>
                                                </div>
                                                <div>
                                                    <div className="text-muted-foreground">FLOOR</div>
                                                    <div>{property.floor}</div>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <div className="font-semibold">Owner: {property.owner}</div>
                                                <Badge variant="secondary" className="mt-1">
                                                    Premium Member
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center justify-center gap-4 border-l p-6">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">₹{property.price} Lac</div>
                                                <div className="text-sm text-muted-foreground">
                                                    ₹{property.pricePerSqft} per sqft
                                                </div>
                                            </div>
                                            <Button className="w-full">Contact Owner</Button>
                                            <Button variant="outline" className="w-full">
                                                Get Phone No.
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <GoogleMapSection
                        coordinates={coordinates}
                        listing={properties}
                    />
                )}
            </main>
        </div>
    );
}

const properties = [
    {
        id: 1,
        title: "2 BHK Flat for Sale in Gole Ka Mandir, Gwalior",
        location: "Near Gwalior Glory School",
        lat: 26.2124,
        lng: 78.1772,
        carpetArea: "1000",
        status: "Ready to Move",
        floor: "2 out of 4",
        price: "38",
        pricePerSqft: "3,455",
        owner: "Nikhil Dixit",
        photos: "17",
        updated: "6 days",
    },
    {
        id: 2,
        title: "2 BHK Flat for Sale in Harishankar Puram, Gwalior",
        location: "Near Gwalior Glory School",
        lat: 26.2224,
        lng: 78.1872,
        carpetArea: "880",
        status: "Ready to Move",
        floor: "1 out of 3",
        price: "39",
        pricePerSqft: "3,900",
        owner: "Atul Mahore",
        photos: "7",
        updated: "3 days",
    },
    {
        id: 3,
        title: "3 BHK Flat for Sale in Windsor Hills, City Centre, Gwalior",
        location: "Windsor Hills",
        lat: 26.2324,
        lng: 78.1972,
        carpetArea: "1485",
        status: "Ready to Move",
        floor: "Ground out of 3",
        price: "72",
        pricePerSqft: "4,848",
        owner: "Arvind Kumar Goyal",
        photos: "19",
        updated: "4 days",
    },
]
