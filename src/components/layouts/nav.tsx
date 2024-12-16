"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"

// Helper function to transform items
const transformItems = (items: Record<string, Record<string, any[]>>) => {
    return Object.entries(items).map(([key, value]) => ({
        title: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
        sections: Object.entries(value as Record<string, any[]>).map(([sectionKey, sectionItems]) => ({
            title: sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1).replace(/([A-Z])/g, ' $1'),
            items: Array.isArray(sectionItems) ? sectionItems : []
        }))
    }))
}

interface MainNavProps {
    items?: any
}

export function MainNav({ items }: MainNavProps) {
    const [activeBuyCategory, setActiveBuyCategory] = useState('Apartments & Flats')
    const [activeRentCategory, setActiveRentCategory] = useState('Residential Rentals')
    const [activeCommercialCategory, setActiveCommercialCategory] = useState('Buy Spaces')

    return (
        <div className="hidden gap-6 lg:flex absolute w-full mx-auto justify-center">
            <NavigationMenu className="flex justify-center">
                <NavigationMenuList className="flex w-full justify-center">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Buy</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid w-[800px] grid-cols-[200px_1fr] gap-3 p-4">
                                {/* Buy menu content from the provided component */}
                                {/* Copy the Buy section content here */}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Rent</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid w-[800px] grid-cols-[200px_1fr] gap-3 p-4">
                                {/* Rent menu content from the provided component */}
                                {/* Copy the Rent section content here */}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Commercial</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid w-[800px] grid-cols-[200px_1fr] gap-3 p-4">
                                {/* Commercial menu content from the provided component */}
                                {/* Copy the Commercial section content here */}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Sell</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="p-4">
                                {/* Sell menu content from the provided component */}
                                {/* Copy the Sell section content here */}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Add the login/signup buttons */}
                    <div className="ml-auto flex items-center space-x-4">
                        <Button variant="outline">Login</Button>
                        <Button>Sign Up</Button>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { badge?: string }
>(({ className, title, href, badge, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={String(href)}
                    className={cn(
                        "block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <span>{title}</span>
                    {badge && (
                        <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-white">
                            {badge}
                        </span>
                    )}
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
