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
              Kapulogo, Lumbung Hasil Bumi yang Subur
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Desa Kapulogo dikenal dengan tanahnya yang subur dan tradisi
              bertani turun-temurun. Berlokasi di lereng perbukitan, desa ini
              menghasilkan beragam komoditas berkualitas yang dikelola langsung
              oleh kelompok tani setempat.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Melalui katalog ini, kami menghubungkan hasil panen petani desa
              dengan pembeli secara langsung — memastikan harga yang adil bagi
              petani dan produk segar bagi Anda.
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
