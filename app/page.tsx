import { About } from "@/components/about"
import { Catalog } from "@/components/catalog"
import { Hero } from "@/components/hero"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Catalog />
        <About />
      </main>
    </div>
  )
}
