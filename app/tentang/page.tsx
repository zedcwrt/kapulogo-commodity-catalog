import Link from 'next/link'
import { History } from 'lucide-react'

export const metadata = {
  title: 'Tentang Desa Kapulogo',
  description: 'Pelajari lebih lanjut tentang Desa Kapulogo, sejarah, budaya, dan komunitas pertanian yang subur.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Section Header */}
      <div className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <h1 className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
            Tentang Desa Kapulogo
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Mengenal lebih dekat tentang desa kami yang subur, komunitas yang solid, dan komitmen terhadap pertanian berkelanjutan.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Hero Image */}
        <section className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/images/desa-landscape.png"
              alt="Pemandangan indah Desa Kapulogo dengan sawah hijau dan rumah-rumah tradisional"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
                Profil Desa
              </p>
              <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground">
                Kapulogo, Lumbung Hasil Bumi yang Subur
              </h2>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Desa Kapulogo merupakan sebuah desa yang kaya akan potensi pertanian dengan tanah yang sangat subur. Terletak di lereng perbukitan yang strategis, desa ini memiliki iklim tropis ideal yang mendukung pertumbuhan berbagai jenis komoditas berkualitas.
              </p>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Sejak dahulu, masyarakat Desa Kapulogo memiliki tradisi bertani yang kuat turun-temurun. Dengan pengetahuan dan keahlian yang telah diwariskan dari generasi ke generasi, para petani desa terus berinovasi dan mengembangkan praktik pertanian yang berkelanjutan dan ramah lingkungan.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Melalui platform Katalog Komoditas Kapulogo, kami berkomitmen untuk menghubungkan produk berkualitas dari petani lokal langsung kepada konsumen, memastikan transparansi harga, dan memberdayakan ekonomi desa.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8234567890123!2d109.8234567!3d-7.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656d1234567%3A0x1234567890abcdef!2sBalai%20Desa%20Kapulogo!5e0!3m2!1sid!2sid!4v1234567890123"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Community Image Section */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/petani-bekerja.png"
                alt="Petani Desa Kapulogo bekerja di sawah"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/images/panen-organik.png"
                alt="Panen organik hasil bumi Desa Kapulogo"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16 rounded-2xl border border-border bg-secondary/40 p-8 md:p-12">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <History className="size-6" />
            </div>
            <div>
              <h2 className="mb-3 font-heading text-2xl font-semibold text-foreground">
                Sejarah dan Perkembangan
              </h2>
              <p className="mb-3 text-muted-foreground">
                Desa Kapulogo memulai dengan komunitas petani kecil yang bertani untuk kebutuhan lokal. Seiring waktu, dengan dedikasi dan kerja keras, desa ini berkembang menjadi pusat produksi komoditas unggulan yang dikenal di berbagai wilayah.
              </p>
              <p className="mb-3 text-muted-foreground">
                Pada era modern ini, Desa Kapulogo terus berinovasi dengan mengadopsi teknologi dan praktik pertanian terkini. Pembentukan kelompok-kelompok tani yang terstruktur membantu meningkatkan produktivitas dan kualitas hasil panen secara konsisten.
              </p>
              <p className="text-muted-foreground">
                Visi Desa Kapulogo ke depan adalah menjadi pusat pertanian berkelanjutan yang mampu menyediakan produk berkualitas premium sambil menjaga kelestarian lingkungan dan meningkatkan kesejahteraan masyarakat lokal.
              </p>
            </div>
          </div>
        </section>

        {/* Nilai Desa */}
        <section className="mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
            Nilai Kami
          </p>
          <h2 className="mb-8 font-heading text-3xl font-semibold text-foreground">
            Komitmen Desa Kapulogo
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                Kualitas
              </h3>
              <p className="text-sm text-muted-foreground">
                Setiap produk dipilih dan dikurasi dengan standar kualitas tertinggi untuk kepuasan pelanggan.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                Keberlanjutan
              </h3>
              <p className="text-sm text-muted-foreground">
                Komitmen pada praktik pertanian organik dan ramah lingkungan untuk generasi mendatang.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                Transparansi
              </h3>
              <p className="text-sm text-muted-foreground">
                Rantai pasokan yang jelas dan harga yang adil untuk petani dan konsumen.
              </p>
            </div>
          </div>
        </section>

        {/* Community Image */}
        <section className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/images/komunitas-desa.png"
              alt="Komunitas Desa Kapulogo berkumpul dengan semangat gotong royong"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="mb-4 font-heading text-2xl font-semibold text-foreground">
            Jelajahi Produk Kami
          </h2>
          <p className="mb-6 text-muted-foreground">
            Temukan komoditas segar berkualitas tinggi langsung dari petani Desa Kapulogo.
          </p>
          <Link
            href="/#katalog"
            className="inline-flex rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Lihat Katalog
          </Link>
        </section>
      </div>
    </div>
  )
}
