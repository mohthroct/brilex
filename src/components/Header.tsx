"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#", label: "Accueil" },
  { href: "#products", label: "Produits" },
  { href: "#about", label: "À Propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <span className={`text-3xl md:text-4xl font-black ${
                  isScrolled ? "text-red-500" : "text-white"
                }`}
                style={{
                  textShadow: isScrolled ? "none" : "2px 2px 0 #FFD700",
                }}
                >
                  Brilex
                </span>
                <Sparkles className={`absolute -top-2 -right-4 w-4 h-4 ${
                  isScrolled ? "text-brilex-gold" : "text-brilex-gold"
                }`} />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`font-medium transition-colors relative group ${
                    isScrolled
                      ? "text-gray-700 hover:text-brilex-blue"
                      : "text-white hover:text-brilex-gold"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                    isScrolled ? "bg-brilex-blue" : "bg-brilex-gold"
                  }`} />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-brilex-pink text-white font-semibold rounded-full hover:bg-pink-600 transition-colors shadow-lg"
              >
                Contactez-nous
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-white shadow-xl rounded-b-3xl mx-4 p-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 font-medium py-2 hover:text-brilex-blue transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 bg-brilex-pink text-white font-semibold rounded-xl text-center hover:bg-pink-600 transition-colors"
                >
                  Contactez-nous
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
