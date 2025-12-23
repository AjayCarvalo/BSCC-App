// src/app/admin/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminDashboard from "@/app/admin/AdminDashboard";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  const userName = session?.user?.name ?? "Admin";
  const role = (session?.user as any)?.role ?? "ADMIN";

  return <AdminDashboard userName={userName} role={role} />;
}
