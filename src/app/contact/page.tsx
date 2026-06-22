import { RESORT_FACTS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { LocationSection } from "@/components/home/LocationSection";

export const metadata = {
  title: "Contact Us | Royal Forest Resort",
  description: "Get in touch to book your stay or plan your event at Royal Forest Resort, Kanpur."
};

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[var(--color-cream)] pt-24 md:pt-32">
      <div className="max-w-[1240px] mx-auto px-6 w-full mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-forest)] mb-6">Contact Us</h1>
          <div className="w-12 h-[1px] bg-[var(--color-gold)] mx-auto" />
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div className="flex flex-col">
          <h2 className="font-serif text-3xl text-[var(--color-forest)] mb-8">We'd love to hear from you</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] mr-6 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--color-forest)] mb-2">Address</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{RESORT_FACTS.address}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] mr-6 flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--color-forest)] mb-2">Phone</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-1">
                  <a href={`tel:${RESORT_FACTS.phoneRaw}`} className="hover:text-[var(--color-gold)] transition-colors">{RESORT_FACTS.phoneDisplay}</a>
                </p>
                <p className="text-xs text-[var(--color-gold-soft)] uppercase tracking-wider font-semibold">Official Booking Number</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] mr-6 flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--color-forest)] mb-2">Email</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  <a href={`mailto:${RESORT_FACTS.email}`} className="hover:text-[var(--color-gold)] transition-colors">{RESORT_FACTS.email}</a>
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] mr-6 flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[var(--color-forest)] mb-2">Hours</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">Front Desk: 24/7</p>
                <p className="text-[var(--color-muted)] leading-relaxed">Booking Inquiries: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-[var(--color-gold)]/10">
          <h2 className="font-serif text-3xl text-[var(--color-forest)] mb-8">Send an Enquiry</h2>
          <form className="flex flex-col space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Full Name *</label>
              <input type="text" className="w-full bg-[var(--color-cream)] border border-[var(--color-gold)]/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] transition-shadow" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Phone Number *</label>
              <input type="tel" className="w-full bg-[var(--color-cream)] border border-[var(--color-gold)]/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] transition-shadow" placeholder="10-digit mobile number" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Nature of Enquiry *</label>
              <select className="w-full bg-[var(--color-cream)] border border-[var(--color-gold)]/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] transition-shadow text-[var(--color-forest)]">
                <option value="stay">Room / Cottage Booking</option>
                <option value="wedding">Wedding / Event Planning</option>
                <option value="corporate">Corporate Offsite</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[var(--color-forest)]/70 mb-2 font-semibold">Message</label>
              <textarea rows={4} className="w-full bg-[var(--color-cream)] border border-[var(--color-gold)]/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)] transition-shadow" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button type="button" className="w-full uppercase text-xs tracking-widest px-8 py-4 rounded-xl bg-[var(--color-gold)] text-[var(--color-forest)] hover:bg-[var(--color-gold-soft)] transition-colors shadow-md font-semibold mt-4">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
      
      <LocationSection />
    </main>
  );
}
