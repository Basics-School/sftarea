const items = {
    buy: {
      popularChoices: [
        { text: "Ready to Move", href: "#" },
        { text: "Owner Properties", href: "#" },
        { text: "Budget Homes", href: "#" },
        { text: "Premium Homes", href: "#" },
        { text: "New Projects", href: "#", badge: "NEW" }
      ],
      propertyTypes: [
        { text: "Flats in New-Delhi", href: "#" },
        { text: "House for sale in New-Delhi", href: "#" },
        { text: "Villa in New-Delhi", href: "#" },
        { text: "Plot in New-Delhi", href: "#" },
        { text: "Office Space in New-Delhi", href: "#" },
        { text: "Commercial Space in New-Delhi", href: "#" }
      ],
      budget: [
        { text: "Under ₹ 50 Lac", href: "#" },
        { text: "₹ 50 Lac - ₹ 1 Cr", href: "#" },
        { text: "₹ 1 Cr - ₹ 1.5 Cr", href: "#" },
        { text: "Above ₹ 1.5 Cr", href: "#" }
      ],
      explore: [
        { text: "Localities in New-Delhi", href: "#" },
        { text: "Projects in New-Delhi", href: "#" },
        { text: "Investment Hotspot", href: "#" },
        { text: "Find an Agent", href: "#" },
        { text: "Home Interiors in New-Delhi", href: "#" }
      ],
      buyingTools: [
        { text: "PropWorth", href: "#" },
        { text: "Rates & Trends", href: "#" },
        { text: "Buy vs Rent", href: "#" },
        { text: "Tips and Guides", href: "#" }
      ]
    },
    rent: {
      popularChoices: [
        { text: "Owner Properties", href: "#" },
        { text: "Verified Properties", href: "#" },
        { text: "Furnished Homes", href: "#" },
        { text: "Bachelor Friendly Homes", href: "#" },
        { text: "Immediately Available", href: "#" }
      ],
      propertyTypes: [
        { text: "Flat for rent in New-Delhi", href: "#" },
        { text: "House for rent in New-Delhi", href: "#" },
        { text: "Villa for rent in New-Delhi", href: "#" },
        { text: "PG in New-Delhi", href: "#" },
        { text: "Office Space in New-Delhi", href: "#" },
        { text: "Commercial Space in New-Delhi", href: "#" },
        { text: "Coworking Space in New-Delhi", href: "#" },
        { text: "Coliving Space in New-Delhi", href: "#" },
        { text: "Student Hostels in New-Delhi", href: "#" },
        { text: "Luxury PG in New-Delhi", href: "#" }
      ],
      budget: [
        { text: "Under ₹ 10,000", href: "#" },
        { text: "₹ 10,000 - ₹ 15,000", href: "#" },
        { text: "₹ 15,000 - ₹ 25,000", href: "#" },
        { text: "Above ₹ 25,000", href: "#" }
      ],
      explore: [
        { text: "Localities", href: "#" },
        { text: "Buy Vs Rent", href: "#" },
        { text: "Find an Agent", href: "#" },
        { text: "Share Requirement", href: "#" },
        { text: "Property Services", href: "#" },
        { text: "Rent Agreement", href: "#" }
      ]
    },
    sell: {
      forOwner: [
        { text: "Post Property", href: "#", badge: "Free" },
        { text: "My Dashboard", href: "#" },
        { text: "Sell / Rent Ad Packages", href: "#" }
      ],
      forAgentAndBuilder: [
        { text: "My Dashboard", href: "#" },
        { text: "Ad Packages", href: "#" },
        { text: "iAdvantage", href: "#" },
        { text: "Developer Lounge", href: "#" },
        { text: "Sales Enquiry", href: "#" }
      ],
      sellingTools: [
        { text: "Property Valuation", href: "#" },
        { text: "Find an Agent", href: "#" },
        { text: "Rates & Trends", href: "#" },
        { text: "PropWorth", href: "#" }
      ]
    },
    homeLoans: {
      applyNow: [
        { text: "Home Loans", href: "#" },
        { text: "Balance Transfer", href: "#" },
        { text: "Loan Against Property", href: "#" }
      ],
      partners: [
        { text: "SBI Home Loan", href: "#" },
        { text: "HDFC Ltd Home Loan", href: "#" },
        { text: "Axis Home Loan", href: "#" },
        { text: "Kotak Home Loan", href: "#" },
        { text: "LIC HF Home Loan", href: "#" }
      ],
      explore: [
        { text: "Home Loan EMI Calculator", href: "#" },
        { text: "Home Loan Eligibility", href: "#" },
        { text: "Get Home Loan Offers", href: "#", badge: "NEW" },
        { text: "Check Credit Score", href: "#" },
        { text: "Home Loan Prepayment", href: "#" },
        { text: "Home Loan Interest Rate", href: "#" },
        { text: "Home Loan Balance Transfer", href: "#" },
        { text: "Home Loan Documentation", href: "#" }
      ],
      emiCalculators: [
        { text: "SBI Home Loan EMI Calculator", href: "#" },
        { text: "HDFC Home Loan EMI Calculator", href: "#" },
        { text: "Axis Bank Home Loan EMI Calculator", href: "#" },
        { text: "Bajaj Home Loan EMI Calculator", href: "#" },
        { text: "Kotak Home Loan EMI Calculator", href: "#" },
        { text: "L&T Home Loan EMI Calculator", href: "#" }
      ],
      interestRates: [
        { text: "SBI Home Loan Interest Rate", href: "#" },
        { text: "HDFC Home Loan Interest Rate", href: "#" },
        { text: "Axis Bank Home Loan Interest Rate", href: "#" },
        { text: "Bajaj Home Loan Interest Rate", href: "#" },
        { text: "Kotak Bank Interest Rate", href: "#" },
        { text: "L&T Home Loan Interest Rate", href: "#" }
      ]
    },
    homeInteriors: {
      designIdeas: [
        { text: "Modular Kitchen Design Ideas", href: "#" },
        { text: "False ceiling Design Ideas", href: "#" },
        { text: "Bathroom Design Ideas", href: "#" },
        { text: "Bedroom Design Ideas", href: "#" },
        { text: "TV Unit Design Ideas", href: "#" }
      ],
      fullHomeInteriorDesigns: [
        { text: "1BHK Interior Design", href: "#" },
        { text: "2BHK Interior Design", href: "#" },
        { text: "3BHK Interior Design", href: "#" },
        { text: "4BHK Interior Design", href: "#" }
      ],
      exploreServices: [
        { text: "Home Interior Design Services", href: "#" },
        { text: "Interior Designers in New-Delhi", href: "#" },
        { text: "Design Consultation", href: "#" },
        { text: "Full Home Interior Cost Calculator", href: "#" },
        { text: "Kitchen/Wardrobe calculator", href: "#" }
      ]
    },
    mbAdvice: {
      mbResearch: [
        { text: "Insights", href: "#" },
        { text: "Research", href: "#" },
        { text: "Prop Index", href: "#" },
        { text: "Find Pincode", href: "#" }
      ],
      servicesAndTools: [
        { text: "Property Valuation", href: "#", badge: "NEW" },
        { text: "Rates & Trends", href: "#" },
        { text: "Area Converter", href: "#" },
        { text: "PropWorth", href: "#" },
        { text: "Buy v/s Rent", href: "#" }
      ],
      localitiesAndProjects: [
        { text: "Localities in New-Delhi", href: "#" },
        { text: "Locality Review Videos", href: "#" },
        { text: "Compare Localities", href: "#" },
        { text: "New Projects in New-Delhi", href: "#" },
        { text: "Project Review Videos", href: "#" },
        { text: "MBTV Videos", href: "#" }
      ],
      newsAndBlogs: [
        { text: "Latest Blogs", href: "#" },
        { text: "Lifestyle", href: "#" },
        { text: "Policies", href: "#" },
        { text: "Finance & Legal", href: "#" },
        { text: "City Blogs", href: "#" },
        { text: "Property News", href: "#" },
        { text: "Trending Web Stories", href: "#" }
      ]
    },
    help: [
      { text: "Help Center", href: "#" },
      { text: "Sales Enquiry", href: "#" }
    ]
  };

  export default items;
