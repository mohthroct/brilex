"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Truck, Package, CheckCircle } from "lucide-react";

export default function Distribution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    { icon: Truck, title: "Livraison Nationale", description: "Présents dans les 48 wilayas d'Algérie" },
    { icon: Package, title: "Stock Permanent", description: "Disponibilité garantie de tous nos produits" },
    { icon: CheckCircle, title: "Service Fiable", description: "Délais respectés et suivi de commande" },
  ];

  const regions = [
    { name: "Centre", wilayas: "Alger, Blida, Tipaza, Boumerdès, Tizi Ouzou, Bouira, Médéa" },
    { name: "Est", wilayas: "Constantine, Annaba, Sétif, Batna, Biskra, Jijel, Béjaïa" },
    { name: "Ouest", wilayas: "Oran, Tlemcen, Mostaganem, Mascara, Sidi Bel Abbès" },
    { name: "Sud", wilayas: "Ouargla, Ghardaïa, Béchar, Adrar, Tamanrasset" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#1a2744] to-[#0f1729]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
            Distribution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Partout en <span className="text-[#FFD700]">Algérie</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Un réseau de distribution solide couvrant tout le territoire national pour vous servir au plus près.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Regions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FFD700]/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#FFD700]" />
            </div>
            <h3 className="text-xl font-bold text-white">Zones de Couverture</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-4">
                <h4 className="text-[#FFD700] font-semibold mb-2">{region.name}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{region.wilayas}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFD700] text-[#0f1729] font-bold rounded-full hover:bg-[#ffdf33] transition-all hover:shadow-lg hover:shadow-yellow-500/20"
          >
            Devenir Distributeur
          </a>
        </motion.div>
      </div>
    </section>
  );
}
