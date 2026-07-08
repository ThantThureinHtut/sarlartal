import { ArrowLeft, SettingsIcon } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6">
      <Link
        href="/profile"
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to profile
      </Link>

      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border px-6 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-muted ring-1 ring-border">
          <SettingsIcon className="size-6 text-muted-foreground" />
        </div>
        <h1 className="text-lg font-semibold text-foreground">Settings coming soon</h1>
        <p className="max-w-xs text-sm text-muted-foreground">
          Account and app preferences will be configurable from here.
        </p>
      </div>
    </div>
  );
}
