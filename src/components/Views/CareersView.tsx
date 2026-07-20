/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Compass, Briefcase, FileText, CheckCircle, Upload, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CareersView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("Senior Architectural Designer");
  const [notes, setNotes] = useState("");
  const [fileAttached, setFileAttached] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const benefits = [
    { title: "Direct Quarry Internships", desc: "Spend two weeks annually in Carrara and Tuscany studying marble vein extraction techniques." },
    { title: "Sabbatical Research", desc: "Every 3 years, receive a fully-funded 4-week architectural history study trip of your choice." },
    { title: "Health & Sound Wellness", desc: "Custom noise-canceling headsets, ergonomics consultation, and full private medical care." },
    { title: "Bespoke Workspace setup", desc: "Receive fumed oak standing desks, high-color-accuracy monitors, and full design software licenses." }
  ];

  const positions = [
    { title: "Senior Architectural Designer", location: "Vienna Studio", type: "Full-Time" },
    { title: "Junior FF&E Procurement Stylist", location: "Milan Office", type: "Full-Time" },
    { title: "Director of Lighting & Atmosphere", location: "Vienna / Remote", type: "Full-Time" }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setApplied(true);
      setName("");
      setEmail("");
      setNotes("");
      setFileAttached(null);
    }, 2000);
  };

  return (
    <div className="space-y-24 py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          Studio Culture
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          Join Our Curation <span className="italic">Group.</span>
        </h1>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          We gather forward-thinking architects, meticulous detail documentation technicians, and obsessive procurement stylists who respect raw organic materials.
        </p>
      </section>

      {/* Culture & Benefits */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left benefits (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block">
            Studio Benefits
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary dark:text-secondary tracking-tight">
            How We Support Your Curation Journey
          </h2>
          <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
            At IMB HOME FINISHERS, our designers don't sit in isolated cubicles drafting endless boilerplate floor plans. We operate as a cohesive atelier, regularly traveling to fuming mills, glass-blowing ovens, and antique fairs across Italy and Germany. We believe exceptional spaces are designed by well-rested, physically inspired minds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {benefits.map((ben, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-secondary/30 dark:bg-charcoal/30 border border-accent/10 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-primary dark:text-secondary font-medium">
                    {ben.title}
                  </h4>
                  <p className="text-xs text-primary/60 dark:text-secondary/60 font-sans mt-1">
                    {ben.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Open Roles (5 cols) */}
        <div className="lg:col-span-5 bg-secondary dark:bg-charcoal border border-accent/10 rounded-2xl p-6 md:p-8 space-y-6">
          <h3 className="font-serif text-xl text-primary dark:text-secondary tracking-tight border-b border-accent/10 pb-4">
            Active Open Positions
          </h3>

          <div className="space-y-4">
            {positions.map((pos, idx) => (
              <div
                key={idx}
                onClick={() => setPosition(pos.title)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                  position === pos.title
                    ? "border-accent bg-accent/5"
                    : "border-accent/10 hover:border-accent/30"
                }`}
              >
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-primary dark:text-secondary">
                    {pos.title}
                  </h4>
                  <span className="text-[10px] font-mono text-primary/50 dark:text-secondary/50 uppercase tracking-widest">
                    {pos.location} • {pos.type}
                  </span>
                </div>
                <Briefcase className="w-4 h-4 text-accent shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE APPLICATIONS FORM */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 border-t border-accent/10 pt-16">
        <div className="bg-secondary/40 dark:bg-charcoal/20 border border-accent/10 rounded-2xl p-6 md:p-10 shadow-lg">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-2">
              Atelier Application
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-primary dark:text-secondary">
              Submit Your Portfolio Specimen
            </h3>
            <p className="text-xs text-primary/70 dark:text-secondary/70">
              Complete the detailed dossier outline below. Our founders review all architectural or curation portfolio drafts directly within 5 working days.
            </p>
          </div>

          <form onSubmit={handleApply} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elena Rostova"
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elena@rostova-design.ru"
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
                  Position Dossier
                </label>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent cursor-pointer"
                >
                  {positions.map((pos, idx) => (
                    <option key={idx} value={pos.title}>
                      {pos.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
                  Attach CV / Portfolio Link
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="cv-upload"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileAttached(e.target.files[0].name);
                      }
                    }}
                  />
                  <label
                    htmlFor="cv-upload"
                    className="w-full py-2 px-3 border border-dashed border-accent/20 hover:border-accent rounded bg-secondary/50 dark:bg-charcoal text-primary/70 dark:text-secondary/70 text-xs flex items-center justify-center space-x-2 cursor-pointer transition-all duration-300"
                  >
                    <Upload className="w-4 h-4 text-accent" />
                    <span className="truncate">
                      {fileAttached ? fileAttached : "Drag & Drop or Click to Upload Specimen (PDF)"}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
                Why IMB HOME FINISHERS? Write a brief cover narrative (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Detail your experience with luxury quarries, timber mills, or high-end residential CAD documentation packages."
                className="w-full h-28 py-2 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary placeholder-primary/30 dark:placeholder-secondary/30 focus:outline-none focus:border-accent resize-none font-sans"
              />
            </div>

            {/* Submit application */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-accent hover:bg-accent/90 active:scale-98 text-primary font-mono text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Dossier...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Application Dossier</span>
                </>
              )}
            </button>
          </form>

          <AnimatePresence>
            {applied && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] text-emerald-600 font-semibold font-sans mt-4 text-center"
              >
                Application docket successfully created. Our creative directors will contact you if your specifications align.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
