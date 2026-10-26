export interface MakeupService {
  id: string;
  title: string;
  category: 'bridal' | 'celebration' | 'specialty';
  tagline: string;
  description: string;
  startingPrice: string;
  duration: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'engagement' | 'reception' | 'party' | 'natural-glam' | 'airbrush';
  event: string;
  description: string;
  image: string;
  palette: string[];
  technique: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  subtitle: string;
  eventType: string;
  beforeImage: string;
  afterImage: string;
  details: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  eventDate: string;
  image: string;
  rating: number;
  review: string;
  lookTitle: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  link: string;
}

export const ARTIST_DATA = {
  name: "Gautam Aadi",
  brandName: "Royal Beauty Hub",
  logoUrl: "/assets/aistudio/Royal Beauty Hub Logo.png",
  handle: "@makeup_by_gautam_aadi",
  instagramUrl: "https://www.instagram.com/makeup_by_gautam_aadi?obrf=MTd3ejR1MW44bG5iNQ==",
  phone: "+91 99316 89790",
  whatsappNumber: "919931689790",
  contactNumber: "9931689790",
  studioLocation: "Aurangabad, Bihar, India",
  experienceYears: "6+",
  bridesCount: "500+",
  transformationsCount: "1200+",
  satisfactionRate: "100%",
  tagline: "Where Beauty Becomes Art",
  shortBio: "Celebrity & luxury bridal makeup artist celebrated for ethereal glass skin, regal Indian bridal transformations, and couture eye artistry. Crafting bespoke beauty narratives that honour your natural grace.",
  philosophy: "We believe makeup should never look like a mask. Our signature artistry sculpts your natural bone structure, illuminates skin undertones, and harmonizes seamlessly with your wedding couture, heirloom jewellery, and sacred bridal emotion.",
  destinations: [
    { city: "Aurangabad & Patna", state: "Bihar (Flagship Atelier)", type: "Studio & On-Site" },
    { city: "Gaya & Varanasi", state: "Bihar / Uttar Pradesh", type: "On-Location" },
    { city: "Kolkata & Ranchi", state: "East India", type: "On-Location" },
    { city: "Delhi NCR & Mumbai", state: "Metro Hubs", type: "Destination & Bridal Tours" },
    { city: "Jaipur & Udaipur", state: "Rajasthan", type: "Royal Palace Weddings" },
    { city: "Goa & International", state: "Coastal & Global", type: "Destination Weddings" }
  ],
  luxuryProducts: [
    { brand: "Dior Backstage", item: "Glow Face Palette & High-Coverage Foundation" },
    { brand: "Charlotte Tilbury", item: "Flawless Filter & Airbrush Flawless Finish" },
    { brand: "Huda Beauty", item: "Empowered Eyeshadows & FauxFilter Setting" },
    { brand: "NARS Cosmetics", item: "Radiant Creamy Concealer & Orgasm Blush" },
    { brand: "MAC Cosmetics", item: "Studio Fix & Retro Matte Lip Colours" },
    { brand: "Laura Mercier", item: "Translucent Loose Setting Powder" },
    { brand: "Estée Lauder", item: "Double Wear 24H Stay-in-Place" },
    { brand: "Anastasia Beverly Hills", item: "Brow Definer & Soft Glam Palette" }
  ]
};

