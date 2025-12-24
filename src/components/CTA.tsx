"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[#2C2C2C]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading italic text-3xl text-[#C9A962] mb-4 tracking-wide"
        >
          Ready to Begin?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6"
        >
          Ceritakan Impian Pernikahan Anda
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Konsultasi GRATIS dengan wedding planner kami. Mari wujudkan pernikahan impian Anda bersama.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/konsultasi"
            className="bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-all duration-300 flex items-center gap-2 group"
          >
            Jadwalkan Konsultasi
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center gap-2 border border-white/30"
          >
            <Phone className="w-5 h-5" />
            WhatsApp Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
