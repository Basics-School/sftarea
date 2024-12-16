const servicesMenuData = {
  'Property Services': [
    'Property Management',
    'Real Estate Consultancy',
    'Tenant & Lease Services',
    'Valuation Services',
    'Legal & Documentation',
    'Property Inspections',
  ],
  'Home Makeovers': [
    'Design & Architecture',
    'Interior Design',
    'Home Renovations',
    'Builders & Contractors',
    'Smart Home Solutions',
    'Painting Services',
  ],
  'Lifestyle Services': [
    'Packers & Movers',
    'Energy Solutions',
    'Photography & Videography',
    'Event Management',
    'Cleaning & Security Services',
    'Landscaping & Gardening',
  ],
};

const items = {
  buy: {
    popularChoices: [
      { text: "Ready to Move", href: "#" },
      { text: "Owner Properties", href: "#" },
      { text: "Budget Homes", href: "#" },
      { text: "Premium Homes", href: "#" },
      { text: "New Projects", href: "#", badge: "NEW" },
    ],
    propertyTypes: [
      { text: "Flats in New-Delhi", href: "#" },
      { text: "House for sale in New-Delhi", href: "#" },
      { text: "Villa in New-Delhi", href: "#" },
      { text: "Plot in New-Delhi", href: "#" },
      { text: "Office Space in New-Delhi", href: "#" },
      { text: "Commercial Space in New-Delhi", href: "#" },
    ],
    budget: [
      { text: "Under ₹ 50 Lac", href: "#" },
      { text: "₹ 50 Lac - ₹ 1 Cr", href: "#" },
      { text: "₹ 1 Cr - ₹ 1.5 Cr", href: "#" },
      { text: "Above ₹ 1.5 Cr", href: "#" },
    ],
    explore: [
      { text: "Localities in New-Delhi", href: "#" },
      { text: "Projects in New-Delhi", href: "#" },
      { text: "Investment Hotspot", href: "#" },
      { text: "Find an Agent", href: "#" },
      { text: "Home Interiors in New-Delhi", href: "#" },
    ],
  },
  rent: {
    popularChoices: [
      { text: "Owner Properties", href: "#" },
      { text: "Verified Properties", href: "#" },
      { text: "Furnished Homes", href: "#" },
      { text: "Bachelor Friendly Homes", href: "#" },
      { text: "Immediately Available", href: "#" },
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
      { text: "Luxury PG in New-Delhi", href: "#" },
    ],
    budget: [
      { text: "Under ₹ 10,000", href: "#" },
      { text: "₹ 10,000 - ₹ 15,000", href: "#" },
      { text: "₹ 15,000 - ₹ 25,000", href: "#" },
      { text: "Above ₹ 25,000", href: "#" },
    ],
    explore: [
      { text: "Localities", href: "#" },
      { text: "Buy Vs Rent", href: "#" },
      { text: "Find an Agent", href: "#" },
      { text: "Share Requirement", href: "#" },
      { text: "Property Services", href: "#" },
      { text: "Rent Agreement", href: "#" },
    ],
  },
  sell: {
    forOwner: [
      { text: "Post Property", href: "#", badge: "Free" },
      { text: "My Dashboard", href: "#" },
      { text: "Sell / Rent Ad Packages", href: "#" },
    ],
    forAgentAndBuilder: [
      { text: "My Dashboard", href: "#" },
      { text: "Ad Packages", href: "#" },
      { text: "iAdvantage", href: "#" },
      { text: "Developer Lounge", href: "#" },
      { text: "Sales Enquiry", href: "#" },
    ],
    sellingTools: [
      { text: "Property Valuation", href: "#" },
      { text: "Find an Agent", href: "#" },
      { text: "Rates & Trends", href: "#" },
      { text: "PropWorth", href: "#" },
    ],
  },
  commercial: {
    propertyTypes: [
      { text: "Offices for Sale", href: "#" },
      { text: "Offices for Rent", href: "#" },
      { text: "Shops for Sale", href: "#" },
      { text: "Shops for Rent", href: "#" },
      { text: "Co-Working Spaces", href: "#" },
    ],
    explore: [
      { text: "Commercial Projects", href: "#" },
      { text: "Investment Opportunities", href: "#" },
      { text: "Commercial Localities", href: "#" },
    ],
  },

  loansHub: {
    loanTypes: [
      { text: "Home Loans", href: "#" },
      { text: "Refinancing Options", href: "#" },
      { text: "Property Loans", href: "#" },
      { text: "Commercial Property Loans", href: "#" },
    ],
    tools: [
      { text: "EMI Calculator", href: "#" },
      { text: "Eligibility Calculator", href: "#" },
      { text: "Compare Loans", href: "#" },
    ],
  },

  services: {
    homeServices: [
      { text: "Interior Design", href: "#" },
      { text: "Packers & Movers", href: "#" },
      { text: "Property Management", href: "#" },
      { text: "Home Inspection", href: "#" },
      { text: "Legal Services", href: "#" },
    ],
    propertyServices: [
      { text: "Rental Management", href: "#" },
      { text: "Property Valuation", href: "#" },
      { text: "Documentation Services", href: "#" },
    ],
  },

  marketInsights: {
    analysis: [
      { text: "Market Trends", href: "#" },
      { text: "Property Index", href: "#" },
      { text: "Price History", href: "#" },
    ],
    content: [
      { text: "Real Estate News", href: "#" },
      { text: "Expert Blogs", href: "#" },
      { text: "Research Reports", href: "#" },
      { text: "Resources & Guides", href: "#" },
    ],
  },

  newMenus: {
    buy: {
      'Apartments & Flats': {
        types: [
          'Popular Apartments',
          'Luxury Apartments',
          'Affordable Flats',
          'Ready-to-Move Flats',
          'Under-Construction Flats',
          'Studio Apartments',
        ],
      },
    },
    rent: {
      'Residential Rentals': {
        types: [
          'Flats for Rent',
          'Independent Houses for Rent',
          'Villas for Rent',
          'Studio Apartments',
          'Co-Living Spaces',
          'PG/Hostels',
        ],
      },
    },
    // commercial: commercialMenuData,
  },
  navigationData: {
    services: {
      categories: servicesMenuData,
    },
  },
};

export default items;
