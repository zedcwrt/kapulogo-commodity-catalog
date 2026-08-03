import { Recycle, ShieldCheck, Truck } from "lucide-react"

const points = [
  {
    icon: ShieldCheck,
    title: "Kualitas Terjamin",
    desc: "Setiap komoditas dipilih dan disortir langsung oleh kelompok tani desa.",
  },
  {
    icon: Recycle,
    title: "Ramah Lingkungan",
    desc: "Praktik pertanian organik berkelanjutan tanpa bahan kimia berbahaya.",
  },
  {
    icon: Truck,
    title: "Distribusi Lokal",
    desc: "Mendukung ekonomi desa dengan rantai pasok yang adil dan transparan.",
  },
]

export function About() {
  return (
    <section id="tentang" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Tentang Desa
            </p>
            <h2 className="mt-2 text-balance font-heading text-3xl font-semibold text-foreground md:text-4xl">
              Kapulogo: Jejak Rempah dan Lumbung Tani di Ujung Wonosobo
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Desa Kapulogo yang terletak di Kecamatan Kepil ini memiliki sejarah yang unik, 
              di mana namanya sendiri diambil dari komoditas rempah kapulaga. Biarpun berstatus 
              wilayah Wonosobo, letaknya yang persis di perbatasan membuat kultur dan dialek 
              warganya lebih dekat ke arah Magelang maupun Purworejo. Tanah di tiga dusun 
              utamanya—Kulon, Tengah, dan Wetan—dikenal sangat subur. 
              Desa ini tidak hanya menghasilkan komoditas andalan seperti kopi dan perajin
              gula merah, tetapi juga sukses membudidayakan Jahe Merah melalui program BUMDes
              Bejo Lestari.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Melalui katalog digital ini, kami ingin memutus rantai distribusi tengkulak
              yang terlalu panjang. Visi kami sangat jelas: membawa hasil bumi dan kerajinan
              Kapulogo langsung dari tangan pertama para petani lokal ke depan pintu Anda.
              Pembeli mendapatkan jaminan kualitas produk paling segar 100% alami, dan masyarakat 
              desa mendapatkan harga jual yang jauh lebih adil dan memanusiakan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {points.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <point.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
