import Image from "next/image"
import { Shield } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const agencies = [
  {
    name: "SmartHome",
    propertyName: "Shushma Silver Enclave",
    listingCount: "2 Listing",
    logo: "/placeholder.svg?height=80&width=160",
    featured: false,
    verified: true
  },
  {
    name: "Star Realty",
    propertyName: "Rose National Houses",
    listingCount: "5 Listing",
    logo: "/placeholder.svg?height=80&width=160",
    featured: true,
    verified: true
  },
  {
    name: "Maker Good Resort",
    propertyName: "Maker Good Resort",
    listingCount: "12 Listing",
    logo: "/placeholder.svg?height=80&width=160",
    featured: false,
    verified: true
  },
  {
    name: "Greens",
    propertyName: "Seetal Modern Enclave",
    listingCount: "6 Listing",
    logo: "/placeholder.svg?height=80&width=160",
    featured: true,
    verified: true
  }
]

export function AgenciesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-2">
        Our Top Agencies: 
        <span className="text-purple-600 font-normal"> Partner with Leading Real Estate Agencies!</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {agencies.map((agency) => (
          <Card key={agency.name} className="relative">
            {agency.featured && (
              <Badge className="absolute top-4 right-4 bg-yellow-400 text-black hover:bg-yellow-500">
                Featured
              </Badge>
            )}
            {agency.verified && (
              <div className="absolute top-4 left-4">
                <Shield className="h-5 w-5 text-green-500" />
              </div>
            )}
            <CardContent className="pt-12 pb-8 px-6 flex flex-col items-center text-center">
              <div className="w-40 h-20 relative mb-4">
                <Image
                  src={agency.logo}
                  alt={agency.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{agency.listingCount}</p>
              <h3 className="font-semibold text-lg mb-1">{agency.propertyName}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

