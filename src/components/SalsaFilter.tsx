"use client";

import { useState, type ReactNode } from "react";
import {
  heatLabel,
  salsasPageCopy,
  showingCountLabel,
  type HeatLabel,
} from "@/content/site";

type FilterItem = {
  slug: string;
  heat: number;
  node: ReactNode;
};

const GROUPS: HeatLabel[] = ["Mild", "Medium", "Hot"];

export default function SalsaFilter({ items }: { items: FilterItem[] }) {
  const [active, setActive] = useState<HeatLabel | "All">("All");

  const options = GROUPS.filter((group) =>
    items.some((item) => heatLabel(item.heat) === group),
  );
  const visibleCount = items.filter(
    (item) => active === "All" || heatLabel(item.heat) === active,
  ).length;

  const buttonClass = (isActive: boolean) =>
    `rounded-full border-2 border-dark px-5 py-2 font-bold transition-colors ${
      isActive ? "bg-dark text-light" : "text-dark hover:bg-surface"
    }`;

  return (
    <>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          role="group"
          aria-label={salsasPageCopy.filterLabel}
          className="flex flex-wrap gap-2"
        >
          {(["All", ...options] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={active === option}
              onClick={() => setActive(option)}
              className={buttonClass(active === option)}
            >
              {option === "All" ? salsasPageCopy.filterAll : option}
            </button>
          ))}
        </div>
        <p role="status" aria-live="polite" className="mt-4 text-muted">
          {showingCountLabel(visibleCount)}
        </p>
      </div>
      {items.map((item) => (
        <div
          key={item.slug}
          hidden={active !== "All" && heatLabel(item.heat) !== active}
        >
          {item.node}
        </div>
      ))}
    </>
  );
}
