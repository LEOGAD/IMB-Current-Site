/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Project } from "../types";
import { X, FileText, Download, Check, Star, CornerDownRight, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  project?: Project | null;
  onAddToQuote?: (product: Product) => void;
  isInQuote?: boolean;
}

export default function QuickViewModal({
  isOpen,
  onClose,
  product,
  project,
  onAddToQuote,
  isInQuote = false,
}: QuickViewModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!isOpen || (!product && !project)) return null;

  const itemTitle = product ? product.name : project?.title;
  const itemCategory = product ? product.category : project?.category;
  const itemDesc = product ? product.description : project?.description;
  const imageGallery = product ? product.images : project?.images || [];
  const mainImage = product ? product.image : project?.image;
  const allImages = [mainImage, ...imageGallery].filter((img): img is string => !!img);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/85 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-secondary dark:bg-charcoal border border-accent/10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[85vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border border-accent/15 bg-secondary/80 dark:bg-charcoal/80 text-primary dark:text-secondary hover:bg-accent hover:text-primary transition-all duration-300 z-20 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Side: Images Gallery (Col 1-6) */}
        <div className="md:col-span-6 bg-secondary/50 dark:bg-charcoal/30 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-accent/10 h-full">
          <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden border border-accent/10 bg-black/5">
            <img
              src={allImages[activeImageIdx] || mainImage}
              alt={itemTitle}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Thumbnail row */}
          {allImages.length > 1 && (
            <div className="flex space-x-2 mt-4 overflow-x-auto pb-1">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-16 aspect-square rounded-md overflow-hidden border cursor-pointer shrink-0 transition-all duration-300 ${
                    activeImageIdx === idx ? "border-accent ring-1 ring-accent" : "border-accent/10 hover:border-accent/30"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Specifications (Col 7-12) */}
        <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
                {itemCategory}
              </span>
              {product && product.brand && (
                <>
                  <span className="text-primary/25 dark:text-secondary/25 text-xs">•</span>
                  <span className="text-[10px] font-mono uppercase text-primary/60 dark:text-secondary/60">
                    {product.brand}
                  </span>
                </>
              )}
            </div>

            <h3 className="font-serif text-2xl md:text-3xl text-primary dark:text-secondary mb-3 leading-tight">
              {itemTitle}
            </h3>

            {/* Price or Project scope details info */}
            {product && (
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-accent/10">
                <span className="font-mono text-xl text-accent font-medium">
                  ₦{product.price.toLocaleString()}
                </span>
                <div className="flex items-center space-x-1 text-xs">
                  <Star className="w-3.5 h-3.5 fill-accent stroke-accent" />
                  <span className="font-sans font-medium">{product.rating}</span>
                  <span className="text-primary/40 dark:text-secondary/40">({product.reviewsCount} reviews)</span>
                </div>
              </div>
            )}

            {project && (
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-accent/10 text-xs">
                <div>
                  <span className="text-primary/40 dark:text-secondary/40 block mb-0.5 font-mono uppercase text-[9px] tracking-wider">
                    Location
                  </span>
                  <span className="text-primary dark:text-secondary font-medium">{project.location}</span>
                </div>
                <div>
                  <span className="text-primary/40 dark:text-secondary/40 block mb-0.5 font-mono uppercase text-[9px] tracking-wider">
                    Year Finished
                  </span>
                  <span className="text-primary dark:text-secondary font-medium">{project.year}</span>
                </div>
                <div>
                  <span className="text-primary/40 dark:text-secondary/40 block mb-0.5 font-mono uppercase text-[9px] tracking-wider">
                    Total Area
                  </span>
                  <span className="text-primary dark:text-secondary font-medium">{project.area}</span>
                </div>
                <div>
                  <span className="text-primary/40 dark:text-secondary/40 block mb-0.5 font-mono uppercase text-[9px] tracking-wider">
                    Client
                  </span>
                  <span className="text-primary dark:text-secondary font-medium">{project.client}</span>
                </div>
              </div>
            )}

            <p className="text-xs text-primary/70 dark:text-secondary/70 leading-relaxed font-sans mb-6">
              {itemDesc}
            </p>

            {/* Dynamic sections based on product vs project */}
            {product && (
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-accent tracking-widest block mb-1.5">
                    Specifications
                  </span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                    {product.specifications.slice(0, 4).map((spec, i) => (
                      <span key={i} className="text-primary/85 dark:text-secondary/85 flex items-center">
                        <CornerDownRight className="w-3.5 h-3.5 mr-1.5 text-accent shrink-0" />
                        {spec.split(":")[0]}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-accent tracking-widest block mb-1">
                    Dimensions
                  </span>
                  <span className="text-xs font-mono text-primary/80 dark:text-secondary/80">
                    {product.dimensions}
                  </span>
                </div>
              </div>
            )}

            {project && project.scope && (
              <div className="mb-6">
                <span className="text-[10px] font-mono uppercase text-accent tracking-widest block mb-1.5">
                  Scope of Works
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.scope.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-sans px-2.5 py-1 bg-accent/5 rounded border border-accent/10 text-primary/80 dark:text-secondary/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Call to Actions / Downloads */}
          <div className="space-y-3 pt-6 border-t border-accent/10">
            {product && onAddToQuote && (
              <button
                onClick={() => onAddToQuote(product)}
                className={`w-full py-2.5 rounded text-xs font-mono uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                  isInQuote
                    ? "bg-emerald-600 text-secondary hover:bg-emerald-700"
                    : "bg-accent text-primary hover:bg-accent/90"
                } flex items-center justify-center space-x-2`}
              >
                {isInQuote ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to procurement</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    <span>Add to Quote list</span>
                  </>
                )}
              </button>
            )}

            {product && (
              <div className="grid grid-cols-2 gap-2">
                <button className="py-2 px-3 border border-accent/15 rounded text-[10px] font-mono uppercase tracking-widest hover:border-accent text-primary/70 dark:text-secondary/70 hover:text-accent flex items-center justify-center space-x-1.5 cursor-pointer">
                  <Download className="w-3.5 h-3.5" />
                  <span>CAD File</span>
                </button>
                <button className="py-2 px-3 border border-accent/15 rounded text-[10px] font-mono uppercase tracking-widest hover:border-accent text-primary/70 dark:text-secondary/70 hover:text-accent flex items-center justify-center space-x-1.5 cursor-pointer">
                  <Download className="w-3.5 h-3.5" />
                  <span>Tearsheet</span>
                </button>
              </div>
            )}

            {project && (
              <button
                onClick={() => {
                  onClose();
                  // Dispatch simple custom event to router
                  window.dispatchEvent(new CustomEvent("navigate", { detail: "book" }));
                }}
                className="w-full py-2.5 bg-accent text-primary hover:bg-accent/90 rounded text-xs font-mono uppercase tracking-widest flex items-center justify-center space-x-2 cursor-pointer transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Enquire about similar project</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
