/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Compass, MapPin, Mail, Phone, Calendar, Clock, Send, Loader2, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "../../content";

export default function ContactView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Private Residential Design");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const offices = [
    {
      city: "Port Harcourt Office (HQ)",
      address: "Rumuokwachi, Port Harcourt, Rivers State, Nigeria",
      phone: siteContent.phone,
      email: siteContent.email,
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(true);
      setIsLoading(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 6000);
    }, 1500);
  };

  return (
    <div className="space-y-24 py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          Connect With Our <span className="italic">Creative Atelier.</span>
        </h1>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          We welcome residential, commercial, and yacht interior commissions globally. Please coordinate your scheduling request below.
        </p>
      </section>

      {/* THREE-WAY SPLIT: CONTACT INFO, DYNAMIC FORM, AND VECTOR MAP DESIGN */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* OFFICE LOCATIONS LIST - LEFT (4 COLS) */}
        <div className="lg:col-span-4 space-y-8">
          <div className="border-b border-accent/10 pb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">Atelier Coordinates</span>
            <h3 className="font-serif text-2xl text-primary dark:text-secondary mt-1">Our Offices</h3>
          </div>

          <div className="space-y-6">
            {offices.map((off, idx) => (
              <div
                key={idx}
                className="bg-secondary/40 dark:bg-charcoal/30 border border-accent/10 hover:border-accent/30 rounded-xl p-5 shadow-sm transition-all duration-300"
              >
                <h4 className="font-serif text-lg text-primary dark:text-secondary font-medium mb-3">
                  {off.city}
                </h4>
                <div className="space-y-2 text-xs text-primary/75 dark:text-secondary/75 font-sans">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-accent mr-2 shrink-0 mt-0.5" />
                    <span>{off.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-accent mr-2 shrink-0" />
                    <span>{off.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-accent mr-2 shrink-0" />
                    <span>{off.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECURE CONTACT FORM - CENTER (5 COLS) */}
        <div className="lg:col-span-5 bg-secondary dark:bg-charcoal border border-accent/10 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="font-serif text-xl text-primary dark:text-secondary">Atelier Query Dossier</h3>
            <p className="text-[10px] font-mono text-accent uppercase tracking-wider">Direct Liaison Response within 24 Hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Charlotte Altman"
                className="w-full py-2 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="charlotte@altman-villas.com"
                className="w-full py-2 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-1">
                Design Focus
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full py-2 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent cursor-pointer"
              >
                <option value="Private Residential Design">Private Residential Design</option>
                <option value="Commercial / Hospitality Design">Commercial Showrooms</option>
                <option value="Bespoke Yacht Layouts">Bespoke Yacht Curation</option>
                <option value="Furniture Procurement Collaboration">Wholesale Procurement Only</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-1">
                Message Outline
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detail your estate spatial footprints, project deadlines, or travertine cut preferences..."
                className="w-full h-24 py-2 px-3 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary placeholder-primary/30 dark:placeholder-secondary/30 focus:outline-none focus:border-accent resize-none font-sans"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-accent hover:bg-accent/90 active:scale-98 text-primary font-mono text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2 transition-all duration-300 shadow-md cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Curation Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Transmit request</span>
                </>
              )}
            </button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-start space-x-2"
              >
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-[10px] text-emerald-600 font-medium font-sans">
                  Transmission successful. Our creative directorElena Rostov has been copied. Expect an invite package within 12 hours.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* VECTOR STYLED COHESION MAP ARTWORK - RIGHT (3 COLS) */}
        <div className="lg:col-span-3 bg-secondary/30 dark:bg-charcoal/30 border border-accent/10 rounded-2xl p-6 text-center space-y-4">
          <span className="text-[10px] font-mono uppercase text-accent tracking-widest block">Regional Hub Grid</span>
          <h4 className="font-serif text-lg text-primary dark:text-secondary font-medium italic">Atelier Coordinates</h4>
          <p className="text-[11px] text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
            Establishing our central studio in Port Harcourt, Rivers State to deliver world-class interior architecture services.
          </p>

          {/* Aesthetic vector representation drawing */}
          <div className="border border-accent/10 rounded-xl aspect-[4/5] bg-secondary/80 dark:bg-charcoal/80 flex flex-col justify-between p-4 relative overflow-hidden">
            {/* Compass vector graphics background circles */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
              <Compass className="w-48 h-48 animate-spin-slow" />
            </div>

            <div className="text-left font-mono text-[9px] text-accent leading-none space-y-1">
              <span>LAT: 4.8156° N</span>
              <span>LON: 7.0498° E</span>
            </div>

            <div className="space-y-4 relative z-10 text-left">
              <div className="border-l border-accent/30 pl-3">
                <span className="font-serif text-xs italic text-primary dark:text-secondary">Rumuokwachi</span>
                <span className="text-[8px] font-mono text-accent block uppercase">Port Harcourt</span>
              </div>
              <div className="border-l border-accent/30 pl-3">
                <span className="font-serif text-xs italic text-primary dark:text-secondary">Rivers State</span>
                <span className="text-[8px] font-mono text-accent block uppercase">Nigeria</span>
              </div>
            </div>

            <span className="text-[8px] font-mono text-primary/40 dark:text-secondary/40 text-right">
              ATELIER COORDINATE STANDARD
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
