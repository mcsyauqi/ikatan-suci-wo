"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Users, Calendar, ArrowLeft, Quote, Heart } from "lucide-react";
import { getPortfolioBySlug, portfolioData } from "@/data/portfolio";

interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = use(params);
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  const otherPortfolios = portfolioData
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="relative h-[60vh] md:h-[70vh]">
          <Image
            src={portfolio.gallery[0]}
            alt={portfolio.couple}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Kembali ke Portfolio
              </Link>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-script text-4xl md:text-5xl text-[#C9A962] mb-2"
              >
                {portfolio.couple}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-heading text-3xl md:text-4xl text-white font-bold mb-4"
              >
                {portfolio.type}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-6 text-white/80"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C9A962]" />
                  {portfolio.location}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#C9A962]" />
                  {portfolio.guests} tamu
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C9A962]" />
                  {portfolio.date}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Heart className="w-8 h-8 text-[#C9A962] mx-auto mb-6" fill="#C9A962" />
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {portfolio.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-script text-2xl text-[#C9A962] mb-2">Gallery</p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Momen Indah
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={image}
                  alt={`${portfolio.couple} - Photo ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center relative"
          >
            <Quote className="w-16 h-16 text-[#C9A962]/20 absolute top-8 left-8" />
            <Quote className="w-16 h-16 text-[#C9A962]/20 absolute bottom-8 right-8 rotate-180" />

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed italic mb-8 relative z-10">
              &ldquo;{portfolio.testimonial}&rdquo;
            </p>

            <div className="relative z-10">
              <p className="font-script text-3xl text-[#C9A962]">
                {portfolio.couple}
              </p>
              <p className="text-[#8B4513] mt-1">{portfolio.type}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Portfolio Section */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-script text-2xl text-[#C9A962] mb-2">
              Portfolio Lainnya
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Kisah Cinta Lainnya
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPortfolios.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/portfolio/${item.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                    <Image
                      src={item.gallery[0]}
                      alt={item.couple}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-script text-xl text-[#C9A962]">
                        {item.couple}
                      </p>
                      <p className="text-white font-heading font-semibold">
                        {item.type}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-script text-3xl text-[#C9A962] mb-4">
            Ingin Kisah Seperti Ini?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-6">
            Wujudkan Pernikahan Impian Anda
          </h2>
          <Link
            href="/konsultasi"
            className="inline-flex items-center gap-2 bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </>
  );
}
