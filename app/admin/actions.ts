"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { categories } from "@/lib/commodities"

type ActionResult = { error?: string; success?: boolean }

async function getAuthedClient() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { supabase: null }
  return { supabase }
}

function parseForm(formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const category = String(formData.get("category") || "").trim()
  const price = Number(formData.get("price"))
  const unit = String(formData.get("unit") || "").trim() || "kg"
  const image = String(formData.get("image") || "").trim() || "/placeholder.svg"
  const description = String(formData.get("description") || "").trim()
  const producer = String(formData.get("producer") || "").trim()
  const inStock = formData.get("inStock") === "on"
  const featured = formData.get("featured") === "on"

  if (!name) return { error: "Nama produk wajib diisi." as string }
  if (!categories.includes(category as (typeof categories)[number])) {
    return { error: "Kategori tidak valid." as string }
  }
  if (!Number.isFinite(price) || price < 0) {
    return { error: "Harga harus berupa angka yang valid." as string }
  }

  return {
    values: {
      name,
      category,
      price,
      unit,
      image,
      description,
      producer,
      in_stock: inStock,
      featured,
    },
  }
}

export async function createProduct(
  _prevState: unknown,
  formData: FormData,
): Promise<ActionResult> {
  const { supabase } = await getAuthedClient()
  if (!supabase) return { error: "Sesi tidak valid. Silakan masuk kembali." }

  const parsed = parseForm(formData)
  if (parsed.error) return { error: parsed.error }

  const { error } = await supabase.from("products").insert(parsed.values)
  if (error) {
    console.log("[v0] createProduct error:", error.message)
    return { error: "Gagal menambahkan produk." }
  }

  revalidatePath("/")
  revalidatePath("/admin")
  return { success: true }
}

export async function updateProduct(
  _prevState: unknown,
  formData: FormData,
): Promise<ActionResult> {
  const { supabase } = await getAuthedClient()
  if (!supabase) return { error: "Sesi tidak valid. Silakan masuk kembali." }

  const id = String(formData.get("id") || "")
  if (!id) return { error: "ID produk tidak ditemukan." }

  const parsed = parseForm(formData)
  if (parsed.error) return { error: parsed.error }

  const { error } = await supabase
    .from("products")
    .update(parsed.values)
    .eq("id", id)
  if (error) {
    console.log("[v0] updateProduct error:", error.message)
    return { error: "Gagal memperbarui produk." }
  }

  revalidatePath("/")
  revalidatePath("/admin")
  revalidatePath(`/product/${id}`)
  return { success: true }
}

export async function deleteProduct(id: string): Promise<ActionResult> {
  const { supabase } = await getAuthedClient()
  if (!supabase) return { error: "Sesi tidak valid. Silakan masuk kembali." }

  const { error } = await supabase.from("products").delete().eq("id", id)
  if (error) {
    console.log("[v0] deleteProduct error:", error.message)
    return { error: "Gagal menghapus produk." }
  }

  revalidatePath("/")
  revalidatePath("/admin")
  return { success: true }
}
