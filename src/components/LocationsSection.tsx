import React from 'react';
import { MapPin, Navigation, Compass, Calendar, Plane } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

export const LocationsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#160F24] border-t border-[#705EFF]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-3">
              <Compass className="w-4 h-4 text-[#FF6082]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
                STUDIO & PAN-INDIA TRAVEL
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#FFE4F6] font-normal tracking-tight mb-5">
              Service Areas & Destinations
            </h2>

            <p className="text-sm text-[#D8CEE8] font-light leading-relaxed mb-8">
              Based at our private atelier in <strong className="text-[#FFE4F6] font-medium">Aurangabad, Bihar</strong>, Gautam Aadi and senior stylists travel extensively across India to bring high-end bridal beauty straight to your wedding suite or palace venue.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-[#0D0714] border border-[#705EFF]/30 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6082] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#FFE4F6] font-semibold">
                    Flagship Studio & Academy
                  </h4>
                  <p className="text-xs text-[#9E8EB0] mt-0.5">
                    Aurangabad, Bihar, India (By prior bridal appointment & bridal trials)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#0D0714] border border-[#705EFF]/30 flex items-start gap-3">
                <Plane className="w-5 h-5 text-[#B26CFF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#FFE4F6] font-semibold">
                    Destination Wedding Logistics
                  </h4>
                  <p className="text-xs text-[#9E8EB0] mt-0.5">
                    Flights/transit and hotel accommodation arranged for outstation wedding schedules. Punctual on-site reporting guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Destination Cards & Luxury Map Representation */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D0714] border border-[#705EFF]/35 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#705EFF]/20">
                <span className="text-xs uppercase tracking-[0.2em] text-[#B26CFF] font-medium">
                  Frequently Booked Regions
                </span>
                <span className="text-[11px] text-[#9E8EB0]">
                  2025–2026 Season Calendar Open
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ARTIST_DATA.destinations.map((dest, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#160F24] border border-[#705EFF]/20 hover:border-[#B26CFF] transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg text-[#FFE4F6]">
                        {dest.city}
                      </span>
                      <span className="w-1.5 h-1.5 bg-[#B26CFF]/60" />
                    </div>
                    <div>
                      <p className="text-xs text-[#D8CEE8]">{dest.state}</p>
                      <span className="inline-block mt-2 text-[9px] uppercase tracking-wider text-[#FF6082] bg-[#0D0714] px-2 py-0.5 border border-[#705EFF]/30">
                        {dest.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#705EFF]/15 text-center">
                <p className="text-xs text-[#9E8EB0]">
                  Don't see your city listed? We travel worldwide for bespoke bridal commissions.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
