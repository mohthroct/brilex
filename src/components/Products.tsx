"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products as allProducts } from "@/lib/products";

const featuredProducts = allProducts.slice(0, 6);
const categories = ["Tous", "Détergents", "Désodorisants"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredProducts =
    activeCategory === "Tous"
      ? featuredProducts
      : featuredProducts.filter((p) => p.categoryLabel === activeCategory);

  return (
    <section id="products" ref={sectionRef} className="py-32 bg-neutral-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E91E8C]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00A3E0]/5 rounded-full blur-[150px]" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span className="text-neutral-500 text-sm">Notre Excellence</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-neutral-900">Nos </span>
            <span className="text-gradient">Produits</span>
          </h2>

          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Une gamme complète née de l&apos;expertise algérienne.
            Chaque produit est le fruit de 20 ans d&apos;innovation.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] text-white shadow-md"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 shadow-sm"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/produits/${product.slug}`} className="group block">
                  <div className="relative bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-300">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                      style={{
                        background: `radial-gradient(circle at center, ${product.color}30, transparent 70%)`,
                      }}
                    />

                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                      <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: `${product.color}CC` }}
                      >
                        {product.categoryLabel}
                      </div>
                    </div>

                    <div className="relative p-6">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#E91E8C] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-neutral-500 text-sm line-clamp-2 mb-4">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 2).map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs text-neutral-600 bg-neutral-100 border border-neutral-200"
                          >
                            {feature}
                          </span>
                        ))}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/produits"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            Voir tous nos produits
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
