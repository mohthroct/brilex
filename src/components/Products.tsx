"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, SprayCan, Bug, Sparkles, Wind, ShoppingBag, LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import for 3D viewer to avoid SSR issues
const ProductViewer3D = dynamic(() => import("./ProductViewer3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl flex items-center justify-center">
      <div className="text-white">Chargement 3D...</div>
    </div>
  ),
});

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  color: string;
  icon: LucideIcon;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Gel Lave-Sol",
    category: "Détergents",
    description: "Nettoyant sol ultra-brillant avec parfum longue durée",
    color: "#0066B3",
    icon: Droplets,
    features: ["Action dégraissante", "Parfum persistant", "Brillance intense"],
  },
  {
    id: 2,
    name: "Gel Lave-Sol Rose",
    category: "Détergents",
    description: "Nettoyant sol parfum floral pour une fraîcheur délicate",
    color: "#E91E8C",
    icon: Droplets,
    features: ["Parfum floral", "Doux pour les surfaces", "Éclat naturel"],
  },
  {
    id: 3,
    name: "Désodorisant",
    category: "Désodorisants",
    description: "Spray désodorisant pour un air frais et parfumé",
    color: "#9C27B0",
    icon: SprayCan,
    features: ["Neutralise les odeurs", "Parfum longue tenue", "Multi-surfaces"],
  },
  {
    id: 4,
    name: "Insecticide",
    category: "Insecticides",
    description: "Protection efficace contre tous types d'insectes",
    color: "#4CAF50",
    icon: Bug,
    features: ["Action rapide", "Longue protection", "Sans résidu"],
  },
  {
    id: 5,
    name: "Lessive Premium",
    category: "Lessives",
    description: "Lessive concentrée pour un linge impeccable",
    color: "#FF9800",
    icon: Wind,
    features: ["Haute concentration", "Couleurs préservées", "Anti-taches"],
  },
  {
    id: 6,
    name: "Dégraissant",
    category: "Détergents",
    description: "Puissant dégraissant pour cuisine et surfaces",
    color: "#F44336",
    icon: Sparkles,
    features: ["Ultra dégraissant", "Action immédiate", "Multi-usages"],
  },
];

const categories = ["Tous", "Détergents", "Désodorisants", "Insecticides", "Lessives"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts =
    activeCategory === "Tous"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Nos Produits</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une gamme complète de produits d&apos;entretien pour un intérieur qui brille
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-brilex-blue text-white shadow-lg shadow-brilex-blue/30"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer"
              >
                <div
                  className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{
                    borderTop: `4px solid ${product.color}`,
                  }}
                >
                  {/* Product Icon/Visual */}
                  <div
                    className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}20 0%, ${product.color}05 100%)`,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: hoveredProduct === product.id ? [0, -5, 5, 0] : 0,
                        scale: hoveredProduct === product.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {(() => {
                        const Icon = product.icon;
                        return <Icon className="w-24 h-24" style={{ color: product.color }} />;
                      })()}
                    </motion.div>
                    
                    {/* Floating particles on hover */}
                    {hoveredProduct === product.id && (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{ backgroundColor: product.color }}
                            initial={{ 
                              x: 0, 
                              y: 0, 
                              opacity: 0,
                              scale: 0 
                            }}
                            animate={{
                              x: (Math.random() - 0.5) * 100,
                              y: (Math.random() - 0.5) * 100,
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                            }}
                            transition={{
                              duration: 1,
                              delay: i * 0.1,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${product.color}20`,
                        color: product.color,
                      }}
                    >
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold mt-3 mb-2 text-gray-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View 3D Button */}
                  <div className="px-6 pb-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all"
                      style={{ backgroundColor: product.color }}
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Voir en 3D
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3D Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <ProductViewer3D
                    color={selectedProduct.color}
                    productName={selectedProduct.name}
                  />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: `${selectedProduct.color}20`,
                          color: selectedProduct.color,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
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
