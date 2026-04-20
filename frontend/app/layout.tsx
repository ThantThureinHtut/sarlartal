import "./globals.css";
import { Roboto, Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from 'next';

const notoSansHeading = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'SarLarTal',
  description: 'This is the chat application which have live chatting and video calling features.And then also have a feature of sharing yours snapshots.',
  keywords: ['chat', 'video call', 'snapshot sharing', 'real-time communication', 'messaging app', 'social networking'],
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", roboto.variable, notoSansHeading.variable)}
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
