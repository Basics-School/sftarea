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
            <PropertyListings id="buy" title="Buy Poperties" />
            <PropertyListings id="rent" title="Rent Properties" />
            <PropertyListings id="sell" title="Sell Propertis" />
            <PremiumProjects />
            <Banner img="/2.png" />
            {/* <TeamMembers /> */}
            <RealEstatePlatform />
            <TestimonialCarousel />
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
                        className="inline-flex bg-white text-blue-600 font-bold py-2 px-4 rounded gap-2 group-hover:gap-4 transition-all max-w-min whitespace-nowrap hover:bg-gray-200 grouphover:outline outline-black outline-1 "
                    >
                        {card.actionText} <ArrowRight />
                    </div>
                </Link>
            ))}
        </div>
    );
};
