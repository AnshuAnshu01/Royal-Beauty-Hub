import React from 'react';

interface LuxuryFrameProps {
  src: string;
  alt: string;
  aspect?: string; // defaults to 'aspect-[4/5]' to match authentic bridal portrait dimensions
  objectPosition?: string; // defaults to 'object-contain object-center'
  padding?: string; // e.g. 'p-2 sm:p-2.5'
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
      className={`group relative bg-white border border-[#705EFF]/20 shadow-md transition-all duration-500 hover:border-[#705EFF]/45 hover:shadow-xl ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* 4 Delicate Royal Corner Accents in Rose & Lilac */}
      {cornerAccents && (
        <>
          <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#FF6082] opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#B26CFF] opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
          <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#705EFF] opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
          <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#FF6082] opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
        </>
      )}

      {/* Frame Passe-Partout Matte Padding */}
      <div className={`w-full h-full ${padding}`}>
        {/* Inner Bordered Image Container - Engineered to display 100% of the photograph without cropping */}
        <div className={`relative w-full h-full ${aspect} overflow-hidden border border-[#705EFF]/25 bg-gradient-to-b from-[#140A1E] to-[#0A0410] flex items-center justify-center`}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`w-full h-full ${objectPosition} filter brightness-[0.99] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out ${imageClassName}`}
          />

          {/* Luxury Ambient Shimmer Sweep Animation on Hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

          {/* Optional Overlay Badge */}
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
