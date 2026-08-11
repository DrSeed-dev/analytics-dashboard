"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { CategorySalesData } from "@/types/dashboard";

type SalesByCategoryChartProps = {
  data: CategorySalesData[];
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function SalesByCategoryChart({
  data,
}: SalesByCategoryChartProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div>
        <h2 className="text-base font-semibold text-slate-950">
          Sales by Category
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Revenue contribution across product categories.
        </p>
      </div>

      <div
        className="mt-6 h-80"
        role="img"
        aria-label="Sales by category bar chart"
      >
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={data} margin={{ top: 12, right: 8, left: -14, bottom: 0 }}>
            <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="category"
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
              cursor={{ fill: "#eef2ff" }}
              formatter={(value) => currencyFormatter.format(Number(value))}
            />
            <Bar
              dataKey="revenue"
              fill="#4f46e5"
              name="Revenue"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}