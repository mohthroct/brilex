"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Truck, Shield, Target, Heart, Lightbulb, TrendingUp } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, value: "20+", label: "Années d'excellence" },
    { icon: Users, value: "1M+", label: "Clients satisfaits" },
    { icon: Truck, value: "48", label: "Wilayas desservies" },
    { icon: Shield, value: "100%", label: "Qualité garantie" },
  ];

  const values = [
    { icon: Target, title: "Excellence", description: "Nous visons l'excellence dans chaque produit que nous fabriquons." },
    { icon: Heart, title: "Engagement", description: "Engagement total envers la satisfaction de nos clients algériens." },
    { icon: Lightbulb, title: "Innovation", description: "Innovation continue pour des produits toujours plus efficaces." },
    { icon: TrendingUp, title: "Qualité", description: "Standards de qualité élevés à chaque étape de production." },
  ];

  const timeline = [
    { year: "2003", title: "Création", description: "Fondation de Brilex avec une vision claire : offrir des produits d'entretien de qualité aux foyers algériens." },
    { year: "2008", title: "Expansion", description: "Extension de notre gamme de produits et ouverture de notre première usine moderne." },
    { year: "2015", title: "Couverture Nationale", description: "Présence dans les 48 wilayas avec un réseau de distribution solide." },
    { year: "2023", title: "Leadership", description: "Leader reconnu du marché algérien des produits d'entretien ménager." },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-b from-[#0f1729] to-[#1a2744]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
            Notre Histoire
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À Propos de <span className="text-[#FFD700]">Brilex</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Depuis plus de 20 ans, Brilex s&apos;engage à fournir des produits d&apos;entretien 
            de qualité supérieure aux foyers algériens
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.07] hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[#FFD700]" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Notre <span className="text-[#FFD700]">Parcours</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD700] via-[#FFD700]/50 to-transparent md:-translate-x-1/2" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline marker */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#FFD700] rounded-full border-4 border-[#0f1729] md:-translate-x-1/2 z-10" />
                  
                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#FFD700]/10 text-[#FFD700] text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Nos <span className="text-[#FFD700]">Valeurs</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center mb-4 group-hover:bg-[#FFD700]/20 transition-colors">
                  <value.icon className="w-6 h-6 text-[#FFD700]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
