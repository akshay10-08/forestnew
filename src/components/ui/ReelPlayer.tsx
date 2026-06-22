"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import clsx from "clsx";

interface ReelPlayerProps {
  src: string;
  poster?: string;
  playingReel: string | null;
  onPlay: (src: string) => void;
}

export function ReelPlayer({ src, poster, playingReel, onPlay }: ReelPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showPlayIcon, setShowPlayIcon] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load video
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Sync external global play state
  useEffect(() => {
    if (playingReel !== src && isPlaying) {
      handlePause();
    }
  }, [playingReel, src, isPlaying]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowPlayIcon(true); // Will fade out via CSS
      onPlay(src);
      // Auto-hide play/pause UI after 1.2s
      setTimeout(() => setShowPlayIcon(false), 1200);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowPlayIcon(true);
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowPlayIcon(true);
    setProgress(100);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border border-[var(--color-gold)]/80 shadow-[0_10px_40px_rgba(16,48,31,.15)] group cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
      onMouseEnter={() => { setIsHovering(true); if(isPlaying) setShowPlayIcon(true); }}
      onMouseLeave={() => { setIsHovering(false); if(isPlaying) setShowPlayIcon(false); }}
      onClick={togglePlay}
    >
      {isInView ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="metadata"
          playsInline
          muted={isMuted}
          loop={false}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          className="w-full h-full object-cover bg-black/10 transition-opacity duration-500"
        />
      ) : (
        <div className="w-full h-full bg-black/10" style={poster ? { backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}} />
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-20">
        <div 
          className="h-full bg-[var(--color-gold)] transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mute Toggle */}
      <button 
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute bottom-4 right-4 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Play/Pause Center Button Overlay */}
      <div 
        className={clsx(
          "absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500",
          !isPlaying ? "bg-black/20" : "bg-transparent",
          showPlayIcon || (!isPlaying) || isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-[var(--color-forest)]/55 backdrop-blur-md border border-[var(--color-gold)] text-white hover:scale-105 transition-transform shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
        >
          {isPlaying ? (
            <Pause size={28} className="fill-current" />
          ) : (
            <Play size={28} className="ml-1 fill-current" />
          )}
        </button>
      </div>
    </div>
  );
}
