import { RESORT_FACTS } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";

interface WordmarkProps {
  className?: string;
  isScrolled?: boolean;
}

export function Wordmark({ className, isScrolled = false }: WordmarkProps) {
  return (
    <div className={clsx("flex items-center space-x-2 md:space-x-3", className)}>
      <div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0">
        <Image 
          src="/images/logo.png" 
          alt="Royal Forest Resort Logo" 
          fill
          className="object-contain transition-all duration-300"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span
          className={clsx(
            "font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors duration-300",
            isScrolled ? "text-[var(--color-forest)]" : "text-[var(--color-ivory)]"
          )}
        >
          {RESORT_FACTS.name}
        </span>
      </div>
    </div>
  );
}
