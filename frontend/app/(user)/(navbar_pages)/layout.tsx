import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

export default function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />
      <main className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6">{children}</main>
    </div>
  )
}
