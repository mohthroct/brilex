"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Gel Lave-Sol Bleu",
    category: "Détergents",
    description: "Nettoyant sol ultra-brillant avec parfum frais longue durée. Formule concentrée pour un nettoyage en profondeur.",
    image: "/images/products/product-1.jpg",
    features: ["Action dégraissante", "Parfum persistant", "Brillance intense", "Économique"],
    color: "#0066B3",
  },
  {
    id: 2,
    name: "Gel Lave-Sol Rose",
    category: "Détergents",
    description: "Nettoyant sol parfum floral pour une fraîcheur délicate et un éclat naturel sur toutes surfaces.",
    image: "/images/products/product-2.jpg",
    features: ["Parfum floral", "Doux pour surfaces", "Éclat naturel", "Multi-surfaces"],
    color: "#E91E8C",
  },
  {
    id: 3,
    name: "Gamme Détergents",
    category: "Détergents",
    description: "Notre collection complète de détergents pour tous vos besoins de nettoyage quotidien.",
    image: "/images/products/product-3.jpg",
    features: ["Gamme complète", "Tous usages", "Qualité premium", "Made in Algeria"],
    color: "#9C27B0",
  },
  {
    id: 4,
    name: "Pack Complet",
    category: "Promotions",
    description: "Pack économique comprenant nos meilleurs produits pour un entretien complet de votre maison.",
    image: "/images/products/product-4.jpg",
    features: ["Pack économique", "Meilleur rapport qualité/prix", "Livraison gratuite"],
    color: "#FF9800",
  },
  {
    id: 5,
    name: "Désodorisant Citron",
    category: "Désodorisants",
    description: "Spray désodorisant parfum citron frais pour un air pur et parfumé dans toute la maison.",
    image: "/images/products/spray-1.jpg",
    features: ["Parfum citron", "Longue tenue", "Anti-odeurs", "Air purifié"],
    color: "#FFC107",
  },
  {
    id: 6,
    name: "Désodorisant Floral",
    category: "Désodorisants",
    description: "Spray désodorisant aux notes florales délicates pour une ambiance apaisante.",
    image: "/images/products/spray-2.jpg",
    features: ["Notes florales", "Ambiance zen", "Sans résidu", "Multi-pièces"],
    color: "#E91E8C",
  },
  {
    id: 7,
    name: "Désodorisant Fresh",
    category: "Désodorisants",
    description: "Désodorisant fraîcheur intense pour éliminer les mauvaises odeurs instantanément.",
    image: "/images/products/spray-3.jpg",
    features: ["Fraîcheur intense", "Action rapide", "Neutralise odeurs", "24h efficacité"],
    color: "#4CAF50",
  },
  {
    id: 8,
    name: "Gel Concentré",
    category: "Détergents",
    description: "Gel ultra-concentré pour un nettoyage puissant avec moins de produit. Économique et efficace.",
    image: "/images/products/gel-1.jpg",
    features: ["Ultra concentré", "Économique", "Puissant", "Écologique"],
    color: "#0066B3",
  },
];

const categories = ["Tous", "Détergents", "Désodorisants", "Promotions"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProducts = activeCategory === "Tous"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm mb-4"
          >
            🛒 Notre Gamme
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="text-gray-800">Nos </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-500">
              Produits
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick view button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <button className="w-full py-3 bg-white/90 backdrop-blur rounded-xl font-semibold text-gray-800 flex items-center justify-center gap-2 hover:bg-white transition-colors">
                        <Eye className="w-5 h-5" />
                        Voir détails
                      </button>
                    </motion.div>

                    {/* Category badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    
                    {/* Features tags */}
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
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
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image section */}
                  <div className="relative aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors shadow-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Content section */}
                  <div className="p-8">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4"
                      style={{ backgroundColor: selectedProduct.color }}
                    >
                      {selectedProduct.category}
                    </span>
                    
                    <h2 className="text-3xl font-black text-gray-800 mb-4">
                      {selectedProduct.name}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {selectedProduct.description}
                    </p>

                    <h3 className="font-bold text-gray-800 mb-3">Caractéristiques:</h3>
                    <div className="grid grid-cols-2 gap-2 mb-8">
                      {selectedProduct.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg"
                        >
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedProduct.color }} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2"
                        style={{ backgroundColor: selectedProduct.color }}
                      >
                        <ShoppingBag className="w-5 h-5" />
                        Commander
                      </motion.button>
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedProduct(null)}
                        className="px-6 py-4 rounded-xl font-bold text-gray-700 border-2 border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        Contact
                      </motion.a>
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
