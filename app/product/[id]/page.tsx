import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getProduct, getProducts } from '@/lib/products'
import { ProductDetailClient } from '@/components/product-detail-client'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-primary hover:opacity-80"
          >
            <ArrowLeft className="size-4" />
            Kembali ke Katalog
          </Link>
          <div className="text-center">
            <h1 className="font-heading text-2xl font-semibold text-foreground">
              Produk tidak ditemukan
            </h1>
          </div>
        </div>
      </div>
    )
  }

  const all = await getProducts()
  const relatedProducts = all.filter(
    (c) => c.category === product.category && c.id !== product.id
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      </div>
    </div>
  )
}
