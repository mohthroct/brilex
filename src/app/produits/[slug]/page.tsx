"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Zap, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Produit introuvable</h1>
          <Link href="/produits" className="text-[#00A3E0] hover:underline">
            ← Retour aux produits
          </Link>
        </div>
      </main>
    );
  }

  const related = getRelatedProducts(product);

  return (
    <main className="min-h-screen bg-white">
      {/* Back link */}
      <div className="pt-28 pb-4 container max-w-7xl mx-auto px-6">
        <Link
          href="/produits"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux produits
        </Link>
      </div>

      {/* Product detail */}
      <section className="pb-20 container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-200 shadow-lg shadow-black/5"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at center, ${product.color}, transparent 70%)`,
              }}
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-white mb-4"
              style={{ backgroundColor: product.color }}
            >
              {product.categoryLabel}
            </span>

            <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              {product.name}
            </h1>

            <p className="text-neutral-500 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <h3 className="text-neutral-900 font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFD700]" />
              Caractéristiques
            </h3>

            <div className="space-y-3 mb-10">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${product.color}20` }}
                  >
                    <Check className="w-4 h-4" style={{ color: product.color }} />
                  </div>
                  <span className="text-neutral-600">{feature}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-xl shadow-lg transition-shadow hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${product.color}, ${product.color}BB)`,
              }}
            >
              <ShoppingCart className="w-5 h-5" />
              Commander ce produit
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-20 bg-neutral-50">
          <div className="container max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-10">
              Produits similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/produits/${p.slug}`} className="group block">
                    <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-md shadow-black/5 hover:shadow-lg transition-shadow">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-neutral-900 group-hover:text-[#E91E8C] transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-sm text-neutral-500 mt-1 line-clamp-1">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
