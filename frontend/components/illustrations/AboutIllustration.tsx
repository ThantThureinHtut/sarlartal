export default function AboutIllustration() {
  return (
    <div className="relative w-full max-w-105">
      <div className="absolute -inset-8 -z-10 rounded-full bg-lime-500/6 blur-3xl" />

      <svg
        viewBox="0 0 420 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        {/* Back card */}
        <g transform="translate(60 90) rotate(-6 130 160)" className="text-foreground">
          <rect
            width="260"
            height="320"
            rx="24"
            fill="currentColor"
            fillOpacity="0.04"
            stroke="currentColor"
            strokeOpacity="0.15"
            strokeWidth="1.5"
          />
          <rect x="20" y="20" width="220" height="180" rx="16" fill="currentColor" fillOpacity="0.06" />
          <rect x="20" y="220" width="140" height="10" rx="5" fill="currentColor" fillOpacity="0.18" />
          <rect x="20" y="244" width="100" height="8" rx="4" fill="currentColor" fillOpacity="0.1" />
        </g>

        {/* Middle card */}
        <g transform="translate(80 60) rotate(2 130 160)" className="text-foreground">
          <rect
            width="260"
            height="320"
            rx="24"
            fill="currentColor"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          />
          <rect x="20" y="20" width="220" height="180" rx="16" fill="currentColor" fillOpacity="0.08" />
          <rect x="20" y="220" width="160" height="10" rx="5" fill="currentColor" fillOpacity="0.22" />
          <rect x="20" y="244" width="120" height="8" rx="4" fill="currentColor" fillOpacity="0.12" />
        </g>

        {/* Front card with snap */}
        <g transform="translate(100 30)" className="text-foreground">
          <rect
            width="260"
            height="380"
            rx="24"
            className="fill-background"
          />
          <rect
            width="260"
            height="380"
            rx="24"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />

          {/* Snap image */}
          <rect x="20" y="20" width="220" height="220" rx="16" fill="url(#cardGrad)" />
          <circle cx="190" cy="70" r="18" fill="white" fillOpacity="0.85" />
          <path
            d="M20 180 L80 130 L120 160 L170 110 L220 150 L240 140 L240 240 L20 240 Z"
            fill="black"
            fillOpacity="0.22"
          />

          {/* Profile row */}
          <g transform="translate(20 260)">
            <circle cx="14" cy="14" r="14" fill="currentColor" fillOpacity="0.1" />
            <circle cx="14" cy="14" r="14" fill="none" stroke="#a3e635" strokeWidth="1.5" />
            <circle cx="14" cy="11" r="4.5" fill="currentColor" fillOpacity="0.55" />
            <path d="M5 24 Q14 18 23 24" fill="currentColor" fillOpacity="0.55" />

            <rect x="38" y="6" width="100" height="7" rx="3.5" fill="currentColor" fillOpacity="0.7" />
            <rect x="38" y="20" width="60" height="6" rx="3" fill="currentColor" fillOpacity="0.3" />

            <rect x="178" y="4" width="44" height="22" rx="11" fill="#a3e635" />
            <text x="187" y="19" fontSize="10" fontWeight="700" fill="#0a0d16" fontFamily="system-ui">Follow</text>
          </g>

          {/* Reaction bar */}
          <g transform="translate(20 308)">
            <rect width="220" height="50" rx="12" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />

            <g transform="translate(16 18)">
              <path
                d="M8 15 C2 11 0 6 4 3 C7 1 9 3 9 5 C9 3 11 1 14 3 C18 6 16 11 10 15 C9.5 15.5 8.5 15.5 8 15 Z"
                fill="#ef4444"
              />
              <text x="22" y="13" fontSize="11" fontWeight="600" fill="currentColor" fillOpacity="0.7" fontFamily="system-ui">128</text>
            </g>
            <g transform="translate(80 18)">
              <circle cx="9" cy="9" r="7" fill="#a3e635" />
              <text x="22" y="13" fontSize="11" fontWeight="600" fill="currentColor" fillOpacity="0.7" fontFamily="system-ui">42</text>
            </g>
            <g transform="translate(140 18)">
              <rect x="2" y="2" width="14" height="14" rx="3" fill="#10b981" />
              <text x="22" y="13" fontSize="11" fontWeight="600" fill="currentColor" fillOpacity="0.7" fontFamily="system-ui">89</text>
            </g>
          </g>
        </g>

        {/* Floating dot accents */}
        <circle cx="40" cy="80" r="4" fill="#a3e635" />
        <circle cx="380" cy="180" r="4" fill="#10b981" />
        <circle cx="60" cy="400" r="3" fill="#a3e635" opacity="0.6" />
        <circle cx="390" cy="380" r="3" fill="#10b981" opacity="0.6" />
      </svg>
    </div>
  );
}
