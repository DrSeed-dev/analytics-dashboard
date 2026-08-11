import type {
  PeriodDashboardData,
  TimeRange,
  Transaction,
} from "@/types/dashboard";

export const timeRangeOptions: { value: TimeRange; label: string }[] = [
  { value: "7d", label: "7 Days" },
  { value: "30d", label: "30 Days" },
  { value: "3m", label: "3 Months" },
  { value: "12m", label: "12 Months" },
];

export const dashboardData: Record<TimeRange, PeriodDashboardData> = {
  "7d": {
    metrics: [
      {
        id: "revenue",
        label: "Total Revenue",
        value: "$18,420",
        change: "+12.4%",
        description: "vs. previous 7 days",
      },
      {
        id: "orders",
        label: "Total Orders",
        value: "286",
        change: "+9.7%",
        description: "vs. previous 7 days",
      },
      {
        id: "customers",
        label: "Total Customers",
        value: "204",
        change: "+8.1%",
        description: "vs. previous 7 days",
      },
      {
        id: "conversion",
        label: "Conversion Rate",
        value: "3.8%",
        change: "+0.4%",
        description: "vs. previous 7 days",
      },
    ],
    revenue: [
      { label: "Mon", revenue: 1980, orders: 32 },
      { label: "Tue", revenue: 2440, orders: 39 },
      { label: "Wed", revenue: 2190, orders: 33 },
      { label: "Thu", revenue: 2700, orders: 43 },
      { label: "Fri", revenue: 2890, orders: 47 },
      { label: "Sat", revenue: 3110, orders: 46 },
      { label: "Sun", revenue: 3110, orders: 46 },
    ],
    salesByCategory: [
      { category: "Electronics", revenue: 7260 },
      { category: "Fashion", revenue: 3700 },
      { category: "Home", revenue: 3100 },
      { category: "Beauty", revenue: 2290 },
      { category: "Sports", revenue: 2070 },
    ],
    orderStatus: [
      { status: "Completed", value: 248, color: "#16a34a" },
      { status: "Pending", value: 27, color: "#f59e0b" },
      { status: "Cancelled", value: 11, color: "#ef4444" },
    ],
  },

  "30d": {
    metrics: [
      {
        id: "revenue",
        label: "Total Revenue",
        value: "$2,860",
        change: "+10.8%",
        description: "vs. previous 30 days",
      },
      {
        id: "orders",
        label: "Total Orders",
        value: "1,126",
        change: "+7.3%",
        description: "vs. previous 30 days",
      },
      {
        id: "customers",
        label: "Total Customers",
        value: "804",
        change: "+6.5%",
        description: "vs. previous 30 days",
      },
      {
        id: "conversion",
        label: "Conversion Rate",
        value: "4.1%",
        change: "+0.3%",
        description: "vs. previous 30 days",
      },
    ],
    revenue: [
      { label: "Week 1", revenue: 15580, orders: 239 },
      { label: "Week 2", revenue: 17220, orders: 264 },
      { label: "Week 3", revenue: 18460, orders: 286 },
      { label: "Week 4", revenue: 21600, orders: 337 },
    ],
    salesByCategory: [
      { category: "Electronics", revenue: 28100 },
      { category: "Fashion", revenue: 15400 },
      { category: "Home", revenue: 12100 },
      { category: "Beauty", revenue: 9300 },
      { category: "Sports", revenue: 7960 },
    ],
    orderStatus: [
      { status: "Completed", value: 1014, color: "#16a34a" },
      { status: "Pending", value: 82, color: "#f59e0b" },
      { status: "Cancelled", value: 30, color: "#ef4444" },
    ],
  },

  "3m": {
    metrics: [
      {
        id: "revenue",
        label: "Total Revenue",
        value: "$198,480",
        change: "+14.2%",
        description: "vs. previous 3 months",
      },
      {
        id: "orders",
        label: "Total Orders",
        value: "3,046",
        change: "+11.6%",
        description: "vs. previous 3 months",
      },
      {
        id: "customers",
        label: "Total Customers",
        value: "2,116",
        change: "+9.4%",
        description: "vs. previous 3 months",
      },
      {
        id: "conversion",
        label: "Conversion Rate",
        value: "4.3%",
        change: "+0.5%",
        description: "vs. previous 3 months",
      },
    ],
    revenue: [
      { label: "May", revenue: 62300, orders: 954 },
      { label: "Jun", revenue: 65920, orders: 1006 },
      { label: "Jul", revenue: 70260, orders: 1086 },
    ],
    salesByCategory: [
      { category: "Electronics", revenue: 76500 },
      { category: "Fashion", revenue: 42120 },
      { category: "Home", revenue: 33120 },
      { category: "Beauty", revenue: 25440 },
      { category: "Sports", revenue: 21300 },
    ],
    orderStatus: [
      { status: "Completed", value: 2735, color: "#16a34a" },
      { status: "Pending", value: 222, color: "#f59e0b" },
      { status: "Cancelled", value: 89, color: "#ef4444" },
    ],
  },

  "12m": {
    metrics: [
      {
        id: "revenue",
        label: "Total Revenue",
        value: "$836,400",
        change: "+18.6%",
        description: "vs. previous 12 months",
      },
      {
        id: "orders",
        label: "Total Orders",
        value: "12,500",
        change: "+15.2%",
        description: "vs. previous 12 months",
      },
      {
        id: "customers",
        label: "Total Customers",
        value: "7,892",
        change: "+13.8%",
        description: "vs. previous 12 months",
      },
      {
        id: "conversion",
        label: "Conversion Rate",
        value: "4.6%",
        change: "+0.6%",
        description: "vs. previous 12 months",
      },
    ],
    revenue: [
      { label: "Jan", revenue: 52200, orders: 760 },
      { label: "Feb", revenue: 54800, orders: 790 },
      { label: "Mar", revenue: 57100, orders: 840 },
      { label: "Apr", revenue: 60800, orders: 880 },
      { label: "May", revenue: 63400, orders: 930 },
      { label: "Jun", revenue: 65200, orders: 970 },
      { label: "Jul", revenue: 68900, orders: 1010 },
      { label: "Aug", revenue: 70400, orders: 1050 },
      { label: "Sep", revenue: 72700, orders: 1090 },
      { label: "Oct", revenue: 74800, orders: 1120 },
      { label: "Nov", revenue: 80200, orders: 1330 },
      { label: "Dec", revenue: 115900, orders: 1730 },
    ],
    salesByCategory: [
      { category: "Electronics", revenue: 316800 },
      { category: "Fashion", revenue: 180300 },
      { category: "Home", revenue: 142900 },
      { category: "Beauty", revenue: 105400 },
      { category: "Sports", revenue: 91000 },
    ],
    orderStatus: [
      { status: "Completed", value: 11337, color: "#16a34a" },
      { status: "Pending", value: 820, color: "#f59e0b" },
      { status: "Cancelled", value: 343, color: "#ef4444" },
    ],
  },
};

export const recentTransactions: Transaction[] = [
  {
    id: "ORD-10492",
    customer: "Olivia Bennett",
    product: "Wireless Headphones",
    date: "Aug 11, 2026",
    amount: 249,
    status: "Completed",
  },
  {
    id: "ORD-10491",
    customer: "Ethan Carter",
    product: "Smart Home Speaker",
    date: "Aug 10, 2026",
    amount: 159,
    status: "Pending",
  },
  {
    id: "ORD-10490",
    customer: "Sophia Martinez",
    product: "Running Shoes",
    date: "Aug 10, 2026",
    amount: 128,
    status: "Completed",
  },
  {
    id: "ORD-10489",
    customer: "Noah Williams",
    product: "Skincare Essentials Set",
    date: "Aug 9, 2026",
    amount: 84,
    status: "Cancelled",
  },
  {
    id: "ORD-10488",
    customer: "Mia Thompson",
    product: "Minimal Desk Lamp",
    date: "Aug 9, 2026",
    amount: 96,
    status: "Completed",
  },
];