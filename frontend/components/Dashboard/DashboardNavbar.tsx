"use client";

import { Chewy } from "next/font/google";
import { SunMediumIcon, MoonIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Suspense, useState } from "react";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import ProfileDropDown from "./ProfileDropDownFile/ProfileDropDown";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MessageAndNotification from "./MessageAndNotification";
const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  display: "swap"
});

const navLinks = [
  { label: "Home", href: "/dashboard" },
  { label: "Following", href: "/following_posts" },
  { label: "Saved Snaps", href: "/saved_snaps" },
];
export default function DashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const router = useRouter();
  

  const profileDropdownItems = [
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    {
      label: "Logout",
      href: "",
      onClick: () =>
        signOut({ fetchOptions: { onSuccess: () => router.push("/login") } }),
    },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16  items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <h1 className={`font-bold text-3xl text-lime-500 ${chewy.className}`}>
            SarLarTal
          </h1>
        </Link>

        {/* Desktop nav — unchanged from original */}
        <ul className="hidden sm:flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-3">
            <MessageAndNotification/>
            <div className="">
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Toggle theme"
                suppressHydrationWarning
              >
                <SunMediumIcon className="size-5 dark:hidden" />
                <MoonIcon className="size-5 hidden dark:block" />
              </button>
            </div>
          </li>
          <li className="border-r h-4" aria-hidden="true" />
          <li>
            <div className="flex gap-2">
              <Suspense
                fallback={
                  <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
                }
              >
                <ProfileDropDown profileDropdownItems={profileDropdownItems} />
              </Suspense>
            </div>
          </li>
        </ul>

        {/* Mobile: dark mode button + hamburger */}
        <div className="flex sm:hidden items-center gap-1">
          <MessageAndNotification/>
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Toggle theme"
          >
            <SunMediumIcon className="size-5 dark:hidden" />
            <MoonIcon className="size-5 hidden dark:block" />
          </button>
          <p className="h-4 border-r" aria-hidden="true"></p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {/* Animated hamburger → X */}
            <div className="relative w-5 h-4">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-current origin-center transition-all duration-300 ease-in-out",
                  isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 h-0.5 w-full rounded-full bg-current -translate-y-1/2 transition-all duration-200 ease-in-out",
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full rounded-full bg-current origin-center transition-all duration-300 ease-in-out",
                  isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={cn(
          "sm:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-border/50 bg-background/95 px-4 pb-4 pt-2">
          {/* Nav links with stagger */}
          <nav className="flex flex-col gap-1 mb-3">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground",
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0",
                )}
                style={{ transitionDelay: isOpen ? `${i * 60 + 80}ms` : "0ms" }}
              >
                <span className="size-1.5 rounded-full bg-primary/60" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="flex items-center justify-center my-2">
            <div className="h-px w-full bg-border/60" aria-hidden="true" />
          </div>

          {/* Profile dropdown in mobile menu */}
          <div className="px-2 py-2">
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg  text-sm font-medium text-muted-foreground transition-all duration-300 ",
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0",
                    )}
                  >
                    <span className="size-1.5 rounded-full bg-primary/60" />
                    <span className="text-sm font-medium">Profile</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {profileDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-muted hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </header>
  );
}
