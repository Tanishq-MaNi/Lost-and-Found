import { CheckCircle2, ClipboardCheck, Clock3 } from "lucide-react";

import SectionTitle from "../../components/common/SectionTitle";
import ActionButton from "../../components/common/ActionButton";
import Badge from "../../components/common/Badge";
import StatCard from "../../components/common/StatCard";
import { useAdminData } from "../../context/AdminDataContext";

const isOpen = (status) => status === "Pending" || status === "Under review";

const ClaimManagement = () => {
  const { claims, updateClaim } = useAdminData();

  const pending = claims.filter((c) => isOpen(c.status)).length;
  const approved = claims.filter((c) => c.status === "Approved").length;

  return (
    <>
      <SectionTitle
        title="Claims Management"
        description="Review ownership requests for found items."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          title="Total Claims"
          value={claims.length}
          change="All requests"
          icon={ClipboardCheck}
          color="bg-blue-500/10 text-blue-400"
        />
        <StatCard
          title="Awaiting Review"
          value={pending}
          change="Need a decision"
          icon={Clock3}
          color="bg-amber-500/10 text-amber-400"
        />
        <StatCard
          title="Approved Claims"
          value={approved}
          change="Accepted requests"
          icon={CheckCircle2}
          color="bg-emerald-500/10 text-emerald-400"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[#26303d] bg-[#111720]">
        <table className="w-full min-w-200 text-left text-sm">
          <thead className="bg-[#151d28] text-xs text-slate-500">
            <tr>
              <th className="px-5 py-4 font-medium">Claim</th>
              <th className="px-5 py-4 font-medium">Item and proof</th>
              <th className="px-5 py-4 font-medium">Claimant</th>
              <th className="px-5 py-4 font-medium">Date</th>
              <th className="px-5 py-4 font-medium">Status</th>
              <th className="px-5 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#26303d]">
            {claims.map((claim) => (
              <tr key={claim.id} className="align-top hover:bg-white/2">
                <td className="px-5 py-4 text-slate-400">{claim.code}</td>
                <td className="max-w-sm px-5 py-4">
                  <p className="font-medium text-white">{claim.item}</p>
                  <p className="mt-2 text-xs text-slate-400">
                    <span className="text-slate-500">Message: </span>
                    {claim.message}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    <span className="text-slate-500">Proof: </span>
                    {claim.proof}
                  </p>
                </td>
                <td className="px-5 py-4 text-slate-300">{claim.claimant}</td>
                <td className="px-5 py-4 text-slate-400">{claim.date}</td>
                <td className="px-5 py-4">
                  {/* Badge has no "Approved" style, so reuse the green one */}
                  <Badge>{claim.status === "Approved" ? "Verified" : claim.status}</Badge>
                </td>
                <td className="px-5 py-4">
                  {isOpen(claim.status) ? (
                    <div className="flex gap-2">
                      <ActionButton onClick={() => updateClaim(claim.id, "Approved")}>
                        Approve
                      </ActionButton>
                      <ActionButton danger onClick={() => updateClaim(claim.id, "Rejected")}>
                        Reject
                      </ActionButton>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-600">No actions</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {claims.length === 0 && (
          <p className="p-10 text-center text-sm text-slate-500">
            No claims have been submitted yet.
          </p>
        )}
      </div>
    </>
  );
};

export default ClaimManagement;