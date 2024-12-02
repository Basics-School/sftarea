import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Star } from 'lucide-react'
import TestimonialCarousel from "./testimonial"

export default function RealEstateKnowledge() {
    return (
        <section className="max-w-screen-xl mx-auto py-10">
            {/* Header Section */}
            <header className="text-center py-8 px-4 space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold text-brand">
                    Real Estate Knowledge Center
                </h1>
                <p className="text-sm md:text-base ">
                    Insights, Articles, Blogs, Events, and Guides to Navigate Real Estate Like a Pro.*
                </p>

            </header>

            <div className="flex items-center">
                <div
                    className="relative m-2 flex-1 h-80 bg-cover bg-center"
                    style={{ backgroundImage: "url('/placeholder.svg')" }}
                    aria-label="Real Estate 1"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
                    <div className="relative z-10 p-4 text-background font-bold">
                        Market Insights
                    </div>
                </div>
                <div
                    className="relative m-2 h-80 aspect-square bg-cover bg-center"
                    style={{ backgroundImage: "url('/placeholder.svg')" }}
                    aria-label="Real Estate 2"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
                    <div className="relative z-10 p-4 text-background font-bold">
                        Reality Blog
                    </div>
                </div>
                <div
                    className="relative m-2 h-80 aspect-square bg-cover bg-center"
                    style={{ backgroundImage: "url('/placeholder.svg')" }}
                    aria-label="Real Estate 3"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
                    <div className="relative z-10 p-4 text-background font-bold">
                        NRI Assist
                    </div>
                </div>
            </div>

            <TestimonialCarousel />


            <div className="flex items-center">
                <div
                    className="relative m-2 flex-1 h-80 bg-cover bg-center"
                    style={{ backgroundImage: "url('/placeholder.svg')" }}
                    aria-label="Real Estate 1"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
                    <div className="relative z-10 p-4 text-background font-bold">
                        Articles & News
                    </div>
                </div>
                <div
                    className="relative m-2 h-80 aspect-square bg-cover bg-center"
                    style={{ backgroundImage: "url('/placeholder.svg')" }}
                    aria-label="Real Estate 2"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
                    <div className="relative z-10 p-4 text-background font-bold">
                        Guides
                    </div>
                </div>
                <div
                    className="relative m-2 h-80 aspect-square bg-cover bg-center"
                    style={{ backgroundImage: "url('/placeholder.svg')" }}
                    aria-label="Real Estate 3"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
                    <div className="relative z-10 p-4 text-background font-bold">
                        Events
                    </div>
                </div>
            </div>
        </section>
    )
}
