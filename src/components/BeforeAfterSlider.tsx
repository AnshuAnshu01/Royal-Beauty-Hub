import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, ArrowLeftRight, Check } from 'lucide-react';
import { TRANSFORMATIONS, TransformationItem } from '../data/makeupData';

interface BeforeAfterSliderProps {
  onBookTransformation: (item: TransformationItem) => void;
  currentLang: 'EN' | 'HI';
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  onBookTransformation,
  currentLang
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
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
    <section id="transformations" className="relative py-24 sm:py-32 bg-[#160F24] border-t border-[#705EFF]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1.5px] bg-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              BEFORE & AFTER ARTISTRY
            </span>
            <span className="w-8 h-[1.5px] bg-[#B26CFF]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            The Magic of Nuance
          </h2>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed">
            Drag the royal separator to reveal authentic bridal transformations. Honoring your natural features while elevating skin luminosity and regal presence.
          </p>

          {/* Transformation Presets Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 overflow-x-auto no-scrollbar pb-2 px-1">
            {TRANSFORMATIONS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIdx(idx);
                  setSliderPosition(50);
                }}
                className={`shrink-0 px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#FF6082]/25'
                    : 'bg-[#0D0714] text-[#D8CEE8] hover:text-[#FFE4F6] border border-[#705EFF]/25 hover:border-[#B26CFF]'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0D0714] border border-[#705EFF]/35 p-4 sm:p-6 shadow-2xl relative">
            
            {/* Header info */}
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
                <ArrowLeftRight className="w-3.5 h-3.5 text-[#B26CFF]" />
                <span>Drag slider to compare</span>
              </div>
            </div>

            {/* Draggable Canvas */}
            <div
              ref={containerRef}
              onClick={handleContainerClick}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => handleMove(e.touches[0].clientX)}
              onTouchMove={handleTouchMove}
              className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[620px] overflow-hidden select-none cursor-ew-resize border border-[#705EFF]/30 bg-[#09040F] touch-pan-x flex items-center justify-center"
            >
              {/* AFTER Image (Full background) */}
              <img
                src={current.afterImage}
                alt="After Makeup Artistry"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />
              <span className="absolute top-4 right-4 z-10 bg-[#0D0714]/90 border border-[#705EFF]/40 text-[#FFE4F6] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold backdrop-blur-sm pointer-events-none">
                AFTER GA ARTISTRY
              </span>

              {/* BEFORE Image (Clipped overlay) */}
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
                <span className="absolute top-4 left-4 z-10 bg-[#0D0714]/90 border border-[#FF6082]/40 text-[#FFE4F6] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-semibold backdrop-blur-sm">
                  BEFORE (RAW SKIN)
                </span>
              </div>

              {/* Royal Divider Line */}
              <div
                className="absolute inset-y-0 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-gradient-to-b from-[#705EFF] via-[#B26CFF] to-[#FF6082] shadow-[0_0_12px_rgba(178,108,255,0.8)]" />

                {/* Center Handle Button */}
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#160F24] border-2 border-[#B26CFF] shadow-lg flex items-center justify-center text-[#FFE4F6]">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Slider Instructions & Details */}
            <div className="mt-6 pt-4 border-t border-[#705EFF]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs text-[#D8CEE8] leading-relaxed max-w-xl font-light">
                <strong className="text-[#FFE4F6] font-medium">Technique: </strong>
                {current.details}
              </p>
              <button
                onClick={() => onBookTransformation(current)}
                className="shrink-0 px-6 py-2.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow-md shadow-[#FF6082]/25"
              >
                ENQUIRE FOR THIS LOOK →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
