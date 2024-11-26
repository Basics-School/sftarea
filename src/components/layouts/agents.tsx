import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface TeamMember {
  name: string
  image: string
  properties: number
  phone: string
  email: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Demetris Yost",
    image: "/placeholder.svg",
    properties: 7,
    phone: "+13239943264",
    email: "kklocko@fritsch.biz"
  },
  {
    name: "Guadalupe Spencer",
    image: "/placeholder.svg",
    properties: 6,
    phone: "+12064010372",
    email: "gennaro.ullrich@hotmail.com"
  },
  {
    name: "Kenton Langworth",
    image: "/placeholder.svg",
    properties: 5,
    phone: "+12814895499",
    email: "agent@botble.com"
  },
  {
    name: "Tina Weber",
    image: "/placeholder.svg",
    properties: 10,
    phone: "+13347675400",
    email: "john.smith@botble.com"
  }
]

export default function TeamMembers() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-red-600 font-medium mb-2">OUR TEAMS</p>
          <h2 className="text-3xl font-bold">Meet Our Agents</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.name} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}'s profile picture`}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 py-2 px-4 translate-y-full transition-transform group-hover:translate-y-0">
                    <div className="flex justify-center gap-4">
                      <Link href="#" className="text-white hover:text-gray-200">
                        <Facebook className="w-5 h-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link href="#" className="text-white hover:text-gray-200">
                        <Instagram className="w-5 h-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                      <Link href="#" className="text-white hover:text-gray-200">
                        <Twitter className="w-5 h-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link href="#" className="text-white hover:text-gray-200">
                        <Youtube className="w-5 h-5" />
                        <span className="sr-only">YouTube</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
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
                        className="text-gray-500"
                      >
                        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                      </svg>
                      <Link href={`tel:${member.phone}`} className="hover:underline">
                        {member.phone}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
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
                        className="text-gray-500"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <Link href={`mailto:${member.email}`} className="hover:underline">
                        {member.email}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
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
                        className="text-gray-500"
                      >
                        <path d="M3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
                        <path d="M21 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                        <path d="M3 9h18" />
                      </svg>
                      <span>{member.properties} Properties</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

