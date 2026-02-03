"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Accueil", href: "#" },
  { name: "Produits", href: "#products" },
  { name: "Notre Usine", href: "#factory" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/images/products/logo.png"
                alt="Brilex"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={item.href}
                  className="relative px-5 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <Link
              href="#contact"
              className="group relative px-6 py-2.5 rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0]" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#00A3E0] to-[#E91E8C] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center gap-2 text-white text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Contactez-nous
              </span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-white/5"
          >
            <nav className="container max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] rounded-full text-white text-sm font-semibold text-center"
              >
                Contactez-nous
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
