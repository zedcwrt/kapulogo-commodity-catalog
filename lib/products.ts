import { createClient } from "@/lib/supabase/server"
import type { Category, Commodity } from "@/lib/commodities"

type ProductRow = {
  id: string
  name: string
  category: string
  price: number | string
  unit: string
  image: string
  description: string
  producer: string
  in_stock: boolean
  featured: boolean
}

function rowToCommodity(row: ProductRow): Commodity {
  return {
    id: row.id,
    name: row.name,
    category: row.category as Category,
    price: Number(row.price),
    unit: row.unit,
    image: row.image,
    description: row.description,
    producer: row.producer,
    inStock: row.in_stock,
    featured: row.featured,
  }
}

export async function getProducts(): Promise<Commodity[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("category", { ascending: true })
    .order("created_at", { ascending: true })

  if (error) {
    console.log("[v0] getProducts error:", error.message)
    return []
  }

  return (data as ProductRow[]).map(rowToCommodity)
}

export async function getProduct(id: string): Promise<Commodity | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .maybeSingle()

  if (error) {
    console.log("[v0] getProduct error:", error.message)
    return null
  }
  if (!data) return null

  return rowToCommodity(data as ProductRow)
}
