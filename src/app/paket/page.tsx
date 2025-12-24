"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Star, Crown, Gem, ArrowRight, Phone } from "lucide-react";
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
  { name: "Same Day Edit Video", price: "Rp 5.000.000" },
  { name: "Photo Booth Premium", price: "Rp 3.500.000" },
  { name: "Live Streaming", price: "Rp 2.500.000" },
  { name: "Drone Videography", price: "Rp 4.000.000" },
  { name: "MC Profesional", price: "Rp 5.000.000" },
  { name: "Entertainment Upgrade", price: "Mulai Rp 10.000.000" },
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
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Setiap paket dirancang khusus untuk memenuhi kebutuhan pernikahan Anda.
            Semua harga dapat disesuaikan dengan kebutuhan.
          </motion.p>
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

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">Tambahan</p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Add-ons & Upgrade
            </h2>
            <p className="text-gray-600 mt-4">
              Tambahkan layanan berikut untuk pengalaman yang lebih istimewa.
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
                className="flex items-center justify-between p-4 bg-[#F5E6D3] rounded-xl"
              >
                <span className="font-medium text-[#2C2C2C]">{addon.name}</span>
                <span className="text-[#C9A962] font-semibold">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading italic text-2xl text-[#C9A962] mb-4 tracking-wide"
          >
            Masih Bingung?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl text-white font-bold mb-6"
          >
            Konsultasikan dengan Tim Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Kami akan membantu Anda memilih paket yang tepat sesuai dengan kebutuhan dan budget pernikahan Anda.
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
              Jadwalkan Konsultasi
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
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
