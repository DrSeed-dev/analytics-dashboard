"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { RevenueDataPoint } from "@/types/dashboard";

type RevenueChartProps = {
  data: RevenueDataPoint[];
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-slate-950">
            Revenue Overview
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Revenue trends for the selected period.
          </p>
        </div>

        <span className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span aria-hidden="true" className="size-2 rounded-full bg-indigo-600" />
          Revenue
        </span>
      </div>

      <div className="mt-6 h-72" role="img" aria-label="Revenue trend chart">
        <ResponsiveContainer height="100%" width="100%">
          <LineChart data={data} margin={{ top: 12, right: 8, left: -14, bottom: 0 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="label"
              tick={{ fill: "#64748b", fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgb(15 23 42 / 0.1)",
              }}
              cursor={{ stroke: "#c7d2fe", strokeWidth: 2 }}
              formatter={(value) => currencyFormatter.format(Number(value))}
            />
            <Line
              activeDot={{ r: 6 }}
              dataKey="revenue"
              dot={false}
              name="Revenue"
              stroke="#4f46e5"
              strokeWidth={3}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}