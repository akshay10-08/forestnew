"use client";

import { useState } from "react";
import { ReelPlayer } from "@/components/ui/ReelPlayer";

export function ResortReels() {
  const [playingReel, setPlayingReel] = useState<string | null>(null);

  const handlePlay = (src: string) => {
    setPlayingReel(src);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--color-ivory)] px-6">
      <div className="max-w-[640px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] font-medium mb-4">
            Moments in Motion
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-wide text-[var(--color-forest)] mb-6">
            A Glimpse of Royal Forest
          </h2>
          <div className="w-16 h-[1px] bg-[var(--color-gold)] mx-auto" />
        </div>

        {/* Reels Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 w-full max-w-[240px] sm:max-w-none mx-auto">
          <ReelPlayer 
            src="/videos/vid.mp4"
            playingReel={playingReel}
            onPlay={handlePlay}
          />
          <ReelPlayer 
            src="/videos/Video-698.mp4"
            playingReel={playingReel}
            onPlay={handlePlay}
          />
        </div>

      </div>
    </section>
  );
}
