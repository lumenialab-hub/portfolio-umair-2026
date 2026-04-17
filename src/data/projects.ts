export type Project = {
  slug: string;
  title: string;
  link: string;
  niche: string;
  stack: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tags: string[];
  thumbnail?: string;
  images?: string[];
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "medaan",
    title: "Medaan",
    link: "https://medaan.ca",
    thumbnail: "/projects/medaan/home.png",
    images: ["/projects/medaan/home.png"],
    niche: "FoodTech / E-commerce",
    stack: "TALL Stack (Tailwind CSS, Laravel, MySQL, HTML, PHP)",
    description:
      "Architected and engineered a comprehensive full-stack food delivery and brand experience platform tailored for the Canadian market. Developed a secure, session-based authentication system utilizing Laravel Breeze. The platform features an immersive frontend with a dynamic hero section and a sophisticated custom admin portal for managing categories, dishes, deals, and discounts.",
    problem:
      "The client required a centralized digital hub to drive online sales, manage brand presence, and facilitate local expansion in Calgary without relying on disjointed third-party platforms.",
    solution:
      "Developed a custom-built, scalable e-commerce solution with a proprietary admin panel. Successfully integrated the Deliverect API to automate direct order fulfillment, significantly streamlining restaurant operations and delivery logistics.",
    features: [
      "Secure authentication via Laravel Breeze",
      "Custom admin dashboard",
      "Deliverect API integration",
      "Dynamic promotional engine",
    ],
    tags: ["Laravel", "Tailwind CSS", "Alpine.js", "MySQL", "PHP"],
    featured: true,
  },
  {
    slug: "saas-trucking",
    title: "SaaS Trucking Management & Dispatch System",
    link: "#",
    thumbnail: "/projects/tms/tms_dashboard_dark.png",
    images: ["/projects/tms/tms_dashboard_dark.png", "/projects/tms/tms_light.png"],
    niche: "Logistics / SaaS",
    stack: "TALL Stack (Tailwind CSS, Laravel, MySQL, PHP, HTML), QuickBooks API",
    description:
      "Engineered a multi-tenant SaaS platform designed to optimize logistics and financial operations for Canadian trucking enterprises. The system delivers comprehensive carrier and order management capabilities, empowering dispatchers to architect complex trip sequences and efficiently coordinate multi-stop routes.",
    problem:
      "A logistics company lacked a unified, custom solution tailored to their specific operational workflows, resulting in inefficient dispatching, manual financial tracking, and disjointed communication.",
    solution:
      "Architected a centralized, role-based dispatch and management system. Integrated the QuickBooks API to achieve seamless financial synchronization and automated invoicing, drastically reducing manual accounting errors.",
    features: [
      "Multi-tenant architecture",
      "Advanced trip sequencing",
      "QuickBooks API integration",
      "Granular RBAC",
      "Digital receipt management",
    ],
    tags: ["Laravel", "Tailwind CSS", "MySQL", "QuickBooks API", "PHP"],
    featured: true,
  },
  {
    slug: "vendors-hendor",
    title: "Vendors Hendor",
    link: "#",
    thumbnail: "/projects/vendorshendor/landingpage.png",
    images: [
      "/projects/vendorshendor/landingpage.png",
      "/projects/vendorshendor/samplestore.png",
      "/projects/vendorshendor/store_editor.png",
      "/projects/vendorshendor/productslist.png",
      "/projects/vendorshendor/superadmin.png",
    ],
    niche: "Multi-Vendor E-commerce",
    stack: "Laravel, PHP, MySQL, Bootstrap, Store Builder API",
    description:
      "Built a powerful multi-vendor marketplace platform with a dynamic store builder. Every vendor gets their own customizable storefront with dedicated product management, order tracking, and themes.",
    problem:
      "Small vendors struggled to create their own online stores easily without technical knowledge or high costs of Shopify-like platforms.",
    solution:
      "Engineered a multi-tenant store generator where vendors sign up and get an instant, SEO-optimized store. Included a robust super-admin panel for global platform management.",
    features: [
      "Instant store generation for vendors",
      "Drag-and-drop store editor",
      "Comprehensive super-admin dashboard",
      "Multi-currency and local payment support",
      "Vendor-specific analytics",
    ],
    tags: ["Laravel", "Multi-tenant", "Marketplace", "E-commerce"],
    featured: true,
  },
  {
    slug: "reseller-frontend",
    title: "Reseller Domain Platform",
    link: "#",
    thumbnail: "/projects/reselerfrontend/resellerfrontend.png",
    images: [
      "/projects/reselerfrontend/resellerfrontend.png",
      "/projects/reselerfrontend/domain_ai_search.png",
      "/projects/reselerfrontend/domindetail.png",
      "/projects/reselerfrontend/customer.png"
    ],
    niche: "Domain Registry / FinTech",
    stack: "Laravel, React, Verisign API, AI, Cryptomus, Blockonomics",
    description:
      "Architected a complex multi-hierarchy domain reseller platform at Navicosoft. It enables resellers and sub-resellers to manage domains across multiple registries like Verisign. Features advanced AI-driven domain searching and crypto-based wallet systems.",
    problem:
      "Managing complex domain hierarchies and providing relevant search suggestions was technically challenging and lacked modern payment options like crypto.",
    solution:
      "Implemented an AI domain search engine that suggests names based on project descriptions. Integrated multiple crypto gateways (Cryptomus & Blockonomics) and direct registry connections for real-time domain orchestration.",
    features: [
      "Multi-tier reseller hierarchy (Resellers/Sub-resellers)",
      "Direct Verisign & Registry integrations",
      "AI Domain Search with description-based suggestions",
      "Crypto wallet & Top-up system",
      "Real-time domain availability tracking",
    ],
    tags: ["Laravel", "Registry API", "AI", "Crypto", "Navicosoft"],
    featured: true,
  },
  {
    slug: "anr-inventory",
    title: "ANR Inventory",
    link: "https://anrinventory.com",
    thumbnail: "/projects/inventory/air_inventory_home.png",
    images: ["/projects/inventory/air_inventory_home.png", "/projects/inventory/air_inventory_product.png"],
    niche: "ERP / Supply Chain Management",
    stack: "Laravel, PHP, MySQL, Bootstrap CSS, HTML, Barcode APIs, Payment Gateways",
    description:
      "Developed a comprehensive Enterprise Resource Planning (ERP) solution tailored for US-based businesses to streamline product, customer, and order management lifecycles. Engineered the core engine with an advanced inventory module that supports barcode-driven product entry and the dynamic creation of custom product bundles.",
    problem:
      "US-based stakeholders lacked a centralized system to manage complex inventory structures, leading to frequent manual entry errors, inefficient order tracking, and a critical lack of real-time visibility into sales and stock levels.",
    solution:
      "Engineered a custom, highly scalable ERP system utilizing Laravel. Implemented automated barcode scanning to ensure inventory accuracy, a multi-tenant customer CRM, and automated end-to-end order tracking from purchase order to final delivery.",
    features: [
      "Barcode-driven inventory management",
      "Custom product bundling",
      "Multi-tenant CRM",
      "Real-time analytics dashboard",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Barcode APIs"],
  },
  {
    slug: "hot-air-balloon",
    title: "Hot Air Balloon & Tour Booking Website",
    link: "https://balloon.lumenialab.com",
    thumbnail: "/projects/balloon/home.png",
    images: ["/projects/balloon/home.png", "/projects/balloon/about.png"],
    niche: "Travel & Tourism / E-commerce",
    stack: "Laravel, PHP, MySQL, Bootstrap CSS, HTML",
    description:
      "Architected a high-conversion booking platform for a premier Dubai-based adventure services company. Engineered a comprehensive tour browsing engine allowing travelers to explore specialized packages, awards, and detailed tour guide profiles.",
    problem:
      "The client required a streamlined, high-converting online booking flow for travelers, coupled with a dynamic backend capable of frequently updating seasonal tour packages, blog content, and adventure services.",
    solution:
      "Delivered a full-stack e-commerce solution featuring a highly secure booking flow and a robust, custom-built CMS. Implemented an intuitive user interface to showcase premium experiences and provided administrators with real-time control.",
    features: [
      "High-conversion booking engine",
      "Custom CMS for dynamic updates",
      "Advanced tour browsing",
      "Dynamic homepage controls",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
  {
    slug: "bali-jewels",
    title: "Bali Jewels",
    link: "https://balijewels.online",
    thumbnail: "/projects/balijewels/balijewles_home.png",
    images: ["/projects/balijewels/balijewles_home.png", "/projects/balijewels/bali_product_home.png"],
    niche: "E-commerce / Retail",
    stack: "Laravel, PHP, MySQL, Bootstrap CSS, HTML, Square API",
    description:
      "Engineered a specialized retail e-commerce solution explicitly designed for the Canadian jewelry market. Developed a sophisticated, real-time inventory management system capable of handling complex product variations, including multi-dimensional attributes like sizes and colors.",
    problem:
      "The business needed a scalable, professional online storefront capable of managing complex jewelry inventory with multiple variations, alongside a secure and seamless checkout experience.",
    solution:
      "Architected a robust e-commerce platform with an advanced variation-handling inventory system. Integrated the Square payment gateway for secure transactions and built a dynamic discount engine to drive promotional sales.",
    features: [
      "Complex product variation management",
      "Real-time inventory synchronization",
      "Flexible discount engine",
      "Secure payment processing via Square API",
    ],
    tags: ["Laravel", "PHP", "MySQL", "Square API", "E-commerce"],
  },
  {
    slug: "careeros",
    title: "CareerOS",
    link: "https://careeros.lumenialab.com",
    thumbnail: "/projects/careeros/careeros_dashboard.png",
    images: ["/projects/careeros/careeros_dashboard.png", "/projects/careeros/careeros_resumeanalysis.png"],
    niche: "AI-SaaS / HR Tech",
    stack: "Laravel, PHP, MySQL, Bootstrap CSS, OpenAI API, Gemini API",
    description:
      "Architected an innovative platform that automates the job application lifecycle utilizing advanced Artificial Intelligence. Engineered functionality allowing users to upload resumes for intelligent AI parsing or generate professional resumes via dynamic built-in templates.",
    problem:
      "Job seekers faced a highly manual, time-consuming application process and struggled to effectively tailor their resumes to specific job descriptions, resulting in lower success rates.",
    solution:
      "Developed a high-efficiency automation tool integrating OpenAI and Gemini APIs to parse, analyze, and optimize resumes against target job descriptions, drastically reducing manual effort and increasing application efficacy.",
    features: [
      "AI-driven resume parsing and generation",
      "Automated skill gap analysis",
      "Integration with OpenAI and Gemini",
      "End-to-end application tracking workflow",
    ],
    tags: ["Laravel", "AI", "OpenAI", "Gemini", "SaaS"],
  },
  {
    slug: "accounting-system",
    title: "Accounting & Project Management System",
    link: "https://doc.airideal.com",
    thumbnail: "/projects/airideal/project.png",
    images: ["/projects/airideal/project.png", "/projects/airideal/employee.png"],
    niche: "Enterprise Software / FinTech",
    stack: "Laravel, PHP, MySQL, Bootstrap CSS, HTML",
    description:
      "Engineered a comprehensive web-based enterprise system to centralize accounting, document management, and project tracking. Developed a sophisticated multi-tier approval workflow where staff initiate records and managers review/approve them digitally.",
    problem:
      "The organization suffered from slow, paper-based business workflows, decentralized project tracking, and inefficient, manual approval processes that caused significant operational bottlenecks.",
    solution:
      "Architected a centralized platform that digitizes and automates the entire document lifecycle. Implemented dynamic PDF generation, digital signatures, and phase-wise billing to accelerate approvals and enforce strict organizational compliance.",
    features: [
      "Multi-tier, role-based approval workflows",
      "Automated digital signature appending",
      "Phase-wise project billing",
      "Strict RBAC mirroring corporate hierarchy",
    ],
    tags: ["Laravel", "FinTech", "Enterprise", "MySQL"],
  },
  {
    slug: "mobile-valeting",
    title: "Mobile Valeting London",
    link: "https://splashanddrip.co.uk",
    niche: "Automotive Services / E-commerce",
    stack: "Laravel, PHP, MySQL, Bootstrap CSS, HTML",
    description:
      "Developed a dynamic service booking platform for Mobile Valeting London, providing a seamless digital solution for premium mobile car wash and maintenance services. Engineered a comprehensive service catalog encompassing washing, alloy wheel maintenance, and interior detailing.",
    problem:
      "The business required a robust digital presence to capture mobile bookings and a reliable system to manage recurring service subscriptions securely.",
    solution:
      "Built a user-friendly booking interface and integrated a 3D-secure payment gateway to handle complex subscription models, ensuring reliable recurring revenue and streamlined appointment scheduling.",
    features: [
      "Dynamic service catalog and booking engine",
      "3D-secure payment gateway integration",
      "Automated recurring subscription management",
    ],
    tags: ["Laravel", "Booking Engine", "Automotive", "E-commerce"],
  },
  {
    slug: "ecommerce-dashboard",
    title: "Ecommerce Dashboard (Hakkidd)",
    link: "https://hakidd.com",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=1200"
    ],
    niche: "E-commerce / Data Analytics",
    stack: "Laravel, PHP, MySQL, Mixpanel API, ShipStation API",
    description:
      "Architected and optimized a high-performance administrative dashboard for a massive e-commerce operation cataloging over 50,000 products. Engineered highly dynamic, data-driven interfaces to allow administrators to efficiently manage vast inventories.",
    problem:
      "Managing an inventory of 50,000+ products was creating significant administrative overhead, while the lack of deep analytics and automated shipping was bottlenecking growth and fulfillment speed.",
    solution:
      "Developed a highly dynamic, scalable admin dashboard capable of handling massive datasets. Integrated Mixpanel to drive data-backed decisions and ShipStation to fully automate the fulfillment pipeline.",
    features: [
      "High-performance dashboard optimized for 50k+ products",
      "Mixpanel integration for behavioral analytics",
      "ShipStation integration for automated order fulfillment",
    ],
    tags: ["Laravel", "Mixpanel", "ShipStation", "Analytics"],
  },
  {
    slug: "moving-journey",
    title: "My Moving Journey",
    link: "https://mymovingjourney.com",
    niche: "Travel & Transportation",
    stack: "Web Technologies (HTML, CSS, Backend Framework)",
    description:
      "Developed a digital platform for a nationwide travel and transportation company facilitating journeys across the USA. Engineered the site to effectively showcase travel services, manage customer inquiries, and provide a seamless informational hub for prospective travelers.",
    problem:
      "The company needed a professional online presence to attract and inform customers about their nationwide travel services.",
    solution:
      "Delivered a clean, accessible website that highlights the company offerings and streamlines the customer inquiry process.",
    features: [
      "Informational service catalog",
      "Customer inquiry management",
      "Nationwide service coverage mapping",
    ],
    tags: ["HTML", "CSS", "Business Website"],
  },
  {
    slug: "duniya-digital",
    title: "Duniya Digital",
    link: "https://dunyadigital.co",
    niche: "Media & Publishing",
    stack: "Bootstrap, Frontend Technologies",
    description:
      "Designed and engineered the digital platform for Duniya News, creating a highly responsive and engaging hub for news consumption. Architected a seamless digital experience capable of handling high-traffic breaking news, in-depth reporting, and rich multimedia content.",
    problem:
      "The media outlet required a modern, high-performance digital platform capable of delivering breaking news and multimedia content seamlessly to a large audience.",
    solution:
      "Developed a highly responsive, dynamic website utilizing Bootstrap to ensure fast load times, excellent mobile readability, and robust multimedia handling.",
    features: [
      "High-performance, responsive layout",
      "Dynamic multimedia content management",
      "Optimized for high-traffic breaking news events",
    ],
    tags: ["Bootstrap", "Media", "Responsive"],
  },
  {
    slug: "limoapp",
    title: "911limoapp",
    link: "#",
    thumbnail: "/projects/mockups/911limo/Mockups Desktop (1).png",
    images: ["/projects/mockups/911limo/Mockups Desktop (1).png", "/projects/mockups/911limo/Mockups Mobile.png"],
    niche: "Ride-Sharing / Mobility-as-a-Service",
    stack: "Full-Stack Web Technologies, Real-time WebSockets, Geolocation APIs",
    description:
      "Architected a sophisticated peer-to-peer ride-sharing and matching platform (InDrive model) connecting customers with nearby drivers in real-time. Engineered a highly scalable system featuring live ride tracking, real-time in-app chat, and dynamic location sharing.",
    problem:
      "The market lacked a highly responsive, real-time peer-to-peer ride-matching system that offered dynamic fare management and seamless communication between riders and drivers.",
    solution:
      "Engineered a real-time matching engine utilizing geolocation data. Implemented live tracking, in-app messaging, and a robust admin dashboard to control dynamic pricing and vehicle fleets at scale.",
    features: [
      "Real-time peer-to-peer ride matching engine",
      "Live geolocation tracking and location sharing",
      "Real-time in-app chat infrastructure",
      "Dynamic fare and fleet management",
    ],
    tags: ["WebSockets", "Geolocation", "Ride-Sharing", "Real-time"],
  },
  {
    slug: "knowroo",
    title: "Knowroo",
    link: "https://knowroo.com",
    niche: "EdTech / SaaS",
    stack: "React, Laravel, PHP, MySQL",
    description:
      "Engineered a highly scalable Learning Management System (LMS) designed to orchestrate complex, multi-level educational structures for institutions. Architected a sophisticated hierarchical relational database model mapping content from Mob → Subject → Class → Module → Quiz → Questions.",
    problem:
      "Managing complex educational hierarchies and manually associating users, content, and assessments across multiple organizational levels caused severe data inconsistencies and hindered platform scalability.",
    solution:
      "Developed a structured, automated hierarchy management engine using Laravel and React. Implemented bulk mapping capabilities and strict relational constraints to ensure data integrity and optimize performance.",
    features: [
      "Complex hierarchical data modeling",
      "Automated bulk mapping for educational structures",
      "Advanced Role-Based Access Control (RBAC)",
      "High-performance data handling",
    ],
    tags: ["React", "Laravel", "LMS", "Education"],
  },
  {
    slug: "air-ideal",
    title: "Air Ideal",
    link: "https://doc.airideal.com",
    thumbnail: "/projects/airideal/project.png",
    images: ["/projects/airideal/project.png"],
    niche: "Enterprise ERP / FinTech",
    stack: "Laravel, PHP, MySQL, Web Technologies",
    description:
      "Architected a comprehensive Enterprise Resource Planning (ERP) and financial management system tailored for firms to orchestrate complex projects, financial operations, and cross-departmental workflows. Engineered a dynamic project billing lifecycle module that tracks total costs, billed amounts, and received payments.",
    problem:
      "The firm struggled with fragmented financial tracking, manual billing calculations, and a disorganized document approval process that lacked transparency and delayed project execution.",
    solution:
      "Engineered an end-to-end ERP solution that automates the financial lifecycle from request to payment. Digitized the document approval workflow with sequential routing and digital signatures, significantly enhancing operational efficiency.",
    features: [
      "Dynamic project billing lifecycle",
      "Multi-tier sequential document approval workflow",
      "Granular Role-Based Access Control (RBAC)",
      "Automated event-driven email notification system",
    ],
    tags: ["Laravel", "ERP", "FinTech", "Workflow"],
  },
  {
    slug: "master-idp",
    title: "Master IDP (Identity Provider)",
    link: "#",
    thumbnail: "/projects/master idp/master idp_dashboard.png",
    images: [
      "/projects/master idp/master idp_dashboard.png",
      "/projects/master idp/master_idp_tenant.png",
      "/projects/master idp/plans.png"
    ],
    niche: "Identity Management / SSO",
    stack: "Laravel, PHP, MySQL, SSO (OpenID Connect), Wallet Services, Blockonomics (Crypto)",
    description:
      "Engineered a sophisticated multi-tenant Identity Provider (IDP) and Single Sign-On (SSO) system at Navicosoft. This central hub manages authentication across diverse ecosystems including WHMCS, Reseller Portals, Domain Hosting platforms, HR Portals, and CRMs. It features a robust multi-tenant architecture managing plans, organizations, and integrated wallets for cross-app transactions.",
    problem:
      "Fragmented authentication across multiple internal and external platforms led to security risks, inconsistent user data, and complex management for thousands of tenants and organizations.",
    solution:
      "Architected a centralized SSO portal that allows users to login once and access all configured applications. Integrated a unified wallet system supporting crypto top-ups via Blockonomics and Cryptomus, alongside traditional bank transfers, to streamline financial operations across the entire app suite.",
    features: [
      "Centralized SSO for WHMCS, CRM, and Portals",
      "Multi-tenant organization management",
      "Unified wallet for cross-app transactions",
      "Crypto integration (Blockonomics & Cryptomus)",
      "Tiered subscription and plan management",
    ],
    tags: ["Laravel", "SSO", "Multi-tenant", "FinTech", "Crypto"],
  },
  {
    slug: "satradelink",
    title: "Satradelink",
    link: "#",
    thumbnail: "/projects/satradelink/home.png",
    images: [
      "/projects/satradelink/home.png",
      "/projects/satradelink/about.png",
      "/projects/satradelink/about_last.png"
    ],
    niche: "Business Intelligence / Trading",
    stack: "Laravel, PHP, MySQL, Analytics APIs",
    description:
      "A comprehensive trading and business intelligence platform designed for real-time market tracking and trade execution.",
    problem:
      "Traders lacked a unified dashboard to monitor multiple asset classes and execute trades with minimal latency.",
    solution:
      "Developed a high-performance web platform with real-time data streaming and advanced charting tools.",
    features: [
      "Real-time market data integration",
      "Advanced charting and technical analysis",
      "Secure trade execution engine",
      "User-defined alert system",
    ],
  },
];
