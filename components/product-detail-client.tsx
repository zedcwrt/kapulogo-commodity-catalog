'use client'

import Link from 'next/link'
import { ArrowLeft, Star, Truck, Shield, RotateCcw } from 'lucide-react'
import { type Commodity, formatRupiah } from '@/lib/commodities'

interface ProductDetailClientProps {
  product: Commodity
  relatedProducts: Commodity[]
}

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  return (
    <>
      {/* Back Button */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-primary hover:opacity-80"
      >
        <ArrowLeft className="size-4" />
        Kembali ke Katalog
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-border bg-secondary">
            <img
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {product.category}
            </div>

            <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="size-5 fill-accent text-accent" />
                <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground">(berdasarkan 48 ulasan)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-6 border-b border-t border-border py-6">
              <div className="mb-2 text-sm text-muted-foreground">Harga per {product.unit}</div>
              <div className="font-heading text-4xl font-bold text-foreground">
                {formatRupiah(product.price)}
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Deskripsi Produk
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{product.description}</p>
            </div>

            {/* Producer */}
            <div className="mt-6 rounded-lg bg-secondary p-4">
              <div className="text-sm text-muted-foreground">Diproduksi oleh</div>
              <div className="mt-1 font-heading text-lg font-semibold text-foreground">
                {product.producer}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Truck className="mt-1 size-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Pengiriman Cepat</div>
                  <div className="text-sm text-muted-foreground">3-5 hari kerja</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="mt-1 size-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Produk Asli</div>
                  <div className="text-sm text-muted-foreground">Langsung dari produsen</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="mt-1 size-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Garansi Uang Kembali</div>
                  <div className="text-sm text-muted-foreground">Jika tidak puas</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 space-y-4">
            {/* Contact Button */}
            <button
              type="button"
              disabled={!product.inStock}
              className="w-full rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/5 disabled:cursor-not-allowed disabled:border-muted-foreground disabled:text-muted-foreground"
            >
              💬 Hubungi Penjual
            </button>

            {/* Stock Status */}
            {!product.inStock && (
              <div className="rounded-lg bg-accent/10 p-3 text-center text-sm font-medium text-accent">
                Produk sedang habis. Notifikasi ketersediaan akan dikirim ke Anda.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            Produk Sejenis Lainnya
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="line-clamp-2 font-heading text-sm font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">{item.producer}</p>
                  <div className="mt-3 flex items-end justify-between border-t border-border pt-3">
                    <span className="font-heading text-sm font-semibold text-foreground">
                      {formatRupiah(item.price)}
                    </span>
                    <Star className="size-3.5 fill-accent text-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
