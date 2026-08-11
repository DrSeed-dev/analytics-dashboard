import type { Metric, MetricId } from "@/types/dashboard";

type MetricCardProps = {
  metric: Metric;
};

const metricBadge: Record<MetricId, string> = {
  revenue: "$",
  orders: "O",
  customers: "C",
  conversion: "%",
};

const badgeStyles: Record<MetricId, string> = {
  revenue: "bg-emerald-100 text-emerald-700",
  orders: "bg-blue-100 text-blue-700",
  customers: "bg-violet-100 text-violet-700",
  conversion: "bg-amber-100 text-amber-700",
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{metric.label}</p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
            {metric.value}
          </p>
        </div>

        <span
          aria-hidden="true"
          className={`grid size-10 place-items-center rounded-xl text-sm font-bold ${badgeStyles[metric.id]}`}
        >
          {metricBadge[metric.id]}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs">
        <span className="font-semibold text-emerald-600">{metric.change}</span>
        <span className="text-slate-500">{metric.description}</span>
      </div>
    </article>
  );
}