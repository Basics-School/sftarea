import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function SiteFooter() {
    return (
        <footer className="w-full  max-w-screen-xl mx-auto bg-muted/40">
            {/* Keywords Section */}
            <div className="container px-4 py-8 md:px-6">
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold">Flats for Sale</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Hyderabad", "Bengaluru", "Delhi", "Mumbai", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur"].map((city) => (
                                <Link key={city} href={`/flats-in-${city.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary hover:underline">
                                    Flats in {city} |
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold">Real Estate</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Hyderabad", "Bengaluru", "Delhi", "Mumbai", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur"].map((city) => (
                                <Link key={city} href={`/real-estate-in-${city.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary hover:underline">
                                    Real Estate in {city} |
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold">New Projects</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Hyderabad", "Bengaluru", "Delhi", "Mumbai", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur"].map((city) => (
                                <Link key={city} href={`/projects-in-${city.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary hover:underline">
                                    Projects in {city} |
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-sm font-semibold">Rental Property</h2>
                        <div className="flex flex-wrap gap-2">
                            {["Hyderabad", "Bengaluru", "Delhi", "Mumbai", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Surat", "Jaipur"].map((city) => (
                                <Link key={city} href={`/rental-in-${city.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary hover:underline">
                                    Rental in {city} |
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Main Footer Section */}
            <div className="container max-w-screen-xl  text-background bg-slate-800 mx-auto px-4 py-6 md:py-12 md:px-6">
                <div className="grid gap-4  justify-between  lg:grid-cols-5">
                    <div className="">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-8 w-8 rounded-lg bg-primary" />
                            <span className="font-bold">SFTAREA</span>
                        </Link>
                        <p className="mt-4 text-sm text-muted ">
                            Showcasing India&apos;s real estate in cities, seamlessly connecting buyers, sellers, renters and agents through our user-friendly platform.
                        </p>
                        <p className="mt-4 text-sm">
                            PLOT NO.7/A, Aditya Arcade, Suraksha
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">About SFTAREA</h3>
                        <nav className="mt-4 flex flex-col space-y-2">
                            <Link className="text-sm hover:underline" href="#">About Us</Link>
                            <Link className="text-sm hover:underline" href="#">How it Works</Link>
                            <Link className="text-sm hover:underline" href="#">Real Estate Market</Link>
                            <Link className="text-sm hover:underline" href="#">Investor Relations</Link>
                            <Link className="text-sm hover:underline" href="#">Mobile App</Link>
                            <Link className="text-sm hover:underline" href="#">Advertise with Us</Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Property Search</h3>
                        <nav className="mt-4 flex flex-col space-y-2">
                            <Link className="text-sm hover:underline" href="#">Search Homes for Sale</Link>
                            <Link className="text-sm hover:underline" href="#">Search Homes for Rent</Link>
                            <Link className="text-sm hover:underline" href="#">Search Commercial Properties</Link>
                            <Link className="text-sm hover:underline" href="#">Search PG / Co-living</Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Services</h3>
                        <nav className="mt-4 flex flex-col space-y-2">
                            <Link className="text-sm hover:underline" href="#">Reman Services</Link>
                            <Link className="text-sm hover:underline" href="#">Loans & Mortgages</Link>
                            <Link className="text-sm hover:underline" href="#">Interior Designers</Link>
                            <Link className="text-sm hover:underline" href="#">Valuations</Link>
                            <Link className="text-sm hover:underline" href="#">Legal Advice</Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Resources & Guide</h3>
                        <nav className="mt-4 flex flex-col space-y-2">
                            <Link className="text-sm hover:underline" href="#">Guides & FAQs</Link>
                            <Link className="text-sm hover:underline" href="#">First Time Buyers</Link>
                            <Link className="text-sm hover:underline" href="#">RERA Essentials</Link>
                            <Link className="text-sm hover:underline" href="#">NRI Real Estate</Link>
                            <Link className="text-sm hover:underline" href="#">Help Center</Link>
                        </nav>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex space-x-6">
                        <Link href="#" className="text-muted hover:text-primary">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-muted hover:text-primary">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted hover:text-primary">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted hover:text-primary">
                            <Youtube className="h-5 w-5" />
                            <span className="sr-only">YouTube</span>
                        </Link>
                        <Link href="#" className="text-muted hover:text-primary">
                            <FileText className="h-5 w-5" />
                            <span className="sr-only">Blog</span>
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="#">
                            <img
                                src="/google-play.png"
                                alt="Get it on Google Play"
                                className="h-10"
                            />
                        </Link>
                        <Link href="#">
                            <img
                                src="/app-store.png"
                                alt="Download on the App Store"
                                className="h-10"
                            />
                        </Link>
                    </div>
                </div>

                <Separator className="my-4" />

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-4 text-sm text-muted">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Terms & Conditions</Link>
                        <Link href="#" className="hover:underline">Safety & Security</Link>
                        <Link href="#" className="hover:underline">Sitemap</Link>
                    </div>
                    <p className="text-sm text-muted">
                        © 2024 SFTAREA. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
