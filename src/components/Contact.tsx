"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Phone, label: "Téléphone", value: "+213 XX XX XX XX", href: "tel:+213XXXXXXXX" },
    { icon: Mail, label: "Email", value: "contact@brilex-dz.com", href: "mailto:contact@brilex-dz.com" },
    { icon: MapPin, label: "Adresse", value: "Zone Industrielle, Alger, Algérie", href: "#" },
    { icon: Clock, label: "Horaires", value: "Dim - Jeu: 8h - 17h", href: "#" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-[#0f1729]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-<span className="text-[#FFD700]">nous</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Une question? Un besoin? Notre équipe est à votre disposition pour vous accompagner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Nom complet</label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#FFD700]/50 focus:bg-white/[0.07] transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#FFD700]/50 focus:bg-white/[0.07] transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm mb-2">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+213 XX XX XX XX"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#FFD700]/50 focus:bg-white/[0.07] transition-all outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm mb-2">Sujet</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#FFD700]/50 focus:bg-white/[0.07] transition-all outline-none appearance-none cursor-pointer">
                    <option value="" className="bg-[#1a2744]">Sélectionnez un sujet</option>
                    <option value="commande" className="bg-[#1a2744]">Passer une commande</option>
                    <option value="info" className="bg-[#1a2744]">Demande d&apos;information</option>
                    <option value="partenariat" className="bg-[#1a2744]">Partenariat / Distribution</option>
                    <option value="autre" className="bg-[#1a2744]">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-[#FFD700]/50 focus:bg-white/[0.07] transition-all outline-none resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#FFD700] text-[#0f1729] font-bold rounded-xl hover:bg-[#ffdf33] transition-all hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-[#FFD700] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-2 h-64 overflow-hidden">
              <div className="w-full h-full rounded-xl bg-[#1a2744] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                  <p className="text-white/50 text-sm">Zone Industrielle, Alger</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
