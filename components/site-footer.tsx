import { Leaf, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="kontak" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15">
                <Leaf className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-semibold">
                Desa Kapulogo
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
              Katalog komoditas resmi Desa Kapulogo. Menghubungkan hasil bumi
              petani lokal langsung kepada Anda.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold">Hubungi Kami</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Balai Desa Kapulogo<br />
                  Dusun Kapulogo Tengah<br />
                  Desa Kapulogo<br />
                  Kecamatan Kepil<br />
                  Kabupaten Wonosobo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                +62 812 0000 0000
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                halo@kapulogo.desa.id
              </li>
            </ul>
          </div>


        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          &copy; {new Date().getFullYear()} Desa Kapulogo. Seluruh hak cipta
          dilindungi.
        </div>
      </div>
    </footer>
  )
}
