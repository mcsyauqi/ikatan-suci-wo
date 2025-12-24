import Link from "next/link";
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-[#C9A962]" fill="#C9A962" />
              <div>
                <span className="font-script text-2xl text-[#C9A962]">Ikatan Suci</span>
                <p className="text-xs text-[#F5E6D3] -mt-1">Wedding Organizer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Merangkai Kisah Cinta Abadi. Kami hadir untuk mewujudkan pernikahan impian Anda dengan penuh cinta dan dedikasi.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#C9A962] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A962] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C9A962] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-[#C9A962]">Menu</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/paket" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Paket Wedding
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/vendor" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Vendor Partner
                </Link>
              </li>
              <li>
                <Link href="/konsultasi" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Konsultasi
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-[#C9A962]">Layanan</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Full Wedding Planning</li>
              <li className="text-gray-400 text-sm">Partial Planning</li>
              <li className="text-gray-400 text-sm">Day Coordination</li>
              <li className="text-gray-400 text-sm">Destination Wedding</li>
              <li className="text-gray-400 text-sm">Intimate Wedding</li>
              <li className="text-gray-400 text-sm">Traditional Wedding</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-[#C9A962]">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Jl. Cinta Abadi No. 88, Jakarta Selatan 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C9A962] flex-shrink-0" />
                <span className="text-gray-400 text-sm">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C9A962] flex-shrink-0" />
                <span className="text-gray-400 text-sm">hello@ikatansuci.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2025 Ikatan Suci Wedding Organizer. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Website ini dibuat dengan <Heart className="w-4 h-4 inline text-red-500 mx-1" fill="currentColor" /> oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A962] hover:underline"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
