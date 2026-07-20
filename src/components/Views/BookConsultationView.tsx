/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Compass, Calendar, Clock, DollarSign, Send, CheckCircle, Award, Coffee, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "../../content";

export default function BookConsultationView() {
  const [projectType, setProjectType] = useState("Private Penthouse / Villa");
  const [budgetRange, setBudgetRange] = useState("₦5,000,000 - ₦15,000,000");
  const [timeline, setTimeline] = useState("3 - 6 Months");
  const [meetingStyle, setMeetingStyle] = useState("Port Harcourt Studio (In-person)");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [booked, setBooked] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setBooked(true);
      setClientName("");
      setClientEmail("");
      setNotes("");
    }, 1800);
  };

  return (
    <div className="space-y-16 md:space-y-24 py-16 md:py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          Private Engagement
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          Secure Your Private <span className="italic">Consultation.</span>
        </h1>
        <p className="text-xs sm:text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          Select your budget range, project milestones, and coordinate a private session with our master designers in Port Harcourt or Lagos.
        </p>
      </section>

      {/* TWO-COLUMN LAYOUT: FORM ON THE LEFT, STUDIO PROFILE ON THE RIGHT */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* BOOKING CONSULTATION FORM - LEFT (7 COLS) */}
        <div className="lg:col-span-7 bg-secondary dark:bg-charcoal border border-accent/10 rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl space-y-8">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-primary dark:text-secondary mb-2">
              Atelier Appointment Dossier
            </h3>
            <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed">
              Complete the exact scope specifications below. Our master designers review your submitted blueprint notes to construct early material curations prior to meeting.
            </p>
          </div>

          <form onSubmit={handleBook} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g., Aliyu Danjuma"
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="e.g., aliyu@danjuma-estates.com"
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Type */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2 font-semibold">
                  Spatial Scope Focus
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent cursor-pointer"
                >
                  <option value="Private Penthouse / Villa">Private Penthouse / Villa</option>
                  <option value="Bespoke Retail / Commercial">Bespoke Retail / Commercial</option>
                  <option value="Luxury Living Room Remodel">Luxury Living Room Remodel</option>
                  <option value="Complete Home Finishes Package">Complete Home Finishes Package</option>
                </select>
              </div>

              {/* Budget level selectors */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2 font-semibold">
                  Investment Allocation Scale
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent cursor-pointer"
                >
                  <option value="₦2,000,000 - ₦5,000,000">₦2,000,000 - ₦5,000,000</option>
                  <option value="₦5,000,000 - ₦15,000,000">₦5,000,000 - ₦15,000,000</option>
                  <option value="₦15,000,000 - ₦50,000,000">₦15,000,000 - ₦50,000,000</option>
                  <option value="₦50,000,000+">₦50,000,000+ (Elite Architectural Tier)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Timeline selector */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2 font-semibold">
                  Project Delivery Target
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent cursor-pointer"
                >
                  <option value="Within 3 Months">Within 3 Months (Express Fee)</option>
                  <option value="3 - 6 Months">3 - 6 Months (Standard)</option>
                  <option value="6 - 12 Months">6 - 12 Months</option>
                  <option value="Flexible">Flexible (Slower Heritage Pace)</option>
                </select>
              </div>

              {/* Preferred Meeting Style */}
              <div>
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2 font-semibold">
                  Consultation Rendezvous Style
                </label>
                <select
                  value={meetingStyle}
                  onChange={(e) => setMeetingStyle(e.target.value)}
                  className="w-full py-2.5 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent cursor-pointer"
                >
                  <option value="Port Harcourt Studio (In-person)">Port Harcourt Studio (In-person)</option>
                  <option value="Lagos Showroom (In-person)">Lagos Showroom (In-person)</option>
                  <option value="Secure Zoom walkthrough (Digital)">Secure Zoom walkthrough (Digital)</option>
                  <option value="Private Site visit (Travel arrangement required)">On-site travel assessment</option>
                </select>
              </div>
            </div>

            {/* Note details */}
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2 font-semibold">
                Project Curation Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Briefly describe your dream space, material preferences, or custom lighting elevations desired..."
                className="w-full h-24 py-2 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary placeholder-primary/30 dark:placeholder-secondary/30 focus:outline-none focus:border-accent resize-none font-sans"
              />
            </div>

            {/* Submit Consultation */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-accent hover:bg-accent/90 active:scale-98 text-primary font-mono text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50 font-semibold"
            >
              {isSubmitting ? "Transmitting Scope Dossier..." : "Secure Private Appointment"}
            </button>
          </form>

          <AnimatePresence>
            {booked && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-2 text-center flex flex-col items-center"
              >
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-1" />
                <h4 className="font-serif text-lg text-emerald-700 font-bold">Appointment Successfully Placed</h4>
                <p className="text-xs text-emerald-600 font-sans max-w-md mx-auto leading-relaxed">
                  Your spatial booking dossier is compiled. Emeka Obi and the design team have been notified. Expect our digital brochure package, calendar invitations, and bespoke material swatch lists to arrive via email.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* HIGH-END HANDCRAFTED BRAND PROFILE - RIGHT (5 COLS) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-secondary/30 dark:bg-charcoal/30 border border-accent/15 rounded-2xl p-6 shadow-sm space-y-4">
            <span className="text-[10px] font-mono uppercase text-accent tracking-widest block">
              IMB Atelier standard
            </span>
            <h4 className="font-serif text-xl text-primary dark:text-secondary">
              Millimeter Precision & Quality
            </h4>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-accent/10">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=70&w=600"
                alt="Luxury woodwork finish"
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
              Every home finishes project we supervise is crafted using premium, highly vetted raw materials. From hand-brushed Nigerian mahogany to water-resistant custom lighting armatures, we design for generations of resilient use.
            </p>
          </div>

          <div className="bg-secondary/30 dark:bg-charcoal/30 border border-accent/10 rounded-2xl p-6 text-xs text-primary/70 dark:text-secondary/70 space-y-3">
            <div className="flex items-start space-x-2.5">
              <Coffee className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>Complimentary premium chauffeur transport arranged for Port Harcourt or Lagos studio bookings exceeding ₦10M project scale.</span>
            </div>
            <div className="flex items-start space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span>{siteContent.consultationAccreditation}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
