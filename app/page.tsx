import { About } from "@/components/about"
import { Catalog } from "@/components/catalog"
import { Hero } from "@/components/hero"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Catalog />
        <About />
      </main>
      <SiteFooter />
    </div>
  )
}
