'use client'

import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

interface Testimonial {
  rating: number
  text: string
  author: {
    name: string
    role: string
    image: string
  }
}

const testimonials: Testimonial[] = [
    {
        rating: 5,
        text: "Finding my dream home in Hyderabad was so easy with your site. Great options and hassle-free service!",
        author: {
            name: "Ramesh Varma",
            role: "Hyderabad, Telangana",
            image: "/placeholder.svg",
        },
    },
    {
        rating: 5,
        text: "I posted my property for rent, and it got booked within a week. Thank you for making it so simple!",
        author: {
            name: "Lakshmi Devi",
            role: "Vijayawada, Andhra Pradesh",
            image: "/placeholder.svg",
        },
    },
    {
        rating: 5,
        text: "Your site gave me so many great investment ideas. I'm confident I made the right choice.",
        author: {
            name: "Arun Kumar",
            role: "Chennai, Tamil Nadu",
            image: "/placeholder.svg",
        },
    },
    {
        rating: 5,
        text: "I found the perfect home for my family in Bangalore. Everything was clear and easy to understand.",
        author: {
            name: "Kavitha Reddy",
            role: "Bangalore, Karnataka",
            image: "/placeholder.svg",
        },
    },
    {
        rating: 5,
        text: "Searching for commercial property in Mumbai was effortless with your site. Great job!",
        author: {
            name: "Suresh Nair",
            role: "Mumbai, Maharashtra",
            image: "/placeholder.svg",
        },
    },
    {
        rating: 5,
        text: "Your NRI guide helped me buy a property in India without any confusion. Thank you!",
        author: {
            name: "Anitha Rao",
            role: "Hyderabad, Telangana",
            image: "/placeholder.svg",
        },
    }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialCarousel() {
  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* <div className="mb-10">
          <p className="text-red-500 font-medium mb-2">TOP PROPERTIES</p>
          <h2 className="text-4xl font-bold mb-4">What's People Say's</h2>
          <p className="text-gray-600">
            Our seasoned team excels in real estate with years of successful market navigation, offering
            informed decisions and optimal results.
          </p>
        </div> */}

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4 ">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                <Card className="p-6 h-full">
                  <CardContent className="space-y-4 p-0">
                    <StarRating rating={testimonial.rating} />
                    <p className="text-gray-700">{testimonial.text}</p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.author.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
