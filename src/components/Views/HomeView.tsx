/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PROJECTS, SERVICES } from "../../data";
import { Project } from "../../types";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Award, MapPin, Minimize, CheckCircle, Quote, Compass } from "lucide-react";
import { siteContent } from "../../content";

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenProject: (project: Project) => void;
}

export default function HomeView({ onNavigate, onOpenProject }: HomeViewProps) {
  const [filter, setFilter] = useState("All");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const filteredProjects = filter === "All"
    ? PROJECTS.slice(0, 3)
    : PROJECTS.filter(p => p.category === filter).slice(0, 3);

  const stats = [
    { value: "15+", label: "Years of Craft" },
    { value: "240+", label: "Spaces Designed" },
    { value: "18", label: "Design Awards" },
    { value: "6", label: "Countries Served" },
  ];

  const testimonials = [
    {
      quote: "Elena and her team didn't just redesign our penthouse; they completely recalibrated our daily rhythm. The Travertine accents and indirect light coves invoke absolute stillness.",
      client: "Maximilian K.",
      location: "Vienna Penthouse owner",
      rating: 5,
    },
    {
      quote: "The material curation is unmatched. Sitting in our cliffside Positano villa surrounded by raw Italian stone, we realize we aren't just in a house; we are in a living piece of art.",
      client: "Charlotte Altman",
      location: "Altman Estates, Positano",
      rating: 5,
    },
    {
      quote: "Working with IMB HOME FINISHERS was seamless. Their shop drawings were flawless, and the on-site collaboration with our builder was the gold standard of architectural execution.",
      client: "Hiroshi Nakamura",
      location: "Tokyo Minimalist Residence",
      rating: 5,
    },
  ];

  const awards = [
    { title: "Best Luxury Architect", organization: "AD100 Awards", year: "2025" },
    { title: "Residential Interior Excellence", organization: "Awwwards Studio", year: "2025" },
    { title: "Sustainable Materials Pioneer", organization: "ArchDaily Annual", year: "2024" },
    { title: "Atmospheric Lighting of the Year", organization: "LIT Design", year: "2024" },
  ];

  const processSteps = [
    { num: "01", title: "Atmosphere Workshop", desc: "A detailed dialogue where we decode your aesthetic desires, physical habits, and structural layout potential." },
    { num: "02", title: "BIM & Curation Draft", desc: "Detailed 3D modeling and physical curation board, matching marbles, woods, metals, and textile fibers." },
    { num: "03", title: "Shop Documentation", desc: "Producing millimeter-precise architectural drawings, lighting elevations, and joinery detailing." },
    { num: "04", title: "White-Glove Staging", desc: "Supervising final tradesmen install, curation of vintage collectibles, and precision positioning of all pieces." }
  ];

  const instagramPosts = [
    { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400", tags: "#modernist #living" },
    { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400", tags: "#travertine #minimal" },
    { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400", tags: "#marble #kitchen" },
    { url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400", tags: "#cliffside #villa" }
  ];

  return (
    <div className="space-y-24 pb-16">
      {/* SECTION 1: HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black select-none">
        {/* Dynamic Zoom Image Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury modern interior design"
            className="w-full h-full object-cover filter brightness-50 opacity-80 animate-slow-pan scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-black/50 dark:from-charcoal" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <span className="text-xs font-mono tracking-[0.4em] text-accent uppercase block">
              {siteContent.officeLocations.join(" • ")}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-secondary dark:text-secondary tracking-tight leading-none max-w-5xl mx-auto">
              {siteContent.homeHeroTitle}
            </h1>
            <p className="text-sm md:text-base text-secondary/85 dark:text-secondary/85 font-sans font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              {siteContent.homeHeroSubtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                onClick={() => onNavigate("book")}
                className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent/95 active:scale-98 text-primary font-mono text-xs uppercase tracking-widest rounded-md shadow-lg transition-all duration-300 cursor-pointer"
              >
                Secure Consultation
              </button>
              <button
                onClick={() => onNavigate("projects")}
                className="w-full sm:w-auto px-8 py-3.5 border border-secondary/30 hover:border-accent text-secondary hover:text-accent font-mono text-xs uppercase tracking-widest rounded-md backdrop-blur-xs transition-all duration-300 cursor-pointer"
              >
                Explore Portfolios
              </button>
            </div>
          </motion.div>

          {/* Floating statistics */}
          <div className="mt-20 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-secondary/15">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                className="text-center"
              >
                <span className="font-serif text-3xl md:text-4xl text-accent font-medium block">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-secondary/70">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-secondary/60">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-secondary/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 bg-accent rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
              Architectural Honesty
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary dark:text-secondary tracking-tight leading-tight">
              We design with authentic materials, celebrating natural texture and <span className="italic">spatial stillness.</span>
            </h2>
            <div className="w-20 h-0.5 bg-accent" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
              <p>
                In an era dominated by superficial screens, we construct environments that tether you back to physical sensation. We select unfilled vein-cut travertine slabs, fumed German Oak, and heavy linen spun in Belgium. These materials breathe, age beautifully, and create acoustic quietness.
              </p>
              <p>
                Whether designing a cliffside infinity terrace along the Amalfi Coast or detailing custom concealed walk-in wardrobes in a Vienna villa, we operate with structural honesty. No superficial panels; every joinery line represents millimeters of tailored craftsmanship.
              </p>
            </div>
            <button
              onClick={() => onNavigate("about")}
              className="group flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent pt-2 hover:text-accent-hover transition-colors cursor-pointer"
            >
              <span>Our Story & Partners</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          {/* Graphic/Image Right (5 cols) */}
          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-accent/15 group">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800"
              alt="Luxury interior detailing"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-500" />
            <div className="absolute bottom-6 left-6 right-6 bg-secondary/85 dark:bg-charcoal/85 backdrop-blur-md border border-accent/10 p-5 rounded-xl">
              <h4 className="font-serif text-lg text-primary dark:text-secondary italic mb-1">
                "The Curation Table"
              </h4>
              <p className="text-[10px] font-mono uppercase tracking-wider text-accent">
                Milan Studio Showroom Curation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID PREVIEW */}
      <section className="bg-secondary/30 dark:bg-charcoal/30 py-20 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3">
                Our Services
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary dark:text-secondary tracking-tight">
                Studio Solutions
              </h2>
            </div>
            <button
              onClick={() => onNavigate("services")}
              className="px-6 py-3 border border-accent/20 hover:border-accent hover:text-accent rounded text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer self-start md:self-auto"
            >
              Full Service Descriptions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="bg-secondary dark:bg-charcoal border border-accent/10 hover:border-accent/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm luxury-shadow-hover"
              >
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-accent/10 bg-black/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover filter brightness-95"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="font-serif text-xl text-primary dark:text-secondary mb-3">
                    {service.title}
                  </h4>
                  <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-accent/10 pt-4 mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent">
                    {service.pricing}
                  </span>
                  <button
                    onClick={() => onNavigate("services")}
                    className="p-2.5 rounded-full border border-accent/15 hover:bg-accent hover:text-primary transition-all cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PORTFOLIO MASONRY */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3">
              Curated Portfolios
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary dark:text-secondary tracking-tight">
              Recent Case Studies
            </h2>
          </div>

          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-2">
            {["All", "Residential", "Villas", "Commercial"].map((cat) => (
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => {
            const spanClass = idx === 0
              ? "md:col-span-8" // wide first card
              : idx === 1
              ? "md:col-span-4" // narrow second
              : "md:col-span-12"; // wide bottom card

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className={`${spanClass} group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-accent/10 hover:border-accent/30 bg-secondary dark:bg-charcoal p-6 shadow-md transition-all duration-500`}
              >
                <div className="relative aspect-16/9 md:aspect-auto md:h-80 w-full overflow-hidden rounded-xl border border-accent/10 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/25 group-hover:bg-charcoal/0 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 bg-charcoal/80 text-secondary text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-xs">
                    {project.location}
                  </div>
                </div>

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-accent tracking-widest block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-primary dark:text-secondary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mb-6 max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="border-t border-accent/10 pt-4 mt-auto flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-primary/40 dark:text-secondary/40">
                      Finished {project.year} • {project.area}
                    </span>
                    <button
                      onClick={() => onOpenProject(project)}
                      className="group flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent-hover transition-colors cursor-pointer"
                    >
                      <span>Interactive case study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: THE PROCESS */}
      <section className="bg-secondary/30 dark:bg-charcoal/30 py-20 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3">
              Workflow timeline
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary dark:text-secondary tracking-tight mb-4">
              Our Design Process
            </h2>
            <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
              Elite spatial design isn't accidental. It is a meticulous, linear pipeline that translates blueprint lines into custom millwork and perfectly styled, silent luxury residences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Timeline connection line (desktop only) */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-accent/20 z-0" />

            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-start space-y-4">
                <div className="w-14 h-14 rounded-full bg-secondary dark:bg-charcoal border-2 border-accent text-accent font-serif text-xl font-bold flex items-center justify-center shadow-md">
                  {step.num}
                </div>
                <h4 className="font-serif text-lg text-primary dark:text-secondary font-medium pt-2">
                  {step.title}
                </h4>
                <p className="text-xs text-primary/75 dark:text-secondary/75 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Storyteller (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
            {siteContent.homeWhySubtext}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary dark:text-secondary tracking-tight">
            {siteContent.homeWhyTitle}
          </h2>
          <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
            We operate at the narrow intersection of architectural precision and luxury brand curation. From selecting the exact marble quarry cuts in Tuscany to overseeing physical sound dampening of bedroom walls, our standard is unconditional.
          </p>

          <div className="space-y-4 pt-4">
            {[
              { title: "BIM & CAD Shop drawings standard", desc: "Our detail packages are fully documented to millimeter precision, eliminating builder assumptions." },
              { title: "Direct Quarry & Loom relationships", desc: "No middle-man fabricators. We source directly from heritage Italian quarries and Belgian weavers." },
              { title: "Unbiased procurement pricing", desc: "Our clients receive direct wholesale contract-pricing, offering full financial transparency." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3.5">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-serif text-base text-primary dark:text-secondary font-medium">
                    {item.title}
                  </h5>
                  <p className="text-xs text-primary/60 dark:text-secondary/60 font-sans mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Showcase Timeline/Awards (6 cols) */}
        <div className="lg:col-span-6 bg-secondary/30 dark:bg-charcoal/20 border border-accent/10 rounded-2xl p-8 space-y-6">
          <h4 className="font-serif text-2xl text-primary dark:text-secondary tracking-tight italic border-b border-accent/10 pb-4">
            Awards & Commendations
          </h4>

          <div className="space-y-4">
            {awards.map((award, idx) => (
              <div key={idx} className="flex items-center justify-between py-2.5 border-b border-accent/5 last:border-0">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-accent" />
                  <div>
                    <h5 className="text-xs font-sans font-semibold text-primary dark:text-secondary">
                      {award.title}
                    </h5>
                    <span className="text-[10px] font-mono text-primary/50 dark:text-secondary/50 uppercase tracking-wider">
                      {award.organization}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-accent">
                  {award.year}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center justify-between text-xs text-primary/40 dark:text-secondary/40 font-mono uppercase tracking-wider border-t border-accent/10">
            <span>Pentagram Standards</span>
            <span>Est. 2011</span>
          </div>
        </div>
      </section>

      {/* SECTION 7: FEATURED COLLECTIONS CAROUSEL */}
      <section className="bg-secondary/30 dark:bg-charcoal/30 py-20 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block">
              Bespoke furniture curation
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary dark:text-secondary tracking-tight">
              Curated Furniture Collections
            </h2>
            <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed">
              In addition to spatial layouts, our studio manufactures high-end limited edition armchairs, tables, and lighting armatures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { cat: "Living Room", name: "Elysian Modular Series", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600" },
              { cat: "Lighting", name: "Lumina Armatures", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600" },
              { cat: "Bedroom", name: "Zenith Linen Bedframes", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=600" },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate("catalog")}
                className="group relative text-left rounded-xl overflow-hidden border border-accent/15 hover:border-accent/35 bg-secondary dark:bg-charcoal transition-all duration-500 cursor-pointer shadow-sm luxury-shadow-hover"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/15 group-hover:bg-charcoal/0 transition-colors duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-mono tracking-widest text-accent block uppercase mb-1">
                    {item.cat}
                  </span>
                  <h4 className="font-serif text-lg text-primary dark:text-secondary font-medium">
                    {item.name}
                  </h4>
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-accent uppercase tracking-widest mt-4">
                    <span>Explore showroom</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-8 py-10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-accent/10 pointer-events-none select-none z-0">
          <Quote className="w-32 h-32 stroke-1" />
        </div>

        <div className="relative z-10 space-y-6">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block">
            What Clients Experience
          </span>

          <div className="min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 max-w-3xl"
              >
                <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary dark:text-secondary leading-relaxed italic">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent stroke-accent" />
                  ))}
                </div>
                <div>
                  <h5 className="font-sans font-bold text-xs text-primary dark:text-secondary uppercase tracking-widest block">
                    {testimonials[activeTestimonial].client}
                  </h5>
                  <span className="text-[10px] font-mono text-primary/50 dark:text-secondary/50 uppercase tracking-widest">
                    {testimonials[activeTestimonial].location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center space-x-4 pt-4">
            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
              }
              className="p-2.5 rounded-full border border-accent/20 bg-secondary/80 dark:bg-charcoal/80 hover:bg-accent/15 text-primary dark:text-secondary cursor-pointer transition-colors duration-300"
              aria-label="Previous client testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-primary/40 dark:text-secondary/40">
              {activeTestimonial + 1} / {testimonials.length}
            </span>
            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
              }
              className="p-2.5 rounded-full border border-accent/20 bg-secondary/80 dark:bg-charcoal/80 hover:bg-accent/15 text-primary dark:text-secondary cursor-pointer transition-colors duration-300"
              aria-label="Next client testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: INSTAGRAM LUXURY GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block">
            Digital Showroom
          </span>
          <h2 className="font-serif text-3xl text-primary dark:text-secondary tracking-tight">
            Follow Us On Instagram
          </h2>
          <span className="text-xs font-mono text-primary/50 dark:text-secondary/50">
            @aurelia_luxury_interiors
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-xl overflow-hidden border border-accent/10 shadow-sm"
            >
              <img
                src={post.url}
                alt=""
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs">
                <div className="text-center text-secondary p-4 space-y-1">
                  <span className="font-serif text-sm italic">IMB Home Finishers Curation</span>
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest">{post.tags}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: BOTTOM GRAND CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-accent/10 shadow-2xl min-h-[350px] flex items-center justify-center bg-black">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
            alt="Atmospheric living spaces"
            className="absolute inset-0 w-full h-full object-cover filter brightness-45 opacity-70 animate-slow-pan"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal" />

          <div className="relative z-10 text-center space-y-6 max-w-3xl px-6 py-12">
            <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
              Schedule Your Workspace or Home Curation
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-secondary dark:text-secondary tracking-tight">
              Ready to Translate Your Story Into Spatial Reality?
            </h2>
            <p className="text-xs md:text-sm text-secondary/80 dark:text-secondary/80 font-sans max-w-xl mx-auto leading-relaxed">
              Connect with our master architects and designers in Vienna, Milan, or Positano. We accept a strictly limited schedule of residential and boutique hospitality commissions annually.
            </p>
            <button
              onClick={() => onNavigate("book")}
              className="px-8 py-3.5 bg-accent hover:bg-accent-hover active:scale-98 text-primary font-mono text-xs uppercase tracking-widest rounded-md shadow-lg transition-all duration-300 cursor-pointer block mx-auto"
            >
              Book Private Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
