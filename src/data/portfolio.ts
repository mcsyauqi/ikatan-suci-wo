export interface PortfolioItem {
  id: string;
  slug: string;
  couple: string;
  type: string;
  location: string;
  guests: number;
  date: string;
  description: string;
  gallery: string[];
  testimonial: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    slug: "sarah-michael",
    couple: "Sarah & Michael",
    type: "Garden Wedding",
    location: "Bali",
    guests: 200,
    date: "15 Maret 2024",
    description: "Pernikahan romantis di taman tropis Bali dengan sentuhan rustic dan elegant. Dekorasi bunga segar dengan dominasi warna pastel menciptakan suasana seperti di negeri dongeng.",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    ],
    testimonial: "Ikatan Suci membuat hari pernikahan kami sempurna tanpa stress. Thank you so much!",
  },
  {
    id: "2",
    slug: "anita-budi",
    couple: "Anita & Budi",
    type: "Traditional Javanese",
    location: "Yogyakarta",
    guests: 500,
    date: "20 Juni 2024",
    description: "Pernikahan adat Jawa yang megah dengan upacara lengkap mulai dari siraman hingga panggih. Pendopo bersejarah menjadi saksi bisu cinta yang abadi.",
    gallery: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800",
    ],
    testimonial: "Professional dan detail banget. Semua sesuai impian kami.",
  },
  {
    id: "3",
    slug: "jessica-david",
    couple: "Jessica & David",
    type: "Beach Wedding",
    location: "Lombok",
    guests: 80,
    date: "10 September 2024",
    description: "Intimate beach wedding dengan sunset yang memukau. Suasana santai namun tetap elegan dengan dekorasi bohemian dan sentuhan lokal.",
    gallery: [
      "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800",
      "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    ],
    testimonial: "Budget kami terbatas tapi hasilnya mewah. Recommended!",
  },
  {
    id: "4",
    slug: "putri-andi",
    couple: "Putri & Andi",
    type: "Ballroom Elegant",
    location: "Jakarta",
    guests: 350,
    date: "5 Desember 2024",
    description: "Grand wedding di ballroom hotel bintang lima dengan dekorasi mewah dan glamor. Ceiling flowers dan chandelier menciptakan suasana seperti istana.",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800",
      "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800",
    ],
    testimonial: "Tim yang sangat profesional! Semuanya berjalan lancar dari awal sampai akhir.",
  },
  {
    id: "5",
    slug: "maya-rizky",
    couple: "Maya & Rizky",
    type: "Rustic Wedding",
    location: "Bandung",
    guests: 150,
    date: "22 Februari 2024",
    description: "Pernikahan rustic di villa pegunungan Bandung dengan udara sejuk dan pemandangan indah. Dekorasi kayu dan greenery menciptakan suasana hangat dan intimate.",
    gallery: [
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800",
      "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800",
    ],
    testimonial: "Suasana pernikahan kami sangat intimate dan personal. Terima kasih Ikatan Suci!",
  },
  {
    id: "6",
    slug: "dewi-arman",
    couple: "Dewi & Arman",
    type: "Minimalist Modern",
    location: "Surabaya",
    guests: 120,
    date: "8 November 2024",
    description: "Modern minimalist wedding dengan konsep clean dan sophisticated. Warna monokrom dengan aksen gold menciptakan kesan luxury yang understated.",
    gallery: [
      "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800",
      "https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?w=800",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    ],
    testimonial: "Konsep minimalis yang kami inginkan terwujud dengan sempurna!",
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioData.find((item) => item.slug === slug);
}
