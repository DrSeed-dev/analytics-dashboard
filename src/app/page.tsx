"use client";

import { useState } from "react";
import { OrderStatusChart } from "@/components/charts/order-status-chart";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { SalesByCategoryChart } from "@/components/charts/sales-by-category-chart";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { Sidebar } from "@/components/dashboard/sidebar";
import { dashboardData, recentTransactions } from "@/data/dashboard-data";
import type { TimeRange } from "@/types/dashboard";

export default function Home() {
  const [selectedRange, setSelectedRange] = useState<TimeRange>("12m");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const selectedData = dashboardData[selectedRange];

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="min-w-0 flex-1">
        <DashboardHeader
          onMenuClick={() => setIsSidebarOpen(true)}
          onRangeChange={setSelectedRange}
          selectedRange={selectedRange}
        />

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <MetricGrid metrics={selectedData.metrics} />

          <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(19rem,1fr)]">
            <RevenueChart data={selectedData.revenue} />
            <OrderStatusChart data={selectedData.orderStatus} />
          </section>

          <section className="mt-6">
            <SalesByCategoryChart data={selectedData.salesByCategory} />
          </section>

          <section className="mt-6">
            <RecentTransactions transactions={recentTransactions} />
          </section>
        </main>
      </div>
    </div>
  );
}
