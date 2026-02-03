"use client";

import { useState, useRef } from "react";
import { Sparkles, Shield, Leaf, Droplets } from "lucide-react";
import Image from "next/image";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    { icon: Sparkles, title: "Brillance Éclatante", desc: "Éclat incomparable" },
    { icon: Shield, title: "Protection 7 Jours", desc: "Longue durée" },
    { icon: Leaf, title: "Formule Douce", desc: "Respectueux" },
    { icon: Droplets, title: "Séchage Rapide", desc: "Sans traces" },
  ];

  return (
    <section className="py-20 bg-[#1a2744]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            L&apos;Effet <span className="text-[#FFD700]">Brilex</span>
          </h2>
          <p className="text-gray-400 max-w-[600px] mx-auto">
            Découvrez la puissance de nos produits. Un seul passage pour une brillance exceptionnelle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Slider */}
          <div>
            <div
              ref={containerRef}
              className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize border border-white/10"
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* Before */}
              <div className="absolute inset-0">
                <Image
                  src="/images/products/product-3.jpg"
                  alt="Avant"
                  fill
                  className="object-cover grayscale brightness-50"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur rounded-full text-white text-sm font-medium">
                  AVANT
                </span>
              </div>

              {/* After */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="/images/products/product-3.jpg"
                  alt="Après"
                  fill
                  className="object-cover brightness-110 saturate-110"
                />
                <span className="absolute top-4 right-4 px-3 py-1.5 bg-[#FFD700] rounded-full text-[#0f1729] text-sm font-bold">
                  APRÈS ✨
                </span>
              </div>

              {/* Handle */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-4 bg-[#0f1729] rounded-full" />
                    <div className="w-0.5 h-4 bg-[#0f1729] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
              👆 Faites glisser pour voir la différence
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-5 h-5 text-[#FFD700]" />
                </div>
                <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
