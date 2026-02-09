"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

const heroImages = [
  { src: "/images/hero-1.jpg", alt: "Brilex — Splash of freshness" },
  { src: "/images/hero-2.jpg", alt: "Brilex — The sparkling home" },
  { src: "/images/hero-3.jpg", alt: "Brilex — Industrial power" },
  { src: "/images/hero-4.jpg", alt: "Brilex — Product lineup" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background images with crossfade + Ken Burns */}
      {heroImages.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 z-0"
          initial={false}
          animate={{
            opacity: current === index ? 1 : 0,
            scale: current === index ? [1, 1.08] : 1,
          }}
          transition={{
            opacity: { duration: 1, ease: "easeInOut" },
            scale: { duration: 3, ease: "linear" },
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-neutral-600 text-sm font-medium">
                Leader Algérien depuis +20 ans
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
                <span className="text-neutral-900">Si ça </span>
                <span className="text-gradient">brille</span>
                <span className="text-neutral-900">,</span>
                <br />
                <span className="text-neutral-900">c&apos;est </span>
                <span className="text-gradient-gold">BRILEX</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="text-neutral-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            >
              Excellence industrielle algérienne. Des produits d&apos;entretien
              qui transforment chaque surface en miroir de brillance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/produits"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] rounded-full font-semibold text-white overflow-hidden shadow-lg shadow-[#E91E8C]/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir nos produits
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              <motion.a
                href="/#factory"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full font-semibold text-neutral-700 bg-white/80 backdrop-blur-sm border border-neutral-200 hover:bg-white transition-colors shadow-sm"
              >
                Visiter notre usine
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "20+", label: "Années" },
                { value: "50+", label: "Produits" },
                { value: "48", label: "Wilayas" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-bold text-gradient-gold">{stat.value}</p>
                  <p className="text-neutral-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-[#E91E8C] w-8"
                : "bg-neutral-400/50 hover:bg-neutral-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-neutral-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
