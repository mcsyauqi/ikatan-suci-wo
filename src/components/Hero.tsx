"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-script text-4xl md:text-5xl lg:text-6xl text-[#C9A962] mb-4"
        >
          Your Love Story Begins Here
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6"
        >
          Wujudkan Pernikahan
          <br />
          Impian Anda
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Wedding organizer profesional yang akan menemani perjalanan cinta Anda
          dari perencanaan hingga hari bahagia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/konsultasi"
            className="bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-all duration-300 flex items-center gap-2 group"
          >
            Konsultasi Gratis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2 border border-white/30"
          >
            <Play className="w-5 h-5" />
            Lihat Portfolio
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <p className="font-heading text-4xl md:text-5xl text-[#C9A962] font-bold">500+</p>
            <p className="text-white/80 text-sm mt-1">Pernikahan</p>
          </div>
          <div className="text-center border-x border-white/20">
            <p className="font-heading text-4xl md:text-5xl text-[#C9A962] font-bold">8</p>
            <p className="text-white/80 text-sm mt-1">Tahun Pengalaman</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-4xl md:text-5xl text-[#C9A962] font-bold">50+</p>
            <p className="text-white/80 text-sm mt-1">Vendor Partner</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
