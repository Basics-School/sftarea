'use client'

import { UserProfile } from "@clerk/nextjs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data for saved properties
const mockSavedListings = [
    {
        id: 1,
        price: "250,000",
        address: "123 Main St, New York, NY",
        bedroom: 3,
        bathroom: 2,
        area: "1,500 sqft",
        listingImages: [{ url: "/properties/1.jpg" }]
    },
    {
        id: 2,
        price: "350,000",
        address: "456 Park Ave, Los Angeles, CA",
        bedroom: 4,
        bathroom: 3,
        area: "2,000 sqft",
        listingImages: [{ url: "/properties/2.jpg" }]
    },
    {
        id: 3,
        price: "420,000",
        address: "789 Ocean Dr, Miami, FL",
        bedroom: 5,
        bathroom: 4,
        area: "2,800 sqft",
        listingImages: [{ url: "/properties/3.jpg" }]
    },
    {
        id: 4,
        price: "180,000",
        address: "321 Lake View Rd, Chicago, IL",
        bedroom: 2,
        bathroom: 1,
        area: "1,200 sqft",
        listingImages: [{ url: "/properties/4.jpg" }]
    },
    {
        id: 5,
        price: "300,000",
        address: "654 Elm St, San Francisco, CA",
        bedroom: 3,
        bathroom: 2,
        area: "1,700 sqft",
        listingImages: [{ url: "/properties/5.jpg" }]
    },
    {
        id: 6,
        price: "275,000",
        address: "987 Maple Ave, Seattle, WA",
        bedroom: 3,
        bathroom: 2,
        area: "1,600 sqft",
        listingImages: [{ url: "/properties/6.jpg" }]
    },
    {
        id: 7,
        price: "450,000",
        address: "321 Pine St, Boston, MA",
        bedroom: 4,
        bathroom: 3,
        area: "2,300 sqft",
        listingImages: [{ url: "/properties/7.jpg" }]
    },
    {
        id: 8,
        price: "500,000",
        address: "123 Oak St, Austin, TX",
        bedroom: 5,
        bathroom: 4,
        area: "2,500 sqft",
        listingImages: [{ url: "/properties/8.jpg" }]
    },
    {
        id: 9,
        price: "220,000",
        address: "456 Birch St, Denver, CO",
        bedroom: 2,
        bathroom: 1,
        area: "1,300 sqft",
        listingImages: [{ url: "/properties/9.jpg" }]
    },
    {
        id: 10,
        price: "380,000",
        address: "789 Cedar St, Portland, OR",
        bedroom: 4,
        bathroom: 3,
        area: "2,100 sqft",
        listingImages: [{ url: "/properties/10.jpg" }]
    },
    {
        id: 11,
        price: "290,000",
        address: "321 Spruce St, Dallas, TX",
        bedroom: 3,
        bathroom: 2,
        area: "1,800 sqft",
        listingImages: [{ url: "/properties/11.jpg" }]
    },
    {
        id: 12,
        price: "410,000",
        address: "654 Willow St, San Diego, CA",
        bedroom: 4,
        bathroom: 3,
        area: "2,200 sqft",
        listingImages: [{ url: "/properties/12.jpg" }]
    }
    // Add more mock items as needed
];

export default function UserProfilePage() {
    return (
        <main className="container mx-auto max-w-screen-xl py-10">
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="my-listing">My Listings</TabsTrigger>
                    <TabsTrigger value="saved">Saved Properties</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <div className="mt-6">
                        <UserProfile
                            appearance={{
                                elements: {
                                    rootBox: "mx-auto max-w-screen-xl w-full ",
                                    card: "shadow-none",
                                }
                            }}
                        />
                    </div>
                </TabsContent>
                <TabsContent value="my-listing">
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockSavedListings.length > 0 ? mockSavedListings.map((item, index) => (
                            <Link href={'/view-listing/' + item.id} key={item.id}>
                                <div className='p-3 hover:border hover:border-primary rounded-lg cursor-pointer'>
                                    <Image
                                        src={"/placeholder.svg"}
                                        width={800}
                                        height={150}
                                        alt={`Property at ${item.address}`}
                                        className='rounded-lg object-cover h-[170px] w-full'
                                    />
                                    <div className='flex mt-2 flex-col gap-2'>
                                        <h2 className='font-bold text-xl'>${item.price}</h2>
                                        <h2 className='flex gap-2 text-sm text-gray-400'>
                                            <MapPin className='h-4 w-4' />
                                            {item.address}
                                        </h2>
                                        <div className='flex gap-2 mt-2 justify-between'>
                                            <h2 className='flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center'>
                                                <BedDouble className='h-4 w-4' />
                                                {item.bedroom}
                                            </h2>
                                            <h2 className='flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center'>
                                                <Bath className='h-4 w-4' />
                                                {item.bathroom}
                                            </h2>
                                            <h2 className='flex gap-2 w-full text-sm bg-slate-200 rounded-md p-2 text-gray-500 justify-center items-center'>
                                                <Ruler className='h-4 w-4' />
                                                {item.area}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <div className="col-span-full text-center text-gray-500">
                                No saved properties yet
                            </div>
                        )}
                    </div>
                </TabsContent>
                <TabsContent value="saved">
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockSavedListings.length > 0 ? mockSavedListings.map((item, index) => (
                            <Link href={'/view-listing/' + item.id} key={item.id}>
                                <div className='p-3 hover:border hover:border-primary rounded-lg cursor-pointer'>
                                    <Image
                                        src={"/placeholder.svg"}
                                        width={800}
                                        height={150}
                                        alt={`Property at ${item.address}`}
                                        className='rounded-lg object-cover h-[170px] w-full'
                                    />
                                    <div className='flex mt-2 flex-col gap-2'>
                                        <h2 className='font-bold text-xl'>${item.price}</h2>
                                        <h2 className='flex gap-2 text-sm text-gray-400'>
                                            <MapPin className='h-4 w-4' />
                                            {item.address}
                                        </h2>
                                        <div className='flex gap-2 mt-2 justify-between'>
                                            <h2 className='flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center'>
                                                <BedDouble className='h-4 w-4' />
                                                {item.bedroom}
                                            </h2>
                                            <h2 className='flex gap-2 text-sm bg-slate-200 rounded-md p-2 w-full text-gray-500 justify-center items-center'>
                                                <Bath className='h-4 w-4' />
                                                {item.bathroom}
                                            </h2>
                                            <h2 className='flex gap-2 w-full text-sm bg-slate-200 rounded-md p-2 text-gray-500 justify-center items-center'>
                                                <Ruler className='h-4 w-4' />
                                                {item.area}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <div className="col-span-full text-center text-gray-500">
                                No saved properties yet
                            </div>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </main>
    );
}
