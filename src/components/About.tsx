"use client";

import { Award, Users, Truck, Shield, Target, Heart, Lightbulb, TrendingUp } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Award, value: "20+", label: "Années d'excellence" },
    { icon: Users, value: "1M+", label: "Clients satisfaits" },
    { icon: Truck, value: "48", label: "Wilayas desservies" },
    { icon: Shield, value: "100%", label: "Qualité garantie" },
  ];

  const timeline = [
    { year: "2003", title: "Création", description: "Fondation de Brilex avec une vision claire." },
    { year: "2008", title: "Expansion", description: "Extension de notre gamme et première usine." },
    { year: "2015", title: "Couverture Nationale", description: "Présence dans les 48 wilayas." },
    { year: "2023", title: "Leadership", description: "Leader du marché algérien." },
  ];

  const values = [
    { icon: Target, title: "Excellence", description: "Nous visons l'excellence dans chaque produit." },
    { icon: Heart, title: "Engagement", description: "Engagement total envers nos clients." },
    { icon: Lightbulb, title: "Innovation", description: "Innovation continue pour des produits efficaces." },
    { icon: TrendingUp, title: "Qualité", description: "Standards de qualité élevés." },
  ];

  return (
    <section id="about" className="py-20 bg-[#0f1729]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            À Propos de <span className="text-[#FFD700]">Brilex</span>
          </h2>
          <p className="text-gray-400 max-w-[600px] mx-auto">
            Depuis plus de 20 ans, Brilex s&apos;engage à fournir des produits d&apos;entretien 
            de qualité supérieure aux foyers algériens.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[#FFD700]" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Notre <span className="text-[#FFD700]">Parcours</span>
          </h3>
          
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-bold mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 w-3 h-3 bg-[#FFD700] rounded-full -translate-x-1/2 hidden md:block" />
                  
                  {/* Empty space */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Nos <span className="text-[#FFD700]">Valeurs</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
