import type { Transaction, TransactionStatus } from "@/types/dashboard";

type RecentTransactionsProps = {
  transactions: Transaction[];
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const statusStyles: Record<TransactionStatus, string> = {
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
  Cancelled: "bg-rose-50 text-rose-700 ring-rose-600/20",
};

export function RecentTransactions({
  transactions,
}: RecentTransactionsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-6">
        <div>
          <h2 className="text-base font-semibold text-slate-950">
            Recent Transactions
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            The latest orders from your customers.
          </p>
        </div>

        <button
          className="shrink-0 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
          type="button"
        >
          View all
        </button>
      </div>

      <div className="overflow-x-auto border-t border-slate-200">
        <table className="min-w-[720px] w-full text-left">
          <caption className="sr-only">
            Recent customer transactions
          </caption>

          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3.5 sm:px-6" scope="col">
                Customer
              </th>
              <th className="px-5 py-3.5" scope="col">
                Product
              </th>
              <th className="px-5 py-3.5" scope="col">
                Date
              </th>
              <th className="px-5 py-3.5 text-right" scope="col">
                Amount
              </th>
              <th className="px-5 py-3.5 sm:px-6" scope="col">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {transactions.map((transaction) => (
              <tr
                className="transition hover:bg-slate-50/80"
                key={transaction.id}
              >
                <td className="px-5 py-4 sm:px-6">
                  <p className="text-sm font-semibold text-slate-800">
                    {transaction.customer}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {transaction.id}
                  </p>
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {transaction.product}
                </td>

                <td className="px-5 py-4 text-sm text-slate-600">
                  {transaction.date}
                </td>

                <td className="px-5 py-4 text-right text-sm font-semibold text-slate-800">
                  {currencyFormatter.format(transaction.amount)}
                </td>

                <td className="px-5 py-4 sm:px-6">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
                      statusStyles[transaction.status]
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}