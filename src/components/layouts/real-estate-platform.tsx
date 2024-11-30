import { CitiesSection } from "@/components/layouts/cities-section"
import { FeaturesSection } from "@/components/layouts/features-section"
import { NeighborhoodsSection } from "@/components/layouts/neighborhoods-section"
import { AgenciesSection } from "@/components/layouts/agencies-section"
import { AgentsSection } from "@/components/layouts/agents-section"
import { AppDownloadSection } from "@/components/layouts/app-download-section"

export default function RealEstatePlatform() {
    return (
        <div className=" max-w-screen-xl mx-auto px-4 py-8">
            <CitiesSection />
            <FeaturesSection />
            <NeighborhoodsSection />
            <AgenciesSection />
            <AgentsSection />
            <AppDownloadSection />
        </div>
    )
}
