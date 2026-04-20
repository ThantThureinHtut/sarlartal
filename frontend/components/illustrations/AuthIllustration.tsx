export default function AuthIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md text-background">
      {/* Single soft glow */}
      <div className="absolute inset-1/4 rounded-full bg-lime-400/15 blur-3xl" />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative size-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bef264" />
            <stop offset="100%" stopColor="#65a30d" />
          </radialGradient>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a3e635" stopOpacity="0" />
            <stop offset="50%" stopColor="#a3e635" stopOpacity="1" />
            <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer ring — dashed */}
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.18"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {/* Mid ring */}
        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1"
        />

        {/* Inner ring */}
        <circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Animated arc on mid ring */}
        <path
          d="M 200 70 A 130 130 0 0 1 330 200"
          stroke="url(#arcGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Animated arc on outer ring (opposite side) */}
        <path
          d="M 200 380 A 180 180 0 0 1 20 200"
          stroke="url(#arcGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />

        {/* Core node — center */}
        <circle cx="200" cy="200" r="36" fill="url(#coreGrad)" />
        <circle
          cx="200"
          cy="200"
          r="36"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        {/* Subtle highlight */}
        <ellipse cx="190" cy="188" rx="14" ry="6" fill="white" fillOpacity="0.3" />

        {/* Orbit nodes */}
        {/* Top — outer */}
        <circle cx="200" cy="20" r="6" fill="#a3e635" />
        <circle cx="200" cy="20" r="12" fill="none" stroke="#a3e635" strokeOpacity="0.4" strokeWidth="1" />

        {/* Right — mid */}
        <circle cx="330" cy="200" r="5" fill="currentColor" fillOpacity="0.85" />

        {/* Bottom-left — outer */}
        <circle cx="73" cy="295" r="5" fill="currentColor" fillOpacity="0.6" />

        {/* Top-left — mid */}
        <circle cx="108" cy="108" r="4" fill="currentColor" fillOpacity="0.5" />

        {/* Inner ring node */}
        <circle cx="200" cy="120" r="3" fill="#a3e635" opacity="0.85" />

        {/* Faint constellation dots */}
        <circle cx="40" cy="60" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="370" cy="80" r="1.5" fill="currentColor" opacity="0.35" />
        <circle cx="50" cy="350" r="1.5" fill="currentColor" opacity="0.35" />
        <circle cx="360" cy="340" r="1.5" fill="currentColor" opacity="0.4" />
      </svg>
    </div>
  );
}
