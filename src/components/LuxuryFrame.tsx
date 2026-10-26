import React from 'react';

interface LuxuryFrameProps {
  src: string;
  alt: string;
  aspect?: string; // e.g. 'aspect-[4/5]', 'aspect-[3/4]', 'aspect-[1/1]'
  objectPosition?: string; // defaults to 'object-contain object-center'
  padding?: string; // e.g. 'p-2 sm:p-2.5' or 'p-3'
  cornerAccents?: boolean;
  className?: string;
  imageClassName?: string;
  overlayBadge?: React.ReactNode;
  overlayBottom?: React.ReactNode;
  onClick?: () => void;
  priority?: boolean;
}

export const LuxuryFrame: React.FC<LuxuryFrameProps> = ({
  src,
  alt,
  aspect = 'aspect-[4/5]',
  objectPosition = 'object-contain object-center',
  padding = 'p-2 sm:p-2.5',
  cornerAccents = true,
  className = '',
  imageClassName = '',
  overlayBadge,
  overlayBottom,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-[#160F24] border border-[#705EFF]/35 shadow-xl transition-all duration-500 hover:border-[#B26CFF] hover:shadow-[0_12px_35px_rgba(178,108,255,0.28)] ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* 4 Delicate Royal Corner Accents in Haute Rose & Lilac */}
      {cornerAccents && (
        <>
          <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#FF6082] opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#B26CFF] opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
          <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#B26CFF] opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
          <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#FF6082] opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
        </>
      )}

      {/* Frame Passe-Partout Matte Padding */}
      <div className={`w-full h-full ${padding}`}>
        {/* Inner Bordered Image Container - Engineered to display entire uncropped image */}
        <div className={`relative w-full h-full ${aspect} overflow-hidden border border-[#705EFF]/30 bg-[#09040F] flex items-center justify-center`}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`w-full h-full ${objectPosition} filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out ${imageClassName}`}
          />

          {/* Luxury Ambient Shimmer Sweep Animation on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

          {/* Optional Overlay Badge (e.g. Signature Look, Event tag) */}
          {overlayBadge && (
            <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
              {overlayBadge}
            </div>
          )}

          {/* Optional Bottom Overlay */}
          {overlayBottom && (
            <div className="absolute bottom-0 inset-x-0 z-20 p-2 sm:p-2.5 pointer-events-none">
              {overlayBottom}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
