/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1) { // Left button pressed
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full">
      {title && (
        <h4 className="font-serif text-lg text-primary dark:text-secondary italic">
          {title} — Before & After Interactive Showcase
        </h4>
      )}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-16/9 overflow-hidden rounded-lg shadow-xl cursor-ew-resize select-none border border-accent/10"
      >
        {/* Before Image (Full background) */}
        <img
          src={beforeImage}
          alt="Before space planning"
          className="absolute inset-0 w-full h-full object-cover filter brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-charcoal/80 text-secondary text-xs font-mono px-3 py-1.5 uppercase tracking-widest rounded z-10 backdrop-blur-xs">
          Before
        </div>

        {/* After Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={afterImage}
            alt="After design completion"
            className="absolute inset-0 w-full h-full object-cover filter brightness-105"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-mono font-medium px-3 py-1.5 uppercase tracking-widest rounded z-10 backdrop-blur-xs">
            Completed Space
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-accent z-20 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-primary hover:scale-110 flex items-center justify-center shadow-lg transition-transform duration-200 border-2 border-secondary">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>
      <p className="text-center text-xs font-mono text-primary/40 dark:text-secondary/40">
        ← Drag the gold circle slider to compare reconstruction states →
      </p>
    </div>
  );
}
