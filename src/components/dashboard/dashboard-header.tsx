import type { TimeRange } from "@/types/dashboard";

type DashboardHeaderProps = {
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
  onMenuClick: () => void;
};

const ranges: { label: string; value: TimeRange }[] = [
  { label: "7 Days", value: "7d" },
  { label: "30 Days", value: "30d" },
  { label: "3 Months", value: "3m" },
  { label: "12 Months", value: "12m" },
];

export function DashboardHeader({
  selectedRange,
  onRangeChange,
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button
            aria-label="Open navigation menu"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            onClick={onMenuClick}
            type="button"
          >
            ☰
          </button>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              Overview
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Track your business performance at a glance.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 md:flex">
            <span aria-hidden="true" className="text-slate-400">
              ⌕
            </span>
            <span className="sr-only">Search dashboard data</span>
            <input
              className="w-36 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
              placeholder="Search"
              type="search"
            />
          </label>

          <button
            aria-label="View notifications"
            className="relative rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
            type="button"
          >
            ♢
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-rose-500" />
          </button>

          <button
            aria-label="Open user menu"
            className="grid size-9 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700"
            type="button"
          >
            DB
          </button>
        </div>
      </div>

      <div
        aria-label="Dashboard date range"
        className="mt-5 flex w-full flex-wrap gap-1 rounded-xl bg-slate-100 p-1 sm:w-fit"
        role="group"
      >
        {ranges.map((range) => (
          <button
            aria-pressed={selectedRange === range.value}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
              selectedRange === range.value
                ? "bg-white text-slate-950 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
            key={range.value}
            onClick={() => onRangeChange(range.value)}
            type="button"
          >
            {range.label}
          </button>
        ))}
      </div>
    </header>
  );
}