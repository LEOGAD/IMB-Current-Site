/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowUp, Mail, Send, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "../content";

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/40 dark:bg-charcoal border-t border-accent/10 pt-16 pb-12 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Col (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center space-x-3 text-left cursor-pointer group"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full border border-accent/30 group-hover:border-accent transition-all duration-700 bg-secondary/10 dark:bg-charcoal/10 overflow-hidden">
                <Compass className="w-4.5 h-4.5 text-accent group-hover:rotate-180 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
              <div>
                <span className="font-serif text-base sm:text-xl tracking-[0.16em] font-medium text-primary dark:text-secondary block leading-none">
                  {siteContent.companyName}
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] font-mono tracking-[0.25em] sm:tracking-[0.35em] text-accent uppercase block mt-1 sm:mt-1.5 leading-none">
                  {siteContent.tagline}
                </span>
              </div>
            </button>
            <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed max-w-sm">
              {siteContent.footerDescription}
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent block mb-2">
                Office Hours
              </span>
              <span className="text-xs text-primary/60 dark:text-secondary/60 block">
                Monday — Friday: 09:00 — 18:00 CET
              </span>
              <span className="text-xs text-primary/60 dark:text-secondary/60 block">
                Saturday: By Appointment Only
              </span>
            </div>
          </div>

          {/* Quick Links (Col 5-8) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h5 className="text-[10px] font-mono uppercase tracking-widest text-accent font-medium">
                The Studio
              </h5>
              <ul className="space-y-2.5">
                {siteContent.navItems.slice(0, 3).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="text-xs text-primary/70 dark:text-secondary/70 hover:text-accent cursor-pointer transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] font-mono uppercase tracking-widest text-accent font-medium">
                Directory
              </h5>
              <ul className="space-y-2.5">
                {siteContent.navItems.slice(3).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => onNavigate(item.id)}
                      className="text-xs text-primary/70 dark:text-secondary/70 hover:text-accent cursor-pointer transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter (Col 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h5 className="text-[10px] font-mono uppercase tracking-widest text-accent font-medium">
                {siteContent.newsletterTitle}
              </h5>
              <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed">
                {siteContent.newsletterSubtext}
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email for private updates"
                className="w-full py-2.5 pl-3 pr-12 text-xs border-b border-accent/25 bg-transparent focus:outline-none focus:border-accent text-primary dark:text-secondary placeholder-primary/40 dark:placeholder-secondary/40 font-sans"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-accent text-primary/60 dark:text-secondary/60 transition-colors duration-300 cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-emerald-600 font-medium"
                >
                  {siteContent.newsletterWelcomeMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-primary/50 dark:text-secondary/50 uppercase tracking-wider">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
            <span>{siteContent.copyright}</span>
            <button className="hover:text-accent cursor-pointer">Privacy Policy</button>
            <button className="hover:text-accent cursor-pointer">Terms of Use</button>
          </div>

          <button
            onClick={scrollToTop}
            className="group py-2 px-3.5 border border-accent/20 rounded-full hover:border-accent text-primary dark:text-secondary hover:text-accent transition-all duration-300 cursor-pointer flex items-center space-x-1.5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
