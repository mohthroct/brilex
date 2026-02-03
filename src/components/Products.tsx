"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, X, Check, Droplets, Leaf, Zap } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  color: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Gel Lave-Sol Premium",
    category: "Détergents",
    description: "Notre formule signature. Nettoyage puissant et brillance incomparable pour tous types de sols.",
    image: "/images/products/product-1.jpg",
    color: "#E91E8C",
    features: ["Ultra-brillant", "Parfum longue durée", "Action dégraissante"],
  },
  {
    id: 2,
    name: "Gel Floral Délicat",
    category: "Détergents",
    description: "Fraîcheur florale subtile pour un intérieur accueillant et parfumé.",
    image: "/images/products/product-2.jpg",
    color: "#FF69B4",
    features: ["Notes florales", "Doux pour surfaces", "Éco-responsable"],
  },
  {
    id: 3,
    name: "Pack Multi-Surfaces",
    category: "Détergents",
    description: "La gamme complète pour un nettoyage intégral de votre maison.",
    image: "/images/products/product-3.jpg",
    color: "#00A3E0",
    features: ["Gamme complète", "Tous usages", "Économique"],
  },
  {
    id: 4,
    name: "Pack Famille",
    category: "Promotions",
    description: "L'essentiel Brilex réuni dans un pack avantageux pour toute la famille.",
    image: "/images/products/product-4.jpg",
    color: "#FFD700",
    features: ["Meilleur prix", "Livraison gratuite", "Stock limité"],
  },
  {
    id: 5,
    name: "Désodorisant Citron",
    category: "Désodorisants",
    description: "Explosion de fraîcheur citronnée. Neutralise les odeurs instantanément.",
    image: "/images/products/spray-1.jpg",
    color: "#FFEB3B",
    features: ["Fraîcheur intense", "24h efficacité", "Sans résidu"],
  },
  {
    id: 6,
    name: "Désodorisant Floral",
    category: "Désodorisants",
    description: "Bouquet de fleurs printanières pour une ambiance apaisante.",
    image: "/images/products/spray-2.jpg",
    color: "#E91E8C",
    features: ["Notes florales", "Ambiance zen", "Format voyage"],
  },
];

const categories = ["Tous", "Détergents", "Désodorisants", "Promotions"];

const ProductCard = ({ product, index, onClick }: { product: Product; index: number; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative glass rounded-3xl overflow-hidden">
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{ background: `radial-gradient(circle at center, ${product.color}30, transparent 70%)` }}
        />
        
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
          
          {/* Category badge */}
          <div 
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: `${product.color}CC` }}
          >
            {product.category}
          </div>

          {/* View button on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-black font-semibold">
              <Eye className="w-5 h-5" />
              Voir détails
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
            {product.name}
          </h3>
          <p className="text-white/50 text-sm line-clamp-2 mb-4">
            {product.description}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs text-white/70 glass"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: product.color }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredProducts = activeCategory === "Tous"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" ref={sectionRef} className="py-32 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background elements */}
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
            <span className="text-white/70 text-sm">Notre Excellence</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Nos </span>
            <span className="text-gradient">Produits</span>
          </h2>
          
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
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
                  ? "bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] text-white"
                  : "glass text-white/70 hover:text-white hover:bg-white/10"
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
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl glass-strong rounded-3xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-black/50 to-transparent">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{ background: `radial-gradient(circle at center, ${selectedProduct.color}, transparent 70%)` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <span 
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white mb-4"
                      style={{ backgroundColor: selectedProduct.color }}
                    >
                      {selectedProduct.category}
                    </span>

                    <h2 className="text-3xl font-bold text-white mb-4">
                      {selectedProduct.name}
                    </h2>

                    <p className="text-white/60 mb-8 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#FFD700]" />
                      Caractéristiques
                    </h3>

                    <div className="space-y-3 mb-8">
                      {selectedProduct.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div 
                            className="w-6 h-6 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${selectedProduct.color}30` }}
                          >
                            <Check className="w-4 h-4" style={{ color: selectedProduct.color }} />
                          </div>
                          <span className="text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedProduct(null)}
                      className="block w-full py-4 text-center font-semibold text-white rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${selectedProduct.color}, ${selectedProduct.color}AA)` }}
                    >
                      Commander ce produit
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
