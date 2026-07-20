/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MATERIALS } from "../data";
import { MaterialItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Info, Check, ShieldAlert } from "lucide-react";

export default function MaterialLibrary() {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIALS[0]);

  return (
    <div className="w-full bg-secondary/30 dark:bg-charcoal/20 rounded-2xl border border-accent/10 p-6 md:p-10">
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3">
          Interactive material library
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-primary dark:text-secondary mb-4">
          Tactile Authenticity
        </h3>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
          We curate raw materials that tell a structural story. Our collection features sustainable FSC timber, unfilled Italian limestone, living metals, and linen spun by historic European heritage mills.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Material Selection Grid (Left Side) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {MATERIALS.map((material) => (
            <button
              key={material.id}
              onClick={() => setSelectedMaterial(material)}
              className={`group flex flex-col text-left rounded-xl overflow-hidden border transition-all duration-500 cursor-pointer ${
                selectedMaterial.id === material.id
                  ? "border-accent ring-1 ring-accent"
                  : "border-accent/15 hover:border-accent/40"
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-300" />
              </div>
              <div className="p-3 bg-secondary dark:bg-charcoal/60 w-full">
                <span className="text-xs font-mono text-accent/80 block uppercase tracking-wider mb-0.5">
                  {material.type}
                </span>
                <span className="text-xs font-sans font-medium text-primary dark:text-secondary truncate block">
                  {material.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Material Details Display Sheet (Right Side) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMaterial.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-secondary dark:bg-charcoal/80 border border-accent/10 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row gap-8 items-stretch"
            >
              {/* Macro Zoom */}
              <div className="md:w-1/2 relative aspect-square md:aspect-auto rounded-xl overflow-hidden border border-accent/10">
                <img
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover animate-slow-pan"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent p-4 flex items-end">
                  <div className="flex items-center space-x-2 text-secondary">
                    <Compass className="w-4 h-4 text-accent" />
                    <span className="text-xs font-mono uppercase tracking-widest">{selectedMaterial.origin}</span>
                  </div>
                </div>
              </div>

              {/* Specs & Narrative */}
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-accent/10 text-accent text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded">
                      {selectedMaterial.type}
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl text-primary dark:text-secondary mb-3">
                    {selectedMaterial.name}
                  </h4>
                  <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mb-6">
                    {selectedMaterial.description}
                  </p>

                  <div className="space-y-4 border-t border-accent/10 pt-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent/80 block mb-1">
                        Curated Finishes
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedMaterial.finishes.map((f, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-sans px-2 py-0.5 bg-accent/5 rounded text-primary/80 dark:text-secondary/80 border border-accent/10"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent/80 block mb-1">
                        Optimal Suitability
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedMaterial.suitability.map((s, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-sans px-2 py-0.5 bg-primary/5 dark:bg-secondary/5 rounded text-primary/70 dark:text-secondary/70 flex items-center space-x-1"
                          >
                            <Check className="w-3 h-3 text-accent mr-1 shrink-0" />
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-accent/10 flex items-center justify-between text-xs text-accent font-mono uppercase tracking-widest">
                  <span>Spec available</span>
                  <div className="flex items-center space-x-1 text-primary/50 dark:text-secondary/50 font-normal normal-case font-sans">
                    <Info className="w-3.5 h-3.5" />
                    <span>Pure Organic Selection</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
