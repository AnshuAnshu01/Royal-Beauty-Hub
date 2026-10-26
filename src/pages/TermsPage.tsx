import React from 'react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { ARTIST_DATA } from '../data/makeupData';

interface TermsPageProps {
  currentLang: 'EN' | 'HI';
}

export const TermsPage: React.FC<TermsPageProps> = ({ currentLang }) => {
  return (
    <div className="pt-24 pb-28 bg-[#0D0714] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center pt-8 pb-14 border-b border-[#705EFF]/25">
          <div className="inline-flex items-center gap-2 mb-3">
            <FileText className="w-4 h-4 text-[#FF6082]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6082] font-semibold">
              LEGAL & ATELIER GUIDELINES
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#FFE4F6] font-normal tracking-tight mb-4">
            Terms & Conditions
          </h1>

          <p className="text-sm sm:text-base text-[#D8CEE8] font-light leading-relaxed max-w-2xl mx-auto">
            Please read these terms and conditions carefully before booking bridal or beauty services with Makeup by Gautam Aadi. Reserving a date indicates mutual agreement.
          </p>

          <p className="text-xs text-[#9E8EB0] mt-2">
            Last Updated: October 2026 • Applicable to Studio & Destination Bookings
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-[#D8CEE8] text-sm leading-relaxed font-light mt-12">
          
          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              1. Date Reservation & Token Advance
            </h2>
            <p className="mb-3">
              Due to extreme wedding season demand, inquiries or verbal discussions do not hold or block a date. A wedding date is officially reserved strictly upon receipt of the mutually agreed token advance (typically 40% of the bridal package) and receipt of our booking confirmation letter.
            </p>
            <p>
              The remaining balance must be settled on or prior to the completion of the wedding day services.
            </p>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              2. Cancellation, Rescheduling & Refund Policy
            </h2>
            <p className="mb-3">
              Because an artist commits exclusively to your auspicious time slot and turns down competing inquiries for that date, token advance deposits are non-refundable in the event of client cancellation.
            </p>
            <p className="mb-3">
              <strong className="text-[#FFE4F6]">Date Rescheduling:</strong> Rescheduling requests made at least 45 days prior to the event date will be accommodated subject to Gautam Aadi's calendar availability. If the new requested date is already committed, standard cancellation terms apply.
            </p>
            <p>
              <strong className="text-[#FFE4F6]">Force Majeure:</strong> In rare unforeseen circumstances (e.g., severe natural acts, government travel bans), both parties agree to collaborate in good faith toward an amicable alternative or date credit.
            </p>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              3. Destination Wedding Travel & Logistics
            </h2>
            <p className="mb-3">
              For on-location bookings outside Aurangabad, Bihar (such as Patna, Varanasi, Gaya, Kolkata, Delhi, Rajasthan palace venues, or international locations), flight/train transit tickets, airport transfers, and secure hotel lodging for the artist and assistants are to be provided or reimbursed by the client as per the bridal agreement.
            </p>
            <p>
              Our team guarantees punctual arrival and setup prior to the scheduled bridal readiness window.
            </p>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              4. Client Skin Health, Disclosures & Allergies
            </h2>
            <p className="mb-3">
              It is the client's sole responsibility to notify the artist of any known skin allergies, contact dermatitis, sensitive eye conditions, active dermatological treatments (e.g. chemical peels, Accutane, retinol), or contagious eye/skin conditions prior to the application session.
            </p>
            <p>
              While all luxury cosmetic products in Gautam Aadi's kit (Dior, Charlotte Tilbury, Huda Beauty, MAC, etc.) are authentic, dermatologically tested, and sanitized, we cannot be held liable for undisclosed individual allergic reactions.
            </p>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              5. Bridal Suite Requirements & Readiness
            </h2>
            <p className="mb-3">
              To achieve editorial-grade bridal perfection, the client must ensure the bridal dressing room or hotel suite has:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs mb-3 text-[#FFE4F6]/90">
              <li>Ample white or neutral lighting (or access to daylight windows)</li>
              <li>A cleared work table and accessible electrical power outlets for hair styling tools</li>
              <li>Comfortable room temperature to prevent skin perspiration during prep</li>
              <li>Clean, dry, unconditioned hair and thoroughly washed, moisturized face ready at the call time</li>
            </ul>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              6. Photography & Social Media Portfolio Rights
            </h2>
            <p className="mb-3">
              Gautam Aadi reserves the right to capture high-resolution before & after photographs, video reels, and bridal portraits during or after the session for professional portfolio display, website showcases, and social media channels (@makeup_by_gautam_aadi).
            </p>
            <p>
              If a bride wishes to opt out of public social media sharing due to private family traditions, this must be explicitly requested in writing during booking confirmation.
            </p>
          </section>

          <section className="bg-[#160F24] border border-[#705EFF]/25 p-6 sm:p-8 shadow-xl">
            <h2 className="font-serif text-2xl text-[#FFE4F6] mb-3 font-normal">
              7. Contact & Official Notices
            </h2>
            <p>
              For any legal or contractual inquiries, please reach out to our administration at:
              <br />
              <strong className="text-[#FFE4F6]">Makeup by Gautam Aadi</strong>
              <br />
              Contact Number: 9931689790 (+91 99316 89790) | WhatsApp: 9931689790
              <br />
              Aurangabad, Bihar, India (Pan-India Travel Available).
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
