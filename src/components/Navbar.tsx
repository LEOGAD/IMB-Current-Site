/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Compass, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { siteContent } from "../content";

interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  theme: "light" | "dark";
  onThemeToggle: () => void;
  quoteCount: number;
}

export default function Navbar({
  activeView,
  onNavigate,
  theme,
  onThemeToggle,
  quoteCount,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simplified navigation items driven by central copy file
  const navItems = siteContent.navItems;

  const romanNumerals = ["I", "II", "III", "IV", "V"];
  const primaryHeaderItems = siteContent.navItems.map((item, idx) => ({
    id: item.id,
    label: item.label,
    index: romanNumerals[idx] || "I"
  }));

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-secondary/90 dark:bg-charcoal/90 backdrop-blur-lg border-b border-accent/10 py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center space-x-3 text-left cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full border border-accent/30 group-hover:border-accent transition-all duration-700 bg-secondary/10 dark:bg-charcoal/10 overflow-hidden">
              <Compass className="w-4 h-4 text-accent group-hover:rotate-180 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <div className="absolute inset-0 bg-accent/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            </div>
            <div>
              <span className="font-serif text-lg tracking-[0.16em] font-medium text-primary dark:text-secondary block leading-none">
                {siteContent.companyName}
              </span>
              <span className="text-[7.5px] font-mono tracking-[0.38em] text-accent uppercase block mt-1.5 leading-none">
                {siteContent.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Primary Nav links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {primaryHeaderItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`group flex flex-col items-center cursor-pointer transition-colors duration-300 relative py-1.5`}
              >
                <span className="text-[7.5px] font-mono text-accent/50 group-hover:text-accent tracking-widest block mb-0.5 transition-colors duration-300">
                  {item.index}
                </span>
                <span className={`text-[10.5px] font-mono uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeView === item.id
                    ? "text-accent"
                    : "text-primary/70 dark:text-secondary/70 hover:text-accent"
                }`}>
                  {item.label}
                </span>
                {activeView === item.id && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-4">
            {/* Procurement / Quote count */}
            <button
              onClick={() => onNavigate("catalog")}
              className="p-2.5 rounded-full border border-accent/20 bg-secondary/40 dark:bg-charcoal/40 hover:bg-accent/10 transition-colors duration-300 relative cursor-pointer"
              title="View your curated selection"
            >
              <FileText className="w-4 h-4 text-primary dark:text-secondary" />
              {quoteCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-accent text-primary text-[10px] font-mono font-bold rounded-full flex items-center justify-center border-2 border-secondary dark:border-charcoal">
                  {quoteCount}
                </span>
              )}
            </button>

            {/* Theme switcher */}
            <ThemeSwitcher theme={theme} onToggle={onThemeToggle} />

            {/* High class Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-full border border-accent/25 hover:border-accent bg-accent/5 hover:bg-accent/10 text-primary dark:text-secondary transition-all duration-300 cursor-pointer group"
              aria-label="Toggle directory index"
            >
              <span className="text-[9px] font-mono uppercase tracking-widest text-accent font-semibold px-1 hidden sm:inline-block">
                Directory
              </span>
              <div className="w-4 h-4 relative flex flex-col justify-center space-y-1.5">
                <span className="w-4 h-0.5 bg-accent transition-transform duration-300" />
                <span className="w-3 h-0.5 bg-accent self-end transition-transform duration-300 group-hover:w-4" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* IMMERSIVE ULTRA-LUXURY ATELIER DIRECTORY OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-charcoal text-secondary flex flex-col justify-between overflow-y-auto"
          >
            {/* Background Atmosphere Layer */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-charcoal to-black-pure opacity-95" />

            {/* Top Bar inside Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 py-5 flex items-center justify-between border-b border-accent/10">
              <div className="flex items-center space-x-3 text-left">
                <Compass className="w-5 h-5 text-accent" />
                <div>
                  <span className="font-serif text-lg tracking-[0.16em] font-medium text-secondary block leading-none">
                    {siteContent.companyName}
                  </span>
                  <span className="text-[7.5px] font-mono tracking-[0.38em] text-accent uppercase block mt-1.5 leading-none">
                    {siteContent.tagline}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-full border border-accent/25 hover:border-accent bg-accent/5 hover:bg-accent/15 text-secondary transition-all duration-300 cursor-pointer group"
              >
                <span className="text-[9px] font-mono uppercase tracking-widest text-accent font-semibold px-1">
                  Close
                </span>
                <X className="w-3.5 h-3.5 text-accent group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Content Body */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 flex-1 items-center gap-12 py-12 overflow-y-auto">
              
              {/* Left Side: Staggered Curation Lists */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[9px] font-mono tracking-[0.4em] text-accent uppercase block border-b border-accent/10 pb-2">
                  Atelier Curation Directory
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1 sm:gap-y-3">
                  {navItems.map((item, idx) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onClick={() => {
                        onNavigate(item.id);
                        setMenuOpen(false);
                      }}
                      className="group flex items-start space-x-4 py-2.5 text-left border-b border-accent/5 hover:border-accent/20 transition-colors duration-300 cursor-pointer"
                    >
                      <span className="font-mono text-[9px] text-accent/40 group-hover:text-accent transition-colors duration-300 pt-1">
                        {item.index}
                      </span>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className={`font-serif text-xl sm:text-2xl tracking-wide transition-all duration-300 ${
                            activeView === item.id 
                              ? "text-accent italic font-normal" 
                              : "text-secondary/80 group-hover:text-secondary group-hover:translate-x-1"
                          }`}>
                            {item.label}
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-accent/0 group-hover:text-accent/85 group-hover:opacity-100 transition-all duration-300 -translate-y-1 translate-x-1" />
                        </div>
                        <span className="text-[8.5px] font-mono tracking-widest text-accent/50 group-hover:text-accent/90 transition-colors duration-300 uppercase block mt-0.5">
                          {item.sub}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right Side: Interactive Visual Curation Panel (Desktop only) */}
              <div className="hidden lg:block lg:col-span-5 h-[420px] relative overflow-hidden border border-accent/15 rounded-xl shadow-2xl bg-black-pure group/panel">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredItem}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={navItems.find((n) => n.id === hoveredItem)?.image}
                      alt={hoveredItem}
                      className="w-full h-full object-cover filter brightness-90 saturate-50 group-hover/panel:saturate-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Shadow scrims for ultra rich luxurious depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-black-pure/30" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-6 inset-x-6 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-accent/80 block uppercase tracking-[0.25em] mb-1">
                      Curation Showcase
                    </span>
                    <h4 className="font-serif text-lg text-secondary font-medium tracking-wide">
                      {navItems.find((n) => n.id === hoveredItem)?.sub}
                    </h4>
                  </div>
                  <span className="font-serif text-sm italic text-accent/50">
                    {siteContent.companyName} ©
                  </span>
                </div>
              </div>
            </div>

            {/* Footer inside Overlay */}
            <div className="relative z-10 border-t border-accent/10 bg-black-pure/30 backdrop-blur-md py-6">
              <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 text-secondary/60 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>{siteContent.officeLocations.join(" • ")}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-secondary/60 text-xs">
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  <span>{siteContent.email}</span>
                </div>
                <div className="text-center md:text-right text-[10px] font-mono text-secondary/40">
                  {siteContent.copyright}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
