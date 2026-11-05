"use client";

import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navigationItems = [
  "Overview",
  "Analytics",
  "Sales",
  "Customers",
  "Reports",
  "Settings",
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <button
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-slate-950/35 lg:hidden"
          onClick={onClose}
          type="button"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white px-4 py-5 shadow-xl transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-2">
          <Link className="flex items-center gap-3 font-semibold text-slate-950" href="/">
            <span aria-hidden="true" className="grid size-9 place-items-center rounded-xl bg-slate-950 text-sm font-bold text-white">
              A
            </span>
            <span>
              <span className="block text-base leading-none">Asteria</span>
              <span className="mt-1 block text-xs font-medium text-slate-500">Analytics</span>
            </span>
          </Link>

          <button
            aria-label="Close navigation menu"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>

        <nav aria-label="Main navigation" className="mt-10">
          <p className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Workspace</p>
          <ul className="mt-3 space-y-1">
            {navigationItems.map((item) => {
              const isActive = item === "Overview";

              return (
                <li key={item}>
                  <button
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-950 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                    }`}
                    onClick={onClose}
                    type="button"
                  >
                    <span
                      aria-hidden="true"
                      className={`size-2 rounded-full ${isActive ? "bg-emerald-400" : "bg-slate-300"}`}
                    />
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Need a report?</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Export performance data whenever your team needs it.</p>
          <button
            className="mt-4 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
            type="button"
          >
            View reports
          </button>
        </div>
      </aside>
    </>
  );
}
