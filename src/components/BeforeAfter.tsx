"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Shield, Leaf, Droplets } from "lucide-react";
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
    { icon: Sparkles, title: "Brillance Éclatante", desc: "Éclat incomparable sur toutes surfaces" },
    { icon: Shield, title: "Protection 7 Jours", desc: "Barrière protectrice longue durée" },
    { icon: Leaf, title: "Formule Douce", desc: "Respectueux de votre intérieur" },
    { icon: Droplets, title: "Séchage Rapide", desc: "Sans traces ni résidus" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#1a2744]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
            La Différence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            L&apos;Effet <span className="text-[#FFD700]">Brilex</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Découvrez la puissance de nos produits. Un seul passage pour une brillance exceptionnelle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              ref={containerRef}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize border border-white/10"
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
                  className="object-cover grayscale brightness-50"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm font-medium">
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
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#FFD700] rounded-full text-[#0f1729] text-sm font-bold">
                  APRÈS ✨
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-5 bg-[#0f1729] rounded-full" />
                    <div className="w-0.5 h-5 bg-[#0f1729] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-white/40 mt-4 text-sm">
              👆 Faites glisser pour voir la différence
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
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-[#FFD700]" />
                </div>
                <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                <p className="text-white/50 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
