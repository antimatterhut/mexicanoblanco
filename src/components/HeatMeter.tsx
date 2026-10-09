import { heatLabel, uiCopy } from "@/content/site";

type HeatMeterProps = {
  heat: number;
  className?: string;
};

function ChiliIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 ${filled ? "text-primary" : "text-muted/40"}`}
      fill="currentColor"
    >
      <path d="M17.5 2a1 1 0 0 1 .9 1.4l-.9 1.9c1.4 1 2.1 2.7 1.7 4.6-.9 4.6-5.6 11.1-14.2 12.1a1 1 0 0 1-.8-1.7C9 15.4 9.5 11 11 8.3c.9-1.6 2.3-2.7 3.9-3.1l.8-1.700A1 1 0 0 1 16.6 2h.9Z" />
    </svg>
  );
}

export default function HeatMeter({ heat, className = "" }: HeatMeterProps) {
  const label = heatLabel(heat);

  return (
    <div
      role="img"
      aria-label={`${uiCopy.heatLabelPrefix}: ${heat} out of 5 (${label})`}
      className={`flex items-center gap-2 ${className}`.trim()}
    >
      <span className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <ChiliIcon key={n} filled={n <= heat} />
        ))}
      </span>
      <span aria-hidden="true" className="text-sm font-bold text-muted">
        {label}
      </span>
    </div>
  );
}
