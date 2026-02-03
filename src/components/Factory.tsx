"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Factory, FlaskConical, Truck, Award, Users, MapPin } from "lucide-react";

// Animated counter component
const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    const incrementTime = (duration * 1000) / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// Algeria map SVG component (simplified)
const AlgeriaMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  
  const regions = [
    { id: "center", name: "Centre", x: 120, y: 80 },
    { id: "east", name: "Est", x: 180, y: 90 },
    { id: "west", name: "Ouest", x: 60, y: 85 },
    { id: "south", name: "Sud", x: 120, y: 160 },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 250 220" className="w-full h-auto">
        {/* Simplified Algeria outline */}
        <motion.path
          d="M30,50 L50,30 L100,25 L150,30 L200,40 L220,70 L210,100 L200,130 L180,160 L150,190 L120,200 L80,195 L50,170 L35,130 L30,100 L25,70 Z"
          fill="rgba(233,30,140,0.1)"
          stroke="rgba(233,30,140,0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        />
        
        {/* Region dots */}
        {regions.map((region, i) => (
          <motion.g
            key={region.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
            className="cursor-pointer"
          >
            <motion.circle
              cx={region.x}
              cy={region.y}
              r={hoveredRegion === region.id ? 12 : 8}
              fill={hoveredRegion === region.id ? "#E91E8C" : "#00A3E0"}
              animate={{ 
                scale: hoveredRegion === region.id ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.5, repeat: hoveredRegion === region.id ? Infinity : 0 }}
            />
            <motion.circle
              cx={region.x}
              cy={region.y}
              r="20"
              fill="none"
              stroke={hoveredRegion === region.id ? "#E91E8C" : "transparent"}
              strokeWidth="2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: hoveredRegion === region.id ? 1.5 : 0.5, 
                opacity: hoveredRegion === region.id ? [0.5, 0] : 0 
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.g>
        ))}
      </svg>
      
      {/* Region label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredRegion ? 1 : 0 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 glass rounded-lg pointer-events-none"
      >
        <span className="text-white font-semibold">
          {regions.find(r => r.id === hoveredRegion)?.name}
        </span>
      </motion.div>
    </div>
  );
};

export default function FactorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: Factory, value: 1, suffix: "", label: "Usine Industrielle", sublabel: "Capacité de production massive" },
    { icon: FlaskConical, value: 50, suffix: "+", label: "Produits", sublabel: "Gamme diversifiée" },
    { icon: Truck, value: 48, suffix: "", label: "Wilayas", sublabel: "Couverture nationale" },
    { icon: Users, value: 1, suffix: "M+", label: "Clients", sublabel: "Foyers algériens" },
  ];

  const milestones = [
    { year: "2003", title: "Fondation", desc: "Naissance de Brilex avec une vision claire" },
    { year: "2010", title: "Expansion", desc: "Nouvelle usine et gamme élargie" },
    { year: "2018", title: "Innovation", desc: "Laboratoire R&D de pointe" },
    { year: "2024", title: "Leadership", desc: "N°1 des détergents en Algérie" },
  ];

  return (
    <section id="factory" ref={sectionRef} className="py-32 bg-gradient-to-b from-[#0a0f1a] via-[#0f1729] to-[#0a0f1a] relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Factory className="w-4 h-4 text-[#FFD700]" />
            <span className="text-white/70 text-sm">Notre Puissance Industrielle</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">L&apos;Usine de </span>
            <span className="text-gradient">Brillance</span>
          </h2>
          
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Une infrastructure industrielle moderne au service de la qualité. 
            Découvrez ce qui fait de Brilex le leader incontesté.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass-strong rounded-2xl p-6 text-center h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E91E8C]/10 to-[#00A3E0]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative w-14 h-14 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                  <div className="relative w-full h-full rounded-xl bg-gradient-to-r from-[#E91E8C]/20 to-[#00A3E0]/20 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Value */}
                <div className="text-4xl md:text-5xl font-black text-gradient-gold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <h3 className="text-white font-semibold mb-1">{stat.label}</h3>
                <p className="text-white/40 text-sm">{stat.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map and Timeline section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Algeria Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-strong rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#E91E8C]/20 to-[#00A3E0]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Couverture Nationale</h3>
                  <p className="text-white/50 text-sm">48 wilayas desservies</p>
                </div>
              </div>
              
              <AlgeriaMap />
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {["Centre", "Est", "Ouest", "Sud"].map((region, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <div className="w-2 h-2 rounded-full bg-[#00A3E0]" />
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#FFD700]" />
              Notre Parcours
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E91E8C] via-[#00A3E0] to-[#FFD700]" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.15 }}
                    className="relative pl-8"
                  >
                    {/* Dot */}
                    <motion.div
                      className="absolute left-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#00A3E0]"
                      whileHover={{ scale: 1.5 }}
                    />
                    
                    <div className="glass rounded-xl p-4 hover:bg-white/5 transition-colors">
                      <span className="text-[#FFD700] font-bold">{milestone.year}</span>
                      <h4 className="text-white font-semibold mt-1">{milestone.title}</h4>
                      <p className="text-white/50 text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-bold rounded-full"
          >
            <Factory className="w-5 h-5" />
            Devenir Partenaire Distributeur
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
