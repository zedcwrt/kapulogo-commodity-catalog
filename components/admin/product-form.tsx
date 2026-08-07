"use client"

import { useActionState, useEffect } from "react"
import { useFormStatus } from "react-dom"
import { categories, type Commodity } from "@/lib/commodities"

type ActionState = { error?: string; success?: boolean } | null
type FormAction = (
  prevState: unknown,
  formData: FormData,
) => Promise<{ error?: string; success?: boolean }>

const inputClass =
  "rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"

function SubmitButton({ isEdit }: { isEdit: boolean }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {pending ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Tambah Produk"}
    </button>
  )
}

export function ProductForm({
  action,
  product,
  onSuccess,
}: {
  action: FormAction
  product?: Commodity
  onSuccess: () => void
}) {
  const [state, formAction] = useActionState<ActionState, FormData>(
    action,
    null,
  )

  useEffect(() => {
    if (state?.success) onSuccess()
  }, [state, onSuccess])

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {product && <input type="hidden" name="id" value={product.id} />}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Nama Produk
        </label>
        <input
          id="name"
          name="name"
          required
          defaultValue={product?.name}
          placeholder="Beras Organik Kapulogo"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="category"
            className="text-sm font-medium text-foreground"
          >
            Kategori
          </label>
          <select
            id="category"
            name="category"
            required
            defaultValue={product?.category ?? categories[0]}
            className={inputClass}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="producer" className="text-sm font-medium text-foreground">
            Produsen
          </label>
          <input
            id="producer"
            name="producer"
            defaultValue={product?.producer}
            placeholder="Kelompok Tani Sri Rejeki"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="price" className="text-sm font-medium text-foreground">
            Harga (Rp)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="500"
            required
            defaultValue={product?.price}
            placeholder="16000"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="unit" className="text-sm font-medium text-foreground">
            Satuan
          </label>
          <input
            id="unit"
            name="unit"
            defaultValue={product?.unit ?? "kg"}
            placeholder="kg"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="image" className="text-sm font-medium text-foreground">
          URL Gambar
        </label>
        <input
          id="image"
          name="image"
          defaultValue={product?.image}
          placeholder="/images/beras-organik.png"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="description"
          className="text-sm font-medium text-foreground"
        >
          Deskripsi
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={product?.description}
          placeholder="Deskripsi singkat produk..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            name="inStock"
            defaultChecked={product ? product.inStock : true}
            className="size-4 rounded border-border accent-[var(--color-primary)]"
          />
          Tersedia (stok ada)
        </label>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={product?.featured ?? false}
            className="size-4 rounded border-border accent-[var(--color-primary)]"
          />
          Unggulan
        </label>
      </div>

      {state?.error && (
        <p
          role="alert"
          className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {state.error}
        </p>
      )}

      <div className="mt-2 flex justify-end">
        <SubmitButton isEdit={Boolean(product)} />
      </div>
    </form>
  )
}
