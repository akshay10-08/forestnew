"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";
import { openWhatsApp } from "@/lib/whatsapp";
import clsx from "clsx";

const NAV_LINKS = [
  { label: "Stay", href: "/stay" },
  { label: "Weddings", href: "/weddings" },
  { label: "Dining", href: "/dining" },
  { label: "Gallery", href: "/gallery" },
];

export function GlassHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 80);
  });

  const isHomePage = pathname === "/";
  const effectiveScrolled = isScrolled || !isHomePage;

  return (
    <>
      <motion.header
        className={clsx(
          "fixed top-4 left-4 right-4 z-50 max-w-[1240px] mx-auto rounded-full transition-all duration-300",
          "before:content-[''] before:absolute before:inset-0 before:rounded-full before:pointer-events-none",
          effectiveScrolled
            ? "bg-[var(--color-ivory)]/90 backdrop-blur-xl shadow-lg py-2 px-6 before:bg-gradient-to-b before:from-white/40 before:to-transparent border border-black/5"
            : "bg-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(16,48,31,0.18)] py-3 px-6 before:bg-gradient-to-b before:from-white/25 before:to-transparent border border-white/20"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center justify-between relative z-10">
          <Link href="/" className="flex-shrink-0">
            <Wordmark isScrolled={effectiveScrolled} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "uppercase text-base tracking-[0.12em] transition-colors relative group",
                  effectiveScrolled ? "text-[var(--color-charcoal)] hover:text-[var(--color-gold)]" : "text-[var(--color-ivory)] hover:text-[var(--color-gold)]"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              type="button"
              onClick={() => openWhatsApp(`Hello Royal Forest Resort,\n\nI'd like to enquire about your venue.\n\nName: \nDate: \nGuests: \n\nThank you.`)}
              className={clsx(
                "uppercase text-sm tracking-widest px-4 py-2 rounded-full border transition-colors",
                effectiveScrolled 
                  ? "border-[var(--color-forest)]/20 text-[var(--color-forest)] hover:bg-[var(--color-forest)]/5" 
                  : "border-[var(--color-ivory)]/40 text-[var(--color-ivory)] hover:bg-white/10"
              )}>
              Enquire
            </button>
            <button 
              type="button"
              onClick={() => openWhatsApp(`Hello Royal Forest Resort,\n\nI'd like to book a stay.\n\nName: \nCheck-in: \nCheck-out: \nGuests: \nCottage preference: \n\nThank you.`)}
              className="uppercase text-sm tracking-widest px-5 py-2.5 rounded-full bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-soft)] hover:text-[var(--color-forest)] transition-colors shadow-md">
              Book a Stay
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                "p-2 rounded-full",
                effectiveScrolled ? "text-[var(--color-forest)]" : "text-[var(--color-ivory)]"
              )}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--color-forest)] flex flex-col pt-24 px-6 pb-6">
          <nav className="flex flex-col space-y-6 text-center mt-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8 flex flex-col space-y-4">
              <button 
                type="button"
                onClick={() => openWhatsApp(`Hello Royal Forest Resort,\n\nI'd like to enquire about your venue.\n\nName: \nDate: \nGuests: \n\nThank you.`)}
                className="uppercase tracking-widest text-sm border border-[var(--color-gold)] text-[var(--color-gold)] py-3 rounded-full">
                Enquire
              </button>
              <button 
                type="button"
                onClick={() => openWhatsApp(`Hello Royal Forest Resort,\n\nI'd like to book a stay.\n\nName: \nCheck-in: \nCheck-out: \nGuests: \nCottage preference: \n\nThank you.`)}
                className="uppercase tracking-widest text-sm bg-[var(--color-gold)] text-white py-3 rounded-full">
                Book a Stay
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
