/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { FAQS } from "../../data";
import { ChevronDown, HelpCircle, Compass, AlertCircle, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQView() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-24 py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          Client Inquiries
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          Frequently Answered <span className="italic">Questions.</span>
        </h1>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          Review details on our wholesale procurement agreements, millwork shop drawing reviews, and design project execution steps.
        </p>
      </section>

      {/* ACCORDION CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-secondary/40 dark:bg-charcoal/20 border border-accent/10 rounded-2xl p-6 md:p-10 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-accent/10 last:border-0 pb-4 last:pb-0"
              >
                {/* Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 text-left flex items-center justify-between font-serif text-base md:text-lg text-primary dark:text-secondary hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-accent transition-transform duration-500 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="py-2 text-xs md:text-sm text-primary/75 dark:text-secondary/75 leading-relaxed font-sans pl-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Emergency/Hotline Support block */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 border-t border-accent/10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary/30 dark:bg-charcoal/30 border border-accent/10 rounded-xl p-6 flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base text-primary dark:text-secondary font-medium">
                Procurement Logistics Notice
              </h4>
              <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mt-1">
                Due to Italian quarry summer maintenance schedules, raw travertine extraction halts annually between Aug 1 and Aug 15. If your project deadline sits near Autumn, we recommend securing specification deposits before July 10.
              </p>
            </div>
          </div>

          <div className="bg-secondary/30 dark:bg-charcoal/30 border border-accent/10 rounded-xl p-6 flex items-start space-x-4">
            <PhoneCall className="w-6 h-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif text-base text-primary dark:text-secondary font-medium">
                Call Creative Directors Direct
              </h4>
              <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mt-1">
                For active project emergencies or builder shop drawing review escalations, please contact the Vienna Atelier direct helpline on <span className="font-semibold text-accent">+43 1 513 5430</span> during office hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
