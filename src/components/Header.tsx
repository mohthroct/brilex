"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Accueil", href: "#" },
  { name: "Produits", href: "#products" },
  { name: "À Propos", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f1729]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-[#0f1729]/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/images/products/logo.png"
              alt="Brilex"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-[#0f1729] font-bold rounded-full hover:bg-[#ffdf33] transition-all hover:shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Contactez-nous
            </Link>
          </div>

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
            className="md:hidden bg-[#0f1729] border-t border-white/10"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white font-medium py-2 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FFD700] text-[#0f1729] font-bold rounded-full mt-2"
              >
                <Phone className="w-4 h-4" />
                Contactez-nous
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
