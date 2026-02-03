"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, Play, ChevronDown } from "lucide-react";
import Image from "next/image";

// Particle component for sparkle effects
const Particle = ({ delay = 0 }: { delay?: number }) => {
  const randomX = Math.random() * 100;
  const randomDuration = 3 + Math.random() * 4;
  
  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{ left: `${randomX}%` }}
      initial={{ y: "100vh", opacity: 0, scale: 0 }}
      animate={{
        y: "-100vh",
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// Animated text that reveals letter by letter
const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <motion.span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.03, duration: 0.3 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#0a0f1a]"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 20%, rgba(233,30,140,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 80%, rgba(233,30,140,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 80%, rgba(233,30,140,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 20%, rgba(233,30,140,0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 20%, rgba(233,30,140,0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(ellipse at 80% 30%, rgba(0,163,224,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 70%, rgba(0,163,224,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 70%, rgba(0,163,224,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(0,163,224,0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 30%, rgba(0,163,224,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 min-h-screen flex items-center justify-center"
      >
        <div className="container max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
              >
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span className="text-white/80 text-sm font-medium">
                  Leader Algérien depuis +20 ans
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-4">
                  <span className="text-white">Si ça </span>
                  <span className="relative inline-block">
                    <span className="text-gradient">brille</span>
                    <motion.span
                      className="absolute -inset-2 bg-gradient-to-r from-[#E91E8C]/20 to-[#00A3E0]/20 blur-2xl -z-10"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                  <span className="text-white">,</span>
                  <br />
                  <span className="text-white">c&apos;est </span>
                  <span className="relative inline-block">
                    <span className="text-gradient-gold">BRILEX</span>
                    <motion.span
                      className="absolute -inset-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 blur-2xl -z-10"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                className="text-white/60 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                Excellence industrielle algérienne. Des produits d&apos;entretien 
                qui transforment chaque surface en miroir de brillance.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#products"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] rounded-full font-semibold text-white overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Découvrir nos produits
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00A3E0] to-[#E91E8C]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.a
                  href="#factory"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full font-semibold text-white glass hover:bg-white/10 transition-colors"
                >
                  Visiter notre usine
                </motion.a>
              </motion.div>

              {/* Stats preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
                className="flex gap-8 mt-12 justify-center lg:justify-start"
              >
                {[
                  { value: "20+", label: "Années" },
                  { value: "50+", label: "Produits" },
                  { value: "48", label: "Wilayas" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.6 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold text-gradient-gold">{stat.value}</p>
                    <p className="text-white/50 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Product showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative flex justify-center items-center"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
              }}
            >
              {/* Glowing orb behind product */}
              <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#E91E8C]/30 to-[#00A3E0]/30 blur-[100px] animate-pulse-glow" />
              
              {/* Main product image */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                  <Image
                    src="/images/products/product-1.jpg"
                    alt="Brilex Premium Products"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                  
                  {/* Sparkle effects around product */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.4,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
                
                {/* Premium badge */}
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full text-black font-bold text-sm shadow-lg"
                >
                  ✨ Premium
                </motion.div>
              </motion.div>

              {/* Floating secondary products */}
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -left-10 top-1/4 w-24 h-24 z-20"
              >
                <Image
                  src="/images/products/spray-1.jpg"
                  alt="Brilex Spray"
                  fill
                  className="object-cover rounded-2xl shadow-2xl border border-white/10"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -right-5 bottom-1/4 w-20 h-20 z-20"
              >
                <Image
                  src="/images/products/gel-1.jpg"
                  alt="Brilex Gel"
                  fill
                  className="object-cover rounded-2xl shadow-2xl border border-white/10"
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
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0f1a] to-transparent z-10" />
    </section>
  );
}
