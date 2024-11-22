import SearchForm from "@/components/forms/search-form";
import FiindIdealHome from "@/components/layouts/fiind-ideal-home";
import VideoBanner from "@/components/layouts/video-banner";

import { ArrowRight, MicIcon, Search, SearchIcon, Settings, Settings2 } from "lucide-react";
import Link from "next/link";
export default function Home() {
    return (
        <main className="relative">
            <section className="flex relative w-full flex-col h-[35vh] bg-[url('/hero.png')] bg-cover  " >
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
            <section className="mt-40 flex items-center flex-col ">
                <PropertyCards />
            </section>
            <VideoBanner />
            <FiindIdealHome />
        </main >
    );
}


const cardsData = [
    {
        title: "Post Your Property Ads for Free",
        description: "Sell/Rent out your property & Get unlimited responses",
        actionText: "List Your Property",
        actionLink: "/list",
        bgColor: "bg-blue-600"
    },
    {
        title: "Find Your Dream Property",
        description: "Get the list of properties matching to your requirement",
        actionText: "Post Your Requirement",
        actionLink: "/list",
        bgColor: "bg-pink-500"
    },
    {
        title: "6334+ Top Property Dealers",
        description: "Connect with genuine property dealers in your city",
        actionText: "Explore Now",
        actionLink: "/list",
        bgColor: "bg-yellow-400"
    },
    {
        title: "16750+ Verified Property for Sale",
        description: "Search for the best commercial or residential deal",
        actionText: "Explore Now",
        actionLink: "/list",
        bgColor: "bg-teal-500"
    }
];

const PropertyCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  relative -z-0 justify-between  lg:grid-cols-4 gap-6 p-6">
            {cardsData.map((card, index) => (
                <Link href={card.actionLink}
                    key={index}
                    className={`p-6 rounded shadow-lg max-w-sm flex relative min-h-60 group hover:outline outline-black outline-1 hover:shadow-md cursor-pointer transition-all justify-between flex-col text-white ${card.bgColor}`}
                >
                    <div>
                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                        <p className="mb-4">{card.description}</p>
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
