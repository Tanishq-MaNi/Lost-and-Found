import { ArrowUpRight } from "lucide-react";

export default function StatCard({ title, value, change, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-[#26303d] bg-[#111720] p-5 transition hover:border-[#3a485a]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-slate-400">{title}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {value}
          </h3>
        </div>
        <div className={`rounded-xl p-3 ${color}`}>
          <Icon size={21} />
        </div>
      </div>

      {change && (
        <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
          <ArrowUpRight size={14} className="text-emerald-400" />
          <span>{change}</span>
        </div>
      )}
    </div>
  );
}