import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Banner({ img }: { img: string }) {
    return (
        <div className="relative h-[400px] w-full mx-auto rounded-lg max-w-screen-xl overflow-hidden">
            {/* Background Image */}
            <Image
                src={img}
                alt="ASBL Landmark Property View"
                // width={1200}
                // height={400}
                fill
                className="object-cover"
                priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <div className="space-y-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">
                        ASBL Landmark
                    </h1>
                    <p className="text-sm md:text-base text-gray-200">
                        3,3.5 & 4 BHK Flats at Kukatpally, Hyderabad
                    </p>
                    <div className="space-y-2">
                        <p className="text-xl md:text-2xl font-semibold text-white">
                            Starting from ₹ 2.24 Cr
                        </p>
                        <p className="text-sm text-gray-300">
                            Marketed by Ashoka Builders India Pvt Ltd
                        </p>
                    </div>
                    <Button
                        variant="destructive"
                        size="lg"
                        className="mt-4"
                    >
                        See Detail
                    </Button>
                </div>
            </div>
        </div>
    )
}
