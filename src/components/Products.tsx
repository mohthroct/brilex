"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, Check } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Gel Lave-Sol Bleu",
    category: "Détergents",
    description: "Nettoyant sol ultra-brillant avec parfum frais longue durée. Formule concentrée pour un nettoyage en profondeur.",
    image: "/images/products/product-1.jpg",
    features: ["Action dégraissante", "Parfum persistant", "Brillance intense", "Économique"],
  },
  {
    id: 2,
    name: "Gel Lave-Sol Rose",
    category: "Détergents",
    description: "Nettoyant sol parfum floral pour une fraîcheur délicate et un éclat naturel sur toutes surfaces.",
    image: "/images/products/product-2.jpg",
    features: ["Parfum floral", "Doux pour surfaces", "Éclat naturel", "Multi-surfaces"],
  },
  {
    id: 3,
    name: "Gamme Détergents",
    category: "Détergents",
    description: "Notre collection complète de détergents pour tous vos besoins de nettoyage quotidien.",
    image: "/images/products/product-3.jpg",
    features: ["Gamme complète", "Tous usages", "Qualité premium", "Made in Algeria"],
  },
  {
    id: 4,
    name: "Pack Complet",
    category: "Promotions",
    description: "Pack économique comprenant nos meilleurs produits pour un entretien complet de votre maison.",
    image: "/images/products/product-4.jpg",
    features: ["Pack économique", "Meilleur rapport qualité/prix", "Livraison gratuite"],
  },
  {
    id: 5,
    name: "Désodorisant Citron",
    category: "Désodorisants",
    description: "Spray désodorisant parfum citron frais pour un air pur et parfumé dans toute la maison.",
    image: "/images/products/spray-1.jpg",
    features: ["Parfum citron", "Longue tenue", "Anti-odeurs", "Air purifié"],
  },
  {
    id: 6,
    name: "Désodorisant Floral",
    category: "Désodorisants",
    description: "Spray désodorisant aux notes florales délicates pour une ambiance apaisante.",
    image: "/images/products/spray-2.jpg",
    features: ["Notes florales", "Ambiance zen", "Sans résidu", "Multi-pièces"],
  },
  {
    id: 7,
    name: "Désodorisant Fresh",
    category: "Désodorisants",
    description: "Désodorisant fraîcheur intense pour éliminer les mauvaises odeurs instantanément.",
    image: "/images/products/spray-3.jpg",
    features: ["Fraîcheur intense", "Action rapide", "Neutralise odeurs", "24h efficacité"],
  },
  {
    id: 8,
    name: "Gel Concentré",
    category: "Détergents",
    description: "Gel ultra-concentré pour un nettoyage puissant avec moins de produit. Économique et efficace.",
    image: "/images/products/gel-1.jpg",
    features: ["Ultra concentré", "Économique", "Puissant", "Écologique"],
  },
];

const categories = ["Tous", "Détergents", "Désodorisants", "Promotions"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === "Tous"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#0f1729]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
            Notre Gamme
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos <span className="text-[#FFD700]">Produits</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Une gamme complète de produits d&apos;entretien de qualité supérieure, 
            fabriqués en Algérie pour les foyers algériens
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#FFD700] text-[#0f1729]"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div 
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#0f1729] font-medium text-sm">
                        <Eye className="w-4 h-4" />
                        Voir détails
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0f1729]/80 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#FFD700] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-white/50 text-sm line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    
                    {/* Features tags */}
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-white/5 text-white/60 rounded-full border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-white/5 text-white/60 rounded-full border border-white/10">
                          +{product.features.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#1a2744] border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image section */}
                  <div className="relative aspect-square md:aspect-auto md:h-full bg-[#0f1729]">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content section */}
                  <div className="p-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm font-medium mb-4">
                      {selectedProduct.category}
                    </span>
                    
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {selectedProduct.name}
                    </h2>
                    
                    <p className="text-white/60 mb-8 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <h3 className="font-semibold text-white mb-4">Caractéristiques:</h3>
                    <div className="space-y-3 mb-8">
                      {selectedProduct.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-white/70"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-[#FFD700]" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href="#contact"
                        onClick={() => setSelectedProduct(null)}
                        className="flex-1 py-4 rounded-xl font-bold text-[#0f1729] bg-[#FFD700] hover:bg-[#ffdf33] transition-colors text-center"
                      >
                        Commander
                      </a>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="px-6 py-4 rounded-xl font-medium text-white bg-white/10 hover:bg-white/15 transition-colors border border-white/10"
                      >
                        Fermer
                      </button>
                    </div>
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
