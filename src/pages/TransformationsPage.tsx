import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Check, ShieldCheck } from 'lucide-react';
import { TRANSFORMATIONS, TransformationItem } from '../data/makeupData';

interface TransformationsPageProps {
  onBookTransformation: (item: TransformationItem) => void;
  currentLang: 'EN' | 'HI';
}

export const TransformationsPage: React.FC<TransformationsPageProps> = ({
  onBookTransformation,
  currentLang
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = TRANSFORMATIONS[selectedIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div className="pt-24 pb-28 bg-[#0D0714] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              TRANSFORMATION PORTFOLIO
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#FF6082]" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            The Magic of Nuance
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            Drag the royal separator to reveal authentic bridal transformations. We celebrate and enhance natural features, banishing cakiness while sculpting glowing royalty.
          </p>

          {/* Transformation Switchers */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {TRANSFORMATIONS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIdx(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#705EFF]/30'
                    : 'bg-[#160F24] text-[#D8CEE8] hover:text-[#FFE4F6] border border-[#705EFF]/30'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Widget */}
        <div className="max-w-4xl mx-auto mt-14">
          <div className="bg-[#160F24] border border-[#705EFF]/35 p-4 sm:p-6 shadow-2xl relative">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#705EFF]/20 gap-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF6082] font-medium">
                  {current.eventType}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FFE4F6] font-normal">
                  {current.subtitle}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-[#D8CEE8]">
                <ArrowLeftRight className="w-3.5 h-3.5 text-[#FF6082]" />
                <span>Drag slider to compare</span>
              </div>
            </div>

            <div
              ref={containerRef}
              onClick={handleContainerClick}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[620px] overflow-hidden select-none cursor-ew-resize border border-[#705EFF]/30 bg-[#09040F] flex items-center justify-center"
            >
              <img
                src={current.afterImage}
                alt="After Makeup Artistry"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />
              <span className="absolute top-4 right-4 z-10 bg-[#0D0714]/90 border border-[#705EFF]/50 text-[#FFE4F6] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold backdrop-blur-sm pointer-events-none shadow-md">
                AFTER GA ARTISTRY
              </span>

              <div
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.beforeImage}
                  alt="Before Makeup"
                  className="absolute inset-y-0 left-0 max-w-none h-full object-contain pointer-events-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  }}
                />
                <span className="absolute top-4 left-4 z-10 bg-[#0D0714]/90 border border-[#705EFF]/50 text-[#FFE4F6] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold backdrop-blur-sm shadow-md">
                  BEFORE (RAW SKIN)
                </span>
              </div>

              <div
                className="absolute inset-y-0 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-gradient-to-b from-[#FF6082] via-[#B26CFF] to-[#705EFF] shadow-[0_0_12px_rgba(178,108,255,0.85)]" />

                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#160F24] border-2 border-[#FF6082] shadow-lg flex items-center justify-center text-[#FFE4F6]">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#705EFF]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs text-[#D8CEE8] leading-relaxed max-w-xl font-light">
                <strong className="text-[#FFE4F6] font-medium">Technique Breakdown: </strong>
                {current.details}
              </p>
              <button
                onClick={() => onBookTransformation(current)}
                className="shrink-0 px-6 py-2.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-opacity cursor-pointer shadow-md shadow-[#705EFF]/30"
              >
                ENQUIRE FOR THIS LOOK →
              </button>
            </div>

          </div>
        </div>

        {/* Transformation Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="p-6 bg-[#160F24] border border-[#705EFF]/30">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#FF6082] to-[#B26CFF] mb-3 block" />
            <h4 className="font-serif text-lg text-[#FFE4F6] mb-2 font-normal">
              Texture Respect
            </h4>
            <p className="text-xs text-[#9E8EB0] leading-relaxed">
              We never conceal healthy skin texture. Our micro-atomized layering illuminates facial contours while looking like authentic radiant skin in person.
            </p>
          </div>

          <div className="p-6 bg-[#160F24] border border-[#705EFF]/30">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#FF6082] to-[#B26CFF] mb-3 block" />
            <h4 className="font-serif text-lg text-[#FFE4F6] mb-2 font-normal">
              Flashback Immunity
            </h4>
            <p className="text-xs text-[#9E8EB0] leading-relaxed">
              Every formula is rigorously tested against high-intensity wedding camera strobes to guarantee zero white cast or ghostly reflections.
            </p>
          </div>

          <div className="p-6 bg-[#160F24] border border-[#705EFF]/30">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#FF6082] to-[#B26CFF] mb-3 block" />
            <h4 className="font-serif text-lg text-[#FFE4F6] mb-2 font-normal">
              24H Tears & Sweat Resistance
            </h4>
            <p className="text-xs text-[#9E8EB0] leading-relaxed">
              Indian weddings involve sacred emotional rituals. Our locking sprays and waterproof bases endure emotional vidai and humid phera hours.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
