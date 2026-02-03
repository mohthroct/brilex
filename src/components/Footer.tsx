"use client";

import { motion } from "framer-motion";
import { Sparkles, Facebook, Instagram, Youtube, ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    products: [
      { label: "Détergents", href: "#products" },
      { label: "Désodorisants", href: "#products" },
      { label: "Insecticides", href: "#products" },
      { label: "Lessives", href: "#products" },
    ],
    company: [
      { label: "À Propos", href: "#about" },
      { label: "Notre Histoire", href: "#about" },
      { label: "Distribution", href: "#distribution" },
      { label: "Carrières", href: "#" },
    ],
    support: [
      { label: "Contact", href: "#contact" },
      { label: "FAQ", href: "#" },
      { label: "Devenir Distributeur", href: "#" },
      { label: "Réclamations", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1ByRqqa7eZ/", color: "#1877F2" },
    { icon: Instagram, href: "https://www.instagram.com/brilex.algerie", color: "#E4405F" },
    { icon: Youtube, href: "#", color: "#FF0000" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="text-4xl font-black text-red-500" style={{ textShadow: "2px 2px 0 #FFD700" }}>
                Brilex
              </span>
              <Sparkles className="w-5 h-5 text-brilex-gold" />
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Si ça brille, c&apos;est Brilex. Leader algérien des produits d&apos;entretien depuis plus de 20 ans.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+213XXXXXXXX" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-brilex-pink" />
                <span>+213 XX XX XX XX</span>
              </a>
              <a href="mailto:contact@brilex-dz.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-brilex-pink" />
                <span>contact@brilex-dz.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brilex-pink" />
                <span>Zone Industrielle, Alger</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brilex-gold">Produits</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-brilex-gold">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-brilex-gold">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Brilex. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-brilex-pink flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
