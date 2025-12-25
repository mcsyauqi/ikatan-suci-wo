"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Check, Star, Crown, Gem, ArrowRight, Phone, Heart, Shield, Clock, Users, Sparkles, Gift, X } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Paket Sakral",
    subtitle: "Intimate Wedding",
    icon: Gem,
    guests: "50-100 tamu",
    price: "Mulai Rp 25.000.000",
    popular: false,
    description:
      "Paket sempurna untuk pernikahan intimate dengan suasana hangat dan personal.",
    features: [
      "Full planning 6 bulan sebelum hari H",
      "Venue coordination & site inspection",
      "Vendor management (5 vendor pilihan)",
      "Day coordination dengan tim profesional",
      "Timeline & rundown detail",
      "Budgeting assistance & tracking",
      "Checklist persiapan lengkap",
      "Konsultasi unlimited via WhatsApp",
    ],
    includes: [
      "1 Lead Wedding Planner",
      "2 Day-of Coordinators",
      "Emergency kit di hari H",
      "Vendor meeting 3x",
    ],
  },
  {
    name: "Paket Harmoni",
    subtitle: "Classic Wedding",
    icon: Star,
    guests: "100-300 tamu",
    price: "Mulai Rp 50.000.000",
    popular: true,
    description:
      "Paket terlengkap untuk pernikahan klasik dengan sentuhan modern dan elegan.",
    features: [
      "Full planning 8 bulan sebelum hari H",
      "Venue hunting & decoration concept",
      "Vendor management (8 vendor premium)",
      "Rehearsal + Day coordination",
      "Honeymoon planning assistance",
      "Guest management system & RSVP",
      "Seating arrangement planning",
      "Music playlist curation",
      "Wedding website gratis",
      "Pre-wedding photoshoot coordination",
    ],
    includes: [
      "1 Lead Wedding Planner",
      "1 Assistant Planner",
      "4 Day-of Coordinators",
      "Emergency kit premium",
      "Vendor meeting unlimited",
      "Rehearsal dinner planning",
    ],
  },
  {
    name: "Paket Keabadian",
    subtitle: "Grand Wedding",
    icon: Crown,
    guests: "300-1000 tamu",
    price: "Custom pricing",
    popular: false,
    description:
      "Paket ekslusif untuk pernikahan megah dengan layanan A-Z tanpa batas.",
    features: [
      "Full planning 12 bulan sebelum hari H",
      "Complete A-Z handling",
      "Unlimited vendor coordination",
      "Multiple events management",
      "Destination wedding capable",
      "Celebrity vendor access",
      "Luxury honeymoon planning",
      "Complete guest management",
      "Valet & security coordination",
      "Live streaming setup",
      "After-party planning",
      "Gift registry management",
    ],
    includes: [
      "1 Senior Wedding Planner",
      "2 Assistant Planners",
      "6+ Day-of Coordinators",
      "Premium emergency kit",
      "24/7 support hotline",
      "VIP guest handling",
      "Media & PR coordination",
      "Post-wedding party planning",
    ],
  },
];

const addOns = [
  { name: "Same Day Edit Video", price: "Rp 5.000.000", desc: "Video highlight siap tayang di resepsi" },
  { name: "Photo Booth Premium", price: "Rp 3.500.000", desc: "Dengan props & unlimited prints" },
  { name: "Live Streaming", price: "Rp 2.500.000", desc: "Multi-camera professional streaming" },
  { name: "Drone Videography", price: "Rp 4.000.000", desc: "Aerial footage cinematic" },
  { name: "MC Profesional", price: "Rp 5.000.000", desc: "Bilingual MC berpengalaman" },
  { name: "Entertainment Upgrade", price: "Mulai Rp 10.000.000", desc: "Band, Orchestra, atau DJ" },
  { name: "Bridal Car Decoration", price: "Rp 2.000.000", desc: "Dekorasi mobil pengantin premium" },
  { name: "Fireworks Display", price: "Rp 8.000.000", desc: "Pertunjukan kembang api spektakuler" },
];

