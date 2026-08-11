# Asteria Analytics Dashboard

A responsive frontend analytics dashboard built as a portfolio project. It presents realistic business metrics through KPI cards, interactive time-range filters, charts, and a recent-transactions table.

## Features

- Responsive desktop, tablet, and mobile dashboard layout
- Collapsible mobile sidebar navigation
- KPI cards for revenue, orders, customers, and conversion rate
- Working date-range filter: 7 days, 30 days, 3 months, and 12 months
- Revenue line chart, category-sales bar chart, and order-status donut chart
- Chart tooltips for exploring values
- Responsive transaction table with horizontal scrolling on smaller screens
- Typed mock data that is kept separate from the UI components
- Accessible labels, semantic headings, and keyboard-friendly buttons

## Technology

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Recharts

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Quality checks

```powershell
npm run lint
npm run build
```

Both commands passed successfully during development.

## Project structure

```text
src/
  app/                    # Route, metadata, and global styles
  components/
    charts/               # Recharts visualizations
    dashboard/            # Layout, KPI cards, and transactions table
  data/                   # Typed local dashboard data
  types/                  # Shared TypeScript contracts
```

## How the filter works

The main page stores the selected time range in React state. When a user chooses a new range, the page selects the matching object from `dashboardData` and passes that data to the KPI, line chart, bar chart, and donut chart components.

## Future API integration

The current `dashboard-data.ts` module can later be replaced by a fetch request to an API route or backend service. The TypeScript types in `src/types/dashboard.ts` define the expected data shape, so the UI components can remain unchanged.
