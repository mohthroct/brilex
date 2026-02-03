"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const stats = [
    { value: "20+", label: "Années d'expérience" },
    { value: "50+", label: "Produits de qualité" },
    { value: "48", label: "Wilayas couvertes" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0f1729] via-[#1a2744] to-[#0f1729]"
    >
      {/* Clean gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,102,179,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,215,0,0.05),transparent_40%)]" />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center pt-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span className="text-white/80 text-sm font-medium">Leader Algérien depuis 20+ ans</span>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <Image
                  src="/images/products/logo.png"
                  alt="Brilex Logo"
                  width={300}
                  height={100}
                  className="mx-auto lg:mx-0"
                  priority
                />
              </motion.div>

              {/* Slogan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Si ça{" "}
                  <span className="text-[#FFD700]">brille</span>
                  , c&apos;est
                  <br />
                  <span className="text-[#FFD700]">BRILEX</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 text-lg mb-10 max-w-lg mx-auto lg:mx-0"
              >
                Produits d&apos;entretien de qualité supérieure pour un intérieur qui brille. 
                Détergents, désodorisants, insecticides — Excellence algérienne.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
              >
                <a
                  href="#products"
                  className="flex items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0f1729] font-bold text-lg rounded-full hover:bg-[#ffdf33] transition-all hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1"
                >
                  Découvrir nos produits
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white/5 text-white font-semibold text-lg rounded-full border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all"
                >
                  Nous contacter
                </a>
              </motion.div>

              {/* Stats - Clean card row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-4"
              >
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/[0.07] transition-colors"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Product showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center"
            >
              {/* Product showcase card */}
              <div className="relative">
                {/* Subtle glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#0066B3]/20 to-[#FFD700]/10 blur-3xl rounded-full opacity-50" />
                
                {/* Main product card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm shadow-2xl"
                >
                  <Image
                    src="/images/products/product-1.jpg"
                    alt="Brilex Products"
                    width={450}
                    height={450}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-[#FFD700] text-[#0f1729] font-bold px-4 py-2 rounded-full text-sm shadow-lg">
                    ⭐ Qualité Premium
                  </div>
                </motion.div>

                {/* Secondary product - subtle positioning */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/10 border border-white/10 rounded-2xl p-2 backdrop-blur-sm shadow-xl"
                >
                  <Image
                    src="/images/products/spray-1.jpg"
                    alt="Brilex Spray"
                    fill
                    className="object-cover rounded-xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Découvrir</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1729] to-transparent z-10" />
    </section>
  );
}
