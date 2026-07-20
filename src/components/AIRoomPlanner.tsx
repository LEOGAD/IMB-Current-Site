/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, Loader2, Copy, Check, Info, LayoutTemplate, Palette, Eye, Hammer, SunDim } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "../content";

interface PaletteColor {
  colorName: string;
  hex: string;
  rationale: string;
}

interface AIResponse {
  themeName: string;
  conceptSummary: string;
  palette: PaletteColor[];
  materials: string[];
  layoutTips: string[];
  stylingSecrets: string[];
  lightingScenario: string;
}

export default function AIRoomPlanner() {
  const [roomType, setRoomType] = useState("Living Room");
  const [style, setStyle] = useState("Japandi Warm");
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<AIResponse | null>(null);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const roomTypes = ["Living Room", "Kitchen", "Bedroom", "Office", "Dining Room", "Master Bath", "Luxury Lounge"];
  const styles = ["Japandi Warm", "Scandinavian Minimalist", "Mid-Century Modern", "Industrial Loft", "Brutalist Monolith", "Classic Italian Luxury"];

  const loadingSteps = [
    siteContent.aiEngineContactText,
    "Sculpting spatial geometries...",
    "Curating custom organic color spectrums...",
    "Selecting premium limestone & timber grades...",
    "Balancing indirect architectural illumination..."
  ];

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    setLoadingStep(0);

    // Dynamic luxurious loading transition interval
    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingSteps.length - 1) return prev + 1;
        return prev;
      });
    }, 2000);

    try {
      const response = await fetch("/api/generate-inspiration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomType, style, notes }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("AI Curation failed:", err);
    } finally {
      clearInterval(stepInterval);
      setIsLoading(false);
    }
  };

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="w-full bg-secondary/30 dark:bg-charcoal/20 rounded-2xl border border-accent/10 p-6 md:p-10">
      <div className="max-w-3xl mb-10">
        <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3">
          Generative design studio
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-primary dark:text-secondary mb-4">
          AI Room Concept Planner
        </h3>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
          State your requirements, choose an aesthetic profile, and let our custom Gemini neural designer draft a bespoke architectural narrative, palette selection, and spatial layout strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form panel - Left */}
        <div className="lg:col-span-5 bg-secondary dark:bg-charcoal/80 border border-accent/10 rounded-xl p-6 shadow-md">
          <div className="space-y-6">
            {/* Room Type */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
                1. Target Room Space
              </label>
              <div className="grid grid-cols-2 gap-2">
                {roomTypes.map((rt) => (
                  <button
                    key={rt}
                    onClick={() => setRoomType(rt)}
                    className={`py-2 px-3 text-xs text-left rounded border transition-all duration-300 cursor-pointer ${
                      roomType === rt
                        ? "border-accent bg-accent/10 text-accent font-medium"
                        : "border-accent/10 hover:border-accent/45 text-primary/70 dark:text-secondary/70"
                    }`}
                  >
                    {rt}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Style */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
                2. Aesthetic Profile
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full py-2.5 px-3 text-xs rounded border border-accent/15 bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent cursor-pointer"
              >
                {styles.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
                3. Space Constraints & Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. 'high-ceilings, low seating, custom marble fireplace mantle and space for massive art canvases'"
                className="w-full h-24 py-2 px-3 text-xs rounded border border-accent/15 bg-secondary dark:bg-charcoal text-primary dark:text-secondary placeholder-primary/30 dark:placeholder-secondary/30 focus:outline-none focus:border-accent resize-none font-sans"
              />
            </div>

            {/* Generate Trigger */}
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full py-3 bg-accent hover:bg-accent-hover active:scale-98 text-primary font-mono text-xs uppercase tracking-widest rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sculpting Concept...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Draft Architectural Concept</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Curation Display - Right */}
        <div className="lg:col-span-7 flex items-stretch h-full min-h-[420px]">
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center justify-center p-8 border border-accent/10 rounded-xl bg-secondary dark:bg-charcoal/80 text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-accent/20 border-t-accent animate-spin" />
                  <Sparkles className="w-6 h-6 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                </div>
                <h4 className="font-serif text-xl italic text-primary dark:text-secondary mb-2 animate-pulse">
                  IMB Home Finishers Curation active
                </h4>
                <p className="text-xs font-mono text-accent tracking-wider h-6 transition-all duration-500">
                  {loadingSteps[loadingStep]}
                </p>
                <p className="text-[10px] text-primary/40 dark:text-secondary/40 mt-8 max-w-sm">
                  Our custom generative engine models spatial flows and maps micro-contrast palettes to match physical stone, textile, and illumination grades.
                </p>
              </motion.div>
            )}

            {!isLoading && !result && (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center justify-center p-8 border border-dashed border-accent/20 rounded-xl text-center"
              >
                <LayoutTemplate className="w-10 h-10 text-accent/40 mb-4 stroke-1" />
                <h4 className="font-serif text-lg text-primary/50 dark:text-secondary/50 italic mb-2">
                  No Active Draft
                </h4>
                <p className="text-xs text-primary/60 dark:text-secondary/60 max-w-xs leading-relaxed">
                  Select your room type, design style, and click draft to see your bespoke mood board populate here instantly.
                </p>
              </motion.div>
            )}

            {!isLoading && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="w-full border border-accent/10 rounded-xl p-6 md:p-8 bg-secondary dark:bg-charcoal/80 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Title & Narrative */}
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-1">
                    Custom Concept Drafted Successfully
                  </span>
                  <h4 className="font-serif text-2xl md:text-3xl text-primary dark:text-secondary mb-3">
                    {result.themeName}
                  </h4>
                  <p className="text-xs text-primary/80 dark:text-secondary/80 leading-relaxed font-sans border-l border-accent/20 pl-4 py-1 italic mb-6">
                    "{result.conceptSummary}"
                  </p>

                  {/* Luxury Palette Section */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Palette className="w-4 h-4 text-accent" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-primary/60 dark:text-secondary/60">
                        Curation Color Spectrum (Click Swatch to Copy)
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {result.palette.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={() => copyToClipboard(color.hex)}
                          className="flex flex-col items-center text-center p-2 rounded border border-accent/10 hover:border-accent/40 bg-secondary/40 dark:bg-charcoal/40 relative group cursor-pointer"
                        >
                          <div
                            className="w-8 h-8 rounded-full shadow-inner border border-accent/10 mb-2 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundColor: color.hex }}
                          >
                            <AnimatePresence>
                              {copiedColor === color.hex && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="absolute inset-0 bg-charcoal/80 rounded-full flex items-center justify-center text-secondary"
                                >
                                  <Check className="w-3.5 h-3.5 text-accent" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                          <span className="text-[10px] font-sans font-medium text-primary dark:text-secondary block truncate w-full">
                            {color.colorName}
                          </span>
                          <span className="text-[9px] font-mono text-accent block">
                            {color.hex}
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-charcoal text-secondary text-[9px] text-left rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 border border-accent/10">
                            {color.rationale}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Materials & Layout Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-accent/10">
                    <div>
                      <div className="flex items-center space-x-2 mb-2.5">
                        <Hammer className="w-3.5 h-3.5 text-accent" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                          Bespoke Materials
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {result.materials.map((m, i) => (
                          <li key={i} className="text-xs text-primary/70 dark:text-secondary/70 flex items-center">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 shrink-0" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2.5">
                        <LayoutTemplate className="w-3.5 h-3.5 text-accent" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                          Architectural Flow
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {result.layoutTips.map((t, i) => (
                          <li key={i} className="text-xs text-primary/70 dark:text-secondary/70 flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Styling & Lighting details */}
                  <div className="mt-6 pt-4 border-t border-accent/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2.5">
                        <Eye className="w-3.5 h-3.5 text-accent" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                          Creative Styling
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {result.stylingSecrets.map((s, i) => (
                          <li key={i} className="text-xs text-primary/70 dark:text-secondary/70 flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2.5">
                        <SunDim className="w-3.5 h-3.5 text-accent" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                          Illumination Scenario
                        </span>
                      </div>
                      <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
                        {result.lightingScenario}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-accent/10 flex items-center justify-between text-xs text-primary/40 dark:text-secondary/40 font-mono uppercase">
                  <span>{siteContent.aiGenerativeDraftFooter}</span>
                  <div className="flex items-center space-x-1 normal-case font-sans">
                    <Info className="w-3.5 h-3.5" />
                    <span>Integrate with bespoke planning</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
