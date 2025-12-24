"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileText, Search, PenTool, Users, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Konsultasi Awal",
    description: "Kenalan dan diskusi impian pernikahan Anda. Kami akan mendengarkan setiap detail.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposal & Budgeting",
    description: "Menyusun konsep dan anggaran yang sesuai dengan keinginan dan kemampuan Anda.",
  },
  {
    number: "03",
    icon: Search,
    title: "Vendor Hunting",
    description: "Mencari dan menyeleksi vendor terbaik yang sesuai dengan budget dan style Anda.",
  },
  {
    number: "04",
    icon: PenTool,
    title: "Planning & Design",
    description: "Detail rundown, design dekorasi, dan persiapan teknis lainnya.",
  },
  {
    number: "05",
    icon: Users,
    title: "Rehearsal",
    description: "Gladi bersih untuk memastikan semua berjalan lancar di hari H.",
  },
  {
    number: "06",
    icon: Heart,
    title: "The Big Day",
    description: "Koordinasi penuh di hari bahagia Anda. Santai dan nikmati momennya!",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading italic text-2xl text-[#C9A962] mb-2 tracking-wide">Proses Kami</p>
          <h2 className="font-heading text-4xl md:text-5xl text-white font-bold mb-4">
            Bagaimana Kami Bekerja
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proses yang sistematis untuk memastikan pernikahan Anda berjalan sempurna tanpa hambatan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-[#3C3C3C] rounded-2xl p-8 h-full hover:bg-[#4C4C4C] transition-colors">
                <span className="font-heading text-6xl text-[#C9A962]/20 font-bold absolute top-4 right-6">
                  {step.number}
                </span>
                <div className="w-14 h-14 bg-[#C9A962] rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-2xl text-white font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
