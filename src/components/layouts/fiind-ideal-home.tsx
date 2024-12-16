"use client";
import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const FiindIdealHome = () => {
    const carouselRef = useRef<HTMLUListElement>(null);
    const [scrollX, setScrollX] = useState(0);
    const { scrollXProgress } = useScroll({
        container: carouselRef,
    });
    useMotionValueEvent(scrollXProgress, "change", (latest) => {
        setScrollX(latest);
    });

    const handleScrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 500;
        }
    };
    const handleScrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 500;
        }
    };

    return (
        <section className="w-full space-y-4  border-x-0 px-4 py-2 sm:px-4 sm:py-10 overflow-hidden">
            <div className="relative">
                <div
                    className={cn(
                        "relative z-0 h-full w-full items-center justify-between text-xl font-light en:font-monasans dark:text-black"
                    )}
                >
                    <ul
                        ref={carouselRef}
                        className="mx-auto scroll-smooth flex h-full w-full gap-6  justify-evenly py-6 text-base scrollbar-none lg:max-w-screen-xl"
                    >
                        {/* <Card title="Exclusive Collections" description="Owner Properties" /> */}
                        <Card title="Owner Listings" description="Owner Properties" />
                        <Card title="New Projects" description="Owner Properties" />
                        <Card title="Ready to Move" description="Owner Properties" />
                        <Card title="Budget Homes" description="Owner Properties" />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FiindIdealHome;

interface CardProps {
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="bg-[url('/interior.jpg')] group  text-white font-bold  bg-cover h-[184px] overflow-clip aspect-[296/184] rounded-md ">
            <div className="h-full flex-col justify-end flex bg-gradient-to-t from-black p-4">
                <h1>{title}</h1>
                {/* <p>{description}</p> */}
                <Link className="inline-flex group-hover:gap-4 transition-all gap-2 mt-4" href="/">
                    Explore <ArrowRight />
                </Link>
            </div>
        </div>
    );
};
