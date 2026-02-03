"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const stats = [
    { value: "20+", label: "Années d'expérience" },
    { value: "50+", label: "Produits de qualité" },
    { value: "48", label: "Wilayas couvertes" },
  ];

  return (
    <section className="min-h-screen flex items-center bg-[#0f1729] pt-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Image
            src="/images/products/logo.png"
            alt="Brilex Logo"
            width={200}
            height={64}
            className="mb-6"
            priority
          />

          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8">
            ✨ Leader Algérien depuis 20+ ans
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Si ça brille, c&apos;est <span className="text-[#FFD700]">BRILEX</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg max-w-[600px] mx-auto mb-10">
            Produits d&apos;entretien de qualité supérieure pour un intérieur qui brille. 
            Détergents, désodorisants, insecticides — Excellence algérienne.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FFD700] text-[#0f1729] font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Découvrir nos produits
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-transparent text-white font-semibold rounded-full border border-white/30 hover:scale-105 hover:border-white/50 transition-all"
            >
              Nous contacter
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-row items-center justify-center gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="w-[160px] bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
