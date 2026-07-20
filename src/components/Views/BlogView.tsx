/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BLOG_POSTS } from "../../data";
import { BlogPost } from "../../types";
import { motion, AnimatePresence } from "motion/react";
import { Search, Send, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogView() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subConfirm, setSubConfirm] = useState(false);

  const categories = ["All", "Interior Trends", "Lighting Design", "Materials"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                          post.snippet.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubConfirm(true);
      setEmail("");
      setTimeout(() => setSubConfirm(false), 5000);
    }
  };

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <div className="space-y-24 py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          IMB Home Finishers Journal
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          Aesthetics, Spatial <span className="italic">Trends, & Craft.</span>
        </h1>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          A curated publication on fumed woods, unfilled limestones, indirect illumination temperature profiles, and spatial design theory.
        </p>
      </section>

      {/* FEATURED EDITORIAL ARTICLE */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 bg-secondary dark:bg-charcoal border border-accent/10 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Image (7 cols) */}
        <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[300px]">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Info (5 cols) */}
        <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full bg-secondary/80 dark:bg-charcoal/80">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase text-accent bg-accent/10 px-2.5 py-1 rounded tracking-widest inline-block">
              Featured Editorial
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-primary dark:text-secondary leading-tight">
              {featuredPost.title}
            </h3>
            <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
              {featuredPost.snippet}
            </p>
            <div className="pt-4 space-y-2 border-t border-accent/10 text-[10px] font-mono text-primary/50 dark:text-secondary/50 uppercase">
              <div className="flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published: {featuredPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Estimate: {featuredPost.readTime}</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => alert(`Reading: ${featuredPost.title}\n\n${featuredPost.content}`)}
              className="group flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent-hover transition-colors cursor-pointer"
            >
              <span>Read article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* FILTER AND EDITORIAL LIST */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-accent/10 pb-6 gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded border transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? "border-accent bg-accent/10 text-accent font-medium"
                    : "border-accent/10 hover:border-accent/40 text-primary/70 dark:text-secondary/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search journals..."
              className="w-full py-2 pl-3 pr-8 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent"
            />
            <Search className="w-3.5 h-3.5 text-primary/40 dark:text-secondary/40 absolute right-2.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* List of articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col justify-between bg-secondary dark:bg-charcoal border border-accent/10 hover:border-accent/30 rounded-xl p-5 shadow-sm transition-all duration-500 luxury-shadow-hover"
              >
                <div>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-accent/10 mb-4 bg-black/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <span className="text-[10px] font-mono uppercase text-accent tracking-widest block mb-1">
                    {post.category}
                  </span>
                  <h4 className="font-serif text-lg text-primary dark:text-secondary font-medium leading-tight group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h4>
                  <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mt-2 line-clamp-3">
                    {post.snippet}
                  </p>
                </div>

                <div className="border-t border-accent/5 pt-4 mt-6 flex items-center justify-between text-[10px] font-mono text-primary/40 dark:text-secondary/40 uppercase">
                  <span>{post.date}</span>
                  <button
                    onClick={() => alert(`Reading Article: ${post.title}\n\n${post.content}`)}
                    className="text-accent hover:underline flex items-center space-x-1 font-semibold cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1" />
                    <span>View</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* EDITORIAL NEWSLETTER BLOCK */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 border-t border-accent/10 pt-16">
        <div className="bg-secondary/30 dark:bg-charcoal/20 border border-accent/10 rounded-2xl p-6 md:p-10 text-center space-y-6">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block">
            IMB Home Finishers Circle subscription
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-primary dark:text-secondary">
            Join the IMB Home Finishers Circle
          </h3>
          <p className="text-xs text-primary/70 dark:text-secondary/70 max-w-md mx-auto leading-relaxed">
            Subscribers receive private notifications of physical travertine showroom restocks, custom linen fabric allocations, and direct AD100 project case study drafts.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="flex-grow py-2 px-3 text-xs rounded border border-accent/15 bg-secondary dark:bg-charcoal text-primary dark:text-secondary placeholder-primary/45 dark:placeholder-secondary/45 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="py-2.5 px-6 bg-accent hover:bg-accent-hover text-primary font-mono text-xs uppercase tracking-widest rounded transition-all duration-300 cursor-pointer shadow-md"
            >
              Subscribe
            </button>
          </form>

          <AnimatePresence>
            {subConfirm && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] text-emerald-600 font-medium font-sans"
              >
                A confirmation code has been dispatched. Welcome to our private circle list.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
