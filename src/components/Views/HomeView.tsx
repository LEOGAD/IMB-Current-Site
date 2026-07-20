/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PROJECTS, SERVICES } from "../../data";
import { Project } from "../../types";
import { motion } from "motion/react";
import { ArrowRight, Compass } from "lucide-react";
import { siteContent } from "../../content";

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenProject: (project: Project) => void;
}

export default function HomeView({ onNavigate, onOpenProject }: HomeViewProps) {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All"
    ? PROJECTS.slice(0, 3)
    : PROJECTS.filter(p => p.category === filter).slice(0, 3);

  const stats = [
    { value: "15+", label: "Years of Craft" },
    { value: "240+", label: "Spaces Designed" },
    { value: "18", label: "Design Awards" },
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* SECTION 1: HERO */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black select-none">
        {/* Optimized Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=70&w=1200"
            alt="Luxury modern interior design"
            className="w-full h-full object-cover filter brightness-50 opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-black/40 dark:from-charcoal" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 sm:space-y-6"
          >
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-accent uppercase block">
              {siteContent.officeLocations.join(" • ")}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-secondary dark:text-secondary tracking-tight leading-tight max-w-5xl mx-auto">
              {siteContent.homeHeroTitle}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-secondary/90 font-sans font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-4">
              {siteContent.homeHeroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 sm:pt-6 px-4">
              <button
                onClick={() => onNavigate("book")}
                className="w-full sm:w-auto px-6 py-3 bg-accent hover:bg-accent/95 active:scale-98 text-primary font-mono text-xs uppercase tracking-widest rounded transition-all duration-300 cursor-pointer"
              >
                Secure Consultation
              </button>
              <button
                onClick={() => onNavigate("projects")}
                className="w-full sm:w-auto px-6 py-3 border border-secondary/30 hover:border-accent text-secondary hover:text-accent font-mono text-xs uppercase tracking-widest rounded backdrop-blur-xs transition-all duration-300 cursor-pointer"
              >
                Explore Portfolios
              </button>
            </div>
          </motion.div>

          {/* Floating statistics */}
          <div className="mt-16 sm:mt-20 max-w-3xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-secondary/15 px-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center"
              >
                <span className="font-serif text-xl sm:text-3xl text-accent font-medium block">
                  {stat.value}
                </span>
                <span className="text-[8px] sm:text-[10px] font-mono tracking-widest uppercase text-secondary/75">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Left (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-accent uppercase block">
              Architectural Honesty
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-primary dark:text-secondary tracking-tight leading-tight">
              We design with authentic materials, celebrating natural texture and <span className="italic">spatial stillness.</span>
            </h2>
            <div className="w-16 h-0.5 bg-accent" />
            <div className="space-y-4 text-xs sm:text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
              <p>
                In an era of superficial design, we construct environments that connect you back to real, physical sensations. We select natural fumed oak, raw travertine slabs, and premium woven textiles. Every space is built to breathe and age beautifully.
              </p>
            </div>
            <button
              onClick={() => onNavigate("about")}
              className="group flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-accent pt-1 hover:text-accent-hover transition-colors cursor-pointer"
            >
              <span>Our Story & Partners</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image Right (5 cols) */}
          <div className="lg:col-span-5 relative aspect-square rounded-xl overflow-hidden shadow-md border border-accent/10 group">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=70&w=600"
              alt="Luxury interior detailing"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-secondary/90 dark:bg-charcoal/90 backdrop-blur-xs border border-accent/10 p-4 rounded-lg">
              <h4 className="font-serif text-sm text-primary dark:text-secondary italic">
                "The Curation Table"
              </h4>
              <p className="text-[8px] font-mono uppercase tracking-wider text-accent mt-0.5">
                Port Harcourt Studio Showroom
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID PREVIEW */}
      <section className="bg-secondary/30 dark:bg-charcoal/30 py-12 sm:py-16 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-1.5">
                Our Services
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-primary dark:text-secondary tracking-tight">
                Studio Solutions
              </h2>
            </div>
            <button
              onClick={() => onNavigate("services")}
              className="px-4 py-2 border border-accent/20 hover:border-accent hover:text-accent rounded text-[10px] sm:text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer self-start sm:self-auto"
            >
              All Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-secondary dark:bg-charcoal border border-accent/10 hover:border-accent/30 rounded-xl p-5 sm:p-6 flex flex-col justify-between shadow-sm transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border border-accent/10 bg-black/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="font-serif text-lg text-primary dark:text-secondary mb-2 font-medium">
                    {service.title}
                  </h4>
                  <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-accent/10 pt-3.5 flex items-center justify-between">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-accent font-medium">
                    {service.pricing}
                  </span>
                  <button
                    onClick={() => onNavigate("services")}
                    className="p-2 rounded-full border border-accent/15 hover:bg-accent hover:text-primary transition-all cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: RECENT PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-1.5">
              Curated Portfolios
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-primary dark:text-secondary tracking-tight">
              Recent Case Studies
            </h2>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-1.5">
            {["All", "Residential", "Villas", "Commercial"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-[9px] sm:text-xs font-mono uppercase tracking-widest rounded border transition-all duration-300 cursor-pointer ${
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

        {/* Clean, fast, 100% responsive uniform grid instead of heavy laggy masonry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-accent/10 hover:border-accent/30 bg-secondary dark:bg-charcoal p-4 sm:p-5 shadow-sm transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-accent/10 mb-4 bg-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-charcoal/80 text-secondary text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 rounded backdrop-blur-xs">
                    {project.location}
                  </div>
                </div>

                <span className="text-[9px] font-mono uppercase text-accent tracking-widest block mb-1">
                  {project.category}
                </span>
                <h3 className="font-serif text-lg text-primary dark:text-secondary mb-2 font-medium">
                  {project.title}
                </h3>
                <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mb-4">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-accent/10 pt-3 flex items-center justify-between">
                <span className="text-[8px] font-mono uppercase text-primary/40 dark:text-secondary/40">
                  {project.area}
                </span>
                <button
                  onClick={() => onOpenProject(project)}
                  className="group flex items-center space-x-1.5 text-[9px] sm:text-xs font-mono uppercase tracking-widest text-accent hover:text-accent-hover transition-colors cursor-pointer"
                >
                  <span>Interactive case study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: BOTTOM GRAND CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative rounded-xl overflow-hidden border border-accent/10 shadow-lg min-h-[280px] sm:min-h-[320px] flex items-center justify-center bg-black">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=70&w=800"
            alt="Atmospheric living spaces"
            className="absolute inset-0 w-full h-full object-cover filter brightness-40 opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal opacity-70" />

          <div className="relative z-10 text-center space-y-4 sm:space-y-6 max-w-2xl px-4 py-8 sm:py-12">
            <span className="text-[9px] sm:text-xs font-mono tracking-[0.3em] text-accent uppercase block">
              Translate Your Story Into Spatial Reality
            </span>
            <h2 className="font-serif text-xl sm:text-3xl md:text-4xl text-secondary tracking-tight font-medium">
              Ready to redesign your space?
            </h2>
            <p className="text-[10px] sm:text-xs text-secondary/80 font-sans max-w-lg mx-auto leading-relaxed">
              Connect with our design team. We coordinate bespoke residential plans, custom finishes, and high-end styling packages tailored to you.
            </p>
            <button
              onClick={() => onNavigate("book")}
              className="px-6 py-3 bg-accent hover:bg-accent-hover active:scale-98 text-primary font-mono text-xs uppercase tracking-widest rounded shadow transition-all duration-300 cursor-pointer block mx-auto"
            >
              Book Private Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
