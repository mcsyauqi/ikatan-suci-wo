"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, Calendar, Star, Heart, Camera, Video, ArrowRight, Quote } from "lucide-react";
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

const weddingStyles = [
  {
    name: "Garden Wedding",
    description: "Pernikahan outdoor dengan nuansa alam dan bunga segar",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
  },
  {
    name: "Traditional Wedding",
    description: "Upacara adat dengan sentuhan modern yang elegan",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400",
  },
  {
    name: "Beach Wedding",
    description: "Romantis dengan latar sunset dan ombak pantai",
    image: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=400",
  },
  {
    name: "Ballroom Wedding",
    description: "Megah dan glamor di venue bintang lima",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400",
  },
];

const featuredTestimonials = [
  {
    quote: "Setiap detail diperhatikan dengan sangat baik. Hasil dokumentasinya juga luar biasa!",
    couple: "Sarah & Michael",
    type: "Garden Wedding",
  },
  {
    quote: "Tim Ikatan Suci sangat profesional dan membuat hari kami tanpa stress.",
    couple: "Anita & Budi",
    type: "Traditional Javanese",
  },
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
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Setiap pernikahan adalah cerita unik. Lihat bagaimana kami membantu
            ratusan pasangan mewujudkan hari istimewa mereka.
          </motion.p>

          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#C9A962]" />
              <span className="text-gray-600"><strong className="text-[#2C2C2C]">500+</strong> Pernikahan</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#C9A962]" />
              <span className="text-gray-600"><strong className="text-[#2C2C2C]">10,000+</strong> Foto</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-[#C9A962]" />
              <span className="text-gray-600"><strong className="text-[#2C2C2C]">500+</strong> Video</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wedding Styles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Gaya Pernikahan
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Berbagai Tema yang Kami Tangani
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingStyles.map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveFilter(style.name.includes("Traditional") ? "Traditional Javanese" : style.name.includes("Ballroom") ? "Ballroom Elegant" : style.name)}
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#2C2C2C] mb-1">
                  {style.name}
                </h3>
                <p className="text-gray-600 text-sm">{style.description}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Featured Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Testimoni
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Dari Pasangan Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredTestimonials.map((item, index) => (
              <motion.div
                key={item.couple}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5E6D3] rounded-2xl p-8 relative"
              >
                <Quote className="w-12 h-12 text-[#C9A962]/30 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C9A962]" fill="#C9A962" />
                  ))}
                </div>
                <p className="text-gray-600 text-lg italic mb-6">&ldquo;{item.quote}&rdquo;</p>
                <div>
                  <p className="font-heading text-xl font-semibold text-[#2C2C2C]">{item.couple}</p>
                  <p className="text-[#8B4513]">{item.type}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/konsultasi"
              className="inline-flex items-center gap-2 text-[#C9A962] font-medium hover:text-[#8B4513] transition-colors"
            >
              Lihat lebih banyak testimoni
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Pencapaian Kami
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-white font-bold">
              8 Tahun Merangkai Cinta
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-heading text-5xl md:text-6xl text-[#C9A962] font-bold">
                500+
              </p>
              <p className="text-gray-400 mt-2">Pernikahan</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="font-heading text-5xl md:text-6xl text-[#C9A962] font-bold">
                8
              </p>
              <p className="text-gray-400 mt-2">Tahun Pengalaman</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-heading text-5xl md:text-6xl text-[#C9A962] font-bold">
                15+
              </p>
              <p className="text-gray-400 mt-2">Kota di Indonesia</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-heading text-5xl md:text-6xl text-[#C9A962] font-bold">
                100%
              </p>
              <p className="text-gray-400 mt-2">Kepuasan Klien</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Lokasi
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Destinasi Wedding Kami
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Kami telah menangani pernikahan di berbagai lokasi indah di Indonesia
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {["Jakarta", "Bali", "Yogyakarta", "Bandung", "Lombok", "Surabaya", "Malang", "Semarang", "Medan", "Makassar"].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#C9A962]" />
                <span className="text-gray-700">{city}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading italic text-2xl text-[#C9A962] mb-4 tracking-wide"
          >
            Ingin Kisah Anda Berikutnya?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#2C2C2C] font-bold mb-6"
          >
            Mari Wujudkan Pernikahan Impian Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-8 max-w-xl mx-auto"
          >
            Konsultasikan visi pernikahan Anda dengan tim profesional kami. Gratis dan tanpa komitmen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/konsultasi"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors"
            >
              Mulai Konsultasi
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/paket"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2C2C2C] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Lihat Paket
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
