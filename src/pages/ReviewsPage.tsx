import React from 'react';
import { Quote, ArrowRight, Check } from 'lucide-react';
import { TESTIMONIALS } from '../data/makeupData';

interface ReviewsPageProps {
  onBookClick: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onBookClick }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Royal Palette Gradient Hero Banner (No background image, pure luxury gradient & separate palette glows) */}
      <div className="relative w-full py-16 sm:py-24 bg-gradient-to-br from-[#120524] via-[#1E0938] to-[#0A0314] overflow-hidden text-white border-b border-[#705EFF]/25">
        <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#705EFF]/25 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#FF6082]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-72 h-72 rounded-full bg-[#B26CFF]/20 blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <span className="font-cursive text-3xl sm:text-4xl text-[#FF6082] block mb-2">
            Real Stories & Warm Words
          </span>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF6082]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B26CFF] font-semibold">
              Client Feedback
            </span>
            <span className="w-5 h-[2px] bg-[#705EFF]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight mb-4">
            What Our Brides Say
          </h1>
          <p className="text-sm sm:text-base text-[#D8CEE8] font-light max-w-xl leading-relaxed">
            Read real feedback and experiences from brides who trusted us with their special wedding celebrations.
          </p>
        </div>
      </div>

      {/* Main Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
            OVER 500+ HAPPY CELEBRATIONS
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26]">
            Genuine Client Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="glass-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-5 h-5 text-[#FF6082]" />
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#705EFF] font-semibold bg-[#705EFF]/10 px-2 py-0.5 rounded-sm">
                    <Check className="w-3 h-3 text-[#FF6082]" />
                    Verified Bride
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#705EFF]/30 mb-2" />
                <p className="text-xs sm:text-sm text-[#4A3A5E] font-light leading-relaxed italic mb-6">
                  "{review.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#705EFF]/15">
                <h4 className="font-serif text-base sm:text-lg font-semibold text-[#1A0B26]">
                  {review.name}
                </h4>
                <p className="text-xs text-[#7A698F] mt-0.5">
                  {review.role} • {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-panel p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <span className="font-cursive text-3xl text-[#FF6082] block mb-2">
            Your Day Deserves The Best
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1A0B26] mb-3">
            Ready to Plan Your Wedding Look?
          </h3>
          <p className="text-xs sm:text-sm text-[#4A3A5E] max-w-md mx-auto mb-6 font-light">
            Contact us today to check date availability and discuss how we can make you feel your most beautiful.
          </p>
          <button
            onClick={onBookClick}
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#FF6082]/25 cursor-pointer hover:opacity-95 rounded-sm"
          >
            <span>Book Your Date</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
};
