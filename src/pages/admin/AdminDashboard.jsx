import { useNavigate } from "react-router-dom";
import {
  FileCheck2,
  Users,
  ClipboardCheck,
  GitCompareArrows,
  ArrowUpRight,
  Check,
  X,
  Clock3,
  FileWarning,
  Activity,
} from "lucide-react";

import Badge from "../../components/common/Badge";
import StatCard from "../../components/common/StatCard";
import { useAdminData } from "../../context/AdminDataContext";
import { useAuth } from "../../context/AuthContext";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { stats, reports, claims, matches, updateReport } = useAdminData();

  const pendingReports = reports.filter((r) => r.status === "Pending");
  const pendingClaims = claims.filter((c) => c.status === "Pending");
  const pendingStudentCount = stats?.pendingStudents ?? 0;
  const totalStudents = stats?.totalStudents ?? 0;

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const tasks = [
    {
      title: "Verify new reports",
      detail: `${pendingReports.length} reports awaiting approval`,
      icon: FileWarning,
      color: "text-amber-400 bg-amber-500/10",
      path: "/admin/pending-reports",
    },
    {
      title: "Review ownership claims",
      detail: `${pendingClaims.length} claims need review`,
      icon: ClipboardCheck,
      color: "text-violet-400 bg-violet-500/10",
      path: "/admin/claims-management",
    },
    {
      title: "Verify student records",
      detail: `${pendingStudentCount} student records pending`,
      icon: Users,
      color: "text-blue-400 bg-blue-500/10",
      path: "/admin/student-management",
    },
    {
      title: "Review suggested matches",
      detail: `${matches.filter((m) => m.status === "Suggested").length} automatic suggestions`,
      icon: GitCompareArrows,
      color: "text-emerald-400 bg-emerald-500/10",
      path: "/admin/automatic-matches",
    },
  ];

  const activity = [
    { title: "New report submitted", detail: "Black Wallet · Central Library", time: "Today", color: "bg-blue-400" },
    { title: "New ownership claim", detail: "Claim CLM-208", time: "Today", color: "bg-violet-400" },
    { title: "Potential match generated", detail: "Match MAT-301 · 94% score", time: "Today", color: "bg-emerald-400" },
  ];

  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm text-blue-400">{today}</p>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Welcome back, {user?.name || "Admin"}
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Here is what's happening at your college today.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/pending-reports")}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
        >
          <FileCheck2 size={17} />
          Review pending reports
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Reports"
          value={reports.length}
          change="All submissions"
          icon={FileCheck2}
          color="bg-blue-500/10 text-blue-400"
        />
        <StatCard
          title="Pending Reports"
          value={pendingReports.length}
          change="Needs attention"
          icon={Clock3}
          color="bg-amber-500/10 text-amber-400"
        />
        <StatCard
          title="Pending Claims"
          value={pendingClaims.length}
          change="Awaiting review"
          icon={ClipboardCheck}
          color="bg-violet-500/10 text-violet-400"
        />
        <StatCard
          title="Registered Students"
          value={totalStudents}
          change={`${pendingStudentCount} pending verification`}
          icon={Users}
          color="bg-emerald-500/10 text-emerald-400"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-[1.65fr_1fr]">
        {/* Reports awaiting verification */}
        <section className="min-w-0 rounded-2xl border border-[#26303d] bg-[#111720]">
          <div className="flex flex-col justify-between gap-3 border-b border-[#26303d] p-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-semibold text-white">
                Reports awaiting verification
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Check new submissions before listing them.
              </p>
            </div>
            <button
              onClick={() => navigate("/admin/pending-reports")}
              className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
            >
              View all <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-162.5 text-left text-sm">
              <thead className="bg-[#151d28] text-xs text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Item</th>
                  <th className="px-5 py-3 font-medium">Reporter</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#26303d]">
                {pendingReports.slice(0, 4).map((report) => (
                  <tr key={report.code} className="hover:bg-white/2">
                    <td className="px-5 py-4">
                      <p className="font-medium text-white">{report.item}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {report.code} · {report.type}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-slate-300">{report.owner}</td>
                    <td className="px-5 py-4 text-slate-400">{report.date}</td>
                    <td className="px-5 py-4">
                      <Badge>{report.status}</Badge>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          title="Verify report"
                          onClick={() => updateReport(report.code, "Verified")}
                          className="rounded-lg border border-emerald-500/20 p-2 text-emerald-400 hover:bg-emerald-500/10"
                        >
                          <Check size={15} />
                        </button>
                        <button
                          title="Reject report"
                          onClick={() => updateReport(report.code, "Rejected")}
                          className="rounded-lg border border-red-500/20 p-2 text-red-400 hover:bg-red-500/10"
                        >
                          <X size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {pendingReports.length === 0 && (
              <p className="p-8 text-center text-sm text-slate-500">
                All reports have been reviewed.
              </p>
            )}
          </div>
        </section>

        {/* Pending actions */}
        <section className="rounded-2xl border border-[#26303d] bg-[#111720]">
          <div className="border-b border-[#26303d] p-5">
            <h3 className="font-semibold text-white">Pending actions</h3>
            <p className="mt-1 text-xs text-slate-500">
              Tasks requiring administrator attention.
            </p>
          </div>

          <div className="space-y-3 p-4">
            {tasks.map((task) => {
              const Icon = task.icon;
              return (
                <button
                  key={task.title}
                  onClick={() => navigate(task.path)}
                  className="flex w-full items-center gap-3 rounded-xl border border-[#26303d] p-3 text-left transition hover:border-[#425167] hover:bg-[#151d28]"
                >
                  <div className={`rounded-xl p-3 ${task.color}`}>
                    <Icon size={19} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">{task.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{task.detail}</p>
                  </div>
                  <ArrowUpRight size={16} className="shrink-0 text-slate-500" />
                </button>
              );
            })}
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Automatic matching */}
        <section className="rounded-2xl border border-[#26303d] bg-[#111720] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">Automatic matching</h3>
              <p className="mt-1 text-xs text-slate-500">
                Potential lost and found item pairs.
              </p>
            </div>
            <button
              onClick={() => navigate("/admin/automatic-matches")}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              View all
            </button>
          </div>

          <div className="space-y-4">
            {matches.slice(0, 3).map((match) => (
              <div key={match.id} className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                  <GitCompareArrows size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">
                    {match.lost}
                  </p>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    Possible match: {match.found}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-emerald-400">{match.score}%</p>
                  <p className="mt-1 text-[10px] text-slate-500">Match score</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent activity */}
        <section className="rounded-2xl border border-[#26303d] bg-[#111720] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">Recent activity</h3>
              <p className="mt-1 text-xs text-slate-500">
                Latest actions in the system.
              </p>
            </div>
            <Activity size={19} className="text-slate-500" />
          </div>

          <div className="space-y-5">
            {activity.map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${item.color}`} />
                  <span className="mt-2 h-5 w-px bg-[#303b4a]" />
                </div>
                <div className="flex-1 pb-1">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.detail}</p>
                </div>
                <span className="text-xs text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}