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
  // Padi - 3 produk (duplikasi Beras Organik)
  {
    id: "beras-organik-1",
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
    id: "beras-organik-2",
    name: "Beras Organik Kapulogo",
    category: "Padi",
    price: 16000,
    unit: "kg",
    image: "/images/beras-organik.png",
    description:
      "Beras pulen hasil panen sawah tadah hujan tanpa pestisida kimia. Ditanam dengan metode organik turun-temurun.",
    producer: "Kelompok Tani Sri Rejeki",
    inStock: true,
  },
  {
    id: "beras-organik-3",
    name: "Beras Organik Kapulogo",
    category: "Padi",
    price: 16000,
    unit: "kg",
    image: "/images/beras-organik.png",
    description:
      "Beras pulen hasil panen sawah tadah hujan tanpa pestisida kimia. Ditanam dengan metode organik turun-temurun.",
    producer: "Kelompok Tani Sri Rejeki",
    inStock: true,
  },
  // Kopi - 3 produk (duplikasi Kopi Robusta)
  {
    id: "kopi-robusta-1",
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
    id: "kopi-robusta-2",
    name: "Kopi Robusta Lereng",
    category: "Kopi",
    price: 85000,
    unit: "kg",
    image: "/images/kopi-robusta.png",
    description:
      "Biji kopi robusta dari kebun di lereng bukit ketinggian 800 mdpl. Aroma kuat dengan sentuhan cokelat.",
    producer: "Koperasi Kopi Kapulogo",
    inStock: true,
  },
  {
    id: "kopi-robusta-3",
    name: "Kopi Robusta Lereng",
    category: "Kopi",
    price: 85000,
    unit: "kg",
    image: "/images/kopi-robusta.png",
    description:
      "Biji kopi robusta dari kebun di lereng bukit ketinggian 800 mdpl. Aroma kuat dengan sentuhan cokelat.",
    producer: "Koperasi Kopi Kapulogo",
    inStock: true,
  },
  // Gula - 3 produk (duplikasi Gula Aren)
  {
    id: "gula-aren-1",
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
    id: "gula-aren-2",
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
    id: "gula-aren-3",
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
  // Cabai - 3 produk (duplikasi Cabai Merah Keriting)
  {
    id: "cabai-merah-1",
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
    id: "cabai-merah-2",
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
    id: "cabai-merah-3",
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
]

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value)
}
