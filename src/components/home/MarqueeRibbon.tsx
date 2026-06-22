"use client";

import { Placeholder } from "@/components/ui/Placeholder";

export function MarqueeRibbon() {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/w.jpeg",
    "/images/z.jpeg",
    "/images/x.png",
    "/images/c.png",
    "/images/y.jpeg",
    "/images/z.jpeg"
  ];

  return (
    <section className="py-16 bg-[var(--color-forest)] overflow-hidden flex flex-col justify-center border-y border-[var(--color-gold)]/20">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}} />
      <div className="flex w-[200vw] animate-marquee hover:[animation-play-state:paused]">
        {/* Double array for seamless loop */}
        {[...images, ...images].map((src, idx) => (
          <div key={idx} className="w-[60vw] md:w-[25vw] aspect-[4/3] flex-shrink-0 mx-2 md:mx-4 rounded-xl overflow-hidden cursor-pointer group">
            <Placeholder src={src} label={`Gallery ${idx}`} ratio="4/3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
