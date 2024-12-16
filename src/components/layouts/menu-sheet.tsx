"use client"

import * as React from "react"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const staticSections = [
  {
    title: "Quick Access",
    items: ["Sign In / Join Us", "List Your Property for Free"],
  },
  {
    title: "My Actions",
    items: ["Recently Viewed", "Recently Searched", "Shortlisted", "Contacted"],
  }
]

const dropdownMenuItems = [
  {
    title: "Property Types",
    items: ["Buying", "Selling", "Commercial", "Renting", "PG/Co-living"],
  },
  {
    title: "Property Services",
    items: [
      "Property Management",
      "Real Estate Consultancy",
      "Tenant & Lease Services",
      "Valuation Services",
      "Legal & Documentation",
      "Property Inspections",
    ],
  },
  {
    title: "Loans Hub",
    items: [
      "Home Loans",
      "Mortgage Refinancing",
      "Loan Against Property",
      "Construction Loans",
      "Commercial Property Loans",
      "Balance Transfer Loans",
    ],
  },
  {
    title: "Home Makeovers",
    items: [
      "Design & Architecture",
      "Interior Design",
      "Home Renovations",
      "Builders & Contractor's",
      "Smart Home",
      "Painting Services",
    ],
  },
  {
    title: "Lifestyle Services",
    items: [
      "Packers & Movers",
      "Energy Solutions",
      "Photography & Videos",
      "Event Management",
      "Cleaning & Security",
      "Landscaping & Gardening",
    ],
  },
  {
    title: "Insights & Updates",
    items: ["Market Insights", "Articles & News", "Reality Blog", "Guides & Resources"],
  },
  {
    title: "Help & Support",
    items: ["Help Center", "Report Fraud"],
  },
  {
    title: "Tools & Preferences",
    items: ["Download Our App", "Language Preference"],
  },
]

const contactSection = {
  title: "Contact Us",
  items: [
    "Phone:",
    "Inquiries: 9121002737",
    "Support: 9030574775",
    "Toll-Free: 1800 41 99099",
    "Emails:",
    "support@sftarea.com",
    "sales@sftarea.com",
    "marketing@sftarea.com",
    "contact@sftarea.com",
  ],
}

export function HeaderMenuSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4 text-foreground" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            Explore our services and features
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 h-[calc(100vh-120px)] overflow-y-auto">
          {/* Static Sections */}
          {staticSections.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="mb-2 font-semibold">{section.title}</h3>
              <ul className="ml-4 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Button variant="link" className="h-auto p-0 text-sm">
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Dropdown Sections */}
          <Accordion type="multiple" className="w-full">
            {dropdownMenuItems.map((section, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{section.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="ml-4 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Button variant="link" className="h-auto p-0 text-sm">
                          {item}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact Section */}
          <div className="mt-6">
            <h3 className="mb-2 font-semibold">{contactSection.title}</h3>
            <ul className="ml-4 space-y-2">
              {contactSection.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