export const SERVICES: MakeupService[] = [
  {
    id: "royal-bridal",
    title: "Royal Traditional Bridal",
    category: "bridal",
    tagline: "Timeless regal allure for sacred wedding vows",
    description: "The epitome of Indian bridal splendour. Sculpted for traditional red, maroon, and crimson lehengas, pairing flawless 24-hour waterproof base with intricate eye artistry, sculpted definition, and heirloom jewel harmonization.",
    startingPrice: "₹25,000",
    duration: "3.5 Hours",
    popular: true,
    image: "/assets/aistudio/Screenshot_2026-10-25_223840_9e31f0f8.png",
    features: [
      "Custom skin barrier prep & luxury hydration infusion",
      "Full 24-Hour sweat & tear-proof HD coverage",
      "Signature regal cut-crease or smokey eye artistry",
      "Premium 3D mink eyelashes & lash customization",
      "Bridal hair sculpture (Russian bun, floral gajra or contemporary)",
      "Double dupatta draping & heirloom jewellery setting",
      "Emergency bridal touch-up kit included"
    ]
  },
  {
    id: "hd-airbrush-bridal",
    title: "HD & Airbrush Bridal Artistry",
    category: "bridal",
    tagline: "Ultra-featherweight 4K cinematic perfection",
    description: "Micro-atomized airbrush foundation delivering an ultra-smooth porcelain finish that looks completely seamless in 4K photography and high-definition video. Weightless, smudge-proof, and breathtakingly radiant.",
    startingPrice: "₹32,000",
    duration: "3.5 Hours",
    popular: true,
    image: "/assets/aistudio/Screenshot_2026-10-25_223956_93f9be68.png",
    features: [
      "TEMPTU Pro micro-misting airbrush application",
      "Glass skin luminous finish with zero cakiness",
      "Waterproof, transfer-resistant 24h wear",
      "Couture eye styling with Swarovski crystals/gold leaf",
      "Luxury hairstyle with imported accessories",
      "Couture designer lehenga/saree draping",
      "Touch-up survival kit & travel mini setting spray"
    ]
  },
  {
    id: "modern-pastel-bridal",
    title: "Modern Minimalist Royal Bride",
    category: "bridal",
    tagline: "Dewy champagne glow for outdoor & daytime pheras",
    description: "Conceived specifically for modern brides donning pastel blush, ivory, mint, or peach couture. Focuses on lit-from-within glass skin, rose gold champagne lids, soft flushed cheeks, and romantic textured hair.",
    startingPrice: "₹24,000",
    duration: "3 Hours",
    image: "/assets/aistudio/Screenshot_2026-10-25_224153_937514fc.png",
    features: [
      "Ultra-hydrating peptide skincare prep",
      "Luminous champagne glass-skin finish",
      "Monochromatic soft glam eyes with wispy lashes",
      "Romantic textured messy bun or Hollywood waves",
      "Fresh floral setting & jewellery placement",
      "Dupatta pinning & styling",
      "Bespoke lip color blending"
    ]
  },
  {
    id: "engagement-roka",
    title: "Engagement & Roka Makeover",
    category: "celebration",
    tagline: "Effortless sophisticated radiance for your ring ceremony",
    description: "A refined celebration look designed for high-energy cocktail ceremonies, ring exchanges, and engagement portraits. Balances youthful, glowing skin with captivating eyes.",
    startingPrice: "₹18,000",
    duration: "2.5 Hours",
    popular: false,
    image: "/assets/aistudio/Screenshot_2026-10-25_223848_f6458070.png",
    features: [
      "Radiant radiant base tailored to event lighting",
      "Gilded shimmer or soft smoky eye look",
      "Dimensional cheek sculpting & radiant highlight",
      "Modern party hair styling (waves, pony or half-up)",
      "Designer outfit draping & accessory placement",
      "Premium false lashes included"
    ]
  },
  {
    id: "reception-sangeet-glam",
    title: "Reception & Sangeet Glamour",
    category: "celebration",
    tagline: "High-impact red carpet glamour for dance & celebration",
    description: "Striking, glamorous, and show-stopping artistry. Tailored for evening lighting, chandelier glitz, and non-stop sangeet dancing with humidity-resistant locking sprays.",
    startingPrice: "₹20,000",
    duration: "2.5 Hours",
    image: "/assets/aistudio/Screenshot_2026-10-25_224029_dfd56b0c.png",
    features: [
      "Sweat-resistant high-durability HD base",
      "Dramatic winged smokey or gilded halo eye",
      "Statement lip color (deep berry, classic red, or luxe nude)",
      "Glamorous Hollywood waves or textured volume updo",
      "Gown or Indo-western saree draping",
      "High-glow body shimmer collarbone highlight"
    ]
  },
  {
    id: "party-bridesmaid",
    title: "Party & Bridesmaids Makeover",
    category: "celebration",
    tagline: "Polished elegance for mothers, sisters & bridal entourage",
    description: "Chic, luminous makeup that complements the wedding theme while making every member of the bride's inner circle look and feel extraordinary.",
    startingPrice: "₹10,000",
    duration: "1.5 Hours",
    image: "/assets/aistudio/Screenshot_2026-10-25_223705_a9181cb4.png",
    features: [
      "Long-wearing HD foundation & contouring",
      "Soft glam eye styling suited to outfit colors",
      "Natural mink lash enhancement",
      "Curling, straightening or party blowout hair",
      "Basic saree / dupatta pinning"
    ]
  },
  {
    id: "luxury-hairstyling",
    title: "Luxury Hair Sculpture & Extensions",
    category: "specialty",
    tagline: "Architectural bridal updos, romantic waves & extensions",
    description: "Mastery in structural bridal hair architecture. From regal crown bouffants and intricate braided gajras to flowing red carpet mermaid curls and seamless clip-in extension blending.",
    startingPrice: "₹8,000",
    duration: "1.5 Hours",
    image: "/assets/aistudio/Screenshot_2026-10-25_224205_ac2e2a2e.png",
    features: [
      "Heat protection & texture prep with premium Dyson tools",
      "Architectural backcombing & hair padding structure",
      "Extension installation & tone-matching integration",
      "Mathapatti, maang tikka & floral gajra anchoring",
      "Micro-fine anti-frizz long hold seal"
    ]
  },
  {
    id: "saree-dupatta-draping",
    title: "Couture Saree & Dupatta Draping",
    category: "specialty",
    tagline: "Flawless pleating & royal double-dupatta anchoring",
    description: "Precision draping service for luxury bridal ensembles. Perfect pleats that move fluidly and remain comfortable and secure throughout whole-day ceremonies.",
    startingPrice: "₹4,500",
    duration: "45 Mins",
    image: "/assets/aistudio/Screenshot_2026-10-25_223728_43b0fd23.png",
    features: [
      "Traditional & modern styles (Gujarati, Bengali, South Indian)",
      "Royal double dupatta placement (head & shoulder)",
      "Pre-pleating and iron pressing on request",
      "Invisible safety pinning & comfort weight distribution"
    ]
  },
  {
    id: "editorial-photoshoots",
    title: "Editorial & High-Fashion Shoots",
    category: "specialty",
    tagline: "Avant-garde beauty for campaigns, lookbooks & magazines",
    description: "Creative beauty direction for designer bridal campaigns, jewellery brand lookbooks, model portfolios, and high-fashion editorial publications.",
    startingPrice: "₹30,000 / Day",
    duration: "Full / Half Day",
    image: "/assets/aistudio/Screenshot_2026-10-25_223828_1a93b8ef.png",
    features: [
      "Mood-board conception & color story development",
      "Studio strobe and outdoor natural light optimization",
      "Continuous on-set touch-ups and look changes",
      "Collaborative workflow with photographers & stylists"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Maharani Dupatta Vows",
    category: "bridal",
    event: "Royal Traditional Wedding",
    description: "Deep burgundy embroidered dupatta paired with polished gold leaf lids, winged liner, and rich bordeaux lips.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223840_9e31f0f8.png",
    palette: ["#800020", "#C9A15A", "#F4EFE7"],
    technique: "Airbrush HD Base + 24H Waterproof Seal"
  },
  {
    id: "gal-2",
    title: "Polki Royal Splendour",
    category: "bridal",
    event: "Sacred Phera Ceremony",
    description: "Opulent crimson lehenga, heavy polki choker harmonization, and dewy glass-skin reflection.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223956_93f9be68.png",
    palette: ["#8B0000", "#D6B77A", "#F4EFE7"],
    technique: "Micro-Atomized Airbrush Foundation"
  },
  {
    id: "gal-3",
    title: "Banarasi Royal Purple",
    category: "engagement",
    event: "Ring Ceremony & Sangeet",
    description: "Rich purple banarasi silk with intricate kundan neckpiece, sculpted cheekbones, and velvet nude lips.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223848_f6458070.png",
    palette: ["#4B0082", "#C9A15A", "#F4EFE7"],
    technique: "Strobe Highlighting + Satin Finish"
  },
  {
    id: "gal-4",
    title: "Warm Candlelight Reception",
    category: "reception",
    event: "Grand Reception Gala",
    description: "Gilded metallic lids, sculpted bronzed cheekbones, and soft cashmere nude lips for an evening soiree.",
    image: "/assets/aistudio/Screenshot_2026-10-25_224029_dfd56b0c.png",
    palette: ["#D6B77A", "#2E1C12", "#E8D5B0"],
    technique: "Strobe Highlighting + Flawless Filter"
  },
  {
    id: "gal-5",
    title: "Velvet Emerald Heritage",
    category: "bridal",
    event: "Heritage Palace Wedding",
    description: "Deep velvet crimson lehenga with emerald-encrusted polki choker, royal bindi, and timeless eye definition.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223637_9e87b90a.png",
    palette: ["#800000", "#004D40", "#C9A15A"],
    technique: "24-Hour Sweat-Resistant HD Coverage"
  },
  {
    id: "gal-6",
    title: "Floral Mogra Couture",
    category: "airbrush",
    event: "Editorial Bridal Campaign",
    description: "Flawless porcelain canvas reflecting ambient light with fresh mogra floral hair architecture and velvet burgundy tones.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223828_1a93b8ef.png",
    palette: ["#F4EFE7", "#BFA896", "#C9A15A"],
    technique: "TEMPTU Pro Micro-Mist Airbrushing"
  },
  {
    id: "gal-7",
    title: "White Rose Bridal Muse",
    category: "bridal",
    event: "Daytime Contemporary Wedding",
    description: "Clean side-profile bridal portrait holding white roses, soft smoked lash line, and radiant glass-skin hydration.",
    image: "/assets/aistudio/Screenshot_2026-10-25_224153_937514fc.png",
    palette: ["#EADAC2", "#8B0000", "#F4EFE7"],
    technique: "Hydra-Infusion Base + Soft Focus Powder"
  },
  {
    id: "gal-8",
    title: "Royal Palace Destination Couple",
    category: "reception",
    event: "Destination Royal Wedding",
    description: "Grand outdoor palace evening reception look with regal jewelry harmony and camera-ready cinematic longevity.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223541_a11b4b30.png",
    palette: ["#120D09", "#8B0000", "#C9A15A"],
    technique: "HD Flash-Proof Base & Anti-Shine Matte Finish"
  },
  {
    id: "gal-9",
    title: "Intricate Mathapatti & Nath",
    category: "bridal",
    event: "Traditional Bihari Phera",
    description: "Delicate nose ring positioning, intricate kundan mathapatti anchoring, and soft winged eye definition.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223603_4c185a5b.png",
    palette: ["#990000", "#FFD700", "#18120D"],
    technique: "Traditional Kohl Smoke + Matte Lip Lock"
  },
  {
    id: "gal-10",
    title: "Sacred Mother's Blessing",
    category: "natural-glam",
    event: "Intimate Haldi & Blessing Rite",
    description: "Tender emotional moment between mother and daughter, captured with luminous raw skin clarity and tear-proof sealer.",
    image: "/assets/aistudio/Screenshot_2026-10-25_224103_c4de64a4.png",
    palette: ["#A52A2A", "#D6B77A", "#F4EFE7"],
    technique: "Tear-Resistant Barrier Infusion"
  },
  {
    id: "gal-11",
    title: "Scarlet Chooda & Kaleere",
    category: "bridal",
    event: "Anand Karaj / Hindu Wedding",
    description: "Intricately embroidered crimson dupatta paired with classic bridal chooda and golden floral kaleere.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223907_8dd074fb.png",
    palette: ["#B22222", "#DAA520", "#18120D"],
    technique: "All-Day Waterproof Bridal Base"
  },
  {
    id: "gal-12",
    title: "Traditional Mandap Vows",
    category: "party",
    event: "Sacred Vows Ceremony",
    description: "Classic gold jhumar / passa arrangement with maroon velvet lehenga and luminous glass-skin radiance.",
    image: "/assets/aistudio/Screenshot_2026-10-25_223755_99b6168f.png",
    palette: ["#800020", "#C9A15A", "#F4EFE7"],
    technique: "Sweat-Resistant Matte Glow"
  }
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "trans-1",
    title: "Raw Prep to Royal Crimson Bride",
    subtitle: "Sacred Wedding Day Transformation",
    eventType: "Traditional Hindu Wedding • Patna",
    beforeImage: "/assets/aistudio/Screenshot_2026-10-25_223705_a9181cb4.png",
    afterImage: "/assets/aistudio/Screenshot_2026-10-25_223840_9e31f0f8.png",
    details: "Corrected subtle undertone shifts with peach correctors, infused hyaluronic hydration, and sculpted cheekbones to balance her royal kundan mathapatti and embroidered sheer dupatta. The 24-hour waterproof base remained pristine through all rituals."
  },
  {
    id: "trans-2",
    title: "Silk Saree to Candlelight Reception",
    subtitle: "Cocktail & Reception Transformation",
    eventType: "Ring Ceremony & Sangeet • Varanasi",
    beforeImage: "/assets/aistudio/Screenshot_2026-10-25_223728_43b0fd23.png",
    afterImage: "/assets/aistudio/Screenshot_2026-10-25_224029_dfd56b0c.png",
    details: "Balanced warm undertones using Charlotte Tilbury Flawless Filter, applied a golden gradient eye with sculpted cheekbones and velvet lips that reflected the warm evening chandeliers."
  },
  {
    id: "trans-3",
    title: "Engagement Banarasi to Grand Ballroom",
    subtitle: "Palace Destination Transformation",
    eventType: "Grand Ballroom Reception • Udaipur",
    beforeImage: "/assets/aistudio/Screenshot_2026-10-25_223848_f6458070.png",
    afterImage: "/assets/aistudio/Screenshot_2026-10-25_223521_34d4e4e5.png",
    details: "Transitioned from an intimate pre-wedding ceremony look into a breathtaking royal ballroom entrance look with high-definition flash-proof perfection."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Tanya Singh",
    role: "Bride",
    location: "Patna, Bihar",
    eventDate: "December 2025",
    image: "/assets/aistudio/Screenshot_2026-10-25_223840_9e31f0f8.png",
    rating: 5,
    lookTitle: "Royal Banarasi Heritage Bride",
    review: "Gautam is not just a makeup artist; he is a magician. I was extremely nervous about looking overdone or cakey because I rarely wear heavy makeup. Gautam listened to every single detail, matched my skin tone impeccably, and created the most royal, glowing bridal look I could ever dream of. My makeup stayed intact for 14 hours straight through laughter, tears, and rituals!"
  },
  {
    id: "test-2",
    name: "Shreya Sharma",
    role: "Bride (Destination Wedding)",
    location: "Udaipur, Rajasthan",
    eventDate: "January 2026",
    image: "/assets/aistudio/Screenshot_2026-10-25_223956_93f9be68.png",
    rating: 5,
    lookTitle: "Modern Royal Lehenga Glam",
    review: "We booked Gautam for our palace wedding in Udaipur for both Sangeet and Wedding day. His professionalism, calm demeanor amidst wedding chaos, and mastery with high-end luxury products made me feel like royalty. Every guest kept asking who did my makeup. The airbrush technique is pure sorcery!"
  },
  {
    id: "test-3",
    name: "Aparna Sinha",
    role: "Bride",
    location: "Aurangabad, Bihar",
    eventDate: "November 2025",
    image: "/assets/aistudio/Screenshot_2026-10-25_224029_dfd56b0c.png",
    rating: 5,
    lookTitle: "Traditional Red Bridal & Double Dupatta",
    review: "Finding an artist of international editorial caliber in Bihar felt impossible until I discovered @makeup_by_gautam_aadi on Instagram. Gautam’s dupatta draping and jewellery placement are unmatched. He took care of me like a personal stylist. Highly recommend booking well in advance!"
  },
  {
    id: "test-4",
    name: "Megha Chatterjee",
    role: "Reception Bride",
    location: "Kolkata, West Bengal",
    eventDate: "February 2026",
    image: "/assets/aistudio/Screenshot_2026-10-25_223637_9e87b90a.png",
    rating: 5,
    lookTitle: "Chandelier Velvet Glam",
    review: "The glow on my skin was unbelievable. Gautam customized the lip shade right in front of me to match the subtle gold embroidery on my reception sari. The photographs turned out straight from Vogue. Thank you Gautam for making me feel so beautiful!"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-25_224048_8767214b.png",
    caption: "The timeless crimson bride. Royal kundan jewellery and classic winged kohl artistry. #MakeupByGautamAadi",
    likes: "2,480",
    comments: "142",
    link: "https://www.instagram.com/makeup_by_gautam_aadi"
  },
  {
    id: "ig-2",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-25_223828_1a93b8ef.png",
    caption: "Skin that breathes luxury. Micro-fine HD airbrush finish captured in raw studio light.",
    likes: "3,120",
    comments: "208",
    link: "https://www.instagram.com/makeup_by_gautam_aadi"
  },
  {
    id: "ig-3",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-25_224116_3bace064.png",
    caption: "Subtle gold eyelids and dewy glass skin with intricate nath styling.",
    likes: "1,890",
    comments: "98",
    link: "https://www.instagram.com/makeup_by_gautam_aadi"
  },
  {
    id: "ig-4",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-25_223541_a11b4b30.png",
    caption: "Palace wedding moments. Royal groom and bride in majestic crimson and black.",
    likes: "4,250",
    comments: "315",
    link: "https://www.instagram.com/makeup_by_gautam_aadi"
  },
  {
    id: "ig-5",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-25_224205_ac2e2a2e.png",
    caption: "Hair sculpture and floral gajra architecture for the royal wedding day.",
    likes: "2,760",
    comments: "164",
    link: "https://www.instagram.com/makeup_by_gautam_aadi"
  },
  {
    id: "ig-6",
    imageUrl: "/assets/aistudio/Screenshot_2026-10-25_223907_8dd074fb.png",
    caption: "Scarlet chooda and golden kaleere ceremony. Serene, regal, and timeless.",
    likes: "3,890",
    comments: "240",
    link: "https://www.instagram.com/makeup_by_gautam_aadi"
  }
];

