"use client"

import { Search } from "lucide-react"
import { useMemo, useState } from "react"
import { CommodityCard } from "@/components/commodity-card"
import { categories, commodities } from "@/lib/commodities"

const filters = ["Semua", ...categories] as const

export function Catalog() {
  const [active, setActive] = useState<(typeof filters)[number]>("Semua")
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return commodities.filter((item) => {
      const matchCategory = active === "Semua" || item.category === active
      const matchQuery =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.producer.toLowerCase().includes(q)
      return matchCategory && matchQuery
    })
  }, [active, query])

  return (
    <section id="katalog" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Katalog
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Komoditas Unggulan Desa
          </h2>
        </div>
        <div className="relative w-full md:w-72">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari komoditas..."
            aria-label="Cari komoditas"
            className="w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === filter
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {results.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <CommodityCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">
          Tidak ada komoditas yang cocok dengan pencarian Anda.
        </p>
      )}
    </section>
  )
}
