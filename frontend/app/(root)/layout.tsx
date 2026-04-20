import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";

export default function RootGroupLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
