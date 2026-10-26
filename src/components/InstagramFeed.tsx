import React from 'react';
import { Instagram, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, ARTIST_DATA } from '../data/makeupData';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0D0714] border-t border-[#705EFF]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Handle & Direct Follow Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Instagram className="w-4 h-4 text-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                LATEST ATELIER REELS & FEED
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FFE4F6] font-normal">
              Follow {ARTIST_DATA.handle}
            </h2>
            <p className="text-xs text-[#D8CEE8] mt-1 font-light">
              Daily behind-the-scenes, reel transformations, masterclasses, and live bridal beauty updates.
            </p>
          </div>

          <a
            href={ARTIST_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-[#705EFF] hover:bg-gradient-to-r hover:from-[#FF6082] hover:via-[#B26CFF] hover:to-[#705EFF] text-[#B26CFF] hover:text-white hover:border-transparent text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md group shrink-0"
          >
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={ARTIST_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#160F24] border border-[#705EFF]/30 p-1.5 sm:p-2 hover:border-[#B26CFF] hover:shadow-[0_8px_30px_rgba(178,108,255,0.25)] transition-all duration-500 block"
            >
              {/* Corner Accents */}
              <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
              <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#B26CFF] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
              <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#FF6082] opacity-75 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />

              <div className="relative aspect-[4/5] overflow-hidden border border-[#705EFF]/20 bg-[#09040F] flex items-center justify-center">
                <img
                  src={post.imageUrl}
                  alt="Instagram bridal look"
                  className="w-full h-full object-contain filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Subtle Shimmer Sweep on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#B26CFF]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                {/* Hover Overlay with stats */}
                <div className="absolute inset-0 bg-[#0D0714]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-3 text-center z-20">
                  <Instagram className="w-5 h-5 text-[#FF6082] mb-2" />
                  <div className="flex items-center gap-3 text-xs text-[#FFE4F6] mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#FF6082] text-[#FF6082]" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-[#B26CFF]" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[10px] text-[#D8CEE8] line-clamp-2 italic">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
