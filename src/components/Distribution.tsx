"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Truck, Store, Phone } from "lucide-react";

// Simplified Algeria regions data
const regions = [
  { id: 1, name: "Alger", x: 50, y: 35, dealers: 45, isHQ: true },
  { id: 2, name: "Oran", x: 25, y: 40, dealers: 28 },
  { id: 3, name: "Constantine", x: 72, y: 38, dealers: 22 },
  { id: 4, name: "Annaba", x: 82, y: 35, dealers: 15 },
  { id: 5, name: "Blida", x: 48, y: 40, dealers: 18 },
  { id: 6, name: "Sétif", x: 62, y: 42, dealers: 20 },
  { id: 7, name: "Tizi Ouzou", x: 55, y: 33, dealers: 16 },
  { id: 8, name: "Béjaïa", x: 60, y: 32, dealers: 14 },
  { id: 9, name: "Tlemcen", x: 18, y: 45, dealers: 12 },
  { id: 10, name: "Ouargla", x: 58, y: 70, dealers: 8 },
  { id: 11, name: "Biskra", x: 60, y: 55, dealers: 10 },
  { id: 12, name: "Ghardaïa", x: 48, y: 65, dealers: 6 },
];

export default function Distribution() {
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<typeof regions[0] | null>(null);

  const totalDealers = regions.reduce((sum, r) => sum + r.dealers, 0);

  return (
    <section className="section-padding bg-gray-50">
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
            <span className="gradient-text">Distribution</span> Nationale
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Présent dans les 48 wilayas, Brilex est partout où vous en avez besoin
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-brilex-blue/10 to-brilex-pink/10 rounded-3xl p-8 aspect-square">
              {/* Simplified Algeria shape */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
              >
                {/* Algeria outline (simplified) */}
                <path
                  d="M10 30 L25 25 L45 22 L65 20 L85 25 L95 35 L90 50 L85 70 L70 85 L50 90 L30 85 L15 70 L10 50 Z"
                  fill="url(#algeriaGradient)"
                  stroke="#0066B3"
                  strokeWidth="0.5"
                />
                <defs>
                  <linearGradient id="algeriaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0066B3" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#E91E8C" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Region markers */}
              {regions.map((region) => (
                <motion.div
                  key={region.id}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${region.x}%`,
                    top: `${region.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: region.id * 0.05, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.3, zIndex: 10 }}
                  onHoverStart={() => setHoveredRegion(region.id)}
                  onHoverEnd={() => setHoveredRegion(null)}
                  onClick={() => setSelectedRegion(region)}
                >
                  <div
                    className={`relative ${
                      region.isHQ ? "w-6 h-6" : "w-4 h-4"
                    } rounded-full flex items-center justify-center transition-all ${
                      hoveredRegion === region.id
                        ? "bg-brilex-pink shadow-lg shadow-brilex-pink/50"
                        : region.isHQ
                        ? "bg-brilex-gold shadow-lg shadow-brilex-gold/50"
                        : "bg-brilex-blue"
                    }`}
                  >
                    {region.isHQ && (
                      <MapPin className="w-3 h-3 text-white" />
                    )}
                  </div>
                  
                  {/* Tooltip */}
                  {hoveredRegion === region.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white rounded-lg shadow-xl p-3 whitespace-nowrap z-20"
                    >
                      <p className="font-bold text-brilex-blue">{region.name}</p>
                      <p className="text-sm text-gray-600">{region.dealers} points de vente</p>
                      {region.isHQ && (
                        <span className="text-xs text-brilex-gold font-semibold">🏭 Siège social</span>
                      )}
                    </motion.div>
                  )}
                  
                  {/* Pulse effect for HQ */}
                  {region.isHQ && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-brilex-gold"
                      animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, value: "48", label: "Wilayas", color: "#0066B3" },
                { icon: Store, value: totalDealers.toString(), label: "Points de vente", color: "#E91E8C" },
                { icon: Truck, value: "24h", label: "Délai livraison", color: "#FFD700" },
                { icon: Phone, value: "24/7", label: "Support client", color: "#4CAF50" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <stat.icon className="w-8 h-8 mb-2" style={{ color: stat.color }} />
                  <p className="text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Selected region info */}
            {selectedRegion ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-brilex-blue to-brilex-blue-dark p-6 rounded-2xl text-white"
              >
                <h3 className="text-2xl font-bold mb-2">{selectedRegion.name}</h3>
                <p className="text-white/80 mb-4">
                  {selectedRegion.dealers} points de vente actifs
                </p>
                {selectedRegion.isHQ && (
                  <div className="flex items-center gap-2 text-brilex-gold">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold">Siège social & Usine principale</span>
                  </div>
                )}
                <button
                  className="mt-4 px-6 py-2 bg-white text-brilex-blue rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Trouver un distributeur
                </button>
              </motion.div>
            ) : (
              <div className="bg-gray-100 p-6 rounded-2xl text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Cliquez sur une région pour plus d&apos;informations</p>
              </div>
            )}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-brilex-pink text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Devenir distributeur Brilex
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
