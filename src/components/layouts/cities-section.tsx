"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useCallback } from 'react'

const cities = [
  {
    name: "Delhi / NCR",
    properties: "15,500+ Properties",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Mumbai",
    properties: "15,500+ Properties",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Bangalore",
    properties: "15,500+ Properties",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Hyderabad",
    properties: "15,500+ Properties",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Pune",
    properties: "15,500+ Properties",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Chennai",
    properties: "12,000+ Properties",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Kolkata",
    properties: "10,000+ Properties",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export function CitiesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">
        Major Cities: <span className="text-purple-600 font-normal">Explore Properties Across India</span>
      </h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {cities.map((city) => (
              <div key={city.name} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4">
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{city.name}</h3>
                    <p className="text-sm text-muted-foreground">{city.properties}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow-md"
          onClick={scrollPrev}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow-md"
          onClick={scrollNext}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
