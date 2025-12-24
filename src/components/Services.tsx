"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles, Clock, Plane, Heart, Palette } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Full Wedding Planning",
    description: "Dari konsep sampai eksekusi, kami handle semua detail pernikahan Anda.",
  },
  {
    icon: Sparkles,
    title: "Partial Planning",
    description: "Bantu melengkapi yang sudah Anda rencanakan dengan sentuhan profesional.",
  },
  {
    icon: Clock,
    title: "Day Coordination",
    description: "Koordinasi penuh di hari H agar Anda bisa menikmati momen spesial.",
  },
  {
    icon: Plane,
    title: "Destination Wedding",
    description: "Pernikahan impian di Bali, Jogja, Lombok, dan destinasi lainnya.",
  },
  {
    icon: Heart,
    title: "Intimate Wedding",
    description: "Pernikahan intimate & personal dengan tamu terbatas namun bermakna.",
  },
  {
    icon: Palette,
    title: "Traditional Wedding",
    description: "Pernikahan adat Jawa, Sunda, Batak, dan tradisi lainnya dengan sentuhan modern.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-[#C9A962] mb-2">Layanan Kami</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#2C2C2C] font-bold">
            Kami Siap Membantu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-[#C9A962]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C9A962] transition-colors">
                <service.icon className="w-8 h-8 text-[#C9A962] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-2xl text-[#2C2C2C] font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
