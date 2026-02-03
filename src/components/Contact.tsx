"use client";

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { icon: Phone, label: "Téléphone", value: "+213 XX XX XX XX" },
    { icon: Mail, label: "Email", value: "contact@brilex-dz.com" },
    { icon: MapPin, label: "Adresse", value: "Zone Industrielle, Alger" },
    { icon: Clock, label: "Horaires", value: "Dim - Jeu: 8h - 17h" },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0f1729]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contactez-<span className="text-[#FFD700]">nous</span>
          </h2>
          <p className="text-gray-400 max-w-[600px] mx-auto">
            Une question? Un besoin? Notre équipe est à votre disposition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full h-12 px-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#FFD700]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full h-12 px-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#FFD700]/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Téléphone</label>
                <input
                  type="tel"
                  placeholder="+213 XX XX XX XX"
                  className="w-full h-12 px-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#FFD700]/50 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Sujet</label>
                <select className="w-full h-12 px-4 bg-white/5 border border-white/20 rounded-lg text-white focus:border-[#FFD700]/50 focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#1a2744]">Sélectionnez un sujet</option>
                  <option value="commande" className="bg-[#1a2744]">Passer une commande</option>
                  <option value="info" className="bg-[#1a2744]">Demande d&apos;information</option>
                  <option value="partenariat" className="bg-[#1a2744]">Partenariat</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#FFD700]/50 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full h-12 flex items-center justify-center gap-2 bg-[#FFD700] text-[#0f1729] font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-2 h-48">
              <div className="w-full h-full rounded-lg bg-[#1a2744] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#FFD700] mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Zone Industrielle, Alger</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
