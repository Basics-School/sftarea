"use client"

import AdvancedFeatures from "@/components/AppLanding/AdvancedFeatures"
import ContactSection from "@/components/AppLanding/ContactSection"
import Features from "@/components/AppLanding/Features"
import HeroSection from "@/components/AppLanding/HeroSection"
import HowItWorks from "@/components/AppLanding/HowItWorks"
import LaunchSection from "@/components/AppLanding/LaunchSection"

const AppPage = () => {
    return (<>
        <HeroSection />
        <div className="min-h-screen bg-white">
            <Features />
            <AdvancedFeatures />
            <HowItWorks />
            <LaunchSection />
            <ContactSection />
        </div>
    </>
    )
}

export default AppPage
