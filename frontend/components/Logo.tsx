import { Baloo_2 } from "next/font/google";
import { cn } from "@/lib/utils";

const baloo = Baloo_2({
  weight: ["700", "800"],
  subsets: ["latin"],
  display: "swap",
});

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="10.5" y="2.5" width="3" height="9" rx="1.5" />
      <rect x="10.5" y="2.5" width="3" height="9" rx="1.5" transform="rotate(120 12 12)" opacity="0.75" />
      <rect x="10.5" y="2.5" width="3" height="9" rx="1.5" transform="rotate(240 12 12)" opacity="0.5" />
    </svg>
  );
}

type Props = {
  size?: "sm" | "lg";
  inverted?: boolean;
  className?: string;
};

export default function Logo({ size = "sm", inverted = false, className }: Props) {
  const badgeSize = size === "lg" ? "size-11" : "size-8";
  const iconSize = size === "lg" ? "size-6" : "size-4.5";
  const textSize = size === "lg" ? "text-3xl" : "text-xl";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        data-slot="logo-badge"
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl shadow-sm ring-1",
          badgeSize,
          inverted
            ? "bg-white/15 text-white ring-white/25 backdrop-blur-sm"
            : "bg-primary text-primary-foreground ring-black/5",
        )}
      >
        <LogoMark className={iconSize} />
      </span>
      <span
        className={cn(
          "font-extrabold leading-none tracking-tight",
          baloo.className,
          textSize,
          inverted ? "text-white" : "text-foreground",
        )}
      >
        SarLarTal
      </span>
    </span>
  );
}
