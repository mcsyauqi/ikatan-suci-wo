"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { vendorData, vendorCategories } from "@/data/vendors";
import { cn } from "@/lib/utils";

export default function VendorPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredVendors =
    activeCategory === "Semua"
      ? vendorData
      : vendorData.filter((vendor) => vendor.category === activeCategory);

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
            Vendor Partner
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] font-bold mb-6"
          >
            Vendor Terpercaya Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Kami bekerja sama dengan vendor-vendor terbaik untuk memastikan pernikahan
            Anda sempurna. Setiap vendor telah kami seleksi dengan ketat.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-[#FFFBF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-heading text-3xl text-[#C9A962] font-bold">50+</p>
              <p className="text-gray-600 text-sm mt-1">Vendor Partner</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-heading text-3xl text-[#C9A962] font-bold">8</p>
              <p className="text-gray-600 text-sm mt-1">Kategori</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-heading text-3xl text-[#C9A962] font-bold">15+</p>
              <p className="text-gray-600 text-sm mt-1">Kota</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="font-heading text-3xl text-[#C9A962] font-bold">100%</p>
              <p className="text-gray-600 text-sm mt-1">Terverifikasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#FFFBF5] sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory("Semua")}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === "Semua"
                  ? "bg-[#C9A962] text-white"
                  : "bg-white text-gray-600 hover:bg-[#F5E6D3]"
              )}
            >
              Semua
            </button>
            {vendorCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-[#C9A962] text-white"
                    : "bg-white text-gray-600 hover:bg-[#F5E6D3]"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Grid */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVendors.map((vendor, index) => (
              <motion.div
                key={vendor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                layout
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A962] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {vendor.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-[#2C2C2C] font-semibold mb-2">
                    {vendor.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {vendor.description}
                  </p>
                  <div className="flex items-center gap-1 text-[#8B4513] text-sm">
                    <MapPin className="w-4 h-4" />
                    {vendor.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredVendors.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">
                Tidak ada vendor dengan filter ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Mengapa Vendor Kami?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Keunggulan Vendor Partner
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5E6D3] rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#C9A962] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#2C2C2C] mb-3">
                Terverifikasi
              </h3>
              <p className="text-gray-600">
                Semua vendor telah melalui proses verifikasi ketat dan memiliki
                track record yang baik.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F5E6D3] rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#C9A962] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#2C2C2C] mb-3">
                Harga Khusus
              </h3>
              <p className="text-gray-600">
                Dapatkan harga khusus dan diskon eksklusif dari vendor partner
                kami.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F5E6D3] rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#C9A962] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#2C2C2C] mb-3">
                Koordinasi Mudah
              </h3>
              <p className="text-gray-600">
                Tim kami yang akan mengkoordinasi semua vendor sehingga Anda
                tinggal santai.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-heading italic text-2xl text-[#C9A962] mb-4 tracking-wide">
            Butuh Rekomendasi Vendor?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6">
            Kami Bantu Pilihkan yang Terbaik
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Konsultasikan kebutuhan dan budget Anda, kami akan merekomendasikan
            vendor yang paling sesuai.
          </p>
          <Link
            href="/konsultasi"
            className="inline-flex items-center gap-2 bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors"
          >
            Konsultasi Gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
