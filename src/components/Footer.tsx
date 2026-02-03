"use client";

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Accueil", href: "#" },
    { name: "Produits", href: "#products" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    { name: "Détergents", href: "#products" },
    { name: "Désodorisants", href: "#products" },
    { name: "Insecticides", href: "#products" },
    { name: "Lessives", href: "#products" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#0a1018] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/products/logo.png"
              alt="Brilex"
              width={100}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm mb-6">
              Leader algérien des produits d&apos;entretien ménager depuis plus de 20 ans.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#FFD700] hover:border-[#FFD700]/30 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Produits</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-gray-400 hover:text-[#FFD700] text-sm transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFD700] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Zone Industrielle, Alger</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+213 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <span className="text-gray-400 text-sm">contact@brilex-dz.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Brilex. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
