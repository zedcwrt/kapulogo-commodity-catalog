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
              src="/images/IMG_20260804_013418.png"
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
                Desa Kapulogo bukanlah sekadar wilayah biasa di tapal batas Wonosobo. Terletak strategis di lereng perbukitan dengan iklim yang ideal, tanah subur yang membentang di tiga dusun utamanya—Kulon, Tengah, dan Wetan—menjadi lumbung bagi pertumbuhan berbagai komoditas pertanian berkualitas tinggi. Keunikan letaknya yang berbatasan langsung dengan kabupaten lain membuat budaya dan dialek masyarakatnya membaur harmonis dengan wilayah Magelang dan Purworejo.
              </p>
              <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
                Sesuai dengan namanya yang berakar dari jejak sejarah rempah kapulaga, tradisi bertani di desa ini telah diwariskan kuat turun-temurun. Namun, masyarakat Kapulogo tidak hanya diam mengandalkan warisan masa lalu. Melalui motor penggerak BUMDes Bejo Lestari, para petani terus berinovasi mengelola alam secara berkelanjutan dan ramah lingkungan. Dari sinilah lahir komoditas-komoditas unggulan otentik, seperti budidaya Jahe Merah, kopi lokal pilihan, hingga dedikasi para perajin gula merah.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Melalui platform Katalog Komoditas Kapulogo, kami memiliki satu komitmen tegas: memangkas rantai tengkulak yang merugikan. Kami menghubungkan hasil keringat dan produk berkualitas dari petani lokal secara langsung kepada Anda sebagai konsumen. Dengan langkah ini, transparansi harga terjaga, konsumen mendapatkan produk segar, dan yang terpenting, roda ekonomi masyarakat desa menjadi jauh lebih berdaya.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31645.020575554856!2d109.99158687649684!3d-7.506301470095431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a97131c2c76b1%3A0x5027a76e3557940!2sKapulogo%2C%20Kepil%2C%20Wonosobo%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1785778404386!5m2!1sen!2sid"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[350px] w-full rounded-lg"
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
                src="/images/pkk.jpeg"
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
                Sejarah Desa Kapulogo tidak bisa dilepaskan dari jejak masa lalunya yang erat dengan kekayaan rempah Nusantara. Sesuai dengan namanya yang diyakini berakar dari komoditas kapulaga, desa ini bermula dari komunitas agraris sederhana yang mendiami tiga dusun utama—Kulon, Tengah, dan Wetan. Melalui dedikasi yang diwariskan turun-temurun, masyarakat perlahan membangun pondasi ekonomi yang kuat dari hasil bumi perbukitan Wonosobo.
              </p>
              <p className="mb-3 text-muted-foreground">
                Seiring berjalannya waktu, Kapulogo terus beradaptasi tanpa meninggalkan akar tradisinya. Era baru pertanian di desa ini ditandai dengan hadirnya BUMDes Bejo Lestari dan pembentukan kelompok-kelompok tani yang lebih terstruktur. Melalui wadah ini, warga mulai berinovasi dan melebarkan sayap ke komoditas bernilai tinggi, seperti budidaya Jahe Merah, pengolahan kopi lokal, hingga mempertahankan eksistensi perajin gula merah.
              </p>
              <p className="text-muted-foreground">
                Visi Desa Kapulogo ke depan adalah bertransformasi menjadi pusat pertanian berkelanjutan di wilayah perbatasan. Dengan menjaga keseimbangan alam dan memanfaatkan teknologi digital seperti katalog ini, Kapulogo optimis mampu mendistribusikan produk premium secara luas, sekaligus mendongkrak kesejahteraan ekonomi warganya secara mandiri.
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
              src="/images/rame-rame.jpeg"
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
