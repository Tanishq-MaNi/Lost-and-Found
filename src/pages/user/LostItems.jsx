import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

import FoundItemCard from "../../components/common/FoundItemCard";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useFetch } from "../../hooks/useFetch";
import { useDebounce } from "../../hooks/useDebounce";
import { reportService } from "../../services/reportService";
import { CATEGORIES, cap } from "../../utils/format";

const PAGE_SIZE = 10;

const TYPES = [
  { value: "", label: "All" },
  { value: "lost", label: "Lost" },
  { value: "found", label: "Found" },
];

const LostItems = () => {
  const [params] = useSearchParams();

  const [searchInput, setSearchInput] = useState(params.get("search") || "");
  const search = useDebounce(searchInput.trim(), 400);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const { data, loading, error, reload } = useFetch(
    () => reportService.list({ page, limit: PAGE_SIZE, type, category, search }),
    [page, type, category, search]
  );

  const reports = data?.reports ?? [];
  const pagination = data?.pagination ?? { total: 0, totalPages: 1 };

  const reset = (setter) => (value) => {
    setter(value);
    setPage(1);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Browse Items</h1>
      <p className="mt-1 text-sm text-slate-400">
        Verified lost and found items in your college.
      </p>

      <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-white/10 bg-[#141b26] px-3 focus-within:border-sky-400/60">
          <Search size={16} className="shrink-0 text-slate-500" />
          <input
            type="search"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setPage(1);
            }}
            placeholder="Search by name, description or location"
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) => reset(setCategory)(e.target.value)}
          className="h-11 rounded-xl border border-white/10 bg-[#141b26] px-3 text-sm text-white outline-none"
        >
          <option value="">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{cap(c)}</option>
          ))}
        </select>

        <div className="flex rounded-xl bg-[#141b26] p-1">
          {TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => reset(setType)(t.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                type === t.value
                  ? "bg-sky-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        {error && !data ? (
          <ErrorState message={error} onRetry={reload} />
        ) : !data ? (
          <Loader label="Loading items..." />
        ) : reports.length === 0 ? (
          <EmptyState
            title="No items found"
            message={
              search || type || category
                ? "Try a different search or filter."
                : "Nothing has been listed yet. Be the first to report an item."
            }
          />
        ) : (
          <>
            <div
              className={`flex min-w-0 flex-col gap-3 transition-opacity ${
                loading ? "opacity-60" : ""
              }`}
            >
              {reports.map((report) => (
                <FoundItemCard key={report._id} itemReport={report} />
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
              <span>
                {pagination.total} item{pagination.total === 1 ? "" : "s"}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage(page - 1)}
                  disabled={page <= 1}
                  aria-label="Previous page"
                  className="rounded-lg border border-white/10 p-2 hover:bg-white/5 disabled:opacity-40"
                >
                  <ChevronLeft size={16} />
                </button>
                <span>
                  Page {page} of {Math.max(1, pagination.totalPages)}
                </span>
                <button
                  type="button"
                  onClick={() => setPage(page + 1)}
                  disabled={page >= pagination.totalPages}
                  aria-label="Next page"
                  className="rounded-lg border border-white/10 p-2 hover:bg-white/5 disabled:opacity-40"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LostItems;