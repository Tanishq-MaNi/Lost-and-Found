import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BurgerMenuIcon,
  NotificationIcon,
  SearchIcon,
  LostReportIcon,
  FoundReportIcon,
  ReportDataIcon,
} from "../../assets/Icons";

import FoundItemCard from "../../components/common/FoundItemCard";

const stats = [
  { label: "My Reports", value: 1, color: "bg-sky-400", icon: "reports" },
  { label: "Possible Matches", value: 0, color: "bg-violet-400", icon: "matches" },
  { label: "My Claims", value: 0, color: "bg-amber-400", icon: "claims" },
  { label: "Returned Items", value: 0, color: "bg-emerald-400", icon: "returned" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  const [userInfo] = useState({ name: "User" });
  const [search, setSearch] = useState("");


  return (
    <>
      {/* Welcome */}
      <section className="relative overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br from-[#172537] via-[#111c2a] to-[#11151e] p-5 sm:p-7 lg:p-8">
        <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-sky-400/8 blur-3xl" />

        <div className="relative">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
            Lost & Found
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Welcome back, {userInfo.name || "User"}
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Keep track of your belongings and help others find theirs.
          </p>
        </div>
      </section>

      {/* Search */}
      <section>
        <label
          htmlFor="item-search"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Find an item
        </label>

        <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#141b26] px-4 transition focus-within:border-sky-400/60 focus-within:ring-2 focus-within:ring-sky-400/10">
          <SearchIcon size={20} colour="#94a3b8" />

          <input
            id="item-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by item name..."
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </section>

      {/* Report actions */}
      <section>
        <div className="mb-3">
          <h2 className="text-base font-semibold sm:text-lg">
            What would you like to do?
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Create a report to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
          <button
            type="button"
            onClick={() => navigate("/report/lost")}
            className="group flex min-h-24 items-center gap-4 rounded-2xl border border-rose-400/15 bg-rose-500/8 p-4 text-left transition hover:border-rose-400/35 hover:bg-rose-500/13 sm:min-h-28 sm:p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300 transition group-hover:bg-rose-500/25">
              <LostReportIcon size={28} />
            </span>

            <span className="min-w-0">
              <span className="block font-semibold text-rose-100">
                Report Lost Item
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">
                Tell us what you lost
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/report/found")}
            className="group flex min-h-24 items-center gap-4 rounded-2xl border border-emerald-400/15 bg-emerald-500/[0.07] p-4 text-left transition hover:border-emerald-400/35 hover:bg-emerald-500/12 sm:min-h-28 sm:p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 transition group-hover:bg-emerald-500/25">
              <FoundReportIcon size={28} />
            </span>

            <span className="min-w-0">
              <span className="block font-semibold text-emerald-100">
                Report Found Item
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-400 sm:text-sm">
                Help return an item
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* Overview */}
      <section>
        <div className="mb-4">
          <h2 className="text-base font-semibold sm:text-lg">
            Your overview
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            A quick look at your activity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 rounded-2xl border border-white/[0.07] bg-[#141b26] p-4 transition hover:border-white/13 sm:p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="min-w-0 text-xs leading-5 text-slate-400 sm:text-sm">
                  {stat.label}
                </span>
                <span className={`h-2 w-2 shrink-0 rounded-full ${stat.color}`} />
              </div>

              <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent activity */}
      <section className="min-w-0">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold sm:text-lg">
              Recent activity
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Keep track of recently reported items.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/lost-items")}
            className="shrink-0 rounded-lg px-2 py-2 text-sm font-medium text-sky-300 transition hover:bg-sky-400/8 hover:text-sky-200"
          >
            View all
          </button>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          {[1, 2].map((id) => (
            <div key={id} className="min-w-0">
              <FoundItemCard />
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Dashboard;
