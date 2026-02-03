"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "#" },
    { name: "Nos Produits", href: "#products" },
    { name: "Notre Usine", href: "#factory" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    { name: "Détergents", href: "#products" },
    { name: "Désodorisants", href: "#products" },
    { name: "Insecticides", href: "#products" },
    { name: "Promotions", href: "#products" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/BrilexAlgerie", color: "#1877F2" },
    { icon: Instagram, href: "https://instagram.com/brilex.algerie", color: "#E4405F" },
    { icon: Youtube, href: "#", color: "#FF0000" },
    { icon: Linkedin, href: "#", color: "#0A66C2" },
  ];

  return (
    <footer className="relative bg-[#060a10] border-t border-white/5 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#E91E8C]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/products/logo.png"
              alt="Brilex"
              width={140}
              height={45}
              className="h-12 w-auto mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Leader algérien des produits d&apos;entretien depuis plus de 20 ans. 
              Excellence industrielle au service de votre quotidien.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  style={{ 
                    '--hover-color': social.color,
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${social.color}20`;
                    e.currentTarget.style.borderColor = `${social.color}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '';
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-white/50 hover:text-white text-sm transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E91E8C]" />
              Nos Produits
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="group flex items-center text-white/50 hover:text-white text-sm transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00A3E0]" />
              Newsletter
            </h3>
            <p className="text-white/50 text-sm mb-4">
              Recevez nos dernières offres et actualités
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-white/30 focus:border-[#E91E8C]/50 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] rounded-xl text-white"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} Brilex. Tous droits réservés.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-2">
            <span className="text-gradient">Si ça brille, c&apos;est Brilex</span>
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
