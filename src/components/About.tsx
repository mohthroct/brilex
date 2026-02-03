"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Factory, Award, Users, Truck, CheckCircle2 } from "lucide-react";

// Animated counter component
function Counter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { icon: Factory, value: 1, suffix: "", label: "Usine de production", color: "#0066B3" },
  { icon: Award, value: 20, suffix: "+", label: "Années d'expérience", color: "#E91E8C" },
  { icon: Users, value: 500, suffix: "+", label: "Employés dévoués", color: "#FFD700" },
  { icon: Truck, value: 48, suffix: "", label: "Wilayas desservies", color: "#4CAF50" },
];

const timeline = [
  { year: "2004", title: "Fondation", desc: "Création de Brilex à Alger" },
  { year: "2010", title: "Expansion", desc: "Ouverture de l'usine moderne" },
  { year: "2015", title: "Innovation", desc: "Lancement de nouvelles gammes" },
  { year: "2020", title: "Leader", desc: "N°1 du marché algérien" },
  { year: "2024", title: "Excellence", desc: "Export vers les pays voisins" },
];

const values = [
  "Qualité supérieure garantie",
  "Prix compétitifs",
  "Distribution nationale",
  "Innovation continue",
  "Service client réactif",
  "Respect de l'environnement",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230066B3' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div className="relative z-10 section-padding">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              À Propos de <span className="gradient-text">Brilex</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Depuis plus de 20 ans, Brilex s&apos;engage à fournir des produits d&apos;entretien de qualité supérieure aux foyers algériens
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </motion.div>
                <p className="text-4xl font-bold mb-1" style={{ color: stat.color }}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Notre <span className="text-brilex-pink">Histoire</span>
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brilex-blue via-brilex-pink to-brilex-gold hidden md:block" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                        <span className="text-brilex-blue font-bold text-xl">{item.year}</span>
                        <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 bg-brilex-pink rounded-full shadow-lg z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brilex-blue to-brilex-blue-dark rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Nos Valeurs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-brilex-gold flex-shrink-0" />
                  <span className="text-white font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
