"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/lib/products";

export default function ProduitsPage() {
  const [activeCategory, setActiveCategory] = useState("tous");
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const filtered =
    activeCategory === "tous"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E91E8C]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00A3E0]/5 rounded-full blur-[120px]" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-neutral-500 text-sm">Notre Gamme Complète</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-neutral-900">Nos </span>
              <span className="text-gradient">Produits</span>
            </h1>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Découvrez toute la gamme Brilex. Des produits d&apos;entretien de qualité premium,
              conçus et fabriqués en Algérie depuis plus de 20 ans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] text-white shadow-md"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 shadow-sm"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Products grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((product, index) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link href={`/produits/${product.slug}`} className="group block">
                    <div className="relative bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
                        <div
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: `${product.color}CC` }}
                        >
                          {product.categoryLabel}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#E91E8C] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-[#00A3E0]">
                          Voir détails
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{ backgroundColor: product.color }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
