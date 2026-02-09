"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Handshake,
  TrendingUp,
  Megaphone,
  Truck,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Building2,
  User,
  MessageSquare,
  Briefcase,
  Search,
  CheckCircle2,
  Send,
  Package,
} from "lucide-react";
import dynamic from "next/dynamic";

const AlgeriaMap = dynamic(() => import("@/components/AlgeriaMap"), { ssr: false });

/* ─── DATA ─── */

const benefits = [
  {
    icon: TrendingUp,
    title: "Marges Compétitives",
    desc: "Conditions commerciales avantageuses et marges attractives pour maximiser votre rentabilité.",
    color: "#E91E8C",
  },
  {
    icon: Megaphone,
    title: "Support Marketing",
    desc: "PLV, matériel promotionnel et campagnes publicitaires pour booster vos ventes.",
    color: "#00A3E0",
  },
  {
    icon: Truck,
    title: "Logistique Nationale",
    desc: "Livraison fiable et rapide dans les 48 wilayas grâce à notre réseau logistique.",
    color: "#FFD700",
  },
  {
    icon: GraduationCap,
    title: "Formation & Accompagnement",
    desc: "Programme de formation produits et accompagnement terrain pour vos équipes.",
    color: "#E91E8C",
  },
];

const distributors = [
  { name: "Distribution Sahel", wilaya: "Alger", city: "Bab Ezzouar", phone: "023 XX XX XX", products: "Détergents, Javels" },
  { name: "Ets Benali & Fils", wilaya: "Oran", city: "Es-Sénia", phone: "041 XX XX XX", products: "Gamme complète" },
  { name: "Sarl Distri-Est", wilaya: "Constantine", city: "El Khroub", phone: "031 XX XX XX", products: "Détergents, Adoucissants" },
  { name: "Comptoir du Centre", wilaya: "Blida", city: "Boufarik", phone: "025 XX XX XX", products: "Gamme complète" },
  { name: "Eurl Megadis", wilaya: "Sétif", city: "Ain Arnat", phone: "036 XX XX XX", products: "Détergents, Javels" },
  { name: "Distri-Ouest", wilaya: "Tlemcen", city: "Chetouane", phone: "043 XX XX XX", products: "Gamme ménagère" },
  { name: "Sarl Sud Distribution", wilaya: "Ouargla", city: "Hassi Messaoud", phone: "029 XX XX XX", products: "Gamme complète" },
  { name: "Ets Rahmani", wilaya: "Annaba", city: "El Bouni", phone: "038 XX XX XX", products: "Détergents, Adoucissants" },
  { name: "Groupe Benadda", wilaya: "Batna", city: "Batna", phone: "033 XX XX XX", products: "Gamme complète" },
  { name: "Eurl Distri-Sud", wilaya: "Ghardaïa", city: "Ghardaïa", phone: "049 XX XX XX", products: "Gamme ménagère" },
];

const wilayas = ["Toutes", ...Array.from(new Set(distributors.map((d) => d.wilaya))).sort()];

/* ─── PAGE ─── */

