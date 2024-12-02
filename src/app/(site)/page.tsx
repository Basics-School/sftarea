import SearchForm from "@/components/forms/search-form";
import TeamMembers from "@/components/layouts/agents";
import Banner from "@/components/layouts/banner";
import CityFinder from "@/components/layouts/cities";
import FiindIdealHome from "@/components/layouts/fiind-ideal-home";
import PremiumProjects from "@/components/layouts/projects";
import PropertyListings from "@/components/layouts/properties";
import RealEstatePlatform from "@/components/layouts/real-estate-platform";
import TestimonialCarousel from "@/components/layouts/testimonial";
import VideoBanner from "@/components/layouts/video-banner";
import { Montserrat } from 'next/font/google'

import { ArrowRight, MicIcon, Search, SearchIcon, Settings, Settings2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import RealEstateKnowledge from "@/components/layouts/real-estate-knowledge";


const montserrat = Montserrat({ subsets: ['latin'] })


export default function Home() {
    return (
        <main className={cn("relative", montserrat.className)}>
            <section className="flex relative w-full flex-col h-[50vh] bg-[url('/hero.png')] bg-cover  " >
                <div className="flex-col justify-center bg-gradient-to-b flex from-black via-transparent  to-transparent h-full">
                    <div className="max-w-screen-xl w-full mx-auto   ">
                        <div className=" space-y-4 text-background max-w-screen-sm   w-full p-4  md:px-10 ">
                            <h1 className="md:text-5xl text-3xl font-bold">
                                Looking For A Home?
                            </h1>
                            <p className="font-semibold">
                                Find a variety of properties that suit you very easily, forget all difficulties in finding a residence for you
                            </p>
                        </div>
                    </div>
                </div>
                <SearchForm />
            </section>
            <section className="py-7 mt-10  flex items-center flex-col max-w-screen-xl mx-auto ">
                <PropertyCards />
            </section>
            <VideoBanner />
            <FiindIdealHome />
            {/* <CityFinder /> */}
            {/* <Banner img="/1.png" /> */}
            <PropertyListings
                id="buy"
                title="Find Your Perfect Property"
                // descriptions="Explore featured homes, villas, plots, and high-rises tailored to you."
                tabs={[
                    { value: "all", label: "All" },
                    { value: "apartment", label: "Apartments & Flats" },
                    { value: "villa", label: "Homes & Villas" },
                    { value: "land", label: "Land & Plots" },
                    { value: "highrise", label: "High-Rises" }
                ]}
            />
            <PropertyListings
                id="rent"
                title="Explore Your Perfect Rental"
                // descriptions="Flexible spaces for living and working, tailored to your needs."
                tabs={[
                    { value: "all", label: "All" },

                    { value: "residential", label: "Residential" },
                    { value: "commercial", label: "Commercial" },
                    { value: "shortterm", label: "Short-Term" },
                    { value: "affordable", label: "Affordable" }
                ]}
            />
            <PropertyListings
                id="sell"
                title="Discover Commercial Spaces"
                // descriptions="Explore offices, retail spaces, and warehouses designed for your growth."
                tabs={[
                    { value: "all", label: "All" },

                    { value: "buyspaces", label: "Buy Spaces" },
                    { value: "leasespaces", label: "Lease Spaces" },
                    { value: "industrialzones", label: "Industrial Zones" },
                    { value: "newdevelopments", label: "New Developments" }
                ]}
            />
            <PropertyListings
                id="projects"
                title="Unlock Signature Projects"
                // descriptions="Explore curated developments redefining real estate excellence."
                tabs={[
                    { value: "all", label: "All" },

                    { value: "topdemand", label: "Top Demand" },
                    { value: "prelaunch", label: "Pre-Launch" },
                    { value: "ongoingprojects", label: "Ongoing Projects" },
                    { value: "pricedrop", label: "Price Drop" }
                ]}
            />
            <PremiumProjects />
            <Banner img="/2.png" />
            {/* <TeamMembers /> */}
            <RealEstatePlatform />
            <RealEstateKnowledge />
            <Banner img="/3.png" />

        </main >
    );
}


const cardsData = [
    {
        title: "Post Your Property for Free",
        description: "Sell or rent your property and connect with serious buyers.",
        actionText: "List Now",
        actionLink: "/list",
        bgColor: "bg-[#672d93]" // Royal Purple
    },
    {
        title: "Discover Properties That Fit Your Needs",
        description: "Explore trusted listings tailored to your preferences.",
        actionText: "Search Now",
        actionLink: "/list",
        bgColor: "bg-[#f47e14]" // Bright Orange
    },
    {
        title: "Work with Verified Real Estate Experts",
        description: "Partner with experienced agents for seamless transactions.",
        actionText: "Explore Agents",
        actionLink: "/list",
        bgColor: "bg-[#1355b6]" // Professional Blue
    },
    {
        title: "Explore Verified Properties",
        description: "Search through genuine residential and commercial listings with ease.",
        actionText: "Explore Listings",
        actionLink: "/list",
        bgColor: "bg-[#f3087e]" // Vivid Pink
    }
];

const PropertyCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  relative -z-10 justify-between  lg:grid-cols-4 gap-6 py-6 ">
            {cardsData.map((card, index) => (
                <Link href={card.actionLink}
                    key={index}
                    className={`p-4 rounded  max-w-sm flex aspect-[296/184] h-full relative  group hover:outline outline-black outline-1 hover:shadow-lg hover:scale-105 cursor-pointer transition-all justify-between flex-col text-white ${card.bgColor}`}
                >
                    <div>
                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                        <p className="mb-4 text-sm">{card.description}</p>
                    </div>
                    <div
                        // href={card.actionLink}
                        className="inline-flex bg-white text-blue-600 font-bold py-1 px-4 rounded gap-2 group-hover:gap-4 transition-all max-w-min whitespace-nowrap text-sm items-center hover:bg-gray-200 grouphover:outline outline-black outline-1 "
                    >
                        {card.actionText} <ArrowRight />
                    </div>
                </Link>
            ))}
        </div>
    );
};