const comparisonFeatures = [
  { feature: "Durasi Planning", sakral: "6 bulan", harmoni: "8 bulan", keabadian: "12 bulan" },
  { feature: "Jumlah Vendor", sakral: "5 vendor", harmoni: "8 vendor", keabadian: "Unlimited" },
  { feature: "Tim Coordinator", sakral: "3 orang", harmoni: "6 orang", keabadian: "8+ orang" },
  { feature: "Vendor Meeting", sakral: "3x", harmoni: "Unlimited", keabadian: "Unlimited" },
  { feature: "Rehearsal", sakral: false, harmoni: true, keabadian: true },
  { feature: "Wedding Website", sakral: false, harmoni: true, keabadian: true },
  { feature: "Honeymoon Planning", sakral: false, harmoni: true, keabadian: true },
  { feature: "Multiple Events", sakral: false, harmoni: false, keabadian: true },
  { feature: "Destination Wedding", sakral: false, harmoni: false, keabadian: true },
  { feature: "24/7 Support", sakral: false, harmoni: false, keabadian: true },
];

const guarantees = [
  {
    icon: Shield,
    title: "Garansi Kepuasan",
    description: "Jika tidak puas dengan layanan kami, dapatkan refund hingga 50% dari biaya paket.",
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Kami menjamin semua timeline berjalan sesuai jadwal yang telah disepakati.",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Wedding planner bersertifikat dengan pengalaman minimal 5 tahun.",
  },
  {
    icon: Heart,
    title: "Perhatian Personal",
    description: "Setiap pasangan mendapat perhatian khusus sesuai kebutuhan unik mereka.",
  },
];

const testimonials = [
  {
    quote: "Paket Harmoni sangat worth it! Semua kebutuhan wedding kami terpenuhi dengan sempurna.",
    couple: "Rina & Dimas",
    package: "Paket Harmoni",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=100",
  },
  {
    quote: "Dengan Paket Sakral, intimate wedding kami terasa sangat personal dan penuh makna.",
    couple: "Ayu & Bram",
    package: "Paket Sakral",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=100",
  },
  {
    quote: "Grand wedding dengan 800 tamu berjalan lancar tanpa hambatan. Tim yang luar biasa!",
    couple: "Diana & Kevin",
    package: "Paket Keabadian",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=100",
  },
];

const faqs = [
  {
    q: "Apakah harga paket sudah final?",
    a: "Harga yang tertera adalah harga dasar. Kami dapat menyesuaikan dengan kebutuhan dan budget Anda setelah konsultasi.",
  },
  {
    q: "Bisakah saya upgrade paket di tengah persiapan?",
    a: "Ya, Anda bisa upgrade paket kapan saja. Kami akan menghitung selisih biaya dan menyesuaikan layanan.",
  },
  {
    q: "Apakah ada biaya tersembunyi?",
    a: "Tidak ada. Semua biaya akan dijelaskan secara transparan di awal sebelum kontrak ditandatangani.",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "Pembayaran dapat dicicil: 30% saat booking, 40% di tengah persiapan, dan 30% sebelum hari H.",
  },
  {
    q: "Apakah vendor sudah termasuk dalam paket?",
    a: "Paket kami mencakup jasa wedding organizer. Biaya vendor (catering, dekorasi, dll) terpisah namun kami bantu negosiasi harga terbaik.",
  },
];

