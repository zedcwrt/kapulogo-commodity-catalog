import Link from "next/link"
import { ArrowLeft, Leaf } from "lucide-react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { LoginForm } from "@/components/login-form"

export default async function LoginPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/admin")
  }

  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Kembali ke Katalog
        </Link>

        <div className="rounded-2xl border border-border bg-card p-8">
          <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <h1 className="mt-5 font-heading text-2xl font-semibold text-foreground">
            Masuk Admin
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Hanya administrator yang dapat mengelola katalog komoditas.
          </p>

          <LoginForm />
        </div>
      </div>
    </main>
  )
}
