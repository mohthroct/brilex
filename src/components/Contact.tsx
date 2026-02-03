"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, label: "Téléphone", value: "+213 XX XX XX XX", href: "tel:+213XXXXXXXX" },
    { icon: Mail, label: "Email", value: "contact@brilex-dz.com", href: "mailto:contact@brilex-dz.com" },
    { icon: MapPin, label: "Adresse", value: "Zone Industrielle, Alger, Algérie", href: "#" },
    { icon: Clock, label: "Horaires", value: "Dim - Jeu: 8h - 17h", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1ByRqqa7eZ/", color: "#1877F2" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/brilex.algerie", color: "#E4405F" },
    { icon: Youtube, label: "Youtube", href: "#", color: "#FF0000" },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Contactez</span>-Nous
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une question? Un partenariat? Notre équipe est à votre écoute
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brilex-blue focus:ring-2 focus:ring-brilex-blue/20 outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brilex-blue focus:ring-2 focus:ring-brilex-blue/20 outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brilex-blue focus:ring-2 focus:ring-brilex-blue/20 outline-none transition-all"
                      placeholder="0XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brilex-blue focus:ring-2 focus:ring-brilex-blue/20 outline-none transition-all"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="info">Demande d&apos;information</option>
                      <option value="partnership">Partenariat</option>
                      <option value="distribution">Devenir distributeur</option>
                      <option value="complaint">Réclamation</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brilex-blue focus:ring-2 focus:ring-brilex-blue/20 outline-none transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : isSubmitted
                      ? "bg-green-500"
                      : "bg-brilex-blue hover:bg-brilex-blue-dark"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Envoi en cours...
                    </>
                  ) : isSubmitted ? (
                    <>✓ Message envoyé!</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all block"
                >
                  <info.icon className="w-8 h-8 text-brilex-blue mb-3" />
                  <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                  <p className="font-semibold text-gray-800">{info.value}</p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-brilex-blue to-brilex-blue-dark p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4">Suivez-nous</h3>
              <p className="text-white/80 mb-6">
                Restez connectés pour découvrir nos actualités et promotions
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                    style={{ color: social.color }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-3xl overflow-hidden h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brilex-blue/20 to-brilex-pink/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-brilex-blue mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Zone Industrielle</p>
                  <p className="text-gray-500 text-sm">Alger, Algérie</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
