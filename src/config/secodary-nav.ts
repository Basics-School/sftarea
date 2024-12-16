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
                    name: "Apartments",
                    description: "Find the best apartments for sale.",
                },
                {
                    id: generateId(),
                    name: "Villas",
                    description: "Discover villas for sale.",
                },
                {
                    id: generateId(),
                    name: "Plots",
                    description: "Plots available for purchase.",
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
                    name: "Residential",
                    description: "Residential properties for rent.",
                },
                {
                    id: generateId(),
                    name: "PG/Co-Living",
                    description: "PG and co-living spaces.",
                },
                {
                    id: generateId(),
                    name: "Commercial",
                    description: "Commercial properties for rent.",
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
                    name: "Post Property",
                    description: "Post your property for sale.",
                },
                {
                    id: generateId(),
                    name: "Builder Options",
                    description: "Options for builders.",
                },
            ],
        },
        {
            id: generateId(),
            name: "Commercial",
            description: "The essential skateboarding accessories to keep you rolling.",
            image: "/images/categories/backpack-one.webp",
            subcategories: [
                {
                    id: generateId(),
                    name: "Offices",
                    description: "Office spaces available.",
                },
                {
                    id: generateId(),
                    name: "Shops",
                    description: "Shops available for rent or sale.",
                },
                {
                    id: generateId(),
                    name: "Co-Working Spaces",
                    description: "Co-working spaces available.",
                },
            ],
        },
        {
            id: generateId(),
            name: "Loan Hub",
            description: "Loans and mortgage options for your needs.",
            image: "/images/categories/loans-mortgage-one.webp",
            subcategories: [
                {
                    id: generateId(),
                    name: "Home Loans",
                    description: "Home loan options.",
                },
                {
                    id: generateId(),
                    name: "Refinancing",
                    description: "Refinancing options.",
                },
                {
                    id: generateId(),
                    name: "Property Loans",
                    description: "Property loan options.",
                },
            ],
        },
        {
            id: generateId(),
            name: "Services",
            description: "Various services to assist you.",
            image: "/images/categories/services-one.webp",
            subcategories: [
                {
                    id: generateId(),
                    name: "Interior Design",
                    description: "Interior design services.",
                },
                {
                    id: generateId(),
                    name: "Packers & Movers",
                    description: "Packers and movers services.",
                },
                {
                    id: generateId(),
                    name: "Property Management",
                    description: "Property management services.",
                },
            ],
        },
        {
            id: generateId(),
            name: "Market Insights",
            description: "Get the latest market insights.",
            image: "/images/categories/market-insights-one.webp",
            subcategories: [
                {
                    id: generateId(),
                    name: "Trends",
                    description: "Latest market trends.",
                },
                {
                    id: generateId(),
                    name: "News",
                    description: "Latest market news.",
                },
                {
                    id: generateId(),
                    name: "Blogs",
                    description: "Market-related blogs.",
                },
                {
                    id: generateId(),
                    name: "Resources",
                    description: "Market resources.",
                },
            ],
        },
    ],
};
