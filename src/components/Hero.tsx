"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: (e.clientX - rect.left - rect.width / 2) / 50,
        y: (e.clientY - rect.top - rect.height / 2) / 50,
      });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1a4a7a]"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(233,30,140,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,102,179,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.05),transparent_70%)]" />
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 10 + Math.random() * 40,
              height: 10 + Math.random() * 40,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(0,102,179,0.1))`,
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            animate={{
              y: [0, -800],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            initial={{ y: '100vh', opacity: 0 }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white/90 text-sm font-medium">Leader Algérien depuis 20+ ans</span>
              </motion.div>

              {/* Logo/Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <Image
                  src="/images/products/logo.png"
                  alt="Brilex Logo"
                  width={350}
                  height={120}
                  className="mx-auto lg:mx-0 drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Slogan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <p className="text-3xl md:text-5xl font-light text-white mb-2">
                  Si ça{" "}
                  <span className="relative inline-block">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                      brille
                    </span>
                    <motion.span
                      className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 to-transparent blur-lg"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                  , c&apos;est
                </p>
                <p className="text-4xl md:text-6xl font-black text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    BRILEX
                  </span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-white/70 text-lg mb-8 max-w-lg mx-auto lg:mx-0"
              >
                Produits d&apos;entretien de qualité supérieure pour un intérieur qui brille. 
                Détergents, désodorisants, insecticides - Excellence algérienne.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(233,30,140,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-pink-500/30 transition-all flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Découvrir nos produits
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold text-lg rounded-full border border-white/30 hover:bg-white/20 transition-all"
                >
                  Nous contacter
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
              >
                {[
                  { value: "20+", label: "Années d'expérience" },
                  { value: "50+", label: "Produits de qualité" },
                  { value: "48", label: "Wilayas couvertes" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Product showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
              }}
            >
              {/* Main product image */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-blue-500/30 blur-3xl rounded-full transform scale-110" />
                  
                  <Image
                    src="/images/products/product-1.jpg"
                    alt="Brilex Products"
                    width={600}
                    height={600}
                    className="relative z-10 rounded-3xl shadow-2xl"
                    priority
                  />
                  
                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-4 py-2 rounded-full shadow-lg text-sm"
                  >
                    ⭐ Qualité Premium
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating smaller products */}
              <motion.div
                animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -left-10 top-1/4 w-32 h-32 z-20"
              >
                <Image
                  src="/images/products/gel-1.jpg"
                  alt="Gel Brilex"
                  fill
                  className="object-cover rounded-2xl shadow-xl border-2 border-white/20"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -right-5 bottom-1/4 w-28 h-28 z-20"
              >
                <Image
                  src="/images/products/spray-1.jpg"
                  alt="Spray Brilex"
                  fill
                  className="object-cover rounded-2xl shadow-xl border-2 border-white/20"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/60">Découvrir</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
