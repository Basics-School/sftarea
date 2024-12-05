'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HeaderMenuSheet } from "./menu-sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"



const buyMenuData = {
    'Apartments & Flats': [
        'Popular Apartments',
        'Luxury Apartments',
        'Affordable Flats',
        'Ready-to-Move Flats',
        'Under-Construction Flats',
        'Studio Apartments',
    ],
    'Homes & Villas': [
        'Independent Houses',
        'Duplex Villas',
        'Affordable Villas',
        'Luxury Villas',
        'Gated Community Villas',
        'Private Estates',
    ],
    'Land & Plots': [
        'Residential Plots',
        'Agricultural Lands',
        'Farmhouses',
        'Commercial Land',
        'Industrial Sites',
        'Warehouse Spaces',
    ],
    'High-Rises': [
        'Skyline Apartments',
        'Luxury Penthouses',
        'City View Apartments',
        'High-Rise Condos',
        'Resort-Style Apartments',
        'Ultra-Modern Flats',
    ],
}

// Data structure for the Rent dropdown
const rentMenuData: { [key: string]: string[] } = {
    'Residential Rentals': [
        'Flats for Rent',
        'Independent Houses for Rent',
        'Villas for Rent',
        'Studio Apartments',
        'Co-Living Spaces',
        'PG/Hostels',
    ],
    'Commercial Rentals': [
        'Office Spaces for Lease',
        'Retail Shops for Rent',
        'Warehouses & Storage Spaces',
        'Showrooms for Rent',
        'Co-Working Spaces',
        'Industrial Units',
    ],
    'Short-Term Rentals': [
        'Furnished Apartments',
        'Serviced Apartments',
        'Vacation Rentals',
        'Temporary Housing',
        'Extended Stay Rentals',
        'Holiday Homes',
    ],
    'Affordable Rentals': [
        'Budget Rentals',
        'Student Hostels',
        'Shared Accommodation',
        'Corporate Housing',
        'Luxury Rentals',
        'Immediate Move-In Rentals',
    ],
}

const localities = [
    'Gachibowli',
    'Madhapur',
    'Kondapur',
    'Banjara Hills',
    'Jubilee Hills',
    'Kukatpally',
]

const budgetRanges = [
    'Affordable (Under ₹50L)',
    'Mid-Range (₹50L - ₹1 Cr)',
    'Upper-Mid (₹1 Cr - ₹1.5 Cr)',
    'Premium (₹1.5 Cr - ₹2 Cr)',
    'Luxury (₹2 Cr - ₹5 Cr)',
    'Ultra-Luxury (����5 Cr+)',
]

const bhkTypes = [
    '1 BHK',
    '2 BHK',
    '3 BHK',
    '4 BHK',
    '5+ BHK & Duplexes',
    'Studio Apartments',
]

const rentRanges = [
    'Under ₹10,000',
    '₹10,000 - ₹15,000',
    '₹15,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Above ₹1,00,000',
]

const rentBHKTypes = [
    '1 BHK for Rent',
    '2 BHK for Rent',
    '3 BHK for Rent',
    '4 BHK for Rent',
    '5+ BHK for Rent',
    'Studio Apartments for Rent',
]
// New data structure for the Commercial section
const commercialMenuData = {
    'Buy Spaces': [
        'Office Buildings',
        'Corporate Offices',
        'Retail Spaces',
        'Co-Working Spaces',
        'Event Venues',
        'Industrial Properties',
    ],
    'Lease Spaces': [
        'Office Spaces',
        'Retail Spaces',
        'Industrial Spaces',
        'Event Spaces',
        'Short-Term Leasing',
        'Long-Term Leasing',
    ],
    'Industrial Zones': [
        'Warehouses',
        'Industrial Parks',
        'Factories',
        'Logistics Hubs',
        'Manufacturing Units',
        'Storage Facilities',
    ],
    'New Developments': [
        'Commercial Land',
        'Mixed-Use Projects',
        'Construction Projects',
        'Investment Opportunities',
        'Urban Development',
        'Redevelopment Projects',
    ],
}

