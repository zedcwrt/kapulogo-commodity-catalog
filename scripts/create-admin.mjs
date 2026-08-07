import { createClient } from "@supabase/supabase-js"

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const ADMIN_EMAIL = "admin@kapulogo.id"
const ADMIN_PASSWORD = "KapulogoAdmin2026"

const supabase = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
})

const { data: list } = await supabase.auth.admin.listUsers()
const existing = list?.users?.find((u) => u.email === ADMIN_EMAIL)

if (existing) {
  await supabase.auth.admin.updateUserById(existing.id, {
    password: ADMIN_PASSWORD,
    email_confirm: true,
    user_metadata: { is_admin: true },
  })
  console.log("[v0] Admin user updated:", ADMIN_EMAIL)
} else {
  const { data, error } = await supabase.auth.admin.createUser({
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    email_confirm: true,
    user_metadata: { is_admin: true },
  })
  if (error) {
    console.log("[v0] Error creating admin:", error.message)
    process.exit(1)
  }
  console.log("[v0] Admin user created:", data.user.email)
}
