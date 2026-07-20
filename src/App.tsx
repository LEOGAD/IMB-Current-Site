/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Project, Product } from "./types";
import { motion, AnimatePresence } from "motion/react";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import QuickViewModal from "./components/QuickViewModal";
import MaterialLibrary from "./components/MaterialLibrary";

// Page Views
import HomeView from "./components/Views/HomeView";
import AboutView from "./components/Views/AboutView";
import ServicesView from "./components/Views/ServicesView";
import ProjectsView from "./components/Views/ProjectsView";
import ProductsView from "./components/Views/ProductsView";
import BlogView from "./components/Views/BlogView";
import CareersView from "./components/Views/CareersView";
import FAQView from "./components/Views/FAQView";
import ContactView from "./components/Views/ContactView";
import BookConsultationView from "./components/Views/BookConsultationView";

export default function App() {
  const [activeView, setActiveView] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? "dark" : "light";
  });

  // Procurement quote selections
  const [quoteItems, setQuoteItems] = useState<Product[]>([]);
  const [showQuoteToast, setShowQuoteToast] = useState(false);

  // Detailed Modal Overlays
  const [focusedProject, setFocusedProject] = useState<Project | null>(null);
  const [focusedProduct, setFocusedProduct] = useState<Product | null>(null);

  // Apply dark mode theme class globally
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen to custom cross-navigation events (e.g. from service view clicks)
  useEffect(() => {
    const handleNavigationEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setActiveView(customEvent.detail);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("navigate", handleNavigationEvent);
    return () => window.removeEventListener("navigate", handleNavigationEvent);
  }, []);

  const handleNavigate = (view: string) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToQuote = (product: Product) => {
    setQuoteItems((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleRemoveFromQuote = (product: Product) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  const handleSubmitQuote = () => {
    // Submitting packages catalog selection items directly into Consultation schedule
    setShowQuoteToast(true);
    setTimeout(() => {
      setShowQuoteToast(false);
      handleNavigate("book");
    }, 4500);
  };

  const renderView = () => {
    switch (activeView) {
      case "home":
        return <HomeView onNavigate={handleNavigate} onOpenProject={setFocusedProject} />;
      case "about":
        return <AboutView />;
      case "services":
        return <ServicesView />;
      case "projects":
        return <ProjectsView onOpenProject={setFocusedProject} />;
      case "catalog":
        return (
          <ProductsView
            onOpenProduct={setFocusedProduct}
            quoteItems={quoteItems}
            onAddToQuote={handleAddToQuote}
            onRemoveFromQuote={handleRemoveFromQuote}
            onSubmitQuote={handleSubmitQuote}
          />
        );
      case "materials":
        return (
          <div className="py-24 max-w-7xl mx-auto px-4 md:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
                Interactive Showroom
              </span>
              <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
                Raw Materials & <span className="italic">Curation.</span>
              </h1>
              <p className="text-sm text-primary/70 dark:text-secondary/70 max-w-xl mx-auto font-sans">
                Explore our private material showroom. Click individual slabs, fumed Oak hardwoods, or unlacquered brass to analyze origin metrics, finish durability, and acoustic absorption scores.
              </p>
            </div>
            <MaterialLibrary />
          </div>
        );
      case "blog":
        return <BlogView />;
      case "careers":
        return <CareersView />;
      case "faq":
        return <FAQView />;
      case "contact":
        return <ContactView />;
      case "book":
        return <BookConsultationView />;
      default:
        return <HomeView onNavigate={handleNavigate} onOpenProject={setFocusedProject} />;
    }
  };

  return (
    <div className="min-h-screen bg-secondary dark:bg-charcoal text-primary dark:text-secondary transition-colors duration-500 font-sans selection:bg-accent selection:text-primary">
      {/* Fluid Custom Cursor for luxury visual pairing */}
      <CustomCursor />

      {/* Luxury Sticky Navbar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        theme={theme}
        onThemeToggle={() => setTheme(theme === "light" ? "dark" : "light")}
        quoteCount={quoteItems.length}
      />

      {/* Core Dynamic Content Stage */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Editorial Grand Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating High-Contrast Glassmorphic Notification Toast */}
      <AnimatePresence>
        {showQuoteToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm p-5 bg-charcoal/95 dark:bg-secondary/95 text-secondary dark:text-primary rounded-2xl border border-accent/20 shadow-2xl backdrop-blur-md space-y-3"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-sm font-serif italic">IMB</span>
              </div>
              <h5 className="font-serif text-sm font-bold tracking-tight">Procurement Compiled</h5>
            </div>
            <p className="text-[11px] leading-relaxed opacity-90 font-sans">
              Procurement package draft successfully compiled with <strong>{quoteItems.length} items</strong>. We are now redirecting you to our private consultation booking desk...
            </p>
            <div className="h-1 bg-accent/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4.5, ease: "linear" }}
                className="h-full bg-accent"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HIGH-END INTERACTIVE PORTFOLIO & SPECIFICATION DETAILS OVERLAY MODALS */}
      <AnimatePresence>
        {focusedProject && (
          <QuickViewModal
            isOpen={true}
            onClose={() => setFocusedProject(null)}
            project={focusedProject}
          />
        )}
        {focusedProduct && (
          <QuickViewModal
            isOpen={true}
            onClose={() => setFocusedProduct(null)}
            product={focusedProduct}
            onAddToQuote={handleAddToQuote}
            isInQuote={quoteItems.some((item) => item.id === focusedProduct.id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
