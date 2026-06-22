"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: "img-1", src: "/images/1.png" },
  { id: "img-2", src: "/images/2.png" },
  { id: "img-w", src: "/images/w.jpeg" },
  { id: "img-z1", src: "/images/z.jpeg" },
  { id: "img-x", src: "/images/x.png" },
  { id: "img-c", src: "/images/c.png" },
  { id: "img-y", src: "/images/y.jpeg" },
  { id: "img-z2", src: "/images/z.jpeg" },
  { id: "img-a", src: "/images/a.png" }
];

export function GalleryOrbit() {
  const [centerId, setCenterId] = useState<string>("img-1");
  const [ringSlots, setRingSlots] = useState<(string | null)[]>([
    "img-a", "img-2", "img-w", "img-z1", "img-x", "img-c", "img-y", "img-z2"
  ]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSwap = (slotIndex: number, imageId: string) => {
    setRingSlots((prev) => {
      const next = [...prev];
      next[slotIndex] = centerId;
      return next;
    });
    setCenterId(imageId);
  };

  const centerImage = images.find(img => img.id === centerId);

  return (
    <section className="py-24 bg-[var(--color-forest)] overflow-hidden relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4 block font-semibold">
            Moments at Royal Forest
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-ivory)]">
            A Glimpse of the Magic
          </h2>
        </div>

        {/* Desktop Orbit / Mobile Carousel */}
        {!isMobile ? (
          <div className="relative w-full max-w-[580px] aspect-square mx-auto flex items-center justify-center group/orbit">
            
            {/* Custom CSS for rotation */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes orbit-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes orbit-counter-spin {
                from { transform: rotate(360deg); }
                to { transform: rotate(0deg); }
              }
              .animate-orbit {
                animation: orbit-spin 50s linear infinite;
                will-change: transform;
                transform: translateZ(0);
              }
              .animate-counter-orbit {
                animation: orbit-counter-spin 50s linear infinite;
                will-change: transform;
                transform: translateZ(0);
              }
              @media (prefers-reduced-motion: reduce) {
                .animate-orbit, .animate-counter-orbit {
                  animation: none;
                }
              }
              .orbit-container:hover .animate-orbit,
              .orbit-container:hover .animate-counter-orbit {
                animation-play-state: paused;
              }
            `}} />

            {/* Orbit Path Faint Ring */}
            <div className="absolute inset-8 rounded-full border border-[var(--color-gold)] opacity-20 border-dashed pointer-events-none" />

            {/* The Rotating Ring Container */}
            <div className="absolute inset-0 orbit-container rounded-full">
              <div className="w-full h-full relative animate-orbit">
                {ringSlots.map((imageId, i) => {
                  const angle = (i * 45) * (Math.PI / 180);
                  // Calculate position on a circle. 
                  // 50% is center. Radius is ~40% to fit within the container.
                  const radius = 42; 
                  const left = `calc(50% + ${Math.cos(angle) * radius}% - 55px)`;
                  const top = `calc(50% + ${Math.sin(angle) * radius}% - 55px)`;
                  
                  return (
                    <div 
                      key={`slot-${i}`} 
                      className="absolute w-[110px] h-[110px]"
                      style={{ left, top }}
                    >
                      <div className="w-full h-full animate-counter-orbit">
                        <AnimatePresence>
                          {imageId && (
                            <motion.button
                              layoutId={imageId}
                              onClick={() => handleSwap(i, imageId)}
                              className="w-full h-full rounded-full overflow-hidden border border-[var(--color-gold)]/40 shadow-lg group/item focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-forest)] cursor-pointer"
                              whileHover={{ scale: 1.08 }}
                              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                              <img 
                                src={images.find(img => img.id === imageId)?.src} 
                                alt="Gallery thumbnail" 
                                className="w-full h-full object-cover group-hover/item:brightness-110 transition-all duration-300"
                              />
                            </motion.button>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Center Featured Image */}
            <div className="relative z-20 w-[280px] h-[280px] rounded-full p-2 border border-[var(--color-gold)]/50 shadow-[0_0_40px_rgba(194,162,78,0.15)] bg-[var(--color-forest)]/50 backdrop-blur-md">
              <div className="w-full h-full rounded-full overflow-hidden relative" style={{ transform: "translateZ(0)", willChange: "transform" }}>
                <AnimatePresence mode="popLayout">
                  {centerImage && (
                    <motion.div
                      key={centerImage.id}
                      layoutId={centerImage.id}
                      className="absolute inset-0 w-full h-full"
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.img
                        src={centerImage.src}
                        alt="Featured gallery image"
                        className="w-full h-full object-cover"
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        ) : (
          /* Mobile Fallback Layout */
          <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full max-w-[260px] aspect-square rounded-full p-2 border border-[var(--color-gold)]/50 shadow-[0_0_40px_rgba(194,162,78,0.15)] bg-[var(--color-forest)]/50 backdrop-blur-md">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <AnimatePresence mode="popLayout">
                  {centerImage && (
                    <motion.div
                      key={centerImage.id}
                      layoutId={centerImage.id}
                      className="absolute inset-0 w-full h-full"
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={centerImage.src}
                        alt="Featured gallery image"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Horizontal Scrolling Strip */}
            <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex gap-4 px-6 w-max">
                {ringSlots.map((imageId, i) => {
                  if (!imageId) return null;
                  return (
                    <motion.button
                      key={imageId}
                      layoutId={imageId}
                      onClick={() => handleSwap(i, imageId)}
                      className="w-[64px] h-[64px] flex-shrink-0 rounded-full overflow-hidden border border-[var(--color-gold)]/40 shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
                    >
                      <img 
                        src={images.find(img => img.id === imageId)?.src} 
                        alt="Gallery thumbnail" 
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
