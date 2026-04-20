export default function BlobBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Soft gradient field */}
      <div className="absolute inset-x-0 -top-40 h-[600px] bg-linear-to-b from-lime-500/10 via-transparent to-transparent" />

      {/* Top-left blob */}
      <div className="absolute -left-32 -top-20 size-[480px] rounded-full bg-lime-500/15 blur-3xl" />
      {/* Right blob */}
      <div className="absolute -right-24 top-40 size-[420px] rounded-full bg-emerald-500/15 blur-3xl" />

      {/* Dotted grid */}
      <svg
        className="absolute inset-0 size-full opacity-[0.18] dark:opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.2" cy="1.2" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" className="text-lime-500/40" />
      </svg>
    </div>
  );
}
