import React from 'react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { TransformationItem } from '../data/makeupData';

interface TransformationsPageProps {
  onBookTransformation: (item: TransformationItem) => void;
}

export const TransformationsPage: React.FC<TransformationsPageProps> = ({
  onBookTransformation
}) => {
  return (
    <div className="bg-[#FAF7FC] min-h-screen text-[#1A0B26]">
      {/* 1. Proper Landscape AI-Generated Hero Section */}
      <div className="relative w-full h-[52vh] min-h-[380px] max-h-[580px] overflow-hidden bg-[#0D0714]">
        <img
          src="/assets/heroes/transformations_hero.jpg"
          alt="Luxury Bridal Transformation Atelier"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0714] via-[#0D0714]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0714]/85 via-transparent to-[#0D0714]/70" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 sm:pb-14">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-6 h-[2px] bg-[#FF6082]" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                BEFORE & AFTER REVELATIONS
              </span>
              <span className="w-6 h-[2px] bg-[#705EFF]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              The Magic of Nuance & <br />
              <span className="text-blue-reveal italic font-light">
                Bridal Transformation
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Interactive Transformation Component */}
      <div className="py-8 sm:py-16">
        <BeforeAfterSlider
          onBookTransformation={onBookTransformation}
        />
      </div>
    </div>
  );
};
