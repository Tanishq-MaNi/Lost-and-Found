const statusStyles = {
  Pending: "border-amber-500/20 bg-amber-500/10 text-amber-300",
  "Under review": "border-sky-500/20 bg-sky-500/10 text-sky-300",
  Verified: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  Approved: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  Rejected: "border-red-500/20 bg-red-500/10 text-red-300",
  Resolved: "border-sky-500/20 bg-sky-500/10 text-sky-300",
  Reviewed: "border-sky-500/20 bg-sky-500/10 text-sky-300",
  Suggested: "border-violet-500/20 bg-violet-500/10 text-violet-300",
  Claimed: "border-amber-500/20 bg-amber-500/10 text-amber-300",
  Withdrawn: "border-slate-600 bg-slate-800 text-slate-300",
  Archived: "border-slate-600 bg-slate-800 text-slate-300",
};

export default function Badge({ children }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-xs font-medium ${
        statusStyles[children] || "border-slate-700 bg-slate-800 text-slate-300"
      }`}
    >
      {children}
    </span>
  );
}