"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import type { OrderStatusData } from "@/types/dashboard";

type OrderStatusChartProps = {
  data: OrderStatusData[];
};

export function OrderStatusChart({ data }: OrderStatusChartProps) {
  const totalOrders = data.reduce((total, item) => total + item.value, 0);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-base font-semibold text-slate-950">Order Status</h2>
      <p className="mt-1 text-sm text-slate-500">
        Distribution of all orders.
      </p>

      <div className="relative mt-4 h-60" role="img" aria-label="Order status donut chart">
        <ResponsiveContainer height="100%" width="100%">
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={data}
              dataKey="value"
              innerRadius={62}
              nameKey="status"
              outerRadius={86}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((item) => (
                <Cell fill={item.color} key={item.status} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgb(15 23 42 / 0.1)",
              }}
              formatter={(value) => `${Number(value).toLocaleString()} orders`}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="text-2xl font-bold tracking-tight text-slate-950">
              {totalOrders.toLocaleString()}
            </p>
            <p className="mt-1 text-xs font-medium text-slate-500">Total orders</p>
          </div>
        </div>
      </div>

      <ul className="mt-2 space-y-3">
        {data.map((item) => {
          const percentage = Math.round((item.value / totalOrders) * 100);

          return (
            <li className="flex items-center justify-between gap-3" key={item.status}>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span
                  aria-hidden="true"
                  className="size-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {item.status}
              </div>

              <span className="text-sm font-semibold text-slate-900">
                {percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}