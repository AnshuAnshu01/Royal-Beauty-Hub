import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { PageRoute } from '../components/Navbar';
import { SERVICES, GALLERY_ITEMS, TESTIMONIALS, TRANSFORMATIONS, TransformationItem } from '../data/makeupData';
import { ArrowRight, Sparkles, Star, Check, Eye } from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface HomePageProps {
  onOpenBookingModal: (serviceId?: string, lookTitle?: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBookingModal,
  onNavigate
}) => {
  // Top 4 signature showcase looks for the concise landing page
  const showcaseLooks = GALLERY_ITEMS.slice(0, 4);

  // Top 3 curated services
  const featuredServices = SERVICES.slice(0, 3);

  // Top 2 testimonials
  const featuredReviews = TESTIMONIALS.slice(0, 2);

  return (
    <div className="bg-[#FAF7FC] text-[#1A0B26]">
      {/* 1. Cinematic Hero with Video Background (Sits right below sticky header with zero overlap) */}
      <Hero
        onBookClick={() => onOpenBookingModal()}
        onExploreClick={() => onNavigate('services')}
      />

      {/* 2. Slim Luxury Trust & Brand Ticker */}
      <TrustStrip />

      {/* 3. SHOWCASING WORKS: Curated Bridal Artistry Showcase */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                CURATED ARTISTRY SHOWCASE
              </span>
              <span className="w-5 h-[2px] bg-[#705EFF]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal">
              Signature Works & Royal Brides
            </h2>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#705EFF] hover:text-[#FF6082] font-bold group cursor-pointer transition-colors"
          >
            <span>Explore Full Lookbook</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 2-Column Smartphone Grid / 4-Column Desktop Grid for Instant Visual Impact */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          {showcaseLooks.map((look) => (
            <div
              key={look.id}
              onClick={() => onNavigate('gallery')}
              className="glass-card p-1.5 sm:p-2.5 cursor-pointer group shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#FAF7FC] border border-[#705EFF]/15">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm p-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
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
            View All Gallery Looks ({GALLERY_ITEMS.length}+) →
          </button>
        </div>
      </section>

      {/* 4. ESSENTIAL SERVICES PREVIEW */}
      <section className="py-12 sm:py-20 bg-white border-y border-[#705EFF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#FF6082]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                  BESPOKE PACKAGES
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
              <span>View All Services & Pricing</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="glass-card flex flex-col justify-between overflow-hidden relative shadow-md hover:shadow-xl transition-all"
              >
                {service.popular && (
                  <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#FF6082] to-[#B26CFF] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-0.5 shadow-sm">
                    Signature
                  </div>
                )}

                <div className="aspect-[16/10] overflow-hidden bg-[#FAF7FC]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
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

                  <div className="pt-3 border-t border-[#705EFF]/15 flex items-center justify-between">
                    <span className="font-serif text-base text-[#705EFF] font-bold">
                      {service.startingPrice}
                    </span>
                    <button
                      onClick={() => onOpenBookingModal(service.id)}
                      className="px-4 py-2 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold shadow-sm"
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

      {/* 5. NUANCE TRANSFORMATION PREVIEW */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                BEFORE & AFTER REVELATION
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal">
              The Magic of Natural Nuance
            </h2>
          </div>

          <button
            onClick={() => onNavigate('transformations')}
            className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#705EFF] hover:text-[#FF6082] font-bold group cursor-pointer transition-colors"
          >
            <span>View All Transformations</span>
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Compact Before & After Component */}
        <BeforeAfterSlider
          onBookTransformation={(item: TransformationItem) => onOpenBookingModal(undefined, item.title)}
        />
      </section>

      {/* 6. VERIFIED BRIDAL WORDS HIGHLIGHTS */}
      <section className="py-12 sm:py-20 bg-white border-t border-[#705EFF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#FF6082]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#FF6082] font-semibold">
                  HONEST EXPERIENCES
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26] font-normal">
                Loved by 500+ Royal Brides
              </h2>
            </div>

            <button
              onClick={() => onNavigate('reviews')}
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#705EFF] hover:text-[#FF6082] font-bold group cursor-pointer transition-colors"
            >
              <span>Read All Verified Reviews</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {featuredReviews.map((review) => (
              <div key={review.id} className="glass-card p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#FF6082] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
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

      {/* 7. QUICK RESERVATION BANNER */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#1A0B26] via-[#2A123D] to-[#1A0B26] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              ONE BRIDE PER CEREMONY MUHURAT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight mb-4 text-[#FFE4F6]">
            Reserve Your Wedding Date
          </h2>

          <p className="text-xs sm:text-sm text-[#D8CEE8] font-light max-w-lg mx-auto mb-8 leading-relaxed">
            Due to our commitment to undivided artistic attention, dates fill months in advance. Verify your slot with Gautam Aadi today.
          </p>

          <button
            onClick={() => onOpenBookingModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-xl shadow-[#FF6082]/30 hover:opacity-95 transition-all cursor-pointer"
          >
            <span>Check Wedding Date Availability</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};
