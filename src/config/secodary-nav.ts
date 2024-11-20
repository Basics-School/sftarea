// import type { Category, Subcategory } from "@/db/schema"

import { generateId } from "@/lib/id";

export type SeconderyConfig = typeof seconderyConfig;

export const seconderyConfig = {
    categories: [
        {
            id: generateId(),
            name: "Buy",
            description: "The best skateboards for all levels of skaters.",
            image: "/images/categories/skateboard-one.webp",
            subcategories: [
                {
                    id: generateId(),
                    name: "FLAT FOR SALE",
                    description: "Find the best flats for sale.",
                },
                {
                    id: generateId(),
                    name: "HOMES & VILLAS FOR SALE",
                    description: "Discover homes and villas for sale.",
                },
                {
                    id: generateId(),
                    name: "HIGH-RISE RESIDENCES",
                    description: "Explore high-rise residences.",
                },
                {
                    id: generateId(),
                    name: "NEW CONSTRUCTIONS",
                    description: "Check out new constructions.",
                },
                {
                    id: generateId(),
                    name: "UPCOMING PROPERTIES",
                    description: "Upcoming properties in the market.",
                },
                {
                    id: generateId(),
                    name: "NEW",
                    description: "New properties available.",
                },
                {
                    id: generateId(),
                    name: "PLOTS, LANDS, AND FARMS",
                    description: "Plots, lands, and farms for sale.",
                },
            ],
        },
        {
            id: generateId(),
            name: "Rent",
            description: "Stylish and comfortable skateboarding clothing.",
            image: "/images/categories/clothing-one.webp",
            subcategories: [
                {
                    id: generateId(),
                    name: "Property Types",
                    description: "Different types of properties.",
                },
                {
                    id: generateId(),
                    name: "Apartments for Sale",
                    description: "Find apartments for sale.",
                },
                {
                    id: generateId(),
                    name: "Luxury Residences",
                    description: "Luxury residences available.",
                },
                {
                    id: generateId(),
                    name: "Affordable Apartments",
                    description: "Affordable apartments for sale.",
                },
                {
                    id: generateId(),
                    name: "Move-In Ready Flats",
                    description: "Move-in ready flats.",
                },
                {
                    id: generateId(),
                    name: "Flats under Construction",
                    description: "Flats under construction.",
                },
                {
                    id: generateId(),
                    name: "Studio Living",
                    description: "Studio living options.",
                },
            ],
        },
        {
            id: generateId(),
            name: "Sell",
            description: "Rad shoes for long skate sessions.",
            image: "/images/categories/shoes-one.webp",
            subcategories: [
                {
                    id: generateId(),
                    name: "budget",
                    description: "Budget options for properties.",
                },
                {
                    id: generateId(),
                    name: "Under ₹ 50 Lac",
                    description: "Properties under ₹ 50 Lac.",
                },
                {
                    id: generateId(),
                    name: "₹ 50 Lac - ₹ 1 Cr",
                    description: "Properties between ₹ 50 Lac and ₹ 1 Cr.",
                },
                {
                    id: generateId(),
                    name: "₹ 1 Cr - ₹ 1.5 Cr",
                    description: "Properties between ₹ 1 Cr and ₹ 1.5 Cr.",
                },
                {
                    id: generateId(),
                    name: "₹ 1.5 Cr - ₹ 2 Cr",
                    description: "Properties between ₹ 1.5 Cr and ₹ 2 Cr.",
                },
                {
                    id: generateId(),
                    name: "Above ₹ 2 Cr",
                    description: "Properties above ₹ 2 Cr.",
                },
            ],
        },
        {
            id: generateId(),
            name: "Commercial",
            description:
                "The essential skateboarding accessories to keep you rolling.",
            image: "/images/categories/backpack-one.webp",
            subcategories: [
                {
                    id: generateId(),
                    name: "Explore",
                    description: "Explore various options.",
                },
                {
                    id: generateId(),
                    name: "Localities in Noida",
                    description: "Explore localities in Noida.",
                },
                {
                    id: generateId(),
                    name: "Projects in Noida",
                    description: "Discover projects in Noida.",
                },
                {
                    id: generateId(),
                    name: "Investment Hotspot",
                    description: "Investment hotspots.",
                },
                {
                    id: generateId(),
                    name: "Find an Agent",
                    description: "Find a real estate agent.",
                },
                {
                    id: generateId(),
                    name: "Investment",
                    description: "Investment opportunities.",
                },
            ],
        },
        {
            id: generateId(),
            name: "Loans Mortgage",
            description: "Loans and mortgage options for your needs.",
            image: "/images/categories/loans-mortgage-one.webp",
            subcategories: [],
        },
        {
            id: generateId(),
            name: "Services",
            description: "Various services to assist you.",
            image: "/images/categories/services-one.webp",
            subcategories: [],
        },
        {
            id: generateId(),
            name: "Market Insights",
            description: "Get the latest market insights.",
            image: "/images/categories/market-insights-one.webp",
            subcategories: [],
        },
        {
            id: generateId(),
            name: "Pages",
            description: "Additional pages for more information.",
            image: "/images/categories/pages-one.webp",
            subcategories: [],
        },
    ],
};
