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
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#0a1018] border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/products/logo.png"
              alt="Brilex"
              width={120}
              height={40}
              className="h-10 w-auto mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Leader algérien des produits d&apos;entretien ménager depuis plus de 20 ans. 
              Qualité, innovation et excellence.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FFD700] hover:border-[#FFD700]/30 hover:bg-[#FFD700]/10 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#FFD700] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6">Nos Produits</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-white/50 hover:text-[#FFD700] transition-colors text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFD700] mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Zone Industrielle, Alger, Algérie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <a href="tel:+213XXXXXXXX" className="text-white/50 hover:text-[#FFD700] transition-colors text-sm">
                  +213 XX XX XX XX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFD700] flex-shrink-0" />
                <a href="mailto:contact@brilex-dz.com" className="text-white/50 hover:text-[#FFD700] transition-colors text-sm">
                  contact@brilex-dz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Brilex. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Si ça brille, c&apos;est Brilex ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
