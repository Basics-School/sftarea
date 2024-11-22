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
        <section className="w-full space-y-4 border border-x-0 px-4 py-2 sm:px-4 sm:py-10 overflow-hidden">
            <h1 className="mx-auto w-full py-2 font-bold  text-2xl md:text-4xl text-center sm:max-w-[640px] lg:max-w-screen-xl">
                Find Your Ideal Home Anywhere
            </h1>
            <div className="relative">
                <button
                    className={cn(
                        "group absolute right-0 top-0 z-10 flex h-full w-1/12 items-center justify-end bg-gradient-to-r from-transparent via-background to-background sm:justify-start md:justify-center lg:-mr-6 lg:w-4/12",
                        scrollXProgress.get() < 0.9 ? "flex" : "hidden",
                    )}
                >
                    <ChevronRight
                        onClick={handleScrollRight}
                        className="size-8 cursor-pointer rounded-full bg-muted p-1 shadow-md transition-all duration-200 group-hover:shadow-xl dark:text-white sm:size-10 sm:p-2"
                    />
                </button>
                <button
                    className={cn(
                        "group absolute left-0 top-0 z-10 h-full w-1/12 items-center justify-start bg-gradient-to-r from-background via-background to-transparent sm:justify-end md:justify-center lg:-ml-6 lg:w-4/12",
                        scrollXProgress.get() > 0.1 ? "flex" : "hidden",
                    )}
                >
                    <ChevronLeft
                        onClick={handleScrollLeft}
                        className="float-end size-8 cursor-pointer rounded-full bg-muted p-1 shadow-md transition-all duration-200 group-hover:shadow-xl dark:text-white sm:size-10 sm:p-2"
                    />
                </button>
                <div
                    className={cn(
                        "relative z-0 h-full w-full items-center justify-between text-xl font-light en:font-monasans dark:text-black"
                    )}
                >
                    <ul
                        ref={carouselRef}
                        className="mx-auto scroll-smooth flex h-full w-full gap-6 overflow-x-scroll py-6 text-base scrollbar-none lg:max-w-screen-xl"
                    >
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        {/* <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard /> */}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FiindIdealHome;




const Card = () => {
    return (
        <div className="bg-[url('/interior.jpg')] group  text-white font-bold  bg-cover h-52 overflow-clip aspect-[13/9] rounded-xl ">
            <div className="h-full flex-col justify-end flex bg-gradient-to-t from-black p-4">
                <h1>23797</h1>
                <p>Owner Properties</p>
                <Link className="inline-flex group-hover:gap-4 transition-all gap-2 mt-4" href="/">
                    Explore <ArrowRight />
                </Link>
            </div>
        </div>
    )
}