export default function PartenairePage() {
  const [filter, setFilter] = useState("Toutes");
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState({
    company: "", contact: "", phone: "", email: "", wilaya: "", activity: "", message: "",
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const distRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const mapInView = useInView(mapRef, { once: true, margin: "-80px" });
  const distInView = useInView(distRef, { once: true, margin: "-80px" });
  const formInView = useInView(formRef, { once: true, margin: "-80px" });

  const filtered = filter === "Toutes" ? distributors : distributors.filter((d) => d.wilaya === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <main className="bg-white">
      {/* ───── HERO ───── */}
      <section ref={heroRef} className="relative pt-40 pb-24 overflow-hidden">
        {/* BG accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E91E8C]/5 blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00A3E0]/5 blur-[120px] translate-y-1/2 -translate-x-1/3" />

        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 shadow-sm mb-8"
          >
            <Handshake className="w-4 h-4 text-[#E91E8C]" />
            <span className="text-neutral-500 text-sm">Espace B2B</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-neutral-900 mb-6 leading-tight"
          >
            Devenez Partenaire{" "}
            <span className="bg-gradient-to-r from-[#E91E8C] via-[#00A3E0] to-[#FFD700] bg-clip-text text-transparent">
              Distributeur Brilex
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-500 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            Rejoignez le réseau de distribution N°1 en produits d&apos;entretien en Algérie
          </motion.p>

          <motion.a
            href="#candidature"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] text-white font-bold shadow-lg shadow-[#E91E8C]/20"
          >
            <Send className="w-5 h-5" />
            Postuler Maintenant
          </motion.a>
        </div>
      </section>

      {/* ───── BENEFITS ───── */}
      <section ref={benefitsRef} className="py-24 bg-neutral-50">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-4">
              Pourquoi Devenir Partenaire ?
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Des avantages concrets pour développer votre activité avec Brilex.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-neutral-200 shadow-lg shadow-black/5 rounded-2xl p-6 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${b.color}15` }}
                >
                  <b.icon className="w-6 h-6" style={{ color: b.color }} />
                </div>
                <h3 className="text-neutral-900 font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── MAP ───── */}
      <section ref={mapRef} className="py-24">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-4">
              Notre Couverture Nationale
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Brilex est présent dans les 48 wilayas grâce à un réseau de distributeurs partenaires.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mapInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white border border-neutral-200 shadow-lg rounded-3xl p-6 sm:p-8"
          >
            <div className="h-[400px] sm:h-[500px] rounded-2xl overflow-hidden">
              <AlgeriaMap />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── DISTRIBUTORS ───── */}
      <section ref={distRef} className="py-24 bg-neutral-50">
        <div className="container max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={distInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-4">
              Nos Partenaires Distributeurs
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Un réseau solide de distributeurs à travers tout le territoire national.
            </p>
          </motion.div>

          {/* Filter */}
          <div className="flex items-center gap-3 mb-8 flex-wrap justify-center">
            <Search className="w-5 h-5 text-neutral-400" />
            {wilayas.map((w) => (
              <button
                key={w}
                onClick={() => setFilter(w)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === w
                    ? "bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] text-white shadow-md"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-[#E91E8C]/40"
                }`}
              >
                {w}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 20 }}
                animate={distInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-neutral-200 shadow-lg shadow-black/5 rounded-2xl p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E91E8C]/10 to-[#00A3E0]/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-[#E91E8C]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-neutral-900 font-bold mb-1 truncate">{d.name}</h3>
                    <div className="flex items-center gap-1 text-[#00A3E0] text-sm font-medium mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      {d.city}, {d.wilaya}
                    </div>
                    <div className="space-y-1.5 text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5" /> {d.phone}
                      </div>
                      <div className="flex items-center gap-2">
                        <Package className="w-3.5 h-3.5" /> {d.products}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── APPLICATION FORM ───── */}
      <section id="candidature" ref={formRef} className="py-24">
        <div className="container max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-4">
              Devenir Partenaire
            </h2>
            <p className="text-neutral-500 max-w-xl mx-auto">
              Remplissez le formulaire ci-dessous et notre équipe commerciale vous contactera sous 48h.
            </p>
          </motion.div>

          {formSent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-green-200 shadow-lg rounded-3xl p-12 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Candidature Envoyée !</h3>
              <p className="text-neutral-500 max-w-md mx-auto">
                Merci pour votre intérêt. Notre équipe commerciale analysera votre demande et vous contactera dans les plus brefs délais.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="bg-white border border-neutral-200 shadow-lg rounded-3xl p-8 sm:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <InputField icon={Building2} label="Nom de l'entreprise" value={form.company} onChange={(v) => setForm({ ...form, company: v })} required />
                <InputField icon={User} label="Personne de contact" value={form.contact} onChange={(v) => setForm({ ...form, contact: v })} required />
                <InputField icon={Phone} label="Téléphone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" required />
                <InputField icon={Mail} label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" required />
                <InputField icon={MapPin} label="Wilaya" value={form.wilaya} onChange={(v) => setForm({ ...form, wilaya: v })} required />
                <InputField icon={Briefcase} label="Activité actuelle" value={form.activity} onChange={(v) => setForm({ ...form, activity: v })} />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-neutral-400" />
                    Message
                  </span>
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E91E8C]/30 focus:border-[#E91E8C] transition-all resize-none"
                  placeholder="Décrivez votre projet de partenariat..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E91E8C] to-[#00A3E0] text-white font-bold text-lg shadow-lg shadow-[#E91E8C]/20 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer ma candidature
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
}

/* ─── REUSABLE INPUT ─── */

function InputField({
  icon: Icon,
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        <span className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-neutral-400" />
          {label}
        </span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E91E8C]/30 focus:border-[#E91E8C] transition-all"
        placeholder={label}
      />
    </div>
  );
}
