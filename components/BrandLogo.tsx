interface BrandLogoProps {
  theme?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  theme = 'dark',
  showTagline = true,
  className = '',
}: BrandLogoProps) {
  const titleClass = theme === 'light' ? 'text-white' : 'text-[color:var(--ink)]';
  const subtitleClass = theme === 'light' ? 'text-white/55' : 'text-[color:var(--muted)]';

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <svg
        aria-hidden="true"
        viewBox="0 0 80 80"
        className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="72" height="72" rx="22" fill="#172231" />
        <path
          d="M18 20L28 54L40 27L52 54L62 20"
          fill="none"
          stroke="#F9F1E5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7.5"
        />
        <circle cx="62" cy="16.5" r="5.5" fill="#C46D36" />
      </svg>

      <span className="block min-w-0">
        <span className={`block font-serif text-3xl leading-none ${titleClass}`}>Waffins</span>
        {showTagline ? (
          <span
            className={`mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] ${subtitleClass}`}
          >
            Small businesses. Our business.
          </span>
        ) : null}
      </span>
    </div>
  );
}
