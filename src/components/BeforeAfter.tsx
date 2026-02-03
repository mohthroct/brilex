"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-brilex-blue overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            L&apos;Effet <span className="text-brilex-gold">Brilex</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Découvrez la différence qu&apos;un nettoyage professionnel peut faire
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-video rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* Before Image (Dirty) */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-amber-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-amber-800/50 rounded-lg border-4 border-dashed border-amber-600 flex items-center justify-center">
                    <span className="text-6xl">🪣</span>
                  </div>
                  <p className="text-amber-200 text-xl font-semibold">AVANT</p>
                  <p className="text-amber-300/70 text-sm">Surface sale et terne</p>
                </div>
              </div>
              {/* Dirt spots */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-amber-900/60 rounded-full"
                  style={{
                    width: 10 + Math.random() * 30,
                    height: 10 + Math.random() * 30,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* After Image (Clean) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-sky-400 to-brilex-blue"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-4 bg-white/30 rounded-lg backdrop-blur flex items-center justify-center shadow-xl"
                  >
                    <Sparkles className="w-16 h-16 text-brilex-gold" />
                  </motion.div>
                  <p className="text-white text-xl font-semibold">APRÈS</p>
                  <p className="text-white/70 text-sm">Surface brillante comme neuve</p>
                </div>
              </div>
              {/* Sparkles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: 4 + Math.random() * 8,
                    height: 4 + Math.random() * 8,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1 h-6 bg-brilex-blue rounded-full" />
                  <div className="w-1 h-6 bg-brilex-blue rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center text-white/60 mt-6"
          >
            👆 Faites glisser pour voir la différence
          </motion.p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { icon: "✨", title: "Brillance Intense", desc: "Un éclat incomparable" },
            { icon: "🛡️", title: "Protection Longue Durée", desc: "Jusqu'à 7 jours" },
            { icon: "🌿", title: "Formule Douce", desc: "Respectueux des surfaces" },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-1">{benefit.title}</h3>
              <p className="text-white/70">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
