"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Star, Shield, HandHeart, Clock, CheckCircle, Quote, Users, Award, Sparkles } from "lucide-react";
import { vendorData, vendorCategories } from "@/data/vendors";
import { cn } from "@/lib/utils";

const featuredVendors = vendorData.slice(0, 4);

const vendorTestimonials = [
  {
    vendor: "The Grand Ballroom",
    logo: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=100&h=100&fit=crop",
    quote: "Kerjasama dengan Ikatan Suci selalu profesional dan menyenangkan. Tim mereka sangat detail dan memahami kebutuhan venue kami.",
    person: "Ahmad Wijaya",
    role: "Sales Manager",
  },
  {
    vendor: "Savory Catering",
    logo: "https://images.unsplash.com/photo-1555244162-803834f70033?w=100&h=100&fit=crop",
    quote: "Sudah 5 tahun bermitra dengan Ikatan Suci. Komunikasi lancar, pembayaran tepat waktu, dan selalu membawa klien berkualitas.",
    person: "Siti Rahayu",
    role: "Owner",
  },
  {
    vendor: "Lens Story Photography",
    logo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=100&h=100&fit=crop",
    quote: "Partner terbaik untuk vendor seperti kami. Mereka menghargai hasil kerja kami dan selalu memberikan brief yang jelas.",
    person: "Budi Santoso",
    role: "Lead Photographer",
  },
];

const partnershipProcess = [
  {
    step: 1,
    title: "Seleksi Ketat",
    description: "Setiap vendor melewati proses seleksi ketat berdasarkan kualitas, reputasi, dan track record.",
    icon: Shield,
  },
  {
    step: 2,
    title: "Uji Coba",
    description: "Vendor baru menjalani periode uji coba untuk memastikan standar kualitas terjaga.",
    icon: Star,
  },
  {
    step: 3,
    title: "Kontrak Resmi",
    description: "Penandatanganan perjanjian kerjasama dengan ketentuan yang menguntungkan kedua belah pihak.",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Monitoring Berkala",
    description: "Evaluasi berkala untuk memastikan kualitas layanan tetap konsisten dan memuaskan.",
    icon: Clock,
  },
];

const vendorBenefits = [
  {
    title: "Akses Klien Premium",
    description: "Dapatkan akses ke calon pengantin dengan budget yang sesuai dengan layanan Anda.",
    icon: Users,
  },
  {
    title: "Promosi Gratis",
    description: "Profil vendor Anda akan ditampilkan di website dan media sosial kami.",
    icon: Sparkles,
  },
  {
    title: "Jaringan Luas",
    description: "Bergabung dengan komunitas vendor wedding terbaik di Indonesia.",
    icon: HandHeart,
  },
  {
    title: "Dukungan Penuh",
    description: "Tim kami siap membantu koordinasi dan komunikasi dengan klien.",
    icon: Award,
  },
];

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

      {/* Featured Vendors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Featured Vendors
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Vendor Unggulan Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVendors.map((vendor, index) => (
              <motion.div
                key={vendor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-[#F5E6D3] to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C9A962] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" fill="white" />
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[#8B4513] text-xs font-medium">{vendor.category}</span>
                  <h3 className="font-heading text-xl text-[#2C2C2C] font-semibold mt-1 mb-2">
                    {vendor.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {vendor.description}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    {vendor.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Partnership Works */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Proses Seleksi
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Bagaimana Kami Memilih Vendor
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Setiap vendor partner kami telah melalui proses seleksi ketat untuk memastikan
              kualitas terbaik bagi klien kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center relative z-10">
                  <div className="w-16 h-16 bg-[#C9A962] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#2C2C2C] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#2C2C2C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < partnershipProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#C9A962]" />
                )}
              </motion.div>
            ))}
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

      {/* Vendor Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Testimoni Partner
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Kata Vendor Partner Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vendorTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.vendor}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5E6D3] rounded-2xl p-8 relative"
              >
                <Quote className="w-10 h-10 text-[#C9A962]/30 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.logo}
                      alt={testimonial.vendor}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-[#2C2C2C]">{testimonial.vendor}</p>
                    <p className="text-[#8B4513] text-sm">Vendor Partner</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="border-t border-[#C9A962]/20 pt-4">
                  <p className="font-medium text-[#2C2C2C]">{testimonial.person}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-[#FFFBF5]">
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
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
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
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
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
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
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

      {/* Become a Vendor */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
                Jadi Partner Kami
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold mb-6">
                Bergabung Menjadi Vendor Partner
              </h2>
              <p className="text-gray-600 mb-8">
                Apakah Anda memiliki bisnis di industri pernikahan? Bergabunglah dengan
                jaringan vendor terpercaya kami dan dapatkan akses ke klien premium.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vendorBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#C9A962] rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2C2C2C]">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h3 className="font-heading text-2xl text-[#2C2C2C] font-bold mb-6">
                Daftar Sebagai Vendor
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Bisnis *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                    placeholder="Nama bisnis Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all">
                    <option value="">Pilih kategori</option>
                    {vendorCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                    placeholder="email@bisnis.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C9A962] text-white py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors"
                >
                  Daftar Sekarang
                </button>
              </form>
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
