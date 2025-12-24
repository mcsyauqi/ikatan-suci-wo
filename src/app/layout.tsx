import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ikatan Suci | Wedding Organizer Jakarta Bali | Jasa WO Profesional",
  description:
    "Ikatan Suci Wedding Organizer - Merangkai Kisah Cinta Abadi. Jasa wedding organizer profesional untuk pernikahan impian Anda. Melayani Jakarta, Bali, Jogja, dan seluruh Indonesia.",
  keywords:
    "wedding organizer, WO Jakarta, WO Bali, jasa wedding planner, pernikahan, wedding planning Indonesia",
  openGraph: {
    title: "Ikatan Suci | Wedding Organizer Jakarta Bali",
    description:
      "Wedding organizer profesional untuk pernikahan impian Anda. 500+ pernikahan, 8 tahun pengalaman.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
