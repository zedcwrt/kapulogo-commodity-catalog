export type Category =
  | "Pertanian"
  | "Perkebunan"
  | "Peternakan"
  | "Kerajinan"

export type Commodity = {
  id: string
  name: string
  category: Category
  price: number
  unit: string
  image: string
  description: string
  producer: string
  rating: number
  inStock: boolean
  featured?: boolean
}

export const categories: Category[] = [
  "Pertanian",
  "Perkebunan",
  "Peternakan",
  "Kerajinan",
]

export const commodities: Commodity[] = [
  {
    id: "beras-organik",
    name: "Beras Organik Kapulogo",
    category: "Pertanian",
    price: 16000,
    unit: "kg",
    image: "/images/beras-organik.png",
    description:
      "Beras pulen hasil panen sawah tadah hujan tanpa pestisida kimia. Ditanam dengan metode organik turun-temurun.",
    producer: "Kelompok Tani Sri Rejeki",
    rating: 4.9,
    inStock: true,
    featured: true,
  },
  {
    id: "kopi-robusta",
    name: "Kopi Robusta Lereng",
    category: "Perkebunan",
    price: 85000,
    unit: "kg",
    image: "/images/kopi-robusta.png",
    description:
      "Biji kopi robusta dari kebun di lereng bukit ketinggian 800 mdpl. Aroma kuat dengan sentuhan cokelat.",
    producer: "Koperasi Kopi Kapulogo",
    rating: 4.8,
    inStock: true,
    featured: true,
  },
  {
    id: "kapulaga",
    name: "Kapulaga Pilihan",
    category: "Perkebunan",
    price: 120000,
    unit: "kg",
    image: "/images/kapulaga.png",
    description:
      "Rempah kapulaga hijau dengan aroma harum khas, dipetik dan dijemur secara alami. Komoditas ikonik desa.",
    producer: "Tani Rempah Lestari",
    rating: 5.0,
    inStock: true,
    featured: true,
  },
  {
    id: "gula-aren",
    name: "Gula Aren Cetak",
    category: "Perkebunan",
    price: 28000,
    unit: "kg",
    image: "/images/gula-aren.png",
    description:
      "Gula aren murni hasil sadapan nira pohon aren, dimasak tradisional tanpa pemanis tambahan.",
    producer: "Pak Darto",
    rating: 4.7,
    inStock: true,
  },
  {
    id: "madu-hutan",
    name: "Madu Hutan Murni",
    category: "Peternakan",
    price: 95000,
    unit: "botol 350ml",
    image: "/images/madu-hutan.png",
    description:
      "Madu liar dari lebah hutan di sekitar desa. Mentah, tidak dipanaskan, dan kaya enzim alami.",
    producer: "Kelompok Madu Wana Sari",
    rating: 4.9,
    inStock: true,
  },
  {
    id: "cabai-merah",
    name: "Cabai Merah Keriting",
    category: "Pertanian",
    price: 42000,
    unit: "kg",
    image: "/images/cabai-merah.png",
    description:
      "Cabai merah keriting segar dipetik pagi hari. Pedas mantap, cocok untuk sambal dan masakan rumahan.",
    producer: "Kelompok Tani Maju Bersama",
    rating: 4.6,
    inStock: false,
  },
  {
    id: "telur-ayam",
    name: "Telur Ayam Kampung",
    category: "Peternakan",
    price: 3000,
    unit: "butir",
    image: "/images/telur-ayam.png",
    description:
      "Telur ayam kampung dari peternakan umbaran. Kuning telur pekat dan kaya nutrisi.",
    producer: "Peternakan Berkah Tani",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "sayur-bayam",
    name: "Bayam Hijau Segar",
    category: "Pertanian",
    price: 5000,
    unit: "ikat",
    image: "/images/sayur-bayam.png",
    description:
      "Bayam hijau segar tanpa pestisida, dipanen langsung dari kebun warga setiap pagi.",
    producer: "Kebun Sayur Lestari",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "anyaman-bambu",
    name: "Anyaman Bambu Handmade",
    category: "Kerajinan",
    price: 65000,
    unit: "buah",
    image: "/images/anyaman-bambu.png",
    description:
      "Kerajinan keranjang bambu buatan tangan pengrajin desa. Kuat, ramah lingkungan, dan estetis.",
    producer: "Sanggar Bambu Kapulogo",
    rating: 4.9,
    inStock: true,
  },
]

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value)
}
