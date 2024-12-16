import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AppDownloadSection() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Get the SFTAREA App</h2>
          <p className="text-xl mb-6">Real Estate at Your Fingertips</p>
          <div className="flex gap-4">
            <Button className="bg-black text-white hover:bg-black/90">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="App Store"
                width={24}
                height={24}
                className="mr-2"
              />
              App Store
            </Button>
            <Button className="bg-black text-white hover:bg-black/90">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Play Store"
                width={24}
                height={24}
                className="mr-2"
              />
              Play Store
            </Button>
          </div>
        </div>
        <Image
          src="/placeholder.svg?height=400&width=200"
          alt="SFTAREA App"
          width={200}
          height={400}
          className="rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  )
}

