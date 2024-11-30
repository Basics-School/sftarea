import Image from "next/image"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const neighborhoods = [
  { name: "Gachibowli", properties: "15 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Madhapur", properties: "25 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Banjara Hills", properties: "52 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Manikonda", properties: "98 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Miyapur", properties: "56 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Hitech City", properties: "18 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Jubilee Hills", properties: "65 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Kondapur", properties: "89 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Kukatpally", properties: "52 Properties", image: "/placeholder.svg?height=100&width=100" },
  { name: "Nallagandla", properties: "12 Properties", image: "/placeholder.svg?height=100&width=100" }
]

export function NeighborhoodsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">
        Top Neighborhoods in Hyderabad: 
        <span className="text-purple-600 font-normal"> Explore the Best Living Spaces in Hyderabad!</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {neighborhoods.map((neighborhood) => (
          <div
            key={neighborhood.name}
            className="flex items-center gap-3 p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={neighborhood.image}
                alt={neighborhood.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm truncate">{neighborhood.name}</h3>
              <p className="text-sm text-muted-foreground">{neighborhood.properties}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <Button variant="ghost" className="text-purple-600 hover:text-purple-700">
          View More <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

