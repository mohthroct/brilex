"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-brilex-blue via-brilex-blue-dark to-slate-900 flex items-center justify-center"
        >
          {/* Animated background bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: 20 + Math.random() * 80,
                  height: 20 + Math.random() * 80,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative text-center">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <motion.span
                  className="text-6xl md:text-8xl font-black text-red-500"
                  style={{ textShadow: "4px 4px 0 #FFD700" }}
                  animate={{
                    textShadow: [
                      "4px 4px 0 #FFD700",
                      "4px 4px 20px #FFD700",
                      "4px 4px 0 #FFD700",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Brilex
                </motion.span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-8"
                >
                  <Sparkles className="w-8 h-8 text-brilex-gold" />
                </motion.div>
              </div>
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 mx-auto mb-4">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brilex-pink to-brilex-gold"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/60 text-sm"
            >
              {progress < 100 ? "Chargement..." : "Bienvenue!"}
            </motion.p>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-white/80 text-lg"
            >
              Si ça brille, c&apos;est <span className="text-brilex-gold font-bold">Brilex</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
