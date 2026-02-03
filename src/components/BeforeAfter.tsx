"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Droplets, Shield, Leaf } from "lucide-react";
import Image from "next/image";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const benefits = [
    { icon: Sparkles, title: "Brillance Éclatante", desc: "Éclat incomparable sur toutes surfaces", color: "#FFD700" },
    { icon: Shield, title: "Protection 7 Jours", desc: "Barrière protectrice longue durée", color: "#0066B3" },
    { icon: Leaf, title: "Formule Douce", desc: "Respectueux de votre intérieur", color: "#4CAF50" },
    { icon: Droplets, title: "Séchage Rapide", desc: "Sans traces ni résidus", color: "#E91E8C" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1a4a7a] overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/images/products/product-1.jpg')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d2847]/90 to-[#0d2847]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 font-semibold text-sm mb-4"
          >
            ✨ La Différence Brilex
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            L&apos;Effet{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Brilex
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Découvrez la puissance de nos produits. Un seul passage pour une brillance exceptionnelle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              ref={containerRef}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl border-4 border-white/10"
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/products/product-3.jpg"
                  alt="Avant Brilex"
                  fill
                  className="object-cover grayscale brightness-50 contrast-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 to-transparent" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur rounded-full text-white font-bold">
                  AVANT
                </div>
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="/images/products/product-3.jpg"
                  alt="Après Brilex"
                  fill
                  className="object-cover brightness-110 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/10" />
                <div className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full text-white font-bold">
                  APRÈS ✨
                </div>
                
                {/* Sparkle effects */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="flex gap-1">
                    <motion.div 
                      animate={{ x: [-2, 2, -2] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1 h-8 bg-gradient-to-b from-blue-500 to-pink-500 rounded-full" 
                    />
                    <motion.div 
                      animate={{ x: [2, -2, 2] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1 h-8 bg-gradient-to-b from-pink-500 to-blue-500 rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-white/50 mt-4 text-sm">
              👆 Faites glisser pour voir la magie Brilex
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${benefit.color}30` }}
                >
                  <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full shadow-xl hover:shadow-yellow-500/30 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Découvrir tous nos produits
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
