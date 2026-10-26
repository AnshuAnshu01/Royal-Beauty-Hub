import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollTotal > 0 ? Math.min(Math.max((scrollY / scrollTotal) * 100, 0), 100) : 0;

      setScrollProgress(progress);
      setVisible(scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius; // ~113.097
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="hidden lg:flex fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-[#0D0714]/95 backdrop-blur-md items-center justify-center group shadow-2xl hover:shadow-[0_0_25px_rgba(178,108,255,0.45)] transition-all duration-300 cursor-pointer border border-[#705EFF]/40 hover:border-[#B26CFF] animate-in fade-in zoom-in-75"
      aria-label="Scroll to top"
      title={`Scrolled ${Math.round(scrollProgress)}% - Click to return to top`}
    >
      {/* SVG Progress Ring */}
      <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 44 44">
        {/* Background track circle */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          className="text-[#705EFF]/20"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="transparent"
        />
        {/* Filling progress stroke */}
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="#FF6082"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100 ease-out origin-center -rotate-90"
        />
      </svg>

      {/* Center Up Arrow */}
      <ArrowUp className="w-4 h-4 text-[#B26CFF] group-hover:text-[#FFE4F6] group-hover:-translate-y-0.5 transition-all relative z-10" />
    </button>
  );
};