export default function PaketPage() {
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
            Paket Wedding
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] font-bold mb-6"
          >
            Pilih Paket Impian Anda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
          >
            Setiap paket dirancang khusus untuk memenuhi kebutuhan pernikahan Anda.
            Semua harga dapat disesuaikan dengan kebutuhan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Check className="w-5 h-5 text-[#C9A962]" />
              <span className="text-sm text-gray-600">Konsultasi Gratis</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Check className="w-5 h-5 text-[#C9A962]" />
              <span className="text-sm text-gray-600">Harga Fleksibel</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Check className="w-5 h-5 text-[#C9A962]" />
              <span className="text-sm text-gray-600">Garansi Kepuasan</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-3xl p-8 border-2 transition-all duration-300 bg-white",
                  pkg.popular
                    ? "border-[#C9A962] shadow-xl lg:scale-105"
                    : "border-gray-200 hover:border-[#C9A962]/50"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#C9A962] text-white px-6 py-1 rounded-full text-sm font-medium">
                      Terpopuler
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={cn(
                      "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4",
                      pkg.popular ? "bg-[#C9A962]" : "bg-[#F5E6D3]"
                    )}
                  >
                    <pkg.icon
                      className={cn(
                        "w-10 h-10",
                        pkg.popular ? "text-white" : "text-[#C9A962]"
                      )}
                    />
                  </div>
                  <h2 className="font-heading text-3xl text-[#2C2C2C] font-bold">
                    {pkg.name}
                  </h2>
                  <p className="text-[#8B4513] font-medium text-lg">{pkg.subtitle}</p>
                  <p className="text-gray-500 text-sm mt-1">{pkg.guests}</p>
                  <p className="font-heading text-3xl text-[#C9A962] font-bold mt-4">
                    {pkg.price}
                  </p>
                </div>

                <p className="text-gray-600 text-center mb-6 text-sm">
                  {pkg.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-heading text-lg font-semibold text-[#2C2C2C] mb-4">
                    Yang Termasuk:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6 mb-8">
                  <h4 className="font-heading text-lg font-semibold text-[#2C2C2C] mb-4">
                    Tim Anda:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#C9A962] rounded-full" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/konsultasi"
                  className={cn(
                    "block w-full py-4 rounded-full text-center font-medium transition-colors",
                    pkg.popular
                      ? "bg-[#C9A962] text-white hover:bg-[#8B4513]"
                      : "bg-[#F5E6D3] text-[#8B4513] hover:bg-[#C9A962] hover:text-white"
                  )}
                >
                  Pilih Paket Ini
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Perbandingan
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Bandingkan Paket Kami
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#C9A962]">
                  <th className="text-left py-4 px-4 font-heading text-lg">Fitur</th>
                  <th className="text-center py-4 px-4 font-heading text-lg">Sakral</th>
                  <th className="text-center py-4 px-4 font-heading text-lg bg-[#F5E6D3] rounded-t-xl">Harmoni</th>
                  <th className="text-center py-4 px-4 font-heading text-lg">Keabadian</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="py-4 px-4 text-gray-600">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof row.sakral === "boolean" ? (
                        row.sakral ? (
                          <Check className="w-5 h-5 text-[#C9A962] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-600">{row.sakral}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-[#F5E6D3]/30">
                      {typeof row.harmoni === "boolean" ? (
                        row.harmoni ? (
                          <Check className="w-5 h-5 text-[#C9A962] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-[#C9A962] font-medium">{row.harmoni}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.keabadian === "boolean" ? (
                        row.keabadian ? (
                          <Check className="w-5 h-5 text-[#C9A962] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-600">{row.keabadian}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Komitmen Kami
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Garansi di Setiap Paket
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-14 h-14 bg-[#C9A962] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#2C2C2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Tambahan
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Add-ons & Upgrade
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Tambahkan layanan berikut untuk pengalaman yang lebih istimewa dan tak terlupakan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-5 bg-[#FFFBF5] rounded-xl border border-gray-100 hover:border-[#C9A962] transition-colors"
              >
                <div>
                  <h4 className="font-medium text-[#2C2C2C]">{addon.name}</h4>
                  <p className="text-gray-500 text-sm">{addon.desc}</p>
                </div>
                <span className="text-[#C9A962] font-semibold whitespace-nowrap ml-4">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#FFFBF5]">
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
              Kata Mereka tentang Paket Kami
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.couple}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={item.image} alt={item.couple} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-[#2C2C2C]">{item.couple}</p>
                    <p className="text-[#C9A962] text-sm">{item.package}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{item.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              FAQ
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Pertanyaan Seputar Paket
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5E6D3] rounded-2xl p-6"
              >
                <h4 className="font-heading text-lg font-semibold text-[#2C2C2C] mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C2C2C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A962] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A962] rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading italic text-2xl text-[#C9A962] mb-4 tracking-wide"
          >
            Masih Bingung Memilih?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6"
          >
            Konsultasikan dengan Tim Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8 max-w-xl mx-auto text-lg"
          >
            Kami akan membantu Anda memilih paket yang tepat sesuai dengan kebutuhan, gaya, dan budget pernikahan Anda.
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
              className="bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors inline-flex items-center justify-center gap-2"
            >
              Jadwalkan Konsultasi Gratis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2 border border-white/20"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Kami
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
