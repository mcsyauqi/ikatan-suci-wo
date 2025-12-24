"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Send,
  CheckCircle,
} from "lucide-react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

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
            Hubungi Kami
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] font-bold mb-6"
          >
            Kami Siap Membantu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Ada pertanyaan? Ingin diskusi lebih lanjut? Jangan ragu untuk
            menghubungi kami. Tim kami siap membantu Anda.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[#C9A962] rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#2C2C2C] mb-2">
                Alamat
              </h3>
              <p className="text-gray-600 text-sm">
                Jl. Cinta Abadi No. 88
                <br />
                Jakarta Selatan 12345
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[#C9A962] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#2C2C2C] mb-2">
                Telepon
              </h3>
              <p className="text-gray-600 text-sm">
                +62 812 3456 7890
                <br />
                +62 21 1234 5678
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[#C9A962] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#2C2C2C] mb-2">
                Email
              </h3>
              <p className="text-gray-600 text-sm">
                hello@ikatansuci.id
                <br />
                info@ikatansuci.id
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="w-14 h-14 bg-[#C9A962] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#2C2C2C] mb-2">
                Jam Operasional
              </h3>
              <p className="text-gray-600 text-sm">
                Sen - Jum: 09:00 - 17:00
                <br />
                Sabtu: 10:00 - 15:00
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-16 bg-[#FFFBF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {isSubmitted ? (
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-heading text-2xl text-[#2C2C2C] font-bold mb-4">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Terima kasih telah menghubungi kami. Tim kami akan membalas
                    pesan Anda dalam 1x24 jam.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#C9A962] font-medium hover:underline"
                  >
                    Kirim pesan lain
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="font-heading text-2xl text-[#2C2C2C] font-bold mb-6">
                    Kirim Pesan
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                        placeholder="Nama Anda"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                          No. Telepon
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                          placeholder="08xxxxxxxxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek *
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Pilih subjek</option>
                        <option value="konsultasi">Konsultasi Wedding</option>
                        <option value="harga">Tanya Harga Paket</option>
                        <option value="vendor">Kerjasama Vendor</option>
                        <option value="karir">Lowongan Kerja</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pesan *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C9A962] focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tulis pesan Anda..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#C9A962] text-white py-4 rounded-full font-medium hover:bg-[#8B4513] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2864618607674!2d106.82281931476882!3d-6.224774995494043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1640000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="font-heading text-xl text-[#2C2C2C] font-bold mb-6">
                  Ikuti Kami
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 bg-[#F5E6D3] rounded-xl hover:bg-[#C9A962] hover:text-white transition-all group"
                  >
                    <Instagram className="w-8 h-8 text-[#C9A962] group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 bg-[#F5E6D3] rounded-xl hover:bg-[#C9A962] hover:text-white transition-all group"
                  >
                    <Facebook className="w-8 h-8 text-[#C9A962] group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex flex-col items-center gap-2 p-4 bg-[#F5E6D3] rounded-xl hover:bg-[#C9A962] hover:text-white transition-all group"
                  >
                    <Youtube className="w-8 h-8 text-[#C9A962] group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium">YouTube</span>
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-[#2C2C2C] rounded-3xl p-8 text-white">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Butuh Respon Cepat?
                </h3>
                <p className="text-gray-400 mb-6">
                  Hubungi kami langsung via WhatsApp untuk respon lebih cepat.
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading italic text-xl text-[#C9A962] mb-2 tracking-wide">
              Cabang Kami
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#2C2C2C] font-bold">
              Lokasi Kami di Indonesia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "Jakarta (Pusat)",
                address: "Jl. Cinta Abadi No. 88, Jakarta Selatan 12345",
                phone: "+62 812 3456 7890",
              },
              {
                city: "Bali",
                address: "Jl. Sunset Road No. 99, Seminyak, Bali 80361",
                phone: "+62 812 9876 5432",
              },
              {
                city: "Yogyakarta",
                address: "Jl. Malioboro No. 55, Yogyakarta 55271",
                phone: "+62 812 5555 1234",
              },
            ].map((branch, index) => (
              <motion.div
                key={branch.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5E6D3] rounded-2xl p-6 text-center"
              >
                <h3 className="font-heading text-xl font-semibold text-[#2C2C2C] mb-3">
                  {branch.city}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{branch.address}</p>
                <p className="text-[#C9A962] font-medium">{branch.phone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
