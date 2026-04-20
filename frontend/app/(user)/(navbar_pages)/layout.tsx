import DashboardNavbar from "@/components/Dashboard/DashboardNavbar";

export default function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
      <DashboardNavbar />
      <main>{children}</main>
    </div>
  )
}
