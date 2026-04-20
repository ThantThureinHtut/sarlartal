import Link from "next/link";
import {
  Camera,
  Heart,
  MessageCircle,
  Video,
  Users,
  ShieldCheck,
  Sparkles,
  Globe,
  Lightbulb,
  HandHeart,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutIllustration from "@/components/illustrations/AboutIllustration";
import GridBackdrop from "@/components/illustrations/GridBackdrop";


export const metadata = {
  title: "About SarLarTal — Share moments, real-time chat & video calls",
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

const values = [
  {
    icon: HandHeart,
    title: "Real over polished",
    desc: "We celebrate honest, in-the-moment snaps over perfectly curated feeds.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy you control",
    desc: "Your snaps, chats, and calls stay yours. You decide who sees what.",
  },
  {
    icon: Sparkles,
    title: "Joyful to use",
    desc: "Every interaction is designed to feel light, calm, and a little delightful.",
  },
  {
    icon: Globe,
    title: "Built for everyone",
    desc: "Friends, family, communities — designed for people you actually want to talk to.",
  },
];

const offerings = [
  {
    icon: Camera,
    title: "Snap photo posts",
    desc: "Share a single snap photo. No videos, no clutter — one moment, beautifully framed.",
  },
  {
    icon: Heart,
    title: "Reaction buttons",
    desc: "Express how a snap made you feel — faster than typing, more honest than a like.",
  },
  {
    icon: MessageCircle,
    title: "Live chat box",
    desc: "Open a chat with anyone you follow and message in real-time, instantly.",
  },
  {
    icon: Video,
    title: "Video calling",
    desc: "Hop on a face-to-face video call right from chat — no external apps.",
  },
  {
    icon: Users,
    title: "Follow & followers",
    desc: "Build the circle that matters. Curate a feed full of people you actually love.",
  },
  {
    icon: Lightbulb,
    title: "Thoughtful design",
    desc: "A clean, modern interface and a calm palette that's easy on the eyes day or night.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <GridBackdrop />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="flex flex-col justify-center lg:col-span-7">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">
              <span className="size-1.5 rounded-full bg-lime-500" />
              Our story
            </span>

            <h1 className="font-heading mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Building a quieter <span className="text-lime-500">social</span>{" "}
              space.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              SarLarTal sits somewhere between a snap app and a messenger.
              We&apos;re bringing back the feeling of sharing a single, real
              moment with the people you care about — and then talking about it
              together.
            </p>
          </div>

          <div className="flex items-center justify-center lg:col-span-5">
            <AboutIllustration />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">
              Our mission
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Make real connection feel easy again.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-8 lg:text-lg">
            <p>
              Social apps got loud. Feeds got long. Conversations got lost in
              the noise. SarLarTal exists to flip that around — to put the
              people you care about, and the moments you share with them, back
              at the centre of the experience.
            </p>
            <p>
              We&apos;re building a small, focused product: snap a photo, drop
              a reaction, slide into a chat, or jump on a video call.
              That&apos;s it. No ads cluttering your feed. No infinite scroll
              designed to steal your time. Just real moments shared with real
              people.
            </p>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="border-t border-border/60 bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">
              What we offer
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Six things, done well.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every feature in SarLarTal exists because it makes connection
              easier — never to fill space.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="group relative bg-background p-8 transition-colors hover:bg-muted/40"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-lime-500/10 text-lime-600 dark:text-lime-400">
                  <o.icon className="size-5" />
                </span>
                <h3 className="font-heading mt-6 text-lg font-semibold">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-lime-600 dark:text-lime-400">
              What we believe
            </span>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Principles behind SarLarTal.
            </h2>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-lime-500/10 text-lime-600 dark:text-lime-400">
                  <v.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border/60 bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-3">
            <div>
              <p className="font-heading text-5xl font-bold tracking-tight text-lime-500 sm:text-6xl">
                1
              </p>
              <p className="mt-4 max-w-56 text-sm leading-relaxed text-muted-foreground">
                Snap photo per moment — quality over quantity.
              </p>
            </div>
            <div>
              <p className="font-heading text-5xl font-bold tracking-tight text-lime-500 sm:text-6xl">
                ∞
              </p>
              <p className="mt-4 max-w-56 text-sm leading-relaxed text-muted-foreground">
                Reactions, chats, and video calls — unlimited.
              </p>
            </div>
            <div>
              <p className="font-heading text-5xl font-bold tracking-tight text-lime-500 sm:text-6xl">
                0
              </p>
              <p className="mt-4 max-w-56 text-sm leading-relaxed text-muted-foreground">
                Ads in your feed — ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Be part of the story.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Join SarLarTal and help shape a friendlier corner of the internet —
            one snap, one chat, one video call at a time.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/signup">
              <Button size="lg" className="h-11 px-6 text-sm font-semibold">
                Join SarLarTal
                <ArrowUpRight className="size-4" />
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="ghost"
                className="h-11 px-6 text-sm font-semibold"
              >
                Back to home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
