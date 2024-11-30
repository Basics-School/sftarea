"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Eye } from 'lucide-react'
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"
import Banner from "./banner"

interface Property {
    type: string
    name: string
    location: string
    beds: number
    baths: number
    sqft: number
    price: number
    priceType: "month" | "SqFT"
    agent: {
        name: string
        image: string
    }
    image: string
}

const properties: Property[] = [
    {
        type: "APARTMENT",
        name: "Modern Downtown Apartment",
        location: "123 Market Street, San Francisco, California",
        beds: 2,
        baths: 2,
        sqft: 850,
        price: 3500.00,
        priceType: "month",
        agent: {
            name: "Sarah Johnson",
            image: "/placeholder.svg"
        },
        image: "/placeholder.svg"
    },

    {
        type: "VILLA",
        name: "Luxury Hillside Villa",
        location: "789 Pacific Heights, San Francisco, California",
        beds: 5,
        baths: 4,
        sqft: 3200,
        price: 8500.00,
        priceType: "SqFT",
        agent: {
            name: "Michael Chen",
            image: "/placeholder.svg"
        },
        image: "/placeholder.svg"
    },
    {
        type: "STUDIO",
        name: "Urban Artist Studio",
        location: "456 Hayes Valley, San Francisco, California",
        beds: 1,
        baths: 1,
        sqft: 450,
        price: 2200.00,
        priceType: "month",
        agent: {
            name: "Arlene McCoy",
            image: "/placeholder.svg"
        },
        image: "/placeholder.svg"
    },
    {
        type: "HOUSE",
        name: "Family Home with Garden",
        location: "321 Sunset District, San Francisco, California",
        beds: 4,
        baths: 3,
        sqft: 2400,
        price: 6750.00,
        priceType: "SqFT",
        agent: {
            name: "David Wilson",
            image: "/placeholder.svg"
        },
        image: "/placeholder.svg"
    },
    {
        type: "OFFICE",
        name: "Modern Tech Office Space",
        location: "555 SOMA District, San Francisco, California",
        beds: 0,
        baths: 2,
        sqft: 1800,
        price: 75.00,
        priceType: "SqFT",
        agent: {
            name: "Lisa Anderson",
            image: "/placeholder.svg"
        },
        image: "/placeholder.svg"
    },
    {
        type: "APARTMENT",
        name: "Waterfront Luxury Apartment",
        location: "888 Embarcadero, San Francisco, California",
        beds: 3,
        baths: 2,
        sqft: 1200,
        price: 4500.00,
        priceType: "month",
        agent: {
            name: "James Parker",
            image: "/placeholder.svg"
        },
        image: "/placeholder.svg"
    }
]

interface PropertyListingsProps {
    id: string;
    title: string;
    descriptions?: string;
    tabs: { value: string, label: string }[];
    tagline?: string;
}

export default function PropertyListings({ id, title, descriptions, tabs, tagline }: PropertyListingsProps) {
    const [activeTab, setActiveTab] = useState("all");
    const [showAll, setShowAll] = useState(false);
    const filteredProperties = properties.filter(property => {
        if (activeTab === "all") return true;
        return property.type.toLowerCase() === activeTab.toLowerCase();
    });
    const displayedProperties = showAll ? filteredProperties : filteredProperties.slice(0, 6);

    return (
        <div id={id} className="container mx-auto max-w-screen-xl px-4 py-4">
            <div className="space-y-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl text-brand font-bold">{title}</h2>
                    <p>{descriptions}</p>
                    {tagline && <p className="text-lg">{tagline}</p>}
                </div>

                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="flex justify-center bg-transparent">
                        {tabs.map(tab => (
                            <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value={activeTab} className="mt-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProperties.slice(3).map((property, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src={property.image}
                                            alt={property.name}
                                            width={400}
                                            height={300}
                                            className="w-full h-[200px] object-cover"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded">FEATURED</span>
                                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">FOR SALE</span>
                                        </div>
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            <Button size="icon" variant="secondary">
                                                <Share2 className="h-4 w-4" />
                                            </Button>
                                            <Button size="icon" variant="secondary">
                                                <Heart className="h-4 w-4" />
                                            </Button>
                                            <Button size="icon" variant="secondary">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <span className="absolute bottom-4 left-4 bg-white text-xs px-2 py-1 rounded">
                                            {property.type}
                                        </span>
                                    </div>

                                    <div className="p-4 space-y-4">
                                        <div>
                                            <h3 className="font-bold">{property.name}</h3>
                                            <p className="text-sm text-muted-foreground">{property.location}</p>
                                        </div>

                                        <div className="flex justify-between text-sm">
                                            <div className="flex gap-4">
                                                <span>🛏️ {property.beds}</span>
                                                <span>🚿 {property.baths}</span>
                                                <span>📏 {property.sqft} SqFT</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-2 border-t">
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={property.agent.image}
                                                    alt={property.agent.name}
                                                    width={32}
                                                    height={32}
                                                    className="rounded-full"
                                                />
                                                <span className="text-sm font-medium">{property.agent.name}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-lg font-bold">${property.price.toLocaleString()}</span>
                                                <span className="text-sm text-muted-foreground">/{property.priceType}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        <Banner img="/1.png" />
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {displayedProperties.slice(3,7).map((property, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className="relative">
                                        <Image
                                            src={property.image}
                                            alt={property.name}
                                            width={400}
                                            height={300}
                                            className="w-full h-[200px] object-cover"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded">FEATURED</span>
                                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">FOR SALE</span>
                                        </div>
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            <Button size="icon" variant="secondary">
                                                <Share2 className="h-4 w-4" />
                                            </Button>
                                            <Button size="icon" variant="secondary">
                                                <Heart className="h-4 w-4" />
                                            </Button>
                                            <Button size="icon" variant="secondary">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <span className="absolute bottom-4 left-4 bg-white text-xs px-2 py-1 rounded">
                                            {property.type}
                                        </span>
                                    </div>

                                    <div className="p-4 space-y-4">
                                        <div>
                                            <h3 className="font-bold">{property.name}</h3>
                                            <p className="text-sm text-muted-foreground">{property.location}</p>
                                        </div>

                                        <div className="flex justify-between text-sm">
                                            <div className="flex gap-4">
                                                <span>🛏️ {property.beds}</span>
                                                <span>🚿 {property.baths}</span>
                                                <span>📏 {property.sqft} SqFT</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-2 border-t">
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={property.agent.image}
                                                    alt={property.agent.name}
                                                    width={32}
                                                    height={32}
                                                    className="rounded-full"
                                                />
                                                <span className="text-sm font-medium">{property.agent.name}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-lg font-bold">${property.price.toLocaleString()}</span>
                                                <span className="text-sm text-muted-foreground">/{property.priceType}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="text-center">
                    <Button className="bg-brand hover:bg-brand text-white" onClick={() => setShowAll(!showAll)}>
                        {showAll ? "Show Less Properties" : "View All Properties"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
