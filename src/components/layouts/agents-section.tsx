"use client"
import Image from "next/image"
import { Star, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useCallback } from 'react'

const agents = [
  {
    name: "Jerry E. Middleton",
    image: "/placeholder.svg?height=100&width=100",
    propertyCount: "19 Property",
    rating: 5,
    reviews: "312 Reviews",
    location: "Liverpool"
  },
  {
    name: "Lamont B. Morrissey",
    image: "/placeholder.svg?height=100&width=100",
    propertyCount: "65 Property",
    rating: 5,
    reviews: "285 Reviews",
    location: "Liverpool"
  },
  {
    name: "Amber M. Felton",
    image: "/placeholder.svg?height=100&width=100",
    propertyCount: "52 Property",
    rating: 5,
    reviews: "265 Reviews",
    location: "Liverpool"
  },
  {
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    propertyCount: "38 Property",
    rating: 5,
    reviews: "198 Reviews",
    location: "Manchester"
  },
  {
    name: "Michael Brown",
    image: "/placeholder.svg?height=100&width=100",
    propertyCount: "42 Property",
    rating: 5,
    reviews: "220 Reviews",
    location: "Birmingham"
  }
]

export function AgentsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-2">Browse Agents</h2>
      <p className="text-purple-600 mb-8">Connect with Expert Agents for Property Guidance!</p>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {agents.map((agent) => (
              <div key={agent.name} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] pl-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative w-20 h-20">
                        <Image
                          src={agent.image}
                          alt={agent.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <Badge variant="outline" className="bg-purple-50">
                        {agent.propertyCount}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{agent.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(agent.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">{agent.reviews}</span>
                    </div>
                    <Button className="w-full mb-4 bg-purple-600 hover:bg-purple-700">
                      Contact Agent
                    </Button>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {agent.location}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Instagram className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
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
