import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/makeupData';

interface ReviewsPageProps {
  onBookClick: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onBookClick }) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[52vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/reviews_hero.jpg"
          alt="Royal Wedding Reception Celebration"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                VERIFIED BRIDAL WORDS
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              Cherished Memories & <br />
              <span className="text-blue-reveal italic font-light">
                Royal Testimonials
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Reviews Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold block mb-2">
            500+ BRIDES CELEBRATED
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#1A0B26]">
            In Their Own Words
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="glass-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#FF6082]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#705EFF] font-semibold bg-[#705EFF]/10 px-2 py-0.5">
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
                <p className="text-xs text-[#7A698F]">
                  {review.role} • {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white text-xs uppercase tracking-[0.2em] font-bold shadow-lg shadow-[#FF6082]/25 cursor-pointer"
          >
            <span>Reserve Your Date With Gautam</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
