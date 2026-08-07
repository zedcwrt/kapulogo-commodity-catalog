import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { getProducts } from "@/lib/products"
import { logout } from "@/app/auth/actions"
import { ProductManager } from "@/components/admin/product-manager"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const products = await getProducts()

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Dashboard Admin
          </p>
          <h1 className="mt-2 font-heading text-3xl font-semibold text-foreground">
            Kelola Komoditas
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Masuk sebagai {user.email}
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Keluar
          </button>
        </form>
      </div>

      <ProductManager products={products} />
    </main>
  )
}
