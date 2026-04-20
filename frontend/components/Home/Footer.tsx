import Link from "next/link";
import { Chewy } from "next/font/google";
import { Mail } from "lucide-react";
import { Suspense } from "react";
import { connection } from "next/server";

async function CurrentYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.171A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.74 5.49.74 11.76c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.13.68-3.79-1.34-3.79-1.34-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.99 0 0 .95-.3 3.1 1.15.9-.25 1.86-.37 2.82-.38.96.01 1.92.13 2.82.38 2.15-1.45 3.1-1.15 3.1-1.15.61 1.56.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.34-2.64 5.28-5.15 5.56.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.06 0 .3.2.65.78.54 4.47-1.49 7.69-5.7 7.69-10.67C23.26 5.49 18.27.5 12 .5z" />
    </svg>
  );
}

const chewy = Chewy({ weight: "400", subsets: ["latin"] });

const sections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Followers", href: "/#features" },
      { label: "Snap feed", href: "/#features" },
      { label: "Reactions", href: "/#features" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <h1
                className={`text-3xl font-bold text-lime-500 ${chewy.className}`}
              >
                SarLarTal
              </h1>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Share your moments. Snap a photo, react to friends, chat in
              real-time, and hop on a video call — all in one place.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="grid size-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-lime-500/60 hover:text-lime-500"
              >
                <TwitterIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-lime-500/60 hover:text-lime-500"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="grid size-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-lime-500/60 hover:text-lime-500"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href="mailto:hello@sarlartal.app"
                aria-label="Email"
                className="grid size-9 place-items-center rounded-full border border-border/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-lime-500/60 hover:text-lime-500"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-foreground">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition hover:text-lime-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            ©{" "}
            <Suspense fallback={null}>
              <CurrentYear />
            </Suspense>{" "}
            SarLarTal. All rights reserved.
          </p>

          <p>Built with care for sharing real moments.</p>
        </div>
      </div>
    </footer>
  );
}
