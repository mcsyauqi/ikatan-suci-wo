export interface Vendor {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  location: string;
}

export const vendorCategories = [
  "Venue",
  "Catering",
  "Decoration",
  "Photography",
  "Videography",
  "MUA & Attire",
  "Entertainment",
  "Invitation",
];

export const vendorData: Vendor[] = [
  {
    id: "1",
    name: "The Royal Garden",
    category: "Venue",
    description: "Venue outdoor dengan taman yang luas dan pemandangan indah, cocok untuk garden wedding.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400",
    location: "Jakarta",
  },
  {
    id: "2",
    name: "Grand Ballroom Hotel",
    category: "Venue",
    description: "Ballroom mewah dengan kapasitas hingga 1000 tamu dan fasilitas lengkap.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
    location: "Jakarta",
  },
  {
    id: "3",
    name: "Savor Catering",
    category: "Catering",
    description: "Catering premium dengan berbagai pilihan menu Indonesia dan Western.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400",
    location: "Jakarta",
  },
  {
    id: "4",
    name: "Boga Rasa",
    category: "Catering",
    description: "Spesialis masakan tradisional Indonesia dengan cita rasa autentik.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
    location: "Yogyakarta",
  },
  {
    id: "5",
    name: "Bloom & Petal",
    category: "Decoration",
    description: "Dekorasi pernikahan dengan bunga segar dan konsep yang unik.",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400",
    location: "Jakarta",
  },
  {
    id: "6",
    name: "Divine Decoration",
    category: "Decoration",
    description: "Dekorasi mewah dan glamor untuk pernikahan impian Anda.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400",
    location: "Bali",
  },
  {
    id: "7",
    name: "Eternal Lens",
    category: "Photography",
    description: "Fotografer profesional dengan gaya candid dan natural.",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400",
    location: "Jakarta",
  },
  {
    id: "8",
    name: "Capture Moments",
    category: "Photography",
    description: "Dokumentasi pernikahan dengan sentuhan artistik dan storytelling.",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400",
    location: "Bandung",
  },
  {
    id: "9",
    name: "Cinematic Dreams",
    category: "Videography",
    description: "Video pernikahan sinematik dengan teknologi terkini.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400",
    location: "Jakarta",
  },
  {
    id: "10",
    name: "Motion Studio",
    category: "Videography",
    description: "Same day edit dan highlight video berkualitas tinggi.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
    location: "Surabaya",
  },
  {
    id: "11",
    name: "Glamour Studio",
    category: "MUA & Attire",
    description: "Makeup artist dan kebaya designer ternama dengan pengalaman 10+ tahun.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
    location: "Jakarta",
  },
  {
    id: "12",
    name: "Bridal House",
    category: "MUA & Attire",
    description: "Koleksi gaun pengantin import dan lokal dengan fitting personal.",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400",
    location: "Jakarta",
  },
  {
    id: "13",
    name: "Harmony Band",
    category: "Entertainment",
    description: "Band musik wedding dengan repertoar lengkap dari pop hingga jazz.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400",
    location: "Jakarta",
  },
  {
    id: "14",
    name: "DJ Express",
    category: "Entertainment",
    description: "DJ profesional untuk after party yang meriah.",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400",
    location: "Bali",
  },
  {
    id: "15",
    name: "Paperlove",
    category: "Invitation",
    description: "Undangan pernikahan custom dengan desain elegan.",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400",
    location: "Jakarta",
  },
  {
    id: "16",
    name: "Digital Invite",
    category: "Invitation",
    description: "Undangan digital dan website pernikahan interaktif.",
    image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=400",
    location: "Jakarta",
  },
];
