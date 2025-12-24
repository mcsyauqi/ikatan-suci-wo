"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const filterOptions = [
  "Semua",
  "Garden Wedding",
  "Traditional Javanese",
  "Beach Wedding",
  "Ballroom Elegant",
  "Rustic Wedding",
  "Minimalist Modern",
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filteredPortfolio =
    activeFilter === "Semua"
      ? portfolioData
      : portfolioData.filter((item) => item.type === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#F5E6D3] to-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading italic text-2xl text-[#C9A962] mb-2 tracking-wide"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] font-bold mb-6"
          >
            Kisah Cinta yang Kami Wujudkan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Setiap pernikahan adalah cerita unik. Lihat bagaimana kami membantu
            ratusan pasangan mewujudkan hari istimewa mereka.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#FFFBF5] sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === filter
                    ? "bg-[#C9A962] text-white"
                    : "bg-white text-gray-600 hover:bg-[#F5E6D3]"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Link href={`/portfolio/${item.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                    <Image
                      src={item.gallery[0]}
                      alt={item.couple}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-script text-2xl text-[#C9A962] mb-1">
                        {item.couple}
                      </p>
                      <p className="text-white font-heading text-xl font-semibold mb-3">
                        {item.type}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {item.guests} tamu
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-[#C9A962] px-6 py-2 rounded-full">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">
                Tidak ada portfolio dengan filter ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-heading text-4xl md:text-5xl text-[#C9A962] font-bold">
                500+
              </p>
              <p className="text-gray-600 mt-2">Pernikahan</p>
            </div>
            <div>
              <p className="font-heading text-4xl md:text-5xl text-[#C9A962] font-bold">
                8
              </p>
              <p className="text-gray-600 mt-2">Tahun</p>
            </div>
            <div>
              <p className="font-heading text-4xl md:text-5xl text-[#C9A962] font-bold">
                15+
              </p>
              <p className="text-gray-600 mt-2">Kota</p>
            </div>
            <div>
              <p className="font-heading text-4xl md:text-5xl text-[#C9A962] font-bold">
                100%
              </p>
              <p className="text-gray-600 mt-2">Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading italic text-2xl text-[#C9A962] mb-4 tracking-wide">
            Ingin Kisah Anda Berikutnya?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold mb-6">
            Konsultasikan Pernikahan Impian Anda
          </h2>
          <Link
            href="/konsultasi"
            className="inline-flex items-center gap-2 bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors"
          >
            Mulai Konsultasi
          </Link>
        </div>
      </section>
    </>
  );
}
