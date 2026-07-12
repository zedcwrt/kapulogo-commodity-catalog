import Link from 'next/link'
import { ArrowLeft, Users, Code, Lightbulb, Award } from 'lucide-react'

export const metadata = {
  title: 'Tim KKN - Katalog Komoditas Desa Kapulogo',
  description: 'Kenali tim Kuliah Kerja Nyata yang membangun platform katalog komoditas Desa Kapulogo.',
}

const teamMembers = [
  {
    name: 'Zainal Abidin',
    role: 'Project Lead & Full Stack Developer',
    bio: 'Memimpin pengembangan platform dan koordinasi tim dengan dedikasi penuh.',
    image: '/images/team-member-1.png',
  },
  {
    name: 'Muhammad Rizki',
    role: 'Frontend Engineer',
    bio: 'Mengembangkan antarmuka pengguna yang responsif dan user-friendly.',
    image: '/images/team-member-2.png',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'UI/UX Designer',
    bio: 'Merancang visual yang menarik dan intuitif untuk pengalaman terbaik.',
    image: '/images/team-member-3.png',
  },
  {
    name: 'Ahmad Hidayat',
    role: 'Backend Engineer',
    bio: 'Membangun server dan database yang aman dan efisien.',
    image: '/images/team-member-4.png',
  },
  {
    name: 'Eka Putri',
    role: 'Data Analyst',
    bio: 'Menganalisis data untuk memberikan insight bisnis yang berguna.',
    image: '/images/team-member-5.png',
  },
  {
    name: 'Bambang Suryanto',
    role: 'DevOps Engineer',
    bio: 'Mengelola infrastruktur dan deployment aplikasi dengan lancar.',
    image: '/images/team-member-6.png',
  },
  {
    name: 'Rini Susanti',
    role: 'QA & Testing',
    bio: 'Memastikan kualitas aplikasi melalui testing yang komprehensif.',
    image: '/images/team-member-7.png',
  },
  {
    name: 'Fajar Pratama',
    role: 'Community Manager',
    bio: 'Menjalin hubungan dengan komunitas lokal dan stakeholder desa.',
    image: '/images/team-member-8.png',
  },
  {
    name: 'Lina Wijaya',
    role: 'Content Creator',
    bio: 'Membuat konten dan dokumentasi untuk pengalaman pengguna yang lebih baik.',
    image: '/images/team-member-9.png',
  },
  {
    name: 'Doni Setiawan',
    role: 'Project Coordinator',
    bio: 'Mengkoordinasikan tim dan memastikan semua pekerjaan berjalan sesuai rencana.',
    image: '/images/team-member-10.png',
  },
]

const achievements = [
  {
    icon: Code,
    title: 'Platform Katalog Modern',
    description: 'Membangun website katalog komoditas dengan teknologi terkini dan desain responsif.',
  },
  {
    icon: Users,
    title: 'Pemberdayaan UMKM',
    description: 'Membantu usaha mikro kecil menengah lokal untuk menjangkau pasar yang lebih luas.',
  },
  {
    icon: Lightbulb,
    title: 'Inovasi Lokal',
    description: 'Menghadirkan solusi digital untuk permasalahan ekonomi di tingkat desa.',
  },
  {
    icon: Award,
    title: 'Dampak Berkelanjutan',
    description: 'Menciptakan ekosistem digital yang mendukung pertumbuhan ekonomi jangka panjang.',
  },
]

export default function KKNPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80"
          >
            <ArrowLeft className="size-4" />
            Kembali ke Beranda
          </Link>
          <div className="flex items-start gap-6">
            <div className="hidden flex-shrink-0 sm:block">
              <img
                src="/images/kkn-logo.png"
                alt="Logo Tim KKN Kapulogo"
                className="size-24 rounded-lg object-cover"
              />
            </div>
            <div>
              <h1 className="font-heading text-4xl font-semibold text-foreground sm:text-5xl">
                Tim KKN Kapulogo
              </h1>
              <p className="mt-3 max-w-2xl text-base text-muted-foreground">
                Mahasiswa Kuliah Kerja Nyata yang berkomitmen untuk memberdayakan Desa Kapulogo melalui solusi digital dan inovasi teknologi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        {/* Team Photo Section */}
        <section className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/images/kkn-team-photo.png"
              alt="Foto tim KKN Kapulogo berkumpul"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Misi Kami
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Kami adalah sekelompok mahasiswa yang tergabung dalam program Kuliah Kerja Nyata (KKN). Melalui dedikasi dan kerja keras, kami membangun platform katalog komoditas digital untuk Desa Kapulogo. Tujuan kami adalah memberdayakan petani dan pengrajin lokal dengan memberikan akses ke pasar yang lebih luas melalui teknologi digital yang mudah digunakan dan terjangkau.
            </p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="mb-8 font-heading text-2xl font-semibold text-foreground md:text-3xl">
            Pencapaian Kami
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="mb-8 font-heading text-2xl font-semibold text-foreground md:text-3xl">
            Anggota Tim
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12">
            <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Nilai-Nilai Kami
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Inovasi
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Menciptakan solusi-solusi kreatif dan berkelanjutan untuk tantangan lokal.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Keberlanjutan
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Membangun dampak jangka panjang yang menguntungkan masyarakat dan lingkungan.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Kolaborasi
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Bekerja sama dengan masyarakat lokal untuk mencapai tujuan bersama.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
            Dukung Desa Kapulogo
          </h2>
          <p className="mt-3 text-muted-foreground">
            Dengan menggunakan platform katalog kami, Anda turut mendukung pertumbuhan ekonomi Desa Kapulogo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Lihat Katalog Komoditas
            </Link>
            <a
              href="/#kontak"
              className="rounded-full border-2 border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary/5"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
