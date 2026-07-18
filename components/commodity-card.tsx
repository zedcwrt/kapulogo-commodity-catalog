import Link from "next/link"
import { type Commodity, formatRupiah } from "@/lib/commodities"

export function CommodityCard({ item }: { item: Commodity }) {
  return (
    <Link href={`/product/${item.id}`}>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
          {item.category}
        </span>
        {!item.inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-background">
            Stok Habis
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
          {item.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <p className="mt-3 text-xs text-muted-foreground">
          Produsen: <span className="text-foreground">{item.producer}</span>
        </p>

        <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
          <div>
            <span className="font-heading text-xl font-semibold text-foreground">
              {formatRupiah(item.price)}
            </span>
            <span className="text-sm text-muted-foreground"> / {item.unit}</span>
          </div>
          <button
            type="button"
            disabled={!item.inStock}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {item.inStock ? "Pesan" : "Habis"}
          </button>
        </div>
      </div>
    </article>
    </Link>
  )
}