export const BRIDAL_ATELIER_STEPS = [
  {
    step: "01",
    title: "The Vision & Consultation",
    subtitle: "Understanding your story & aesthetic",
    description: "Every bride is unique. We delve into your wedding mood board, venue lighting, skin type, facial bone structure, bridal lehenga shades, and heirloom jewellery to design your cohesive beauty harmony.",
    features: ["Skin type analysis & prep protocol", "Attire & jewellery harmony check", "Lighting & time-of-day alignment"]
  },
  {
    step: "02",
    title: "Bespoke Palette Architecture",
    subtitle: "Formulating your signature hues",
    description: "We map custom lip shades, undertone neutralizing pigments, and eyeshadow palettes. We curate the exact luxury foundations and setting formulas that withstand emotions and humidity.",
    features: ["Custom lip shade formulation", "High-coverage waterproof selection", "Lash volume & curl matching"]
  },
  {
    step: "03",
    title: "The Atelier Trial & Preview",
    subtitle: "Perfecting every millimeter in advance",
    description: "A hands-on trial session where you experience the textures, preview the complete look under simulated event lighting, test hairstyle architecture, and make refinements with zero wedding day stress.",
    features: ["Complete half or full-face trial", "Hairstyle silhouette test", "High-res reference documentation"]
  },
  {
    step: "04",
    title: "Sacred Wedding Day Artistry",
    subtitle: "A serene, punctual luxury experience",
    description: "On your auspicious day, Gautam and his elite team arrive on-location with the sanitized luxury kit. You relax in a calm, pampering sanctuary while we bring your dream bridal manifestation to life.",
    features: ["Punctual on-site arrival", "Relaxing lymphatic facial massage", "Bridal survival & touch-up kit"]
  }
];

