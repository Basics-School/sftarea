"use client"

import * as React from "react"
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
    const navItems = React.useMemo(() => transformItems(items), [items])

    return (
        <div className="hidden gap-6 lg:flex absolute w-full mx-auto justify-center">
            <NavigationMenu className="flex justify-center">
                <NavigationMenuList className="flex w-full justify-center">
                    {navItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            <NavigationMenuTrigger className="hover:bg-transparent text-xl [active]:bg-transparent data-[state=open]:bg-transparent hover:text-background focus:bg-transparent focus:text-white bg-transparent text-white h-auto">
                                {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="flex w-full   max-w-screen-lg">
                                <div className="grid grid-cols-5 gap-3 p-4 z-10  w-[900px]  ">
                                    {item.sections.map((section) => (
                                        <div key={section.title} className="space-y-2">
                                            <h3 className="font-medium">{section.title}</h3>
                                            <ul className="space-y-1">
                                                {section.items.map((subItem: any) => (
                                                    <ListItem
                                                        key={subItem.text}
                                                        href={subItem.href}
                                                        title={subItem.text}
                                                        badge={subItem.badge}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
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
