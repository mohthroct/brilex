"use client";

import { MapPin, Truck, Package, CheckCircle } from "lucide-react";

export default function Distribution() {
  const features = [
    { icon: Truck, title: "Livraison Nationale", description: "48 wilayas couvertes" },
    { icon: Package, title: "Stock Permanent", description: "Disponibilité garantie" },
    { icon: CheckCircle, title: "Service Fiable", description: "Délais respectés" },
  ];

  const regions = [
    { name: "Centre", wilayas: "Alger, Blida, Tipaza, Boumerdès, Tizi Ouzou" },
    { name: "Est", wilayas: "Constantine, Annaba, Sétif, Batna, Béjaïa" },
    { name: "Ouest", wilayas: "Oran, Tlemcen, Mostaganem, Mascara" },
    { name: "Sud", wilayas: "Ouargla, Ghardaïa, Béchar, Adrar" },
  ];

  return (
    <section className="py-20 bg-[#1a2744]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partout en <span className="text-[#FFD700]">Algérie</span>
          </h2>
          <p className="text-gray-400 max-w-[600px] mx-auto">
            Un réseau de distribution solide couvrant tout le territoire national.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Regions */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#FFD700]" />
            </div>
            <h3 className="text-lg font-bold text-white">Zones de Couverture</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <h4 className="text-[#FFD700] font-semibold mb-2">{region.name}</h4>
                <p className="text-gray-400 text-sm">{region.wilayas}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#FFD700] text-[#0f1729] font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Devenir Distributeur
          </a>
        </div>
      </div>
    </section>
  );
}