export const FAQ_ITEMS = [
  {
    q: "How far in advance should I book my bridal makeup?",
    a: "Due to high wedding season demand across Bihar, Uttar Pradesh, and pan-India destination venues, we recommend booking your dates 3 to 6 months in advance. Dates are reserved strictly upon token advance confirmation."
  },
  {
    q: "Do you travel to venues and destination weddings outside Aurangabad?",
    a: "Yes, absolutely! Gautam Aadi travels across India and internationally for weddings. We frequently travel to Patna, Gaya, Varanasi, Kolkata, Ranchi, Delhi NCR, Jaipur, and Udaipur. Travel logistics and accommodation are arranged based on location."
  },
  {
    q: "What luxury makeup brands do you use in your kit?",
    a: "We use 100% original, dermatologically-tested international luxury brands: Dior Backstage, Charlotte Tilbury, Huda Beauty, NARS, MAC Cosmetics, Laura Mercier, Anastasia Beverly Hills, and Estée Lauder."
  },
  {
    q: "Is hair styling and dupatta/saree draping included in the bridal package?",
    a: "Yes, our luxury bridal packages are comprehensive and include bespoke facial makeup, professional bridal hair styling, accessory placement (mathapatti, maang tikka, flowers), and couture dupatta/saree draping."
  },
  {
    q: "How do I confirm my booking?",
    a: "You can submit the enquiry form below or click the WhatsApp button to chat directly with Gautam Aadi. We will verify date availability, share customized package details, and secure your slot upon token advance."
  }
];
