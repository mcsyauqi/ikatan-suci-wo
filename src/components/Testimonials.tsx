"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Ikatan Suci membuat hari pernikahan kami sempurna tanpa stress. Setiap detail diurus dengan sangat baik. Thank you so much!",
    couple: "Sarah & Michael",
    type: "Garden Wedding, Bali",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Professional dan detail banget. Semua sesuai impian kami. Tim yang sangat responsif dan helpful.",
    couple: "Anita & Budi",
    type: "Traditional Javanese, Jogja",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Budget kami terbatas tapi hasilnya mewah. Tim Ikatan Suci sangat kreatif dalam memaksimalkan budget. Highly recommended!",
    couple: "Jessica & David",
    type: "Beach Wedding, Lombok",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-heading italic text-2xl text-[#C9A962] mb-2 tracking-wide">Testimoni</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#2C2C2C] font-bold mb-4">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Lihat apa kata pasangan yang telah kami dampingi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              <Quote className="w-12 h-12 text-[#C9A962]/20 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#C9A962]"
                    fill="#C9A962"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div>
                <p className="font-heading text-xl text-[#2C2C2C] font-semibold">
                  {testimonial.couple}
                </p>
                <p className="text-[#8B4513] text-sm">{testimonial.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
