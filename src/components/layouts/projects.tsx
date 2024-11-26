import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  name: string
  location: string
  details: string
  size: string
  price: string
  status: "Ongoing" | "Upcoming" | "Completed"
  image: string
}

const projects: Project[] = [
  {
    id: "1",
    name: "Jain Central Park East",
    location: "Narapally, Hyderabad",
    details: "2, 3 BHK Flats",
    size: "1378 - 2217 Sq.ft.",
    price: "₹ 75.78 Lac - 1.22 Cr.",
    status: "Ongoing",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Venice City",
    location: "Patancheru, Hyderabad",
    details: "3, 4, 5 BHK House",
    size: "2230 - 5514 Sq.ft.",
    price: "₹ 13.30 Lac - 5.51 Cr.",
    status: "Ongoing",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Praneeth Pranav Township",
    location: "Bachupally, Hyderabad",
    details: "2, 3 BHK Flats",
    size: "928 - 1655 Sq.ft.",
    price: "₹ 76 Lac - 1.09 Cr.",
    status: "Upcoming",
    image: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Bhuvana Hills",
    location: "Warangal Highway, Hyderabad",
    details: "Residential Plots",
    size: "150 - 222 Sq. Yards",
    price: "₹ 21.00 - 31.08 Lac",
    status: "Ongoing",
    image: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Pamena Greens",
    location: "Chevella, Hyderabad",
    details: "Farm House",
    size: "242 - 605 Sq. Yards",
    price: "₹ 14.52 - 36.30 Lac",
    status: "Completed",
    image: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Green Meadows",
    location: "Kompally, Hyderabad",
    details: "2, 3 BHK Flats",
    size: "1200 - 1800 Sq.ft.",
    price: "₹ 60 Lac - 90 Lac",
    status: "Upcoming",
    image: "/placeholder.svg"
  },
  {
    id: "7",
    name: "Skyline Heights",
    location: "Gachibowli, Hyderabad",
    details: "3, 4 BHK Apartments",
    size: "1500 - 2500 Sq.ft.",
    price: "₹ 1.5 Cr - 2.5 Cr",
    status: "Ongoing",
    image: "/placeholder.svg"
  },
  {
    id: "8",
    name: "Urban Nest",
    location: "Miyapur, Hyderabad",
    details: "2, 3 BHK Flats",
    size: "1000 - 1600 Sq.ft.",
    price: "₹ 50 Lac - 80 Lac",
    status: "Completed",
    image: "/placeholder.svg"
  }
]

export default function PremiumProjects() {
  return (
    <section className="w-full mx-auto max-w-screen-xl py-12">
      <div className="container">
        <div className="flex text-center w-full items-center justify-center mb-8">
          <h2 className="text-3xl  font-bold tracking-tight">
            Premium Projects in <span className="text-primary">Hyderabad</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <Badge
                    className="absolute top-4 left-4"
                    variant={
                      project.status === "Completed"
                        ? "default"
                        : project.status === "Ongoing"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {project.status} Projects
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{project.details}</p>
                  <p className="text-sm text-muted-foreground">{project.size}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <p className="font-semibold text-primary">{project.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="text-primary hover:text-primary/80 font-medium flex items-center gap-2"
          >
            See all projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
