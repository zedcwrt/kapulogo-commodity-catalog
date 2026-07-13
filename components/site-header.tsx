import { Leaf } from "lucide-react"

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Katalog", href: "#katalog" },
  { label: "Tentang", href: "/tentang" },
  { label: "KKN", href: "/kkn" },
  { label: "Kontak", href: "#kontak" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
        <a href="#beranda" className="flex items-center gap-2.5">
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
        </a>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>


      </div>
    </header>
  )
}
