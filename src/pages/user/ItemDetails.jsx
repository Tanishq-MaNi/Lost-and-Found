import { Link, useNavigate, useParams } from "react-router-dom";

import { ArrowIcon } from "../../assets/Icons";
import Badge from "../../components/common/Badge";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
import { useFetch } from "../../hooks/useFetch";
import { reportService } from "../../services/reportService";
import { cap, fmtDate, REPORT_STATUS } from "../../utils/format";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { notify } = useToast();

  const { data: report, loading, error, reload } = useFetch(
    () => reportService.get(id),
    [id]
  );

  if (loading && !report) return <Loader />;
  if (error && !report) return <ErrorState message={error} onRetry={reload} />;

  const isOwner = String(report.reportedBy) === user.id;
  const isFound = report.type === "found";
  const canClaim =
    !isOwner && isFound && report.status === "published" && user.role === "student";
  const canDelete = isOwner && ["pending", "rejected"].includes(report.status);
  const canResolve = isOwner && report.status === "published";

  async function run(action, message, after) {
    try {
      await action();
      notify(message);
      after();
    } catch (err) {
      notify(err.message, "error");
    }
  }

  const handleDelete = () => {
    if (!window.confirm("Delete this report?")) return;
    run(() => reportService.remove(id), "Report deleted.", () => navigate("/my-reports"));
  };

  const handleResolve = () => {
    if (!window.confirm("Mark this item as returned? It will be closed.")) return;
    run(() => reportService.resolve(id), "Item marked as returned.", reload);
  };

  const rows = [
    ["Category", cap(report.category)],
    ["Location", report.location],
    [isFound ? "Date found" : "Date lost", fmtDate(report.incidentDate)],
    ["Reported on", fmtDate(report.createdAt)],
    ["Contact", report.contactInfo],
  ].filter(([, value]) => value);

  return (
    <div className="max-w-2xl">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-5 flex items-center gap-1 text-sm text-gray-400 hover:text-white"
      >
        <ArrowIcon />
        Back
      </button>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            className={`text-xs font-semibold uppercase tracking-widest ${
              isFound ? "text-emerald-300" : "text-rose-300"
            }`}
          >
            {isFound ? "Found item" : "Lost item"}
          </p>
          <h1 className="mt-1 text-2xl font-semibold">{report.title}</h1>
        </div>
        {isOwner && (
          <Badge>{REPORT_STATUS[report.status] || cap(report.status)}</Badge>
        )}
      </div>

      {report.images?.[0]?.url && (
        <img
          src={report.images[0].url}
          alt={report.title}
          className="mt-5 max-h-80 w-full rounded-2xl border border-white/10 object-cover"
        />
      )}

      <p className="mt-5 whitespace-pre-wrap text-sm leading-6 text-slate-300">
        {report.description}
      </p>

      <dl className="mt-6 divide-y divide-white/5 rounded-2xl border border-white/10 bg-[#141b26]">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 p-4 text-sm">
            <dt className="text-slate-400">{label}</dt>
            <dd className="text-right font-medium text-white">{value}</dd>
          </div>
        ))}
      </dl>

      {isOwner && report.status === "rejected" && report.moderationNote && (
        <p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-sm text-red-200">
          Admin note: {report.moderationNote}
        </p>
      )}

      {isOwner && report.status === "pending" && (
        <p className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200">
          Waiting for an admin to verify this report. Others can't see it yet.
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {canClaim && (
          <Link
            to={`/items/${id}/claim`}
            className="rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold transition hover:bg-sky-500"
          >
            This is mine. Claim it
          </Link>
        )}
        {canResolve && (
          <button
            type="button"
            onClick={handleResolve}
            className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold transition hover:bg-emerald-500"
          >
            Mark as returned
          </button>
        )}
        {canDelete && (
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-lg border border-red-500/30 px-5 py-3 text-sm font-semibold text-red-300 transition hover:bg-red-500/10"
          >
            Delete report
          </button>
        )}
      </div>

      {!isFound && !isOwner && (
        <p className="mt-5 text-sm text-slate-400">
          Did you find this? Report it as a found item, or use the contact info
          above.
        </p>
      )}
    </div>
  );
};

export default ItemDetails;