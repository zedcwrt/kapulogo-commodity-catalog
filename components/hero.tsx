'use client'

import { MapPin, Sprout, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    image: "/images/hero-desa.png",
    alt: "Pemandangan persawahan dan perbukitan hijau Desa Kapulogo saat matahari terbenam",
  },
  {
    image: "/images/hero-desa-2.png",
    alt: "Sawah hijau dengan petani bekerja di Desa Kapulogo saat sore hari",
  },
  {
    image: "/images/hero-desa-3.png",
    alt: "Pasar lokal Desa Kapulogo dengan penjual hasil bumi segar",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  return (
    <section id="beranda" className="mx-auto max-w-6xl px-4 pt-10 md:px-6 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            Desa Kapulogo, Kecamatan Kepil, Kabupaten Wonosobo
          </span>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Hasil Bumi Terbaik, Langsung dari Petani Desa
          </h1>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Jelajahi katalog komoditas unggulan Desa Kapulogo — mulai dari beras
            organik, kopi, kapulaga, madu hutan, hingga kerajinan bambu. Segar,
            berkualitas, dan berkelanjutan.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#katalog"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Lihat Katalog
            </a>
            <a
              href="#tentang"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Tentang Desa
            </a>
          </div>

          <dl className="mt-10 flex gap-8">
            <div>
              <dt className="text-sm text-muted-foreground">Komoditas</dt>
              <dd className="font-heading text-2xl font-semibold text-foreground">
                9+
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Kelompok Tani</dt>
              <dd className="font-heading text-2xl font-semibold text-foreground">
                8
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Tanpa Pestisida</dt>
              <dd className="font-heading text-2xl font-semibold text-foreground">
                100%
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].alt}
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Slide berikutnya"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm md:left-6">
            <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sprout className="size-5" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-foreground">
                Panen Segar
              </p>
              <p className="text-xs text-muted-foreground">Setiap hari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
