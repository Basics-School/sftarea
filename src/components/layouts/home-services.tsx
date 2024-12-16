import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCategory {
  title: string
  services: string[]
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Property Services",
    services: [
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
    services: [
      "Property Management",
      "Real Estate Consultancy",
      "Tenant & Lease Services",
      "Valuation Services",
      "Legal & Documentation",
      "Property Inspections",
    ],
  },
  {
    title: "Home Makeovers",
    services: [
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
    services: [
      "Packers & Movers",
      "Energy Solutions",
      "Photography & Videos",
      "Event Management",
      "Cleaning & Security",
      "Landscaping & Gardening",
    ],
  },
]

export default function HomeServices() {
  return (
    <div className="w-full lg:px-0 px-4 py-8 ">
      <div className="text-center mb-8 space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">Your Complete Home Solutions</h1>
        <p className="text-gray-600">All-In-One Services to Simplify Your Life and Elevate Your Home.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {serviceCategories.map((category) => (
          <Card key={category.title} className="border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg text-purple-700">{category.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {category.services.map((service) => (
                <div key={service} className="flex items-center gap-2">
                  <div className="bg-purple-700 rounded-full p-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
