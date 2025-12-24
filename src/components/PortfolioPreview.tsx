"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function PortfolioPreview() {
  const previewItems = portfolioData.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-[#C9A962] mb-2">Portfolio</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#2C2C2C] font-bold mb-4">
            Kisah Cinta yang Telah Kami Wujudkan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap pernikahan adalah cerita unik. Lihat bagaimana kami membantu pasangan mewujudkan hari istimewa mereka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${item.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={item.gallery[0]}
                    alt={item.couple}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-script text-2xl text-[#C9A962] mb-1">
                      {item.couple}
                    </p>
                    <p className="text-white font-heading text-xl font-semibold mb-2">
                      {item.type}
                    </p>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {item.guests} tamu
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors group"
          >
            Lihat Semua Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
