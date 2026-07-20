/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SERVICES } from "../../data";
import { Compass, CheckCircle, Info, FileText, Sparkles, LayoutGrid } from "lucide-react";
import { motion } from "motion/react";
import { siteContent } from "../../content";

export default function ServicesView() {
  return (
    <div className="space-y-24 py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          Custom Architectural Solutions
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          Spatial & Aesthetic <span className="italic">Curation Services.</span>
        </h1>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          We construct linear, highly organized spatial plans, curated furniture palettes, and precise shop documentation detailing premium natural materials.
        </p>
      </section>

      {/* Services Grid Showcase */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        {SERVICES.map((srv, sIdx) => {
          const isEven = sIdx % 2 === 0;
          return (
            <div
              key={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-12 border-b border-accent/10 last:border-0 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image side (5 cols) */}
              <div
                className={`lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-accent/10 shadow-2xl group ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6 bg-secondary/80 dark:bg-charcoal/80 backdrop-blur-md border border-accent/10 p-4 rounded-xl text-center">
                  <span className="text-[10px] font-mono uppercase text-accent tracking-widest block">
                    Procurement Level
                  </span>
                  <span className="text-xs font-sans font-medium text-primary dark:text-secondary">
                    Wholesale Quarry & Mill access included
                  </span>
                </div>
              </div>

              {/* Text side (7 cols) */}
              <div className={`lg:col-span-7 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex items-center space-x-2">
                  <span className="bg-accent/10 text-accent text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded">
                    {srv.pricing}
                  </span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-primary dark:text-secondary tracking-tight">
                  {srv.title}
                </h3>
                <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
                  {srv.description}
                </p>

                {/* Features Checklist */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent block mb-2">
                    Key Features
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    {srv.features.map((feat, fIdx) => (
                      <span key={fIdx} className="text-xs text-primary/80 dark:text-secondary/80 flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-2 shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Workflow process steps */}
                <div className="pt-4 border-t border-accent/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent block mb-3">
                    Project Process Milestones
                  </span>
                  <div className="space-y-2">
                    {srv.process.map((step, pIdx) => (
                      <div key={pIdx} className="flex items-center space-x-2 text-xs">
                        <span className="font-mono text-accent font-bold">0{pIdx + 1}.</span>
                        <span className="text-primary/70 dark:text-secondary/70 font-sans">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* consultation navigate trigger button */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      // Dispatch custom navigation event
                      window.dispatchEvent(new CustomEvent("navigate", { detail: "book" }));
                    }}
                    className="px-6 py-2.5 bg-accent hover:bg-accent/90 text-primary font-mono text-[10px] uppercase tracking-widest rounded transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Discuss {srv.title.split(" ")[0]} project
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Procurement Process Guarantee */}
      <section className="bg-secondary/30 dark:bg-charcoal/30 py-20 border-y border-accent/10 text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
          <div className="max-w-xl mx-auto space-y-3">
            <LayoutGrid className="w-8 h-8 text-accent mx-auto stroke-1 mb-2" />
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block">
              Architectural transparency
            </span>
            <h2 className="font-serif text-3xl text-primary dark:text-secondary tracking-tight">
              {siteContent.servicesProcurementTitle}
            </h2>
            <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
              {siteContent.servicesProcurementText}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
