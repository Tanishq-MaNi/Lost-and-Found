import { useState } from "react";

import FoundItemCard from "../../components/common/FoundItemCard";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useFetch } from "../../hooks/useFetch";
import { reportService } from "../../services/reportService";
import { REPORT_STATUS } from "../../utils/format";

const TABS = ["all", "pending", "published", "rejected", "resolved"];

const MyReports = () => {
  const [tab, setTab] = useState("all");
  const { data, error, reload } = useFetch(() => reportService.mine(), []);

  if (error && !data) return <ErrorState message={error} onRetry={reload} />;
  if (!data) return <Loader />;

  const count = (status) =>
    status === "all" ? data.length : data.filter((r) => r.status === status).length;

  const visible = tab === "all" ? data : data.filter((r) => r.status === tab);

  return (
    <div>
      <h1 className="text-2xl font-semibold">My Reports</h1>
      <p className="mt-1 text-sm text-slate-400">
        Everything you have reported as lost or found.
      </p>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
              tab === t
                ? "border-sky-500 bg-sky-600 text-white"
                : "border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            {t === "all" ? "All" : REPORT_STATUS[t]} ({count(t)})
          </button>
        ))}
      </div>

      <div className="mt-5">
        {visible.length === 0 ? (
          <EmptyState
            title="Nothing here"
            message={
              data.length === 0
                ? "Items you report as lost or found will appear here."
                : "No reports with this status."
            }
          />
        ) : (
          <div className="flex min-w-0 flex-col gap-3">
            {visible.map((report) => (
              <FoundItemCard key={report._id} itemReport={report} showStatus />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyReports;