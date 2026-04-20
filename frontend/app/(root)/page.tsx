import Link from "next/link";
import {
  Camera,
  Heart,
  MessageCircle,
  Video,
  Users,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import GridBackdrop from "@/components/illustrations/GridBackdrop";

export const metadata = {
  title: "SarLarTal",
  description:
    "Learn the story behind SarLarTal: a fresh social app to share snap photos, react to friends, chat live, and start video calls — all built around real connection.",
  keywords: [
    "about SarLarTal",
    "snap photo app",
    "real-time chat",
    "video calling",
    "social network",
    "follow friends",
  ],
};
const features = [
  {
    icon: Camera,
    title: "Snap photos",
    desc: "Capture a single moment and share it. No endless feeds — just what matters now.",
  },
  {
    icon: Heart,
    title: "Reactions",
    desc: "Tap a reaction to tell friends exactly how their snap made you feel.",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    desc: "Real-time messaging with anyone you follow. Fast, smooth, friction-free.",
  },
  {
    icon: Video,
    title: "Video calling",
    desc: "Jump on a face-to-face call straight from chat. One tap, you're in.",
  },
  {
    icon: Users,
    title: "Followers",
    desc: "Build your circle. Follow the people you love and curate your feed.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy first",
    desc: "Your snaps and chats are yours. You control who sees what — always.",
  },
];

const steps = [
  {
    n: "01",
    title: "Create your account",
    desc: "Sign up in seconds with a username your friends will recognise.",
  },
  {
    n: "02",
    title: "Snap and share",
    desc: "Take a photo, post it as a snap, and watch the reactions roll in.",
  },
  {
    n: "03",
    title: "Chat or call",
    desc: "Open chat with anyone you follow or jump on a video call instantly.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <GridBackdrop />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">
              <span className="size-1.5 rounded-full bg-lime-500" />
              Snap · React · Chat · Call
            </span>

            <h1 className="font-heading mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              A quieter way to share{" "}
              <span className="text-lime-500">real</span> moments.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              SarLarTal is a focused social space for one snap at a time, honest
              reactions, live chat, and effortless video calls — all in one
              place.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/signup">
                <Button size="lg" className="h-11 px-5 text-sm font-semibold">
                  Get started
                  <ArrowUpRight className="size-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-11 px-5 text-sm font-semibold"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center lg:col-span-5">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-border/60 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">
              Features
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Six tools, designed to disappear.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Each feature is built around one idea — make sharing real moments
              effortless. No clutter, no noise, no infinite scroll.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative bg-background p-8 transition-colors hover:bg-muted/40"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-lime-500/10 text-lime-600 dark:text-lime-400">
                  <f.icon className="size-5" />
                </span>
                <h3 className="font-heading mt-6 text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="border-t border-border/60 bg-muted/30 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">
              How it works
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Three steps to your first snap.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-heading text-sm font-semibold tracking-widest text-lime-600 dark:text-lime-400">
                    {s.n}
                  </span>
                  <div className="h-px flex-1 bg-border/80" />
                </div>
                <h3 className="font-heading mt-6 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <span className="sr-only">Step {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to share your first snap?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Join SarLarTal and start connecting with friends in a way that feels
            real, fast, and quiet.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/signup">
              <Button size="lg" className="h-11 px-6 text-sm font-semibold">
                Create free account
                <ArrowUpRight className="size-4" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="ghost"
                className="h-11 px-6 text-sm font-semibold"
              >
                Log in
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
