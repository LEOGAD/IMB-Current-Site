/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TEAM } from "../../data";
import { Compass, Calendar, Award, CheckCircle, MapPin, Building, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { siteContent } from "../../content";

export default function AboutView() {
  const coreValues = [
    { title: "Material Integrity", desc: "No faux. No simulated veneers. We use 100% genuine marble monoliths, solid oak heartwood, and live metals that enrich with natural weathering." },
    { title: "Millimeter Documentation", desc: "Our shop documentation eliminates general contractor guesswork. We engineer blueprints with meticulous detail before a single hammer is swung." },
    { title: "Biophilic Balance", desc: "We integrate air filtration, natural flora positioning, and lighting systems tuned to human circadian rhythms." },
    { title: "Acoustic Quietness", desc: "We actively construct hidden acoustic panel walls and dampening backings to filter noise, guaranteeing high interior silence." }
  ];

  const timelineEvents = [
    { year: "2011", title: "IMB HOME FINISHERS Founded", desc: "Elena Rostov establishes our boutique office in Vienna, specializing in luxury residential joinery commissions." },
    { year: "2016", title: "Milan Studio Opens", desc: "We expand our procurement team to Milan, partnering directly with high-end Italian quarries and master glass fabricators." },
    { year: "2021", title: "AD100 Recognition", desc: "IMB HOME FINISHERS is listed on Architectural Digest's elite design studio directory for our coastal Amalfi Cliffside Sanctuary case study." },
    { year: "2025", title: "The Generative Showroom", desc: "Integrating advanced CAD, BIM, and generative spatial modeling to let clients tour and interact with custom stone options worldwide." }
  ];

  const certifications = [
    "Certified Member of IIDA (International Interior Design Association)",
    "FSC (Forest Stewardship Council) Wood Procurement Certified",
    "LEED AP (Leadership in Energy and Environmental Design) Accredited Professionals",
    "European Heritage Preservation Partner Award"
  ];

  const partnersLogos = [
    "Restoration Hardware",
    "Poliform Italy",
    "B&B Italia",
    "Minotti",
    "Flos Lighting",
    "Travertine Toscano S.r.l."
  ];

  return (
    <div className="space-y-24 py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          {siteContent.aboutHeroTagline}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          {siteContent.aboutHeroTitle}
        </h1>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          We operate as an award-winning international architecture and curation firm, specializing in bespoke residential estates, coastal luxury villas, and boutique commercial showrooms.
        </p>
      </section>

      {/* Main Split Story */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Image (5 cols) */}
        <div className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden border border-accent/10 shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            alt="Elena Rostov Founder"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal via-transparent p-6 text-secondary">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">Studio Founder</span>
            <h3 className="font-serif text-xl">Elena Rostov</h3>
            <span className="text-[10px] font-mono text-secondary/60">Vienna & Milan Creative Director</span>
          </div>
        </div>

        {/* Right Story & Mission (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block">
            The Company Narrative
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-primary dark:text-secondary">
            {siteContent.aboutMainHeading}
          </h2>
          <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
            {siteContent.aboutMainText}
          </p>
          <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
            {siteContent.aboutSecondaryText}
          </p>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-accent/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-accent block mb-1">
                Our Mission
              </span>
              <p className="text-xs text-primary/75 dark:text-secondary/75 leading-relaxed font-sans">
                To construct heirloom spaces utilizing 100% genuine natural materials, engineered with meticulous precision to withstand generations of tactile living.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-accent block mb-1">
                Our Vision
              </span>
              <p className="text-xs text-primary/75 dark:text-secondary/75 leading-relaxed font-sans">
                To establish a global standard for quiet luxury interior planning, bridging historic handmade artisanship with state-of-the-art spatial virtualization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-secondary/30 dark:bg-charcoal/30 py-20 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3">
              {siteContent.aboutStandardTitle}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary dark:text-secondary tracking-tight">
              Our Core Architectural Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-secondary dark:bg-charcoal border border-accent/10 hover:border-accent/30 rounded-xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-accent text-lg italic block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-lg text-primary dark:text-secondary font-medium mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Curation Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3">
            Elite Curation Group
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary dark:text-secondary tracking-tight">
            Meet the Directors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col justify-between bg-secondary dark:bg-charcoal border border-accent/10 hover:border-accent/30 rounded-xl p-5 shadow-sm transition-all duration-500"
            >
              <div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-accent/10 mb-4 bg-black/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-serif text-lg text-primary dark:text-secondary font-medium">
                  {member.name}
                </h4>
                <span className="text-[10px] font-mono tracking-wider text-accent uppercase block mb-3">
                  {member.role}
                </span>
                <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-accent/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-accent">
                <span>View cases</span>
                <div className="flex items-center space-x-2 text-primary/40 dark:text-secondary/40 font-normal">
                  {member.social.instagram && <span>{member.social.instagram}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Office & Material Showroom Gallery */}
      <section className="bg-secondary/30 dark:bg-charcoal/30 py-20 border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Timeline - Left (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3">
                Chronicle of execution
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary dark:text-secondary">
                Studio Timeline
              </h2>
            </div>

            <div className="space-y-6">
              {timelineEvents.map((evt, idx) => (
                <div key={idx} className="flex items-start space-x-4 border-l-2 border-accent/20 pl-4 py-1 relative">
                  <div className="absolute top-2 -left-[6px] w-2.5 h-2.5 rounded-full bg-accent" />
                  <div>
                    <span className="font-serif text-accent text-lg font-bold block">
                      {evt.year}
                    </span>
                    <h4 className="font-serif text-base text-primary dark:text-secondary font-medium">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-primary/70 dark:text-secondary/70 font-sans mt-0.5">
                      {evt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certs and Partners - Right (5 cols) */}
          <div className="lg:col-span-5 bg-secondary dark:bg-charcoal border border-accent/10 rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase text-accent tracking-widest block mb-2">
                Accreditations
              </span>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="text-xs text-primary/75 dark:text-secondary/75 flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent mr-2 shrink-0 mt-0.5" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-accent/10">
              <span className="text-[10px] font-mono uppercase text-accent tracking-widest block mb-3">
                Curated Industry Partners
              </span>
              <div className="grid grid-cols-2 gap-4">
                {partnersLogos.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-3 border border-accent/10 rounded-lg text-center bg-secondary/50 dark:bg-charcoal/50 text-[10px] font-mono text-primary/60 dark:text-secondary/60 uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
