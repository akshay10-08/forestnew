import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { RESORT_FACTS } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[var(--color-forest)] text-[var(--color-ivory)] pt-20 pb-10 relative overflow-hidden">
      {/* Decorative leaf/line top border could go here */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-30" />
      
      <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          <Wordmark className="mb-4" />
          <p className="text-sm opacity-80 max-w-xs mt-2 text-balance leading-relaxed">
            {RESORT_FACTS.tagline} {RESORT_FACTS.locationContext}
          </p>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-[var(--color-gold)]">Explore</h4>
          <ul className="space-y-3 text-sm tracking-wide opacity-80">
            <li><Link href="/stay" className="hover:text-[var(--color-gold)] transition-colors">Stay & Cottages</Link></li>
            <li><Link href="/weddings" className="hover:text-[var(--color-gold)] transition-colors">Weddings & Events</Link></li>
            <li><Link href="/dining" className="hover:text-[var(--color-gold)] transition-colors">Dining</Link></li>
            <li><Link href="/gallery" className="hover:text-[var(--color-gold)] transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-[var(--color-gold)]">Contact</h4>
          <ul className="space-y-4 text-sm tracking-wide opacity-80">
            <li className="flex items-start">
              <MapPin size={18} className="mr-3 flex-shrink-0 mt-0.5 text-[var(--color-gold)]" />
              <span>{RESORT_FACTS.address}</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-3 flex-shrink-0 text-[var(--color-gold)]" />
              <a href={`tel:${RESORT_FACTS.phoneRaw}`} className="hover:text-[var(--color-gold)] transition-colors">{RESORT_FACTS.phoneDisplay}</a>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-3 flex-shrink-0 text-[var(--color-gold)]" />
              <span>{RESORT_FACTS.email}</span>
            </li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-serif text-lg tracking-widest uppercase mb-6 text-[var(--color-gold)]">Connect</h4>
          <div className="flex space-x-4 mb-6">
            <a href={RESORT_FACTS.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[var(--color-ivory)]/20 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-forest)] transition-all">
              <InstagramIcon />
            </a>
            <a href={RESORT_FACTS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[var(--color-ivory)]/20 flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-forest)] transition-all">
              <FacebookIcon />
            </a>
          </div>
          
          <div className="bg-[var(--color-forest-700)]/50 p-4 rounded-lg border border-[var(--color-gold)]/20">
            <p className="text-xs text-[var(--color-gold-soft)] uppercase tracking-wider font-semibold mb-1">Security Notice</p>
            <p className="text-xs opacity-80 leading-relaxed">
              For genuine bookings, use only <strong>{RESORT_FACTS.phoneDisplay}</strong>. We do not ask for payments via unverified links.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1240px] mx-auto px-6 pt-8 border-t border-[var(--color-ivory)]/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 tracking-wider gap-4">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <p>© {new Date().getFullYear()} {RESORT_FACTS.name}. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <span className="opacity-80">Designed by +91 9580840813 (WhatsApp/Call)</span>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-gold)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="h-16 md:hidden" /> {/* Padding for sticky mobile bar */}
    </footer>
  );
}
