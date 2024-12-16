import Image from "next/image"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Buy & Sell",
    subtitle: "Fast & Free Listings",
    description: "List your property for free and quickly connect with buyers and sellers.",
    image: "/placeholder.svg?height=300&width=400",
    exploreText: "Explore Buying and Selling:",
    exploreDescription: "Post your property with ease and attract buyers faster.",
    icon: (
      <svg className="w-12 h-12 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3" strokeWidth="2"/>
        <path d="M12 6V8M12 16V18M6 12H8M16 12H18" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Commercial Properties",
    subtitle: "Prime Business Spaces",
    description: "Easily find and lease the perfect commercial space and grow your business.",
    image: "/placeholder.svg?height=300&width=400",
    exploreText: "Always updated,",
    exploreDescription: "so you never miss top opportunities.",
    icon: (
      <svg className="w-12 h-12 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 3L3 9V21H21V9L12 3Z" strokeWidth="2"/>
        <path d="M9 21V12H15V21" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Rentals & Co-Living",
    subtitle: "Effortless Rentals",
    description: "Discover rental and co-living spaces that fit your lifestyle with no fees.",
    image: "/placeholder.svg?height=300&width=400",
    exploreText: "Explore Comfortable Rentals:",
    exploreDescription: "Updated options to find your ideal home.",
    icon: (
      <svg className="w-12 h-12 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4 21V8L12 3L20 8V21H4Z" strokeWidth="2"/>
        <path d="M9 14H15" strokeWidth="2"/>
        <path d="M9 17H15" strokeWidth="2"/>
      </svg>
    )
  }
]

export function FeaturesSection() {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Why SFTAREA.com? <span className="text-purple-600">Discover the Unique Benefits of Our Platform!</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center">
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <h4 className="text-lg text-purple-600 mb-2">{feature.subtitle}</h4>
            <p className="text-gray-600 text-center mb-6">{feature.description}</p>
            <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="mb-2">
                <span className="font-semibold">{feature.exploreText}</span> {feature.exploreDescription}
              </p>
              <Button variant="link" className="text-purple-600 hover:text-purple-700">
                See all listings <ChevronRight className="inline-block ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
