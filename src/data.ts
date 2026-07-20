/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Product, BlogPost, MaterialItem, TeamMember, FAQItem, ServiceItem } from "./types";
import { siteImages } from "./content";

export const SERVICES: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Interior Design",
    description: "Bespoke spatial planning and curation for luxury estates, penthouses, and private villas. We design homes that serve as an anchor for inspired living.",
    image: siteImages.serviceResidential,
    features: ["Custom Space Planning", "Bespoke Furniture Design", "Material & Color Curation", "Lighting Design Integration", "Procurement & Styling"],
    pricing: "Custom Quote / From ₦15,000",
    process: ["Concept Design & Layout Planning", "Material & Lighting Documentation", "Custom FF&E Specification", "On-site Installation & Curation"]
  },
  {
    id: "commercial",
    title: "Commercial & Hospitality",
    description: "Immersive interior design for luxury boutiques, high-end restaurants, boutique hotels, and retail flagships that elevate brand storytelling.",
    image: siteImages.serviceCommercial,
    features: ["Brand Identity Translation", "Regulatory & ADA Compliance", "High-Traffic Material Selection", "Acoustic & Lighting Solutions", "Custom Fixture Design"],
    pricing: "Custom Quote / From ₦25,000",
    process: ["Brand Integration Workshop", "Space Allocation & Traffic Analysis", "Detailed ID Documentation", "Contractor Liaison & Punchlist"]
  },
  {
    id: "custom-solutions",
    title: "Custom Architectural Solutions",
    description: "Detailed custom joinery, millwork, kitchen and bath engineering, and smart home automation layouts engineered with millimeter precision.",
    image: siteImages.serviceCustom,
    features: ["Millwork & Cabinetry Detailing", "Kitchen & Bath Spatial Layouts", "Appliance & Smart Integration", "Slab Curation (Marble/Quartz)", "Water-resistant Lighting Integration"],
    pricing: "From ₦8,000",
    process: ["Millwork Concept Sketches", "Technical Shop Drawings (CAD/BIM)", "Fabricator Collaboration", "White-Glove Installation supervision"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "vienna-penthouse",
    title: "Vienna Modernist Penthouse",
    category: "Residential",
    description: "A seamless synthesis of mid-century minimalism and warm modernist accents. The space utilizes polished travertine, dark walnut, and expansive linen partitions to invite natural light.",
    image: siteImages.projectViennaHero,
    beforeImage: siteImages.projectViennaBefore,
    afterImage: siteImages.projectViennaAfter,
    location: "Vienna, Austria",
    year: "2025",
    area: "3,400 sq. ft.",
    client: "Private Collector",
    scope: ["Full Spatial Layout Restructuring", "Custom Travertine Millwork", "Bespoke Lighting Design", "Furniture Curation"],
    images: [
      siteImages.projectViennaGallery1,
      siteImages.projectViennaGallery2,
      siteImages.projectViennaGallery3
    ],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-home-interior-living-room-with-fireplace-41712-large.mp4",
    threeDPreview: "Showroom Walkthrough Active. Drag mouse around center screen. 360 viewer loaded."
  },
  {
    id: "amalfi-villas",
    title: "Amalfi Cliffside Sanctuary",
    category: "Villas",
    description: "Perched high above the Mediterranean, this villa honors organic textures with custom stucco, raw limestone slabs, and neutral-toned linen furnishings.",
    image: siteImages.projectAmalfiHero,
    beforeImage: siteImages.projectAmalfiBefore,
    afterImage: siteImages.projectAmalfiAfter,
    location: "Positano, Italy",
    year: "2024",
    area: "6,800 sq. ft.",
    client: "Altman Estates",
    scope: ["Exterior & Interior Cohesion", "Infinity Pool Lounge Planning", "Bespoke Limestone Fireplace", "Imported Antique Accents"],
    images: [
      siteImages.projectAmalfiGallery1,
      siteImages.projectAmalfiGallery2,
      siteImages.projectAmalfiGallery3
    ],
    threeDPreview: "Interact with our cliffside interactive 3D tour. Hand-selected stone surfaces."
  },
  {
    id: "tokyo-minimalist-residence",
    title: "Tokyo Minimalist Pavillion",
    category: "Residential",
    description: "A deeply calming residential sanctuary utilizing Hinoki wood, microcement, and hidden storage systems to deliver an absolute state of Zen.",
    image: siteImages.projectTokyoHero,
    beforeImage: siteImages.projectTokyoBefore,
    afterImage: siteImages.projectTokyoAfter,
    location: "Tokyo, Japan",
    year: "2024",
    area: "2,200 sq. ft.",
    client: "Nakamura Family",
    scope: ["Japanese Architectural Integrity", "Bespoke Hinoki Wood Joinery", "Recessed Indirect Lighting", "Tatami Lounge Curation"],
    images: [
      siteImages.projectTokyoGallery1,
      siteImages.projectTokyoGallery2
    ]
  },
  {
    id: "berlin-office",
    title: "Berlin Creative Headquarters",
    category: "Commercial",
    description: "An adaptive reuse project turning an old power-station into a premium open-space workspace with raw concrete columns, industrial steel dividers, and velvet soundproofing booths.",
    image: siteImages.projectBerlinHero,
    beforeImage: siteImages.projectBerlinBefore,
    afterImage: siteImages.projectBerlinAfter,
    location: "Berlin, Germany",
    year: "2025",
    area: "12,000 sq. ft.",
    client: "Vektor Labs GmbH",
    scope: ["Acoustic Zoning Layout", "Industrial Architectural Preservation", "Modular Custom Desking", "Lush Bio-philic Design"],
    images: [
      siteImages.projectBerlinGallery1,
      siteImages.projectBerlinGallery2
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "elysian-sofa",
    name: "Elysian Modular Bouclé Sofa",
    category: "Living Room",
    price: 6850,
    material: "Alpaca Bouclé & Smoked Oak",
    brand: "IMB Home Finishers Atelier",
    collection: "L'Horizon",
    image: siteImages.productElysianMain,
    images: [
      siteImages.productElysianGallery1,
      siteImages.productElysianGallery2
    ],
    description: "Crafted with dynamic luxury in mind, the Elysian Modular Sofa features an expansive low profile upholstered in premium Italian Alpaca Bouclé. Its base of brushed oak sits flush with the ground, providing an anchored, grounding aesthetic.",
    rating: 4.9,
    reviewsCount: 14,
    dimensions: "W: 120\" x D: 42\" x H: 28\"",
    specifications: [
      "Frame: Kiln-dried solid hardwood with reinforced corners",
      "Upholstery: 72% Alpaca, 20% Wool, 8% Nylon",
      "Fill: High-density down feather wrapped memory foam",
      "Legs: Premium FSC-certified Solid European White Oak"
    ],
    downloads: ["3D CAD Model (DWG)", "Technical Specification PDF", "Upholstery Care Sheet"],
    available: true,
    featured: true
  },
  {
    id: "travertine-table",
    name: "IMB Home Finishers Travertine Coffee Table",
    category: "Living Room",
    price: 3400,
    material: "Honed Italian Travertine",
    brand: "IMB Home Finishers Atelier",
    collection: "Antica",
    image: siteImages.productTravertineMain,
    images: [
      siteImages.productTravertineGallery1,
      siteImages.productTravertineGallery2
    ],
    description: "An sculptural masterpiece hand-carved from a single monolith of unfilled Italian Travertine. The raw but smooth matte texture highlights millions of years of sediment layering.",
    rating: 4.8,
    reviewsCount: 8,
    dimensions: "W: 48\" x D: 48\" x H: 14\"",
    specifications: [
      "Material: Unfilled matte Italian Travertine",
      "Finish: Honed and water-repellent sealed",
      "Origin: Tuscany, Italy",
      "Weight: 185 lbs"
    ],
    downloads: ["Material Care Sheet (PDF)", "Tearsheet (PDF)"],
    available: true,
    featured: true
  },
  {
    id: "lumina-pendant",
    name: "Lumina Brushed Brass Pendant",
    category: "Lighting",
    price: 1850,
    material: "Satin Brass & Opaline Glass",
    brand: "Giacometti Light",
    collection: "Celestial",
    image: siteImages.productLuminaMain,
    images: [
      siteImages.productLuminaGallery1
    ],
    description: "A refined architectural statement, the Lumina pendant light diffuses a rich, warm amber glow through double-blown acid-etched opaline glass, held gracefully by a satin solid-brass armature.",
    rating: 5.0,
    reviewsCount: 5,
    dimensions: "Diameter: 22\" x Drop Length: Adjustable",
    specifications: [
      "Armature: Hand-spun Solid Brass with Satin finish",
      "Diffuser: Triple-blown frosted opaline glass",
      "Lamping: Integrated dimmable warm 2700K LED",
      "Voltage: 110-240V compatible"
    ],
    downloads: ["Installation Guide (PDF)", "Electrical Schematic (DWG)"],
    available: true,
    featured: true
  },
  {
    id: "zenith-bed",
    name: "Zenith Belgian Linen Bed",
    category: "Bedroom",
    price: 5200,
    material: "Belgian Linen & Walnut",
    brand: "IMB Home Finishers Atelier",
    collection: "Nid",
    image: siteImages.productZenithMain,
    images: [
      siteImages.productZenithGallery1,
      siteImages.productZenithGallery2
    ],
    description: "An elegant oasis of rest, the Zenith bed features a deeply padded headboard upholstered in high-weight organic Belgian linen, floating effortlessly over a slender American Walnut frame.",
    rating: 4.7,
    reviewsCount: 11,
    dimensions: "W: 84\" x D: 88\" x H: 46\" (King)",
    specifications: [
      "Fabric: 100% Organic Belgian Flax Linen",
      "Support: Multi-slat orthopedic design, no box spring required",
      "Legs: Oil-rubbed Solid American Walnut",
      "Upholstery Care: Professional dry-clean only"
    ],
    downloads: ["Assembly Instructions (PDF)", "Dimensions Template"],
    available: true,
    featured: false
  },
  {
    id: "kobenhavn-chair",
    name: "København Minimalist Lounge Chair",
    category: "Living Room",
    price: 2400,
    material: "Saddle Leather & Smoked Oak",
    brand: "Nordic Craft",
    collection: "Nordic Sol",
    image: siteImages.productKobenhavnMain,
    images: [
      siteImages.productKobenhavnGallery1
    ],
    description: "Evoking timeless Scandinavian comfort, this lounge chair suspends hand-stitched cognac saddle leather over a beautifully joinered frame of solid smoked European Oak.",
    rating: 4.9,
    reviewsCount: 20,
    dimensions: "W: 30\" x D: 32\" x H: 30\"",
    specifications: [
      "Frame: FSC-certified European Oak in smoked oil finish",
      "Leather: Full-grain vegetable tanned saddle leather from Tuscany",
      "Joints: Traditional tenon and mortise joinery",
      "Weight capacity: Up to 350 lbs"
    ],
    downloads: ["Assembly Guide (PDF)"],
    available: true,
    featured: false
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "warm-minimalism",
    title: "The Subtle Art of Warm Minimalism",
    category: "Interior Trends",
    snippet: "Discover how to balance expansive, clutter-free spaces with deeply emotional textures, historic timbers, and light control.",
    content: "Warm minimalism is more than just removing objects; it is an active curation of tactile sensations. Modern luxurious living spaces are moving away from cold, clinical glass-and-steel interiors towards organic, earthly alternatives. Key steps to master warm minimalism: 1. Opt for textured plaster instead of flat drywall. 2. Layer materials like bouclé, unlacquered brass, and unfilled travertine. 3. Prioritize architectural lighting over harsh recessed spot fixtures.",
    image: siteImages.blogWarmMinimalism,
    date: "July 12, 2026",
    author: "Elena Rostov (Founder)",
    readTime: "5 min read",
    featured: true
  },
  {
    id: "lighting-architecture",
    title: "Sculpting Space: Indirect Architectural Lighting",
    category: "Lighting Design",
    snippet: "Why the placement of hidden LED coves, low-angle sconces, and soft pendants dictate the entire emotional frequency of a villa.",
    content: "Lighting should never be an afterthought. In award-winning design, we do not light spaces; we cast shadows. By concealing LED ribbons inside baseboards, ceiling valances, and within raw stone cavities, we create floating elements. This article guides you on integrating DALI dimmers, low-glare darklight technology, and matching temperature profiles across a cohesive home environment.",
    image: siteImages.blogLightingArchitecture,
    date: "June 28, 2026",
    author: "Marcello Venti (Lighting Director)",
    readTime: "7 min read",
    featured: false
  },
  {
    id: "stone-craftsmanship",
    title: "Travertine, Marble, & Limestone Selection Guide",
    category: "Materials",
    snippet: "A senior designer's breakdown of unfilled vein-cut stones, quartz suitability, and how marble elevates standard millwork.",
    content: "Selecting high-end stone is like picking out museum artwork. Every slab of Arabescato, Travertine or Calacatta Gold tells a distinct structural story. We discuss the visual differences between cross-cut and vein-cut stones, how to treat unfilled pores for dining versus washroom spaces, and why unsealed honing offers the ultimate premium organic finish.",
    image: siteImages.blogStoneCraftsmanship,
    date: "May 15, 2026",
    author: "Nils Sjöberg (Senior Architect)",
    readTime: "9 min read",
    featured: false
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: "arabescato-marble",
    name: "Arabescato Vagli Marble",
    type: "Marble",
    description: "An incredibly elegant Tuscan marble characterized by bold, swirling charcoal grey veins on an icy white crystalline background.",
    image: siteImages.materialArabescato,
    color: "White / Dark Grey",
    origin: "Tuscany, Italy",
    finishes: ["Honed (Matte Premium)", "Polished", "Leathered"],
    suitability: ["Kitchen Countertops", "Fireplace Accents", "Luxury Baths", "Custom Vanities"]
  },
  {
    id: "smoked-oak",
    name: "Smoked European White Oak",
    type: "Hardwood",
    description: "Deeply fumed with ammonia before being saturated with organic natural plant oils, yielding an incredibly rich espresso tone with high grain contrast.",
    image: siteImages.materialSmokedOak,
    color: "Dark Espresso Walnut Tone",
    origin: "Bavaria, Germany",
    finishes: ["Brushed Oil", "Ultra-Matte Lacquer"],
    suitability: ["Floor Plankings", "Custom Architectural Joinery", "Slat Walls"]
  },
  {
    id: "unlacquered-brass",
    name: "Unlacquered Living Brass",
    type: "Metals",
    description: "Pure raw architectural brass with no chemical sealcoat. It oxidizes, patinates, and deepens in warmth based on localized air and human touch.",
    image: siteImages.materialBrass,
    color: "Satin Warm Gold to Dark Patina",
    origin: "Valais, Switzerland",
    finishes: ["Satin Brushed", "Hand-Rubbed Bronze"],
    suitability: ["Kitchen Plumbing Faucets", "Cabinet Hardware", "Custom Light Fixtures"]
  },
  {
    id: "belgian-linen",
    name: "Antwerp Heavy-Weight Flax Linen",
    type: "Fabrics",
    description: "Spun from natural organic flax fibers harvested in Belgium, containing beautiful irregular slubs that create depth and softness.",
    image: siteImages.materialBelgianLinen,
    color: "Oatmeal Beige / Alabaster",
    origin: "Antwerp, Belgium",
    finishes: ["Tumbled Soft", "Pre-washed Matte"],
    suitability: ["Drapery panels", "Lounge Upholstery", "Bed Headboards"]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "elena-rostov",
    name: "Elena Rostov",
    role: "Founder & Creative Director",
    image: siteImages.teamElena,
    bio: "With over 18 years in premium architecture and luxury development, Elena designs with a focus on tactile authenticity and architectural harmony. Her work has been showcased in Architectural Digest, Elle Decor, and ArchDaily.",
    social: { instagram: "@elena_interiors", linkedin: "elena-rostov" }
  },
  {
    id: "nils-sjoberg",
    name: "Nils Sjöberg",
    role: "Senior Architectural Architect",
    image: siteImages.teamNils,
    bio: "Nils studied at KTH Royal Institute of Technology in Stockholm. He brings a pristine Scandinavian aesthetic, emphasizing raw stone, timber structures, and clever concealed storage layout designs.",
    social: { linkedin: "nils-sjoberg" }
  },
  {
    id: "marcello-venti",
    name: "Marcello Venti",
    role: "Director of Lighting & Atmosphere",
    image: siteImages.teamMarcello,
    bio: "Marcello views lighting as invisible paint. He develops custom lighting profiles, specifying low-glare fixtures and integration details that ensure homes shift beautifully from dawn to midnight.",
    social: { instagram: "@marcello_lighting" }
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is your typical timeline for a luxury residential interior project?",
    answer: "A complete high-end residential interior project takes anywhere from 6 to 14 months. This includes a conceptual phase (1-2 months), detailed construction drawing and documentation phase (2 months), manufacturing custom joinery and procurement (2-3 months), and final staging (1 month).",
    category: "Process"
  },
  {
    id: "faq-2",
    question: "Do you handle the actual construction or only the designs?",
    answer: "We are an architectural and interior design studio. We produce millimeter-precise construction documents, joinery detailing, and material specifications. We collaborate closely with your general contractor, conducting regular on-site checks and supervision to ensure execution quality matches our design vision.",
    category: "Services"
  },
  {
    id: "faq-3",
    question: "Do you design internationally or only locally?",
    answer: "We design premium spaces worldwide. With our streamlined digital virtualization pipeline, BIM modeling, and extensive international manufacturer connections, we can supervise and install villas from Positano to Tokyo smoothly.",
    category: "Operations"
  },
  {
    id: "faq-4",
    question: "How do you select your suppliers and materials?",
    answer: "We work exclusively with boutique limestone quarries in Italy, sustainable oak forests in Germany, and local custom joiners who utilize historic handcrafting techniques combined with modern precision machinery.",
    category: "Sustainability"
  }
];