const commercialLocalities = [
    'Cyberabad',
    'HITEC City',
    'Financial District',
    'Banjara Hills',
    'Jubilee Hills',
    'Kondapur',
]

const commercialBudgetRanges = [
    '₹75L - ₹1 Cr',
    '₹1 Cr - ₹2.5 Cr',
    '₹2.5 Cr - ₹4 Cr',
    '₹4 Cr - ₹6 Cr',
    '₹6 Cr - ₹10 Cr',
    '₹10 Cr+',
]

const servicesMenuData = {
    'Property Services': [
        'Property Management',
        'Home Loans',
        'Legal Assistance',
        'Interiors & Renovation',
        'Property Valuation',
        'Vastu Consultation',
    ],
    'Home Services': [
        'Cleaning Services',
        'Pest Control',
        'Plumbing Services',
        'Electrical Services',
        'Painting Services',
        'Carpentry Services',
    ],
    'Relocation Services': [
        'Packers & Movers',
        'Vehicle Transportation',
        'Storage & Warehousing',
        'International Relocation',
        'Pet Relocation',
        'Transit Insurance',
    ],
    'Utility Services': [
        'Gas Connection',
        'Water Connection',
        'Electricity Connection',
        'Internet Services',
        'DTH Services',
        'Waste Management',
    ],
}

const loansMenuData = {
    'Home Loans': [
        'New Home Loans',
        'Balance Transfer',
        'Plot Plus Construction',
        'Home Improvement',
        'NRI Home Loans',
    ],
    'Commercial Loans': [
        'Business Loans',
        'Lease Rental Discounting',
        'Commercial Property Loans',
        'Construction Finance',
        'Working Capital Loans',
    ],
    'Mortgage Loans': [
        'Loan Against Property',
        'Loan Against Rent',
        'Gold Loans',
        'Secured Business Loans',
        'Overdraft Facility',
    ],
    'Loan Partners': [
        'HDFC Ltd',
        'SBI Home Loans',
        'ICICI Bank',
        'Axis Bank',
        'LIC Housing Finance',
    ],
    'Calculators & Tools': [
        'EMI Calculator',
        'Eligibility Calculator',
        'Balance Transfer',
        'Compare Loans',
        'Interest Rate Trends',
    ],
};

const insightsMenuData = {
    'Market Insights': [
        'Property Trends',
        'Price Index',
        'Investment Hotspots',
        'Market Reports',
        'Area Guides',
        'Property Analytics',
    ],
    'Articles & News': [
        'Latest News',
        'Expert Views',
        'Industry Updates',
        'Policy Changes',
        'Budget Impact',
        'Market Analysis',
    ],
    'Realty Blog': [
        'Buying Guide',
        'Investment Tips',
        'Legal Aspects',
        'Tax Insights',
        'Home Decor',
        'Vastu Tips',
    ],
    'NRI Guide': [
        'Investment Process',
        'Legal Framework',
        'Tax Implications',
        'FEMA Guidelines',
        'Repatriation',
        'Property Management',
    ],
    'Guides & Resources': [
        'First Time Buyers',
        'RERA Guide',
        'Home Loan Guide',
        'Tax Guide',
        'Legal Documentation',
        'Property Registration',
    ],
    'Events & Webinars': [
        'Upcoming Events',
        'Property Expos',
        'Webinars',
        'Workshops',
        'Industry Meets',
        'Virtual Tours',
    ],
};

const sellMenuData = {
    'Property Listings': [
        'Free Listing',
        'Premium Ads',
        'Featured Listings',
        'Ad Packages',
        'Manage Listings',
        'Seller Dashboard',
    ],
    'Agents & Builders': [
        'Top Agents',
        'Builders & Developers',
        'Trusted Agencies',
        'Dealer Listings',
        'Super Agents',
        'Agent Dashboard',
    ],
    'Marketing & Promotion': [
        'Social Campaigns',
        'SMS & Email Marketing',
        'Property Videos',
        'Premium Ads',
        'Digital Advertisement',
        'Project Marketing',
    ],
    'Support & Services': [
        'Rates & Trends',
        'Legal & RERA Help',
        'Find Agent',
        'Deal Negotiation',
        'Property Inspection',
        'Builder Coordination',
    ],
};

