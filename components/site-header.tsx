'use client'

import { Leaf } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Beranda", href: "/", hash: undefined },
  { label: "Katalog", href: "/", hash: "katalog" },
  { label: "Tentang", href: "/tentang", hash: undefined },
  { label: "KKN", href: "/kkn", hash: undefined },
  { label: "Kontak", href: "/", hash: "kontak" },
]

export function SiteHeader() {
  const pathname = usePathname()

  const handleNavClick = (href: string, hash?: string) => {
    if (href === "/" && hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 0)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold text-foreground">
              Kapulogo
            </span>
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Katalog Komoditas
            </span>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.hash)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


      </div>
    </header>
  )
}
