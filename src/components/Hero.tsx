"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

// Bubble component
const Bubble = ({ delay, size, left }: { delay: number; size: number; left: number }) => (
  <div
    className="bubble"
    style={{
      width: size,
      height: size,
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${8 + Math.random() * 4}s`,
    }}
  />
);

// Sparkle component
const SparkleEffect = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-brilex-gold rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
    }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ left: x, top: y }}
  />
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<{ id: number; delay: number; size: number; left: number }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Generate bubbles
  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      size: 20 + Math.random() * 60,
      left: Math.random() * 100,
    }));
    setBubbles(newBubbles);
  }, []);

  // Generate sparkles on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.random() > 0.9) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const newSparkle = {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        setSparkles(prev => [...prev.slice(-10), newSparkle]);
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        background: "linear-gradient(135deg, #0066B3 0%, #004d87 50%, #003366 100%)",
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <SparkleEffect key={sparkle.id} x={sparkle.x} y={sparkle.y} />
      ))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-9xl font-black text-white drop-shadow-2xl">
            <span className="relative inline-block">
              <span
                className="absolute inset-0 text-red-500"
                style={{
                  WebkitTextStroke: "4px #FFD700",
                  textShadow: "4px 4px 0 #E53935",
                }}
              >
                Brilex
              </span>
              <span className="relative text-red-500">Brilex</span>
              <Sparkles className="absolute -top-4 -right-8 w-8 h-8 text-brilex-gold animate-pulse" />
            </span>
          </h1>
        </motion.div>

        {/* Slogan with shine effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-2xl md:text-4xl text-white font-light mb-4">
            Si ça <span className="font-bold text-brilex-gold shine-effect px-2">brille</span>, c&apos;est
          </p>
          <motion.p
            className="text-4xl md:text-6xl font-bold text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 215, 0, 0.5)",
                "0 0 40px rgba(255, 215, 0, 0.8)",
                "0 0 20px rgba(255, 215, 0, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Brilex
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(233, 30, 140, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-brilex-pink text-white font-bold text-lg rounded-full shadow-lg hover:bg-pink-600 transition-colors"
          >
            Découvrir nos produits
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/20 backdrop-blur text-white font-bold text-lg rounded-full border-2 border-white/50 hover:bg-white/30 transition-colors"
          >
            Nous contacter
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "20+", label: "Ans d'expérience" },
            { value: "50+", label: "Produits" },
            { value: "48", label: "Wilayas couvertes" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-brilex-gold">{stat.value}</p>
              <p className="text-sm md:text-base text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
