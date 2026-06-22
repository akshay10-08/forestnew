import clsx from "clsx";
import { Leaf } from "lucide-react";
import Image from "next/image";

interface PlaceholderProps {
  label: string;
  ratio?: string; // e.g., "16/9", "4/3", "1/1"
  className?: string;
  src?: string;
}

export function Placeholder({ label, ratio = "16/9", className, src }: PlaceholderProps) {
  if (src) {
    return (
      <div 
        className={clsx("relative w-full overflow-hidden", className)} 
        style={ratio !== "fill" ? { aspectRatio: ratio } : {}}
      >
        <Image 
          src={src} 
          alt={label} 
          fill 
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-moss)] text-[var(--color-ivory)] group",
        className
      )}
      style={ratio !== "fill" ? { aspectRatio: ratio } : {}}
      role="img"
      aria-label={label}
    >
      {/* Faint palm-leaf flourish */}
      <Leaf
        className="absolute w-32 h-32 opacity-10 text-[var(--color-gold)] -rotate-12 transition-transform duration-700 group-hover:scale-110"
        strokeWidth={1}
      />
      
      {/* Centered muted-serif label */}
      <div className="z-10 flex flex-col items-center text-center p-4">
        <span className="font-serif text-2xl md:text-3xl tracking-wide opacity-90 drop-shadow-md">
          {label}
        </span>
        <span className="mt-2 text-xs uppercase tracking-widest opacity-60 border border-[var(--color-ivory)]/30 rounded-full px-3 py-1 bg-black/20 backdrop-blur-sm">
          [Replace Me]
        </span>
      </div>
    </div>
  );
}
