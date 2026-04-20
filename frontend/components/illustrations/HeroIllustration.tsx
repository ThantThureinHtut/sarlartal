export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[420px]">
      <div className="absolute -inset-8 -z-10 rounded-full bg-lime-500/[0.06] blur-3xl" />

      <svg
        viewBox="0 0 420 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="snapBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.04" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Floating chat bubble — top */}
        <g transform="translate(20 40)" className="text-foreground">
          <rect
            x="0"
            y="0"
            width="160"
            height="56"
            rx="16"
            fill="currentColor"
            fillOpacity="0.04"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <circle cx="28" cy="28" r="12" fill="#a3e635" />
          <rect
            x="50"
            y="18"
            width="90"
            height="6"
            rx="3"
            fill="currentColor"
            fillOpacity="0.6"
          />
          <rect
            x="50"
            y="32"
            width="60"
            height="6"
            rx="3"
            fill="currentColor"
            fillOpacity="0.25"
          />
        </g>

        {/* Phone */}
        <g className="text-foreground">
          <rect
            x="80"
            y="60"
            width="260"
            height="420"
            rx="40"
            fill="currentColor"
            fillOpacity="0.03"
            stroke="currentColor"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          />
          <rect
            x="92"
            y="72"
            width="236"
            height="396"
            rx="30"
            fill="url(#phoneGrad)"
          />
          {/* Notch */}
          <rect
            x="180"
            y="82"
            width="60"
            height="8"
            rx="4"
            fill="currentColor"
            fillOpacity="0.15"
          />
        </g>

        {/* Snap card */}
        <g>
          <rect
            x="108"
            y="108"
            width="204"
            height="248"
            rx="20"
            fill="url(#snapBg)"
          />
          {/* Subtle abstract composition inside snap */}
          <circle cx="270" cy="160" r="22" fill="white" fillOpacity="0.85" />
          <path
            d="M108 296 L168 234 L210 270 L262 218 L312 268 L312 356 L108 356 Z"
            fill="black"
            fillOpacity="0.18"
          />
          <path
            d="M108 320 L150 282 L196 308 L240 270 L286 300 L312 286 L312 356 L108 356 Z"
            fill="black"
            fillOpacity="0.28"
          />
        </g>

        {/* Reaction pill row */}
        <g transform="translate(108 372)" className="text-foreground">
          <rect
            width="204"
            height="40"
            rx="20"
            fill="currentColor"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <g transform="translate(16 12)">
            <path
              d="M8 14 C2 10 0 6 4 3 C7 1 9 3 9 5 C9 3 11 1 14 3 C18 6 16 10 10 14 C9.5 14.5 8.5 14.5 8 14 Z"
              fill="#ef4444"
            />
            <text
              x="22"
              y="12"
              fontSize="11"
              fontWeight="600"
              fill="currentColor"
              fillOpacity="0.7"
              fontFamily="system-ui"
            >
              128
            </text>
          </g>
          <g transform="translate(78 12)">
            <circle cx="9" cy="9" r="7" fill="#a3e635" />
            <text
              x="22"
              y="12"
              fontSize="11"
              fontWeight="600"
              fill="currentColor"
              fillOpacity="0.7"
              fontFamily="system-ui"
            >
              42
            </text>
          </g>
          <g transform="translate(140 12)">
            <rect
              x="2"
              y="2"
              width="14"
              height="14"
              rx="3"
              fill="#10b981"
            />
            <text
              x="22"
              y="12"
              fontSize="11"
              fontWeight="600"
              fill="currentColor"
              fillOpacity="0.7"
              fontFamily="system-ui"
            >
              89
            </text>
          </g>
        </g>

        {/* Bottom nav dots */}
        <g transform="translate(180 432)" className="text-foreground">
          <circle cx="0" cy="0" r="3" fill="currentColor" fillOpacity="0.3" />
          <circle cx="14" cy="0" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="28" cy="0" r="3" fill="#a3e635" />
          <circle cx="42" cy="0" r="3" fill="currentColor" fillOpacity="0.6" />
          <circle cx="56" cy="0" r="3" fill="currentColor" fillOpacity="0.3" />
        </g>

        {/* Floating call card — bottom right */}
        <g transform="translate(240 420)" className="text-foreground">
          <rect
            x="0"
            y="0"
            width="160"
            height="68"
            rx="16"
            fill="currentColor"
            fillOpacity="0.04"
            stroke="currentColor"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <circle cx="28" cy="34" r="14" fill="#10b981" fillOpacity="0.18" />
          <path
            d="M22 30 a8 8 0 0 1 12 0 m-10 4 a4 4 0 0 1 8 0"
            stroke="#10b981"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="28" cy="38" r="1.4" fill="#10b981" />
          <rect
            x="50"
            y="22"
            width="82"
            height="6"
            rx="3"
            fill="currentColor"
            fillOpacity="0.55"
          />
          <rect
            x="50"
            y="36"
            width="50"
            height="6"
            rx="3"
            fill="currentColor"
            fillOpacity="0.25"
          />
          <circle cx="142" cy="34" r="3" fill="#a3e635" />
        </g>
      </svg>
    </div>
  );
}
