"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Star, Crown, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Paket Sakral",
    subtitle: "Intimate Wedding",
    icon: Gem,
    guests: "50-100 tamu",
    price: "Mulai Rp 25.000.000",
    popular: false,
    features: [
      "Full planning 6 bulan",
      "Venue coordination",
      "Vendor management (5 vendor)",
      "Day coordination",
      "Timeline & rundown",
      "Budgeting assistance",
    ],
  },
  {
    name: "Paket Harmoni",
    subtitle: "Classic Wedding",
    icon: Star,
    guests: "100-300 tamu",
    price: "Mulai Rp 50.000.000",
    popular: true,
    features: [
      "Full planning 8 bulan",
      "Venue + decoration concept",
      "Vendor management (8 vendor)",
      "Rehearsal + Day coordination",
      "Honeymoon planning",
      "Guest management system",
      "Emergency kit di hari H",
      "Post-wedding support",
    ],
  },
  {
    name: "Paket Keabadian",
    subtitle: "Grand Wedding",
    icon: Crown,
    guests: "300-1000 tamu",
    price: "Custom pricing",
    popular: false,
    features: [
      "Full planning 12 bulan",
      "Complete A-Z handling",
      "Unlimited vendor coordination",
      "Multiple events (akad, resepsi, dll)",
      "Destination wedding capable",
      "Dedicated team of 5+ planners",
      "VIP guest handling",
      "24/7 support hotline",
    ],
  },
];

export default function Packages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-script text-3xl text-[#C9A962] mb-2">Paket Wedding</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#2C2C2C] font-bold mb-4">
            Pilih Paket Terbaik Anda
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap pasangan unik, begitu juga dengan pernikahan mereka. Pilih paket yang sesuai dengan impian dan budget Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative rounded-3xl p-8 border-2 transition-all duration-300",
                pkg.popular
                  ? "border-[#C9A962] bg-gradient-to-b from-[#FFFBF5] to-white shadow-xl scale-105 lg:-mt-4 lg:mb-4"
                  : "border-gray-200 bg-white hover:border-[#C9A962]/50"
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
                    "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",
                    pkg.popular ? "bg-[#C9A962]" : "bg-[#F5E6D3]"
                  )}
                >
                  <pkg.icon
                    className={cn(
                      "w-8 h-8",
                      pkg.popular ? "text-white" : "text-[#C9A962]"
                    )}
                  />
                </div>
                <h3 className="font-heading text-2xl text-[#2C2C2C] font-bold">
                  {pkg.name}
                </h3>
                <p className="text-[#8B4513] font-medium">{pkg.subtitle}</p>
                <p className="text-gray-500 text-sm mt-1">{pkg.guests}</p>
                <p className="font-heading text-3xl text-[#C9A962] font-bold mt-4">
                  {pkg.price}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12"
        >
          * Harga dapat disesuaikan dengan kebutuhan. Hubungi kami untuk penawaran khusus.
        </motion.p>
      </div>
    </section>
  );
}
