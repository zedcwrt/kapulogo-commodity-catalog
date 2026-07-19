'use client'

import { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleNavClick = (href: string, hash?: string) => {
    setMobileMenuOpen(false)
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

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isHydrated && mobileMenuOpen && (
        <nav className="md:hidden absolute left-0 right-0 top-full z-40 border-t border-border/60 bg-background shadow-lg">
          <ul className="mx-auto max-w-6xl flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => handleNavClick(link.href, link.hash)}
                  className="block px-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary hover:bg-secondary/50 rounded-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
