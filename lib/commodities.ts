export type Category =
  | "Cabai"
  | "Gula"
  | "Kopi"
  | "Padi"

export type Commodity = {
  id: string
  name: string
  category: Category
  price: number
  unit: string
  image: string
  description: string
  producer: string
  inStock: boolean
  featured?: boolean
}

export const categories: Category[] = [
  "Cabai",
  "Gula",
  "Kopi",
  "Padi",
]

export const commodities: Commodity[] = [
  // Padi - 3 produk
  {
    id: "beras-organik",
    name: "Beras Organik Kapulogo",
    category: "Padi",
    price: 16000,
    unit: "kg",
    image: "/images/beras-organik.png",
    description:
      "Beras pulen hasil panen sawah tadah hujan tanpa pestisida kimia. Ditanam dengan metode organik turun-temurun.",
    producer: "Kelompok Tani Sri Rejeki",
    inStock: true,
    featured: true,
  },
  {
    id: "telur-ayam",
    name: "Telur Ayam Kampung",
    category: "Padi",
    price: 3000,
    unit: "butir",
    image: "/images/telur-ayam.png",
    description:
      "Telur ayam kampung dari peternakan umbaran. Kuning telur pekat dan kaya nutrisi.",
    producer: "Peternakan Berkah Tani",
    inStock: true,
  },
  {
    id: "anyaman-bambu",
    name: "Anyaman Bambu Handmade",
    category: "Padi",
    price: 65000,
    unit: "buah",
    image: "/images/anyaman-bambu.png",
    description:
      "Kerajinan keranjang bambu buatan tangan pengrajin desa. Kuat, ramah lingkungan, dan estetis.",
    producer: "Sanggar Bambu Kapulogo",
    inStock: true,
  },
  // Kopi - 3 produk
  {
    id: "kopi-robusta",
    name: "Kopi Robusta Lereng",
    category: "Kopi",
    price: 85000,
    unit: "kg",
    image: "/images/kopi-robusta.png",
    description:
      "Biji kopi robusta dari kebun di lereng bukit ketinggian 800 mdpl. Aroma kuat dengan sentuhan cokelat.",
    producer: "Koperasi Kopi Kapulogo",
    inStock: true,
    featured: true,
  },
  {
    id: "kapulaga",
    name: "Kapulaga Pilihan",
    category: "Kopi",
    price: 120000,
    unit: "kg",
    image: "/images/kapulaga.png",
    description:
      "Rempah kapulaga hijau dengan aroma harum khas, dipetik dan dijemur secara alami. Komoditas ikonik desa.",
    producer: "Tani Rempah Lestari",
    inStock: true,
    featured: true,
  },
  {
    id: "kopi-robusta-premium",
    name: "Kopi Robusta Premium",
    category: "Kopi",
    price: 95000,
    unit: "kg",
    image: "/images/kopi-robusta.png",
    description:
      "Kopi robusta pilihan dari hasil panen musim hujan dengan rasa yang lebih kaya dan kompleks.",
    producer: "Koperasi Kopi Kapulogo",
    inStock: true,
  },
  // Gula - 3 produk
  {
    id: "gula-aren",
    name: "Gula Aren Cetak",
    category: "Gula",
    price: 28000,
    unit: "kg",
    image: "/images/gula-aren.png",
    description:
      "Gula aren murni hasil sadapan nira pohon aren, dimasak tradisional tanpa pemanis tambahan.",
    producer: "Pak Darto",
    inStock: true,
  },
  {
    id: "madu-hutan",
    name: "Madu Hutan Murni",
    category: "Gula",
    price: 95000,
    unit: "botol 350ml",
    image: "/images/madu-hutan.png",
    description:
      "Madu liar dari lebah hutan di sekitar desa. Mentah, tidak dipanaskan, dan kaya enzim alami.",
    producer: "Kelompok Madu Wana Sari",
    inStock: true,
  },
  {
    id: "gula-aren-premium",
    name: "Gula Aren Premium",
    category: "Gula",
    price: 32000,
    unit: "kg",
    image: "/images/gula-aren.png",
    description:
      "Gula aren pilihan dengan warna lebih cerah dan kualitas premium dari pohon aren terpilih.",
    producer: "Pak Darto",
    inStock: true,
  },
  // Cabai - 3 produk
  {
    id: "cabai-merah",
    name: "Cabai Merah Keriting",
    category: "Cabai",
    price: 42000,
    unit: "kg",
    image: "/images/cabai-merah.png",
    description:
      "Cabai merah keriting segar dipetik pagi hari. Pedas mantap, cocok untuk sambal dan masakan rumahan.",
    producer: "Kelompok Tani Maju Bersama",
    inStock: false,
  },
  {
    id: "sayur-bayam",
    name: "Bayam Hijau Segar",
    category: "Cabai",
    price: 5000,
    unit: "ikat",
    image: "/images/sayur-bayam.png",
    description:
      "Bayam hijau segar tanpa pestisida, dipanen langsung dari kebun warga setiap pagi.",
    producer: "Kebun Sayur Lestari",
    inStock: true,
  },
  {
    id: "cabai-merah-besar",
    name: "Cabai Merah Besar",
    category: "Cabai",
    price: 48000,
    unit: "kg",
    image: "/images/cabai-merah.png",
    description:
      "Cabai merah besar dengan daging tebal, cocok untuk diisi atau dijadikan sambal.",
    producer: "Kelompok Tani Maju Bersama",
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
