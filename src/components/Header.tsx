"use client";

import { useState, useEffect } from "react";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f1729]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/products/logo.png"
              alt="Brilex"
              width={100}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-[#FFD700] text-[#0f1729] text-sm font-semibold rounded-full hover:scale-105 transition-transform"
          >
            <Phone className="w-4 h-4" />
            Contactez-nous
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f1729] border-t border-white/10">
          <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/70 hover:text-white py-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FFD700] text-[#0f1729] text-sm font-semibold rounded-full mt-2"
            >
              <Phone className="w-4 h-4" />
              Contactez-nous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
