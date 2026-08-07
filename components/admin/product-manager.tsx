"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Pencil, Plus, Trash2, X } from "lucide-react"
import { type Commodity, formatRupiah } from "@/lib/commodities"
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/app/admin/actions"
import { ProductForm } from "@/components/admin/product-form"

export function ProductManager({ products }: { products: Commodity[] }) {
  const router = useRouter()
  const [editing, setEditing] = useState<Commodity | null>(null)
  const [creating, setCreating] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [pendingDelete, setPendingDelete] = useState(false)

  const closeForm = () => {
    setEditing(null)
    setCreating(false)
    router.refresh()
  }

  const handleDelete = async (id: string) => {
    setPendingDelete(true)
    await deleteProduct(id)
    setPendingDelete(false)
    setDeletingId(null)
    router.refresh()
  }

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {products.length} produk dalam katalog
        </p>
        <button
          type="button"
          onClick={() => setCreating(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Plus className="size-4" />
          Tambah Produk
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-border bg-secondary/40 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Produk</th>
              <th className="px-4 py-3 font-medium">Kategori</th>
              <th className="px-4 py-3 font-medium">Harga</th>
              <th className="px-4 py-3 font-medium">Stok</th>
              <th className="px-4 py-3 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-10 text-center text-muted-foreground"
                >
                  Belum ada produk. Klik &quot;Tambah Produk&quot; untuk memulai.
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-border last:border-0 hover:bg-secondary/20"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image || "/placeholder.svg"}
                        alt={p.name}
                        className="size-10 shrink-0 rounded-md object-cover"
                      />
                      <div>
                        <div className="font-medium text-foreground">
                          {p.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {p.producer}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {p.category}
                  </td>
                  <td className="px-4 py-3 text-foreground">
                    {formatRupiah(p.price)}
                    <span className="text-muted-foreground"> / {p.unit}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${
                        p.inStock
                          ? "bg-primary/10 text-primary"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {p.inStock ? "Tersedia" : "Habis"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setEditing(p)}
                        aria-label={`Edit ${p.name}`}
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        <Pencil className="size-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeletingId(p.id)}
                        aria-label={`Hapus ${p.name}`}
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {(creating || editing) && (
        <FormModal
          title={creating ? "Tambah Produk" : "Edit Produk"}
          onClose={closeForm}
        >
          <ProductForm
            action={creating ? createProduct : updateProduct}
            product={editing ?? undefined}
            onSuccess={closeForm}
          />
        </FormModal>
      )}

      {deletingId && (
        <FormModal title="Hapus Produk" onClose={() => setDeletingId(null)}>
          <p className="text-sm text-muted-foreground">
            Yakin ingin menghapus produk ini? Tindakan ini tidak dapat
            dibatalkan.
          </p>
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setDeletingId(null)}
              className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Batal
            </button>
            <button
              type="button"
              disabled={pendingDelete}
              onClick={() => handleDelete(deletingId)}
              className="rounded-lg bg-destructive px-4 py-2 text-sm font-semibold text-destructive-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {pendingDelete ? "Menghapus..." : "Hapus"}
            </button>
          </div>
        </FormModal>
      )}
    </div>
  )
}

function FormModal({
  title,
  children,
  onClose,
}: {
  title: string
  children: React.ReactNode
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-background p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-secondary"
        >
          <X className="size-5" />
        </button>
        <h2 className="font-heading text-xl font-semibold text-foreground">
          {title}
        </h2>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  )
}
