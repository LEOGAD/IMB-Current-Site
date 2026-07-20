/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PRODUCTS } from "../../data";
import { Product } from "../../types";
import { motion, AnimatePresence } from "motion/react";
import { Search, SlidersHorizontal, Heart, RefreshCw, Eye, ShoppingCart, Check, Info, Trash2, Send } from "lucide-react";

interface ProductsViewProps {
  onOpenProduct: (product: Product) => void;
  quoteItems: Product[];
  onAddToQuote: (product: Product) => void;
  onRemoveFromQuote: (product: Product) => void;
  onSubmitQuote: () => void;
}

export default function ProductsView({
  onOpenProduct,
  quoteItems,
  onAddToQuote,
  onRemoveFromQuote,
  onSubmitQuote,
}: ProductsViewProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(10000); // Max price slider
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Wishlisted state tracking
  const [wishlist, setWishlist] = useState<string[]>([]);
  // Comparison list tracking
  const [compareList, setCompareList] = useState<Product[]>([]);

  const categories = ["All", "Living Room", "Bedroom", "Lighting"];
  const materials = ["All", "Bouclé", "Travertine", "Brass", "Linen", "Oak"];
  const brands = ["All", "IMB Home Finishers Atelier", "Giacometti Light", "Nordic Craft"];

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const toggleCompare = (prod: Product) => {
    setCompareList((prev) => {
      if (prev.some((p) => p.id === prod.id)) {
        return prev.filter((p) => p.id !== prod.id);
      }
      if (prev.length >= 3) {
        alert("You can compare a maximum of 3 luxury products at once.");
        return prev;
      }
      return [...prev, prod];
    });
  };

  // Curate and filter product list
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                          product.material.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange;
    const matchesMaterial = selectedMaterial === "All" || product.material.toLowerCase().includes(selectedMaterial.toLowerCase());
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesCat && matchesPrice && matchesMaterial && matchesBrand;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // default
  });

  return (
    <div className="space-y-16 py-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
        <span className="text-xs font-mono tracking-[0.3em] text-accent uppercase block">
          Showroom procurement
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary dark:text-secondary tracking-tight">
          Curated Furniture & <span className="italic">Lighting Armatures.</span>
        </h1>
        <p className="text-sm text-primary/70 dark:text-secondary/70 leading-relaxed max-w-2xl mx-auto font-sans">
          Curate a personalized list of custom modular sofas, travertine coffee tables, and raw living metals. Added catalog items construct a direct custom procurement quote request.
        </p>
      </section>

      {/* THREE-WAY COHESION: SEARCH, FILTER, AND MAIN DISPLAY GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* FILTERS COLUMN - LEFT (3 COLS) */}
        <div className="lg:col-span-3 bg-secondary dark:bg-charcoal border border-accent/10 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-accent/10 pb-3">
            <h4 className="font-serif text-lg text-primary dark:text-secondary flex items-center">
              <SlidersHorizontal className="w-4 h-4 text-accent mr-2" />
              <span>Catalog Filters</span>
            </h4>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setPriceRange(10000);
                setSelectedMaterial("All");
                setSelectedBrand("All");
                setSortBy("default");
                setSearch("");
              }}
              className="text-[10px] font-mono text-accent uppercase tracking-wider hover:underline cursor-pointer"
            >
              Reset All
            </button>
          </div>

          {/* Search Input inside filters */}
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
              Search Catalog
            </label>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Travertine, sofa, linen..."
                className="w-full py-2 pl-3 pr-8 text-xs border border-accent/15 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent"
              />
              <Search className="w-3.5 h-3.5 text-primary/40 dark:text-secondary/40 absolute right-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Category Selector */}
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
              Categories
            </label>
            <div className="flex flex-col space-y-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left text-xs py-1 px-1.5 rounded transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-accent/10 text-accent font-medium pl-2"
                      : "text-primary/70 dark:text-secondary/70 hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block">
                Max Price
              </label>
              <span className="font-mono text-xs text-accent">₦{priceRange.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-accent cursor-pointer"
            />
          </div>

          {/* Material Select */}
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
              Raw Materials
            </label>
            <div className="flex flex-wrap gap-1.5">
              {materials.map((mat) => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`text-[10px] font-sans px-2 py-0.5 rounded border cursor-pointer transition-all ${
                    selectedMaterial === mat
                      ? "border-accent bg-accent/10 text-accent font-medium"
                      : "border-accent/10 text-primary/60 dark:text-secondary/60 hover:border-accent/30"
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Brand select */}
          <div>
            <label className="text-[10px] font-mono uppercase tracking-widest text-accent/80 block mb-2">
              Studio Brands
            </label>
            <div className="flex flex-col space-y-1.5">
              {brands.map((br) => (
                <button
                  key={br}
                  onClick={() => setSelectedBrand(br)}
                  className={`text-left text-xs py-1 px-1.5 rounded transition-all duration-300 cursor-pointer ${
                    selectedBrand === br
                      ? "bg-accent/10 text-accent font-medium pl-2"
                      : "text-primary/70 dark:text-secondary/70 hover:text-accent"
                  }`}
                >
                  {br}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCTS LIST & SORTING ROW - RIGHT (9 COLS) */}
        <div className="lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between bg-secondary/30 dark:bg-charcoal/30 border border-accent/10 rounded-xl px-5 py-3 text-xs text-primary/70 dark:text-secondary/70">
            <span>Showing <span className="font-mono text-accent font-semibold">{filteredProducts.length}</span> curated items</span>

            {/* Sorting */}
            <div className="flex items-center space-x-2">
              <span className="font-mono text-[10px] uppercase text-primary/55 dark:text-secondary/55">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-1 px-2 border border-accent/10 rounded bg-secondary dark:bg-charcoal text-primary dark:text-secondary focus:outline-none focus:border-accent text-xs cursor-pointer"
              >
                <option value="default">Release Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">High Customer Rated</option>
              </select>
            </div>
          </div>

          {/* Catalog grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => {
                const wishlisted = wishlist.includes(prod.id);
                const compared = compareList.some((p) => p.id === prod.id);
                const addedToQuote = quoteItems.some((q) => q.id === prod.id);

                return (
                  <div
                    key={prod.id}
                    className="group flex flex-col justify-between bg-secondary dark:bg-charcoal border border-accent/10 hover:border-accent/30 rounded-xl p-4 shadow-sm transition-all duration-500 luxury-shadow-hover"
                  >
                    <div>
                      {/* Product Image */}
                      <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-accent/10 mb-4 bg-black/5">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-300" />

                        {/* Top-right Actions overlay */}
                        <div className="absolute top-2.5 right-2.5 flex flex-col space-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => toggleWishlist(prod.id)}
                            className={`p-1.5 rounded-full border border-accent/15 bg-secondary/90 dark:bg-charcoal/90 hover:bg-accent/10 cursor-pointer ${
                              wishlisted ? "text-rose-500 fill-rose-500" : "text-primary dark:text-secondary"
                            }`}
                          >
                            <Heart className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => toggleCompare(prod)}
                            className={`p-1.5 rounded-full border border-accent/15 bg-secondary/90 dark:bg-charcoal/90 hover:bg-accent/10 cursor-pointer ${
                              compared ? "text-accent fill-accent/10" : "text-primary dark:text-secondary"
                            }`}
                            title="Compare specifications"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onOpenProduct(prod)}
                            className="p-1.5 rounded-full border border-accent/15 bg-secondary/90 dark:bg-charcoal/90 hover:bg-accent/10 cursor-pointer text-primary dark:text-secondary"
                            title="Quick details View"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Product copy */}
                      <span className="text-[10px] font-mono tracking-widest text-accent block uppercase mb-1">
                        {prod.category}
                      </span>
                      <h4 className="font-serif text-base text-primary dark:text-secondary font-medium line-clamp-1">
                        {prod.name}
                      </h4>
                      <p className="text-[11px] text-primary/60 dark:text-secondary/60 font-sans mt-1 line-clamp-2">
                        {prod.material} • {prod.brand}
                      </p>
                    </div>

                    <div className="border-t border-accent/5 pt-3.5 mt-4 flex items-center justify-between">
                      <span className="font-mono text-sm text-accent font-semibold">
                        ₦{prod.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => onAddToQuote(prod)}
                        className={`py-1.5 px-3.5 rounded text-[10px] font-mono uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                          addedToQuote
                            ? "bg-emerald-600 hover:bg-emerald-700 text-secondary"
                            : "border border-accent/20 text-accent hover:bg-accent/10"
                        }`}
                      >
                        {addedToQuote ? "Added" : "Add to Quote"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-accent/20 rounded-xl space-y-2">
              <span className="font-serif text-lg text-primary/50 dark:text-secondary/50 italic">No exact catalog match</span>
              <p className="text-xs text-primary/60 dark:text-secondary/60 max-w-xs mx-auto">
                Try widening your price range or adjusting material selectors to display more luxury items.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* COMPARISON BAR DRAWER SHOWING ACTIVE SAMPLES */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 md:left-[15%] md:right-[15%] bg-secondary dark:bg-charcoal border border-accent border-t-2 rounded-2xl shadow-2xl z-30 p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
          >
            <div className="md:col-span-3">
              <h5 className="font-serif text-base text-primary dark:text-secondary font-semibold">
                Compare Curation ({compareList.length}/3)
              </h5>
              <p className="text-[10px] text-primary/65 dark:text-secondary/65 leading-relaxed">
                Compare dimensions, materials, and price outlines instantly.
              </p>
            </div>

            <div className="md:col-span-6 grid grid-cols-3 gap-2">
              {compareList.map((prod) => (
                <div key={prod.id} className="relative p-2 bg-secondary/50 dark:bg-charcoal/50 border border-accent/10 rounded-lg flex items-center space-x-2">
                  <img src={prod.image} alt="" className="w-8 h-8 rounded object-cover" referrerPolicy="no-referrer" />
                  <div className="truncate min-w-0">
                    <span className="text-[10px] text-primary dark:text-secondary font-medium block truncate">{prod.name}</span>
                    <span className="text-[9px] font-mono text-accent block">₦{prod.price.toLocaleString()}</span>
                  </div>
                  <button onClick={() => toggleCompare(prod)} className="absolute -top-1.5 -right-1.5 p-1 bg-charcoal text-secondary rounded-full border border-accent/10 text-[8px] cursor-pointer">
                    x
                  </button>
                </div>
              ))}
            </div>

            <div className="md:col-span-3 flex justify-end space-x-2">
              <button
                onClick={() => setCompareList([])}
                className="py-1.5 px-3 border border-accent/15 rounded text-[10px] font-mono uppercase tracking-widest text-primary/70 dark:text-secondary/70 cursor-pointer"
              >
                Clear
              </button>
              <button
                onClick={() => {
                  const comparisonDetails = compareList
                    .map((p) => `${p.name} (${p.material}, ${p.dimensions}): ₦${p.price}`)
                    .join("\n\n");
                  alert(`Curated Comparison Metrics:\n\n${comparisonDetails}`);
                }}
                className="py-1.5 px-4 bg-accent text-primary font-mono text-[10px] uppercase tracking-widest rounded shadow-md cursor-pointer"
              >
                Inspect specs
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ACTIVE PROCUREMENT / QUOTE DRAWER FOR WHITE-GLOVE SERVICE */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 border-t border-accent/10 pt-16">
        <div className="bg-secondary/30 dark:bg-charcoal/20 border border-accent/10 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex items-center space-x-2.5">
            <ShoppingCart className="w-5 h-5 text-accent" />
            <h4 className="font-serif text-2xl text-primary dark:text-secondary">
              Active Procurement Quote Request
            </h4>
          </div>

          <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans">
            Review your custom curation list below. These selected materials, lights, and furniture are direct elements to draft your private villa specification or business floor plan outline.
          </p>

          {quoteItems.length > 0 ? (
            <div className="space-y-4">
              <div className="space-y-3">
                {quoteItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border border-accent/5 rounded-lg bg-secondary dark:bg-charcoal/40"
                  >
                    <div className="flex items-center space-x-3.5">
                      <img src={item.image} alt="" className="w-12 h-12 rounded-md object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <h5 className="font-serif text-sm font-semibold text-primary dark:text-secondary">
                          {item.name}
                        </h5>
                        <span className="text-[10px] font-mono text-accent">
                          {item.material} • {item.brand}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-xs text-accent font-medium">
                        ₦{item.price.toLocaleString()}
                      </span>
                      <button
                        onClick={() => onRemoveFromQuote(item)}
                        className="text-primary/40 dark:text-secondary/40 hover:text-rose-500 p-1 cursor-pointer"
                        title="Remove specimen"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary calculations */}
              <div className="pt-4 border-t border-accent/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs">
                <div>
                  <span className="text-primary/40 dark:text-secondary/40 font-mono uppercase text-[9px] block">
                    Combined Catalog Procurement Estimates
                  </span>
                  <span className="text-lg font-serif text-accent font-bold block">
                    ₦{quoteItems.reduce((acc, curr) => acc + curr.price, 0).toLocaleString()}
                  </span>
                  <span className="text-[10px] text-primary/45 dark:text-secondary/45 italic block">
                    *Excludes custom logistics, trade discounts, and local taxes
                  </span>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={onSubmitQuote}
                    className="py-2.5 px-6 bg-accent hover:bg-accent/90 text-primary font-mono text-[10px] uppercase tracking-widest rounded shadow-md cursor-pointer flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit procurement package</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-xs text-primary/50 dark:text-secondary/50 font-mono">
              <p>Your procurement schedule is currently empty.</p>
              <p className="text-[10px] text-primary/40 dark:text-secondary/40 mt-1">
                Add furniture or lights from the catalog grid above to compile estimates.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
