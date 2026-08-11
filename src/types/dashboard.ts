export type TimeRange = "7d" | "30d" | "3m" | "12m";

export type MetricId = "revenue" | "orders" | "customers" | "conversion";

export type TransactionStatus = "Completed" | "Pending" | "Cancelled";

export interface Metric {
  id: MetricId;
  label: string;
  value: string;
  change: string;
  description: string;
}

export interface RevenueDataPoint {
  label: string;
  revenue: number;
  orders: number;
}

export interface CategorySalesData {
  category: string;
  revenue: number;
}

export interface OrderStatusData {
  status: TransactionStatus;
  value: number;
  color: string;
}

export interface PeriodDashboardData {
  metrics: Metric[];
  revenue: RevenueDataPoint[];
  salesByCategory: CategorySalesData[];
  orderStatus: OrderStatusData[];
}

export interface Transaction {
  id: string;
  customer: string;
  product: string;
  date: string;
  amount: number;
  status: TransactionStatus;
}