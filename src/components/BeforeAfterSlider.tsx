import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { TRANSFORMATIONS, TransformationItem } from '../data/makeupData';

interface BeforeAfterSliderProps {
  onBookTransformation: (item: TransformationItem) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  onBookTransformation
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
    <div className="w-full">
      {/* Transformation Presets Tabs with Smooth Touch Scrolling */}
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-2 px-1">
        {TRANSFORMATIONS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedIdx(idx);
              setSliderPosition(50);
            }}
            className={`shrink-0 px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all cursor-pointer ${
              selectedIdx === idx
                ? 'bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] text-white font-bold shadow-md shadow-[#FF6082]/25'
                : 'bg-white text-[#4A3A5E] hover:text-[#1A0B26] border border-[#705EFF]/20 hover:border-[#705EFF]'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Comparison Widget Card */}
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-4 sm:p-6 shadow-xl relative">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3.5 border-b border-[#705EFF]/15 gap-2">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#FF6082] font-semibold">
                {current.eventType}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1A0B26] font-normal">
                {current.subtitle}
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-[#7A698F]">
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#705EFF]" />
              <span>Drag slider to compare</span>
            </div>
          </div>

          {/* Draggable Canvas with Dark Frame for True Contrast */}
          <div
            ref={containerRef}
            onClick={handleContainerClick}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => handleMove(e.touches[0].clientX)}
            onTouchMove={handleTouchMove}
            className="relative aspect-[4/5] sm:aspect-[3/4] max-h-[580px] overflow-hidden select-none cursor-ew-resize border border-[#705EFF]/30 bg-[#09040F] touch-pan-x flex items-center justify-center"
          >
            {/* AFTER Image (Full background) */}
            <img
              src={current.afterImage}
              alt="After Makeup Artistry"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
            <span className="absolute top-3.5 right-3.5 z-10 bg-black/80 border border-[#705EFF]/40 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 font-semibold backdrop-blur-sm pointer-events-none">
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
              <span className="absolute top-3.5 left-3.5 z-10 bg-black/80 border border-[#FF6082]/40 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 font-semibold backdrop-blur-sm">
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
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#160F24] border-2 border-[#B26CFF] shadow-lg flex items-center justify-center text-white">
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Slider Bottom Details */}
          <div className="mt-4 pt-3.5 border-t border-[#705EFF]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-xs text-[#4A3A5E] leading-relaxed max-w-xl font-light">
              <strong className="text-[#1A0B26] font-medium">Technique: </strong>
              {current.details}
            </p>
            <button
              onClick={() => onBookTransformation(current)}
              className="w-full md:w-auto shrink-0 px-6 py-2.5 bg-gradient-to-r from-[#FF6082] via-[#B26CFF] to-[#705EFF] hover:opacity-95 text-white text-xs uppercase tracking-[0.18em] font-semibold shadow-md shadow-[#FF6082]/25 cursor-pointer text-center"
            >
              Enquire For This Look →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
