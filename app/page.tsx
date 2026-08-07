import { About } from "@/components/about"
import { Catalog } from "@/components/catalog"
import { Hero } from "@/components/hero"
import { getProducts } from "@/lib/products"

export default async function Page() {
  const commodities = await getProducts()

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Catalog commodities={commodities} />
        <About />
      </main>
    </div>
  )
}
