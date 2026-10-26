import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { PageRoute } from '../components/Navbar';
import { SERVICES, GALLERY_ITEMS, TESTIMONIALS } from '../data/makeupData';
import { ArrowRight, Eye, Crown, Clock, Check, Quote } from 'lucide-react';

interface HomePageProps {
  onOpenBookingModal: (serviceId?: string, lookTitle?: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBookingModal,
  onNavigate
}) => {
  // Top 4 signature looks for instant visual delight
  const showcaseLooks = GALLERY_ITEMS.slice(0, 4);

  // Top 3 curated popular packages
  const featuredServices = SERVICES.slice(0, 3);

  // Top 2 genuine client reviews
  const featuredReviews = TESTIMONIALS.slice(0, 2);

  return (
    <div className="bg-[#FAF7FC] text-[#1A0B26]">
      {/* 1. Video Hero (Sits cleanly below header with zero overlap) */}
      <Hero
        onBookClick={() => onOpenBookingModal()}
        onExploreClick={() => onNavigate('services')}
      />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 2.5 SIGNATURE MASTERPIECE SPOTLIGHT FRAME */}
      <section className="py-12 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#FAF7FC] via-[#F6EEFB] to-[#FAF7FC]">
        {/* Glowing auras with separate palette colors */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF6082]/15 blur-[120px] pointer-events-none animate-royal-glow" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#705EFF]/15 blur-[120px] pointer-events-none animate-royal-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-1">
              The Royal Bride of the Season
            </span>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#705EFF] font-semibold">
                SIGNATURE MASTERPIECE
              </span>
              <span className="w-5 h-[2px] bg-[#705EFF]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal">
              Timeless Indian Grandeur
            </h2>
          </div>

          {/* Masterpiece Split Card */}
          <div className="glass-panel p-5 sm:p-8 md:p-12 border border-[#705EFF]/25 shadow-2xl relative overflow-hidden">
            {/* 4 Royal Corner Filigrees */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#FF6082] pointer-events-none z-20" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#B26CFF] pointer-events-none z-20" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#705EFF] pointer-events-none z-20" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#FF6082] pointer-events-none z-20" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Left Column: Floating Animated Luxury Frame */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative group max-w-sm sm:max-w-md w-full animate-royal-float">
                  {/* Pulsing background glow ring */}
                  <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#FF6082]/35 via-[#B26CFF]/35 to-[#705EFF]/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Outer Ornate Luxury Frame */}
                  <div className="relative p-3 sm:p-4 bg-gradient-to-b from-[#1C0A33] via-[#120524] to-[#090214] rounded-sm shadow-2xl border border-[#B26CFF]/40">
                    
                    {/* Inner Golden/Rose Trim */}
                    <div className="relative aspect-square w-full overflow-hidden border border-[#FF6082]/40 bg-black flex items-center justify-center">
                      <img
                        src="/assets/aistudio/Screenshot_2026-10-25_224048_8767214b.png"
                        alt="Royal Beauty Hub Signature Bride"
                        className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      {/* Subtle interactive shimmer overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3 left-3 bg-[#0D0714]/90 backdrop-blur-md border border-[#FF6082]/60 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 shadow-lg">
                        Signature Couture Look
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & Detailed Highlights */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#FF6082]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                    ARTISTRY IN EVERY DETAIL
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal leading-snug">
                  The Royal Heritage Bridal Look
                </h3>

                <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed">
                  Crafted personally by Gautam Aadi, this look pairs timeless Indian bridal grace with modern glass skin techniques. Designed to look breathtaking under ceremonial lights, camera close-ups, and in real life.
                </p>

                {/* 3 Signature Highlights */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-white/75 border border-[#705EFF]/15 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#FF6082]/10 border border-[#FF6082]/30 flex items-center justify-center text-[#FF6082] shrink-0 mt-0.5">
                      <Crown className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1A0B26] uppercase tracking-wider">Glass Skin & Sweatproof Longevity</h4>
                      <p className="text-[11px] text-[#4A3A5E] font-light mt-0.5">Breathable, weightless finish that stays fresh and radiant through the entire wedding ritual.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white/75 border border-[#705EFF]/15 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#705EFF]/10 border border-[#705EFF]/30 flex items-center justify-center text-[#705EFF] shrink-0 mt-0.5">
                      <Eye className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1A0B26] uppercase tracking-wider">Regal Kohl & Shimmer Eyes</h4>
                      <p className="text-[11px] text-[#4A3A5E] font-light mt-0.5">Deep kohl definition with delicate bronze shimmer customized to your outfit and eye shape.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white/75 border border-[#705EFF]/15 rounded-sm">
                    <div className="w-8 h-8 rounded-full bg-[#B26CFF]/10 border border-[#B26CFF]/30 flex items-center justify-center text-[#B26CFF] shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#1A0B26] uppercase tracking-wider">Bespoke Dupatta & Nath Placement</h4>
                      <p className="text-[11px] text-[#4A3A5E] font-light mt-0.5">Secure, feather-light anchoring for bridal veils, matha patti, and royal nath with complete ease of movement.</p>
                    </div>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenBookingModal(undefined, "Royal Heritage Bridal Look")}
                    className="px-6 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.18em] font-bold shadow-lg shadow-[#FF6082]/25 hover:opacity-95 transition-all cursor-pointer rounded-sm"
                  >
                    Reserve This Bridal Look
                  </button>

                  <button
                    onClick={() => onNavigate('gallery')}
                    className="px-6 py-3.5 border border-[#705EFF]/40 hover:border-[#705EFF] bg-white text-[#1A0B26] text-xs uppercase tracking-[0.18em] font-semibold hover:text-[#705EFF] transition-all cursor-pointer rounded-sm"
                  >
                    View In Gallery
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Real Brides & Signature Looks */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="font-cursive text-2xl sm:text-3xl text-[#FF6082] block mb-1">
              Timeless & Glowing
            </span>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#705EFF] font-semibold">
                Real Wedding Looks
              </span>
              <span className="w-5 h-[2px] bg-[#705EFF]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal">
              Our Beautiful Brides
            </h2>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#705EFF] hover:text-[#FF6082] font-bold group cursor-pointer transition-colors"
          >
            <span>See All Photos</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 2-Column Smartphone Grid / 4-Column Desktop Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {showcaseLooks.map((look) => (
            <div
              key={look.id}
              onClick={() => onNavigate('gallery')}
              className="glass-card p-2 sm:p-2.5 cursor-pointer group shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#FF6082] pointer-events-none z-20" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#B26CFF] pointer-events-none z-20" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#705EFF] pointer-events-none z-20" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#FF6082] pointer-events-none z-20" />

              {/* Fully Visible Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#705EFF]/20 bg-gradient-to-b from-[#140A1E] to-[#0A0410] flex items-center justify-center">
                <img
                  src={look.image}
                  alt={look.title}
                  loading="lazy"
                  className="w-full h-full object-contain object-center filter brightness-[0.99] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="pt-2 pb-1 px-1">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.16em] text-[#FF6082] font-semibold block truncate">
                  {look.event}
                </span>
                <h3 className="font-serif text-xs sm:text-sm text-[#1A0B26] font-medium truncate group-hover:text-[#705EFF] transition-colors">
                  {look.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center sm:hidden">
          <button
            onClick={() => onNavigate('gallery')}
            className="w-full py-3 bg-white border border-[#705EFF]/30 text-[#705EFF] text-xs uppercase tracking-wider font-bold shadow-sm"
          >
            View All Photos ({GALLERY_ITEMS.length}+) →
          </button>
        </div>
      </section>

      {/* 4. Bridal Packages & Services (No Price Details) */}
      <section className="py-12 sm:py-20 bg-white border-y border-[#705EFF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="font-cursive text-2xl sm:text-3xl text-[#705EFF] block mb-1">
                Specially Made For You
              </span>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#FF6082]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                  Bridal Packages
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal">
                Signature Bridal Services
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#705EFF] hover:text-[#FF6082] font-bold group cursor-pointer transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="glass-card flex flex-col justify-between overflow-hidden relative shadow-md hover:shadow-xl transition-all group"
              >
                {/* Uncropped Frame */}
                <div className="p-2.5 sm:p-3 bg-[#FAF7FC] border-b border-[#705EFF]/15 relative">
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#FF6082] to-[#B26CFF] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 shadow-md shadow-[#FF6082]/30">
                      Most Popular
                    </div>
                  )}

                  {/* Royal Corner Accents */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#FF6082] pointer-events-none z-20" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#B26CFF] pointer-events-none z-20" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#705EFF] pointer-events-none z-20" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#FF6082] pointer-events-none z-20" />

                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#705EFF]/25 bg-gradient-to-b from-[#140A1E] to-[#0A0410] flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-contain object-center filter brightness-[0.99] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-[#1A0B26] font-semibold mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#4A3A5E] font-light leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Price completely removed; showing service duration and booking CTA */}
                  <div className="pt-3 border-t border-[#705EFF]/15 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-[#705EFF] font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>
                    <button
                      onClick={() => onOpenBookingModal(service.id)}
                      className="px-4 py-2 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold shadow-sm cursor-pointer hover:opacity-95 rounded-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Client Reviews */}
      <section className="py-12 sm:py-20 bg-[#FAF7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="font-cursive text-2xl sm:text-3xl text-[#FF6082] block mb-1">
                Happy Words
              </span>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#FF6082]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                  What Brides Say
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal">
                Loved by 500+ Happy Brides
              </h2>
            </div>

            <button
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#705EFF] hover:text-[#FF6082] font-bold group cursor-pointer transition-colors"
            >
              <span>Read All Reviews</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredReviews.map((review) => (
              <div key={review.id} className="glass-card p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-5 h-5 text-[#FF6082]" />
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#705EFF] font-semibold bg-[#705EFF]/10 px-2 py-0.5 rounded-sm">
                      <Check className="w-3 h-3 text-[#FF6082]" />
                      Verified Bride
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed italic mb-6">
                    "{review.review}"
                  </p>
                </div>
                <div className="pt-3 border-t border-[#705EFF]/15">
                  <h4 className="font-serif text-base font-semibold text-[#1A0B26]">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#7A698F]">
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Friendly Booking Call To Action with Royal Gradient */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] text-white relative overflow-hidden">
        {/* Subtle royal background glow spots */}
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#705EFF]/20 blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#FF6082]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            Let's Make You Look Stunning
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <Crown className="w-4 h-4 text-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              Only One Bride Per Day
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-4 text-[#FFE4F6]">
            Reserve Your Wedding Date
          </h2>

          <p className="text-xs sm:text-sm text-[#D8CEE8] font-light max-w-lg mx-auto mb-8 leading-relaxed">
            We give our complete time and heart to you on your wedding day. Dates book quickly, so reach out today to secure your day with Gautam Aadi.
          </p>

          <button
            onClick={() => onOpenBookingModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-xl shadow-[#FF6082]/30 hover:opacity-95 transition-all cursor-pointer rounded-sm"
          >
            <span>Check Wedding Date Availability</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};
