"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle, Send } from "lucide-react";

const timeSlots = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

const weddingTypes = [
  "Intimate Wedding (50-100 tamu)",
  "Classic Wedding (100-300 tamu)",
  "Grand Wedding (300+ tamu)",
  "Destination Wedding",
  "Traditional Wedding",
  "Belum Yakin",
];

export default function KonsultasiPage() {
  const [formData, setFormData] = useState({
    name: "",
    partnerName: "",
    email: "",
    phone: "",
    weddingDate: "",
    preferredTime: "",
    weddingType: "",
    budget: "",
    venue: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log(formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen pt-32 pb-16 bg-[#FFFBF5] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl text-[#2C2C2C] font-bold mb-4"
          >
            Terima Kasih!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg mb-8"
          >
            Permintaan konsultasi Anda telah kami terima. Tim kami akan menghubungi
            Anda dalam 1x24 jam untuk konfirmasi jadwal.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="/"
            className="inline-flex items-center gap-2 bg-[#C9A962] text-white px-8 py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors"
          >
            Kembali ke Beranda
          </motion.a>
        </div>
      </section>
    );
  }

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
            Konsultasi Gratis
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] font-bold mb-6"
          >
            Ceritakan Impian Anda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Jadwalkan sesi konsultasi gratis dengan wedding planner profesional
            kami. Kami siap membantu mewujudkan pernikahan impian Anda.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[#2C2C2C] rounded-3xl p-8 text-white sticky top-32"
              >
                <h3 className="font-heading text-2xl font-bold mb-6">
                  Info Kontak
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A962] rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Alamat</h4>
                      <p className="text-gray-400 text-sm">
                        Jl. Cinta Abadi No. 88
                        <br />
                        Jakarta Selatan 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A962] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telepon</h4>
                      <p className="text-gray-400 text-sm">+62 812 3456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A962] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-400 text-sm">hello@ikatansuci.id</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A962] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Jam Operasional</h4>
                      <p className="text-gray-400 text-sm">
                        Senin - Jumat: 09:00 - 17:00
                        <br />
                        Sabtu: 10:00 - 15:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    Konsultasi juga tersedia via:
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://wa.me/6281234567890"
                      className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href="#"
                      className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Zoom
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="font-heading text-2xl text-[#2C2C2C] font-bold mb-6">
                    Data Diri
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Anda *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                        placeholder="Nama lengkap Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Pasangan *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.partnerName}
                        onChange={(e) =>
                          setFormData({ ...formData, partnerName: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                        placeholder="Nama lengkap pasangan"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        No. WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="font-heading text-2xl text-[#2C2C2C] font-bold mb-6">
                    Detail Pernikahan
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Rencana Tanggal Pernikahan
                      </label>
                      <input
                        type="date"
                        value={formData.weddingDate}
                        onChange={(e) =>
                          setFormData({ ...formData, weddingDate: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Waktu Konsultasi Preferred
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Pilih waktu</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tipe Pernikahan
                      </label>
                      <select
                        value={formData.weddingType}
                        onChange={(e) =>
                          setFormData({ ...formData, weddingType: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Pilih tipe</option>
                        {weddingTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimasi Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Pilih range budget</option>
                        <option value="25-50">Rp 25 - 50 juta</option>
                        <option value="50-100">Rp 50 - 100 juta</option>
                        <option value="100-200">Rp 100 - 200 juta</option>
                        <option value="200-500">Rp 200 - 500 juta</option>
                        <option value="500+">Rp 500 juta+</option>
                        <option value="belum">Belum ditentukan</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferensi Venue (opsional)
                      </label>
                      <input
                        type="text"
                        value={formData.venue}
                        onChange={(e) =>
                          setFormData({ ...formData, venue: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                        placeholder="Contoh: Hotel di Jakarta, Outdoor di Bali, dll"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan / Pertanyaan (opsional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Ceritakan impian pernikahan Anda atau pertanyaan yang ingin disampaikan..."
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A962] text-white py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Kirim Permintaan Konsultasi
                </button>

                <p className="text-center text-gray-500 text-sm">
                  Dengan mengirim form ini, Anda menyetujui untuk dihubungi oleh tim
                  kami.
                </p>
              </form>
            </motion.div>
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
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Pertanyaan Umum
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah konsultasi benar-benar gratis?",
                a: "Ya, konsultasi pertama kami sepenuhnya gratis tanpa ada kewajiban. Kami ingin memahami kebutuhan Anda terlebih dahulu.",
              },
              {
                q: "Berapa lama sesi konsultasi?",
                a: "Sesi konsultasi biasanya berlangsung 45-60 menit, cukup untuk mendiskusikan visi pernikahan dan menjawab pertanyaan Anda.",
              },
              {
                q: "Bisa konsultasi online?",
                a: "Tentu! Kami menyediakan opsi konsultasi via Zoom atau Google Meet untuk kenyamanan Anda.",
              },
              {
                q: "Kapan waktu terbaik untuk booking WO?",
                a: "Idealnya 8-12 bulan sebelum hari H. Namun kami juga bisa membantu untuk timeline yang lebih singkat.",
              },
            ].map((faq, index) => (
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
    </>
  );
}
