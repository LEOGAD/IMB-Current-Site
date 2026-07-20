/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PROJECTS } from "../../data";
import { Project } from "../../types";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Compass, Layers, Minimize, Play, RefreshCw, Eye, CheckCircle } from "lucide-react";
import BeforeAfterSlider from "../BeforeAfterSlider";

interface ProjectsViewProps {
  onOpenProject: (project: Project) => void;
}

export default function ProjectsView({ onOpenProject }: ProjectsViewProps) {
  const [filter, setFilter] = useState("All");
  const [loadedVirtualTour, setLoadedVirtualTour] = useState<string | null>(null);

  const categories = ["All", "Residential", "Villas", "Commercial"];

  const filteredProjects = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  // Focus on the first project's Before & After showcase
  const focusProject = PROJECTS[0];

  return (
    <div className="space-y-24 py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          Studio Archive
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          Bespoke Portfolios & <span className="italic">Spatial Narratives.</span>
        </h1>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          Browse through completed private penthouses, cliffside coastal villas, and high-tech company workspaces where material honesty is honored.
        </p>
      </section>

      {/* BEFORE & AFTER SHOWCASE SLIDER */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 bg-secondary dark:bg-charcoal border border-accent/10 rounded-2xl p-6 md:p-10 shadow-xl">
        <div className="max-w-2xl mb-8">
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-2">
            Interactive Restoration Comparison
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-primary dark:text-secondary mb-3">
            Vienna Modernist Penthouse Reconstruction
          </h3>
          <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed">
            Drag the handle to compare our blank canvas construction layout on the left with the completed, warm Travertine and Walnut styled interior living room on the right.
          </p>
        </div>

        <BeforeAfterSlider
          beforeImage={focusProject.beforeImage}
          afterImage={focusProject.afterImage}
        />
      </section>

      {/* PORTFOLIO GRID WITH ADVANCED FILTERS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-accent/10 pb-6 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.2em] text-accent uppercase block mb-1">
              Case Study Categories
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-primary dark:text-secondary tracking-tight">
              Selected Archives
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded border transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? "border-accent bg-accent/10 text-accent font-medium"
                    : "border-accent/10 hover:border-accent/40 text-primary/70 dark:text-secondary/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col justify-between bg-secondary dark:bg-charcoal border border-accent/10 hover:border-accent/30 rounded-2xl p-6 shadow-sm transition-all duration-500"
              >
                <div>
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-accent/10 mb-6 bg-black/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 bg-charcoal/85 backdrop-blur-xs text-secondary text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded flex items-center space-x-1.5 border border-accent/10">
                      <Compass className="w-3.5 h-3.5 text-accent" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase text-accent tracking-widest block mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl text-primary dark:text-secondary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-accent/10 pt-4 mt-auto flex items-center justify-between">
                  <span className="text-[10px] font-mono text-primary/40 dark:text-secondary/40">
                    Finished {project.year} • {project.area}
                  </span>
                  <button
                    onClick={() => onOpenProject(project)}
                    className="group flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent-hover transition-colors cursor-pointer"
                  >
                    <span>Inspect details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 3D VIRTUAL TOUR WALKTHROUGH PREVIEW PRESET */}
      <section className="bg-secondary/30 dark:bg-charcoal/30 py-20 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive virtual frame - Left (7 cols) */}
          <div className="lg:col-span-7 bg-secondary dark:bg-charcoal border border-accent/10 rounded-2xl aspect-16/10 flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {loadedVirtualTour ? (
                <motion.div
                  key="tour"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 w-full h-full bg-black flex flex-col justify-between p-6"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
                    alt="Active Virtual Walkthrough Scene"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-50 opacity-90 animate-slow-pan scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10 flex items-center justify-between text-secondary">
                    <span className="text-[10px] font-mono uppercase bg-accent text-primary px-2.5 py-1 rounded">
                      Active Walkthrough
                    </span>
                    <button
                      onClick={() => setLoadedVirtualTour(null)}
                      className="text-xs text-secondary/60 hover:text-accent font-mono cursor-pointer"
                    >
                      Exit Tour
                    </button>
                  </div>

                  <div className="relative z-10 text-center text-secondary space-y-1 pb-10">
                    <h5 className="font-serif text-lg italic">Travertine Dining Lounge</h5>
                    <p className="text-[10px] font-mono text-accent">Drag Mouse around the page or click hotspot arrows</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center mx-auto hover:scale-105 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-accent" />
                  </div>
                  <h4 className="font-serif text-xl italic text-primary dark:text-secondary">
                    Load 3D Virtual Walkthrough
                  </h4>
                  <p className="text-xs text-primary/60 dark:text-secondary/60 max-w-sm mx-auto">
                    Interact directly with fumed German oak fixtures, custom joinery alignments, and custom Travertine slab options.
                  </p>
                  <button
                    onClick={() => setLoadedVirtualTour("vienna")}
                    className="px-6 py-2 bg-accent text-primary font-mono text-[10px] uppercase tracking-widest rounded shadow-md cursor-pointer inline-block"
                  >
                    Start interactive walkthrough
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Description - Right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block">
              BIM Virtualization
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary dark:text-secondary tracking-tight">
              Virtual Walkthroughs & Material Mapping
            </h2>
            <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
              We employ state-of-the-art virtual modeling to fully test and visualize environments before physical installation. Clients receive high-end interactive virtual walkthrough links, enabling micro-scenarios to adjust textures, slab vein-cuts, and indirect cove light temperatures on-the-fly.
            </p>
            <div className="border-t border-accent/15 pt-4 space-y-3">
              <div className="flex items-center space-x-2.5 text-xs">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="font-medium text-primary dark:text-secondary">Circadian Lighting Simulation</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="font-medium text-primary dark:text-secondary">Full material textures mapping accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
