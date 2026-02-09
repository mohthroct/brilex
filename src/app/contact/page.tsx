"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const AlgeriaMap = dynamic(() => import("@/components/AlgeriaMap"), { ssr: false });

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "+213 XX XX XX XX", color: "#E91E8C" },
  { icon: Mail, label: "Email", value: "contact@brilex-dz.com", color: "#00A3E0" },
  { icon: MapPin, label: "Adresse", value: "Zone Industrielle, Alger, Algérie", color: "#FFD700" },
  { icon: Clock, label: "Horaires", value: "Dim - Jeu: 8h - 17h", color: "#4CAF50" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero banner */}
      <section className="bg-white pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
            Contactez-<span className="text-gradient">nous</span>
          </h1>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Une question, un projet, une commande ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form - 3 cols */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg shadow-black/5 p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">Envoyez-nous un message</h2>

                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message envoyé !</h3>
                    <p className="text-neutral-500 mb-6">
                      Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#E91E8C]/20 transition-all"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-neutral-500 text-sm mb-2">Nom complet</label>
                        <input
                          type="text"
                          required
                          placeholder="Votre nom"
                          className="w-full px-5 py-4 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-[#E91E8C]/50 focus:ring-2 focus:ring-[#E91E8C]/10 transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-neutral-500 text-sm mb-2">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="votre@email.com"
                          className="w-full px-5 py-4 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-[#E91E8C]/50 focus:ring-2 focus:ring-[#E91E8C]/10 transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-neutral-500 text-sm mb-2">Téléphone</label>
                      <input
                        type="tel"
                        placeholder="+213 XX XX XX XX"
                        className="w-full px-5 py-4 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-[#E91E8C]/50 focus:ring-2 focus:ring-[#E91E8C]/10 transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-neutral-500 text-sm mb-2">Sujet</label>
                      <select className="w-full px-5 py-4 bg-white border border-neutral-200 rounded-xl text-neutral-900 focus:border-[#E91E8C]/50 focus:ring-2 focus:ring-[#E91E8C]/10 transition-all outline-none appearance-none cursor-pointer">
                        <option value="">Sélectionnez un sujet</option>
                        <option value="commande">Passer une commande</option>
                        <option value="partenariat">Devenir distributeur</option>
                        <option value="info">Demande d&apos;information</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-neutral-500 text-sm mb-2">Message</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Décrivez votre demande..."
                        className="w-full px-5 py-4 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-[#E91E8C]/50 focus:ring-2 focus:ring-[#E91E8C]/10 transition-all outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#E91E8C]/20 transition-all"
                    >
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info cards - 2 cols */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-neutral-400 text-sm mb-1">{item.label}</p>
                      <p className="text-neutral-900 font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-3 aspect-video">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <AlgeriaMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