const navigationData = {
    buy: {
        categories: buyMenuData,
        localities: localities,
        budgetRanges: budgetRanges,
        bhkTypes: bhkTypes,
    },
    rent: {
        categories: rentMenuData,
        rentRanges: rentRanges,
        bhkTypes: rentBHKTypes,
    },
    commercial: {
        categories: commercialMenuData,
        localities: commercialLocalities,
        budgetRanges: commercialBudgetRanges,
    },
    services: {
        categories: servicesMenuData,
    },
    loans: {
        categories: loansMenuData,
    },
    insights: {
        categories: insightsMenuData,
    },
    sell: {
        categories: sellMenuData,
    },
};

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false)
    const [activeBuyCategory, setActiveBuyCategory] = useState<keyof typeof buyMenuData>('Apartments & Flats')
    const [activeRentCategory, setActiveRentCategory] = useState<keyof typeof rentMenuData>('Residential Rentals')
    const [activeCommercialCategory, setActiveCommercialCategory] = useState<keyof typeof commercialMenuData>('Buy Spaces')
    const [activeServiceCategory, setActiveServiceCategory] = useState<keyof typeof servicesMenuData>('Property Services')
    const [activeLoansCategory, setActiveLoansCategory] = useState<keyof typeof loansMenuData>('Home Loans')
    const [activeInsightsCategory, setActiveInsightsCategory] = useState<keyof typeof insightsMenuData>('Market Insights')
    const [activeSellCategory, setActiveSellCategory] = useState<keyof typeof sellMenuData>('Property Listings')

    const triggerClasses = cn("text-lg", "bg-transparent data-[state=open]:bg-transparent text-white hover:text-white hover:bg-transparent data-[active]:bg-transparent ",)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`sticky top-0 z-50  w-full  transition-all duration-300 ease-in-out ${scrolled ? 'bg-brand' : 'bg-transparent'}`}>
            {scrolled && (
                <div className="absolute bg-brand left-0 right-0 px-4 flex justify-between items-center h-20">
                    <div id="logo" className="text-2xl font-extrabold text-white">
                        SFTAREA
                    </div>
                    <div className="container mx-auto flex h-16 items-center justify-center">
                        <NavigationMenu className={`flex items-center bg-transparent justify-center transition-colors duration-300  ease-in-out`}>
                            <NavigationMenuList className="bg-transparent">
                                <NavigationMenuItem className="">
                                    <NavigationMenuTrigger className={triggerClasses}>Buy</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                            {/* Categories */}
                                            <div className="space-y-1 border-r pr-4">
                                                {Object.keys(navigationData.buy.categories).map((category) => (
                                                    <button
                                                        key={category}
                                                        className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeBuyCategory === category ? "bg-accent" : ""
                                                            }`}
                                                        onMouseEnter={() => setActiveBuyCategory(category as keyof typeof buyMenuData)}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Content Grid */}
                                            <div className="grid grid-cols-4 gap-6 p-4">
                                                {/* Property Types */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Property Types</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.buy.categories[activeBuyCategory].map((type) => (
                                                            <NavigationMenuLink asChild key={type}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {type}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Explore Localities */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Explore Localities</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.buy.localities.map((locality) => (
                                                            <NavigationMenuLink asChild key={locality}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {locality}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Budget Properties */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Budget Properties</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.buy.budgetRanges.map((range) => (
                                                            <NavigationMenuLink asChild key={range}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {range}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Homes by BHK */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Homes by BHK</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.buy.bhkTypes.map((type) => (
                                                            <NavigationMenuLink asChild key={type}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {type}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={triggerClasses}>Rent</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid  w-max grid-cols-[200px_1fr] gap-3 p-4">
                                            {/* Categories */}
                                            <div className="space-y-1 border-r pr-4">
                                                {Object.keys(navigationData.rent.categories).map((category) => (
                                                    <button
                                                        key={category}
                                                        className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeRentCategory === category ? "bg-accent" : ""
                                                            }`}
                                                        onMouseEnter={() => setActiveRentCategory(category)}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Content Grid */}
                                            <div className="grid grid-cols-3 gap-6 p-4">
                                                {/* Rental Categories */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Rental Categories</h3>
                                                    <div className="space-y-2">
                                                        {navigationData?.rent.categories[activeRentCategory].map((type) => (
                                                            <NavigationMenuLink asChild key={type}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {type}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Rent Ranges */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Rent Ranges</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.rent.rentRanges.map((range) => (
                                                            <NavigationMenuLink asChild key={range}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {range}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Property By BHK */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Property By BHK</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.rent.bhkTypes.map((type) => (
                                                            <NavigationMenuLink asChild key={type}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {type}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={triggerClasses}>Sell</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                            {/* Categories */}
                                            <div className="space-y-1 border-r pr-4">
                                                {Object.keys(navigationData.sell.categories).map((category) => (
                                                    <button
                                                        key={category}
                                                        className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeSellCategory === category ? "bg-accent" : ""
                                                            }`}
                                                        onMouseEnter={() => setActiveSellCategory(category as keyof typeof sellMenuData)}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Content Grid */}
                                            <div className="grid grid-cols-2 gap-6 p-4">
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">{activeSellCategory}</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.sell.categories[activeSellCategory].map((item) => (
                                                            <NavigationMenuLink asChild key={item}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {item}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={triggerClasses}>Commercial</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                            {/* Categories */}
                                            <div className="space-y-1 border-r pr-4">
                                                {Object.keys(navigationData.commercial.categories).map((category) => (
                                                    <button
                                                        key={category}
                                                        className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeCommercialCategory === category ? "bg-accent" : ""
                                                            }`}
                                                        onMouseEnter={() => setActiveCommercialCategory(category as keyof typeof commercialMenuData)}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Content Grid */}
                                            <div className="grid grid-cols-3 gap-6 p-4">
                                                {/* Property Types */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Property Types</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.commercial.categories[activeCommercialCategory].map((type) => (
                                                            <NavigationMenuLink asChild key={type}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {type}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Explore Localities */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Explore Localities</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.commercial.localities.map((locality) => (
                                                            <NavigationMenuLink asChild key={locality}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {locality}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Budget Ranges */}
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Budget Ranges</h3>
                                                    <div className="space-y-2">
                                                        {navigationData.commercial.budgetRanges.map((range) => (
                                                            <NavigationMenuLink asChild key={range}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {range}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={triggerClasses}>Projects</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="p-4 w-[800px]">
                                            <h2 className="text-lg font-semibold mb-4">Explore Projects</h2>
                                            <div className="grid grid-cols-[200px_1fr] gap-3">
                                                {/* Categories */}
                                                <div className="space-y-1 border-r pr-4">
                                                    {Object.keys(navigationData.commercial.categories).map((category) => (
                                                        <button
                                                            key={category}
                                                            className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeCommercialCategory === category ? "bg-accent" : ""
                                                                }`}
                                                            onMouseEnter={() => setActiveCommercialCategory(category as keyof typeof commercialMenuData)}
                                                        >
                                                            {category}
                                                        </button>
                                                    ))}
                                                </div>

                                                {/* Content Grid */}
                                                <div className="grid grid-cols-3 gap-6">
                                                    {/* Property Types */}
                                                    <div>
                                                        <h3 className="mb-3 text-lg font-medium">Property Types</h3>
                                                        <div className="space-y-2">
                                                            {navigationData.commercial.categories[activeCommercialCategory].map((type) => (
                                                                <NavigationMenuLink asChild key={type}>
                                                                    <Link href="#" className="block text-lg text-muted-foreground hover:text-primary">
                                                                        {type}
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Explore Localities */}
                                                    <div>
                                                        <h3 className="mb-3 text-lg font-medium">Explore Localities</h3>
                                                        <div className="space-y-2">
                                                            {navigationData.commercial.localities.map((locality) => (
                                                                <NavigationMenuLink asChild key={locality}>
                                                                    <Link href="#" className="block text-lg text-muted-foreground hover:text-primary">
                                                                        {locality}
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Budget Ranges */}
                                                    <div>
                                                        <h3 className="mb-3 text-lg font-medium">Budget Ranges</h3>
                                                        <div className="space-y-2">
                                                            {navigationData.commercial.budgetRanges.map((range) => (
                                                                <NavigationMenuLink asChild key={range}>
                                                                    <Link href="#" className="block text-lg text-muted-foreground hover:text-primary">
                                                                        {range}
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={triggerClasses}>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                            <div className="space-y-1 border-r pr-4">
                                                {Object.keys(servicesMenuData).map((category) => (
                                                    <button
                                                        key={category}
                                                        className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeServiceCategory === category ? "bg-accent" : ""
                                                            }`}
                                                        onMouseEnter={() => setActiveServiceCategory(category as keyof typeof servicesMenuData)}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-3 gap-6 p-4">
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Available Services</h3>
                                                    <div className="space-y-2">
                                                        {servicesMenuData[activeServiceCategory].map((service) => (
                                                            <NavigationMenuLink asChild key={service}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {service}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={triggerClasses}>Loans & Mortgages</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                            <div className="space-y-1 border-r pr-4">
                                                {Object.keys(loansMenuData).map((category) => (
                                                    <button
                                                        key={category}
                                                        className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeLoansCategory === category ? "bg-accent" : ""
                                                            }`}
                                                        onMouseEnter={() => setActiveLoansCategory(category as keyof typeof loansMenuData)}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-2 gap-6 p-4">
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Available Options</h3>
                                                    <div className="space-y-2">
                                                        {loansMenuData[activeLoansCategory].map((option) => (
                                                            <NavigationMenuLink asChild key={option}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {option}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={triggerClasses}>Realty Insights</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                            <div className="space-y-1 border-r pr-4">
                                                {Object.keys(insightsMenuData).map((category) => (
                                                    <button
                                                        key={category}
                                                        className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeInsightsCategory === category ? "bg-accent" : ""
                                                            }`}
                                                        onMouseEnter={() => setActiveInsightsCategory(category as keyof typeof insightsMenuData)}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="grid grid-cols-2 gap-6 p-4">
                                                <div>
                                                    <h3 className="mb-3 text-lg font-medium">Available Resources</h3>
                                                    <div className="space-y-2">
                                                        {insightsMenuData[activeInsightsCategory].map((item) => (
                                                            <NavigationMenuLink asChild key={item}>
                                                                <Link
                                                                    href="#"
                                                                    className="block text-lg text-muted-foreground hover:text-primary"
                                                                >
                                                                    {item}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div id="header-action" className='flex gap-4 items-center'>
                        <Link href={"/list"} className={cn(buttonVariants({ variant: 'default' }), 'bg-background hover:bg-muted font-bold text-black')}>
                            <span>List your property</span>
                            <span className='text-xs bg-yellow-400 rounded py-px px-2'>Free</span>
                        </Link>
                        <Link className={cn(buttonVariants({ variant: 'default' }), "bg-background hover:bg-muted text-black")} href="/login">
                            Login / Signup
                        </Link>
                        <HeaderMenuSheet />
                    </div>
                </div>
            )}
            {!scrolled && (<div className="container mx-auto flex h-16 items-center justify-center">
                <NavigationMenu className={`flex items-center bg-transparent justify-center transition-colors duration-300  ease-in-out`}>
                    <NavigationMenuList className="bg-transparent">
                        <NavigationMenuItem className="">
                            <NavigationMenuTrigger className={triggerClasses}>Buy</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                    {/* Categories */}
                                    <div className="space-y-1 border-r pr-4">
                                        {Object.keys(navigationData.buy.categories).map((category) => (
                                            <button
                                                key={category}
                                                className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeBuyCategory === category ? "bg-accent" : ""
                                                    }`}
                                                onMouseEnter={() => setActiveBuyCategory(category as keyof typeof buyMenuData)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Content Grid */}
                                    <div className="grid grid-cols-4 gap-6 p-4">
                                        {/* Property Types */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Property Types</h3>
                                            <div className="space-y-2">
                                                {navigationData.buy.categories[activeBuyCategory].map((type) => (
                                                    <NavigationMenuLink asChild key={type}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {type}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Explore Localities */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Explore Localities</h3>
                                            <div className="space-y-2">
                                                {navigationData.buy.localities.map((locality) => (
                                                    <NavigationMenuLink asChild key={locality}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {locality}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Budget Properties */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Budget Properties</h3>
                                            <div className="space-y-2">
                                                {navigationData.buy.budgetRanges.map((range) => (
                                                    <NavigationMenuLink asChild key={range}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {range}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Homes by BHK */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Homes by BHK</h3>
                                            <div className="space-y-2">
                                                {navigationData.buy.bhkTypes.map((type) => (
                                                    <NavigationMenuLink asChild key={type}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {type}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={triggerClasses}>Rent</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid  w-max grid-cols-[200px_1fr] gap-3 p-4">
                                    {/* Categories */}
                                    <div className="space-y-1 border-r pr-4">
                                        {Object.keys(navigationData.rent.categories).map((category) => (
                                            <button
                                                key={category}
                                                className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeRentCategory === category ? "bg-accent" : ""
                                                    }`}
                                                onMouseEnter={() => setActiveRentCategory(category)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Content Grid */}
                                    <div className="grid grid-cols-3 gap-6 p-4">
                                        {/* Rental Categories */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Rental Categories</h3>
                                            <div className="space-y-2">
                                                {navigationData?.rent.categories[activeRentCategory].map((type) => (
                                                    <NavigationMenuLink asChild key={type}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {type}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Rent Ranges */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Rent Ranges</h3>
                                            <div className="space-y-2">
                                                {navigationData.rent.rentRanges.map((range) => (
                                                    <NavigationMenuLink asChild key={range}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {range}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Property By BHK */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Property By BHK</h3>
                                            <div className="space-y-2">
                                                {navigationData.rent.bhkTypes.map((type) => (
                                                    <NavigationMenuLink asChild key={type}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {type}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={triggerClasses}>Sell</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                    {/* Categories */}
                                    <div className="space-y-1 border-r pr-4">
                                        {Object.keys(navigationData.sell.categories).map((category) => (
                                            <button
                                                key={category}
                                                className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeSellCategory === category ? "bg-accent" : ""
                                                    }`}
                                                onMouseEnter={() => setActiveSellCategory(category as keyof typeof sellMenuData)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Content Grid */}
                                    <div className="grid grid-cols-2 gap-6 p-4">
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">{activeSellCategory}</h3>
                                            <div className="space-y-2">
                                                {navigationData.sell.categories[activeSellCategory].map((item) => (
                                                    <NavigationMenuLink asChild key={item}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {item}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={triggerClasses}>Commercial</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                    {/* Categories */}
                                    <div className="space-y-1 border-r pr-4">
                                        {Object.keys(navigationData.commercial.categories).map((category) => (
                                            <button
                                                key={category}
                                                className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeCommercialCategory === category ? "bg-accent" : ""
                                                    }`}
                                                onMouseEnter={() => setActiveCommercialCategory(category as keyof typeof commercialMenuData)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Content Grid */}
                                    <div className="grid grid-cols-3 gap-6 p-4">
                                        {/* Property Types */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Property Types</h3>
                                            <div className="space-y-2">
                                                {navigationData.commercial.categories[activeCommercialCategory].map((type) => (
                                                    <NavigationMenuLink asChild key={type}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {type}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Explore Localities */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Explore Localities</h3>
                                            <div className="space-y-2">
                                                {navigationData.commercial.localities.map((locality) => (
                                                    <NavigationMenuLink asChild key={locality}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {locality}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Budget Ranges */}
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Budget Ranges</h3>
                                            <div className="space-y-2">
                                                {navigationData.commercial.budgetRanges.map((range) => (
                                                    <NavigationMenuLink asChild key={range}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {range}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={triggerClasses}>Projects</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="p-4 w-[800px]">
                                    <h2 className="text-lg font-semibold mb-4">Explore Projects</h2>
                                    <div className="grid grid-cols-[200px_1fr] gap-3">
                                        {/* Categories */}
                                        <div className="space-y-1 border-r pr-4">
                                            {Object.keys(navigationData.commercial.categories).map((category) => (
                                                <button
                                                    key={category}
                                                    className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeCommercialCategory === category ? "bg-accent" : ""
                                                        }`}
                                                    onMouseEnter={() => setActiveCommercialCategory(category as keyof typeof commercialMenuData)}
                                                >
                                                    {category}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Content Grid */}
                                        <div className="grid grid-cols-3 gap-6">
                                            {/* Property Types */}
                                            <div>
                                                <h3 className="mb-3 text-lg font-medium">Property Types</h3>
                                                <div className="space-y-2">
                                                    {navigationData.commercial.categories[activeCommercialCategory].map((type) => (
                                                        <NavigationMenuLink asChild key={type}>
                                                            <Link href="#" className="block text-lg text-muted-foreground hover:text-primary">
                                                                {type}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Explore Localities */}
                                            <div>
                                                <h3 className="mb-3 text-lg font-medium">Explore Localities</h3>
                                                <div className="space-y-2">
                                                    {navigationData.commercial.localities.map((locality) => (
                                                        <NavigationMenuLink asChild key={locality}>
                                                            <Link href="#" className="block text-lg text-muted-foreground hover:text-primary">
                                                                {locality}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Budget Ranges */}
                                            <div>
                                                <h3 className="mb-3 text-lg font-medium">Budget Ranges</h3>
                                                <div className="space-y-2">
                                                    {navigationData.commercial.budgetRanges.map((range) => (
                                                        <NavigationMenuLink asChild key={range}>
                                                            <Link href="#" className="block text-lg text-muted-foreground hover:text-primary">
                                                                {range}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={triggerClasses}>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                    <div className="space-y-1 border-r pr-4">
                                        {Object.keys(servicesMenuData).map((category) => (
                                            <button
                                                key={category}
                                                className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeServiceCategory === category ? "bg-accent" : ""
                                                    }`}
                                                onMouseEnter={() => setActiveServiceCategory(category as keyof typeof servicesMenuData)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-3 gap-6 p-4">
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Available Services</h3>
                                            <div className="space-y-2">
                                                {servicesMenuData[activeServiceCategory].map((service) => (
                                                    <NavigationMenuLink asChild key={service}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {service}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={triggerClasses}>Loans & Mortgages</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                    <div className="space-y-1 border-r pr-4">
                                        {Object.keys(loansMenuData).map((category) => (
                                            <button
                                                key={category}
                                                className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeLoansCategory === category ? "bg-accent" : ""
                                                    }`}
                                                onMouseEnter={() => setActiveLoansCategory(category as keyof typeof loansMenuData)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 p-4">
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Available Options</h3>
                                            <div className="space-y-2">
                                                {loansMenuData[activeLoansCategory].map((option) => (
                                                    <NavigationMenuLink asChild key={option}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {option}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={triggerClasses}>Realty Insights</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="grid w-max grid-cols-[200px_1fr] gap-3 p-4">
                                    <div className="space-y-1 border-r pr-4">
                                        {Object.keys(insightsMenuData).map((category) => (
                                            <button
                                                key={category}
                                                className={`w-full rounded-md px-3 py-2 text-left text-lg hover:bg-accent ${activeInsightsCategory === category ? "bg-accent" : ""
                                                    }`}
                                                onMouseEnter={() => setActiveInsightsCategory(category as keyof typeof insightsMenuData)}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-2 gap-6 p-4">
                                        <div>
                                            <h3 className="mb-3 text-lg font-medium">Available Resources</h3>
                                            <div className="space-y-2">
                                                {insightsMenuData[activeInsightsCategory].map((item) => (
                                                    <NavigationMenuLink asChild key={item}>
                                                        <Link
                                                            href="#"
                                                            className="block text-lg text-muted-foreground hover:text-primary"
                                                        >
                                                            {item}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>)}
        </header>
    )
}
