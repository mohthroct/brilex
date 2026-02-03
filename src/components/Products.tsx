"use client";

import { useState } from "react";
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
    description: "Nettoyant sol ultra-brillant avec parfum frais longue durée.",
    image: "/images/products/product-1.jpg",
    features: ["Action dégraissante", "Parfum persistant", "Brillance intense"],
  },
  {
    id: 2,
    name: "Gel Lave-Sol Rose",
    category: "Détergents",
    description: "Nettoyant sol parfum floral pour une fraîcheur délicate.",
    image: "/images/products/product-2.jpg",
    features: ["Parfum floral", "Doux pour surfaces", "Éclat naturel"],
  },
  {
    id: 3,
    name: "Gamme Détergents",
    category: "Détergents",
    description: "Collection complète pour tous vos besoins de nettoyage.",
    image: "/images/products/product-3.jpg",
    features: ["Gamme complète", "Tous usages", "Qualité premium"],
  },
  {
    id: 4,
    name: "Pack Complet",
    category: "Promotions",
    description: "Pack économique pour un entretien complet de votre maison.",
    image: "/images/products/product-4.jpg",
    features: ["Pack économique", "Meilleur rapport qualité/prix"],
  },
  {
    id: 5,
    name: "Désodorisant Citron",
    category: "Désodorisants",
    description: "Spray parfum citron frais pour un air pur et parfumé.",
    image: "/images/products/spray-1.jpg",
    features: ["Parfum citron", "Longue tenue", "Anti-odeurs"],
  },
  {
    id: 6,
    name: "Désodorisant Floral",
    category: "Désodorisants",
    description: "Spray aux notes florales pour une ambiance apaisante.",
    image: "/images/products/spray-2.jpg",
    features: ["Notes florales", "Ambiance zen", "Sans résidu"],
  },
  {
    id: 7,
    name: "Désodorisant Fresh",
    category: "Désodorisants",
    description: "Fraîcheur intense pour éliminer les mauvaises odeurs.",
    image: "/images/products/spray-3.jpg",
    features: ["Fraîcheur intense", "Action rapide", "24h efficacité"],
  },
  {
    id: 8,
    name: "Gel Concentré",
    category: "Détergents",
    description: "Gel ultra-concentré pour un nettoyage puissant.",
    image: "/images/products/gel-1.jpg",
    features: ["Ultra concentré", "Économique", "Puissant"],
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
    <section id="products" className="py-20 bg-[#0f1729]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos <span className="text-[#FFD700]">Produits</span>
          </h2>
          <p className="text-gray-400 max-w-[600px] mx-auto">
            Une gamme complète de produits d&apos;entretien de qualité supérieure, 
            fabriqués en Algérie pour les foyers algériens.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#FFD700] text-[#0f1729]"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-white/20 transition-all"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-[#0f1729] text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    Voir détails
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0f1729]/80 backdrop-blur text-white text-xs font-medium">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1 group-hover:text-[#FFD700] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-[#1a2744] border border-white/10 rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square bg-[#0f1729]">
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

                {/* Content */}
                <div className="p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm font-medium mb-4">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {selectedProduct.description}
                  </p>

                  <h3 className="font-semibold text-white mb-3">Caractéristiques:</h3>
                  <div className="space-y-2 mb-8">
                    {selectedProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-400">
                        <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#FFD700]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="block w-full py-3 bg-[#FFD700] text-[#0f1729] font-semibold rounded-xl text-center hover:scale-105 transition-transform"
                  >
                    Commander
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
