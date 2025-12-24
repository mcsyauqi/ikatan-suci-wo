"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/paket", label: "Paket" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/vendor", label: "Vendor" },
  { href: "/konsultasi", label: "Konsultasi" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-[#C9A962]" fill="#C9A962" />
            <div>
              <span className="font-script text-2xl text-[#C9A962]">Ikatan Suci</span>
              <p className="text-xs text-[#8B4513] -mt-1">Wedding Organizer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#C9A962]",
                  scrolled ? "text-[#2C2C2C]" : "text-[#2C2C2C]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/konsultasi"
              className="bg-[#C9A962] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#8B4513] transition-colors"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#2C2C2C]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2C2C2C]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[#2C2C2C] hover:text-[#C9A962] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/konsultasi"
                className="block bg-[#C9A962] text-white px-6 py-3 rounded-full text-center font-medium hover:bg-[#8B4513] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Konsultasi Gratis
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
