export default function MessengerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative left-1/2 -ml-[50vw] -my-6 h-[calc(100dvh-4rem)] w-screen overflow-hidden">
      {children}
    </div>
  );
}
