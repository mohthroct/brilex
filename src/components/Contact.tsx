"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Phone, label: "Téléphone", value: "+213 XX XX XX XX", color: "#E91E8C" },
    { icon: Mail, label: "Email", value: "contact@brilex-dz.com", color: "#00A3E0" },
    { icon: MapPin, label: "Adresse", value: "Zone Industrielle, Alger", color: "#FFD700" },
    { icon: Clock, label: "Horaires", value: "Dim - Jeu: 8h - 17h", color: "#4CAF50" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-32 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#E91E8C]/5 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#00A3E0]/5 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <MessageCircle className="w-4 h-4 text-[#FFD700]" />
            <span className="text-white/70 text-sm">Parlons de vos besoins</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-white">Contactez-</span>
            <span className="text-gradient">nous</span>
          </h2>
          
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Une question ? Un projet de partenariat ? Notre équipe est là pour vous accompagner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Envoyez-nous un message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Nom complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#E91E8C]/50 focus:bg-white/10 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#E91E8C]/50 focus:bg-white/10 transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-2">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+213 XX XX XX XX"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#E91E8C]/50 focus:bg-white/10 transition-all outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-2">Sujet</label>
                  <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#E91E8C]/50 focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer">
                    <option value="" className="bg-[#0f1729]">Sélectionnez un sujet</option>
                    <option value="commande" className="bg-[#0f1729]">Passer une commande</option>
                    <option value="partenariat" className="bg-[#0f1729]">Devenir distributeur</option>
                    <option value="info" className="bg-[#0f1729]">Demande d&apos;information</option>
                    <option value="autre" className="bg-[#0f1729]">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre demande..."
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#E91E8C]/50 focus:bg-white/10 transition-all outline-none resize-none"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="glass rounded-2xl p-6 group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">{item.label}</p>
                    <p className="text-white font-semibold group-hover:text-gradient transition-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="glass rounded-2xl p-3 aspect-video"
            >
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0f1729] to-[#1a2744] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[#E91E8C] mx-auto mb-3" />
                  <p className="text-white font-semibold">Zone Industrielle</p>
                  <p className="text-white/50 text-sm">Alger, Algérie</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
