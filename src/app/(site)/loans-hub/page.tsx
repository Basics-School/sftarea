"use client"
import FAQ from '@/components/LoansHub/FAQ'
import HeroSection from '@/components/LoansHub/HeroSection'
import HowItWorks from '@/components/LoansHub/HowItWorks'
import LoanCategories from '@/components/LoansHub/LoanCategories'
import WhyChooseUs from '@/components/LoansHub/WhyChooseUs'
import React from 'react'

const Loanpage = () => {
    return (<>
        <HeroSection />
        <div className="min-h-screen max-w-screen-xl mx-auto bg-white">
            <LoanCategories />
            <WhyChooseUs />
            <HowItWorks />
            <FAQ />

            <div className="bg-brand py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Let's Start Your Loan Journey Today</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-brand px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                            Get Started Now
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                            Speak to Loan Experts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Loanpage
