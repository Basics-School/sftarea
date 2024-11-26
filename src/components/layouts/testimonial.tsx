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
    text: "Thanks to the expertise and guidance of this real estate team, I am now the proud owner of my dream home. They listened to my preferences, answered all my questions, and made the entire home buying process a positive experience.",
    author: {
      name: "Daniel Miller",
      role: "Happy New Homeowner",
      image: "/placeholder.svg",
    },
  },
  {
    rating: 5,
    text: "From the initial consultation to closing day, the real estate team went above and beyond to ensure I found the perfect home. Their dedication and professionalism made the entire process seamless. Thank you!",
    author: {
      name: "Jennifer Lee",
      role: "Happy Home Seeker",
      image: "/placeholder.svg",
    },
  },
  {
    rating: 5,
    text: "I am impressed by the expertise and commitment demonstrated by this real estate team. Their insights into market trends helped me make informed investment decisions, and I couldn't be happier with the results.",
    author: {
      name: "Robert Evans",
      role: "Property Investor",
      image: "/placeholder.svg",
    },
  },
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
        <div className="mb-10">
          <p className="text-red-500 font-medium mb-2">TOP PROPERTIES</p>
          <h2 className="text-4xl font-bold mb-4">What's People Say's</h2>
          <p className="text-gray-600">
            Our seasoned team excels in real estate with years of successful market navigation, offering
            informed decisions and optimal results.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="p-6">
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
