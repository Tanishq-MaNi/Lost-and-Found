import { Link } from "react-router-dom";

import Badge from "../../components/common/Badge";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useFetch } from "../../hooks/useFetch";
import { claimService } from "../../services/claimService";
import { CLAIM_STATUS, cap, fmtDate } from "../../utils/format";

const MyClaims = () => {
  const { data, error, reload } = useFetch(() => claimService.mine(), []);

  if (error && !data) return <ErrorState message={error} onRetry={reload} />;
  if (!data) return <Loader />;

  return (
    <div>
      <h1 className="text-2xl font-semibold">My Claims</h1>
      <p className="mt-1 text-sm text-slate-400">
        Ownership claims you have submitted.
      </p>

      <div className="mt-5">
        {data.length === 0 ? (
          <EmptyState
            title="No claims yet"
            message="Open a found item and choose “Claim it” if it's yours."
          />
        ) : (
          <div className="flex flex-col gap-3">
            {data.map((claim) => (
              <article
                key={claim._id}
                className="rounded-xl border border-white/5 bg-[#171e27] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    {claim.report ? (
                      <Link
                        to={`/items/${claim.report._id}`}
                        className="font-semibold text-gray-100 hover:text-sky-300"
                      >
                        {claim.report.title}
                      </Link>
                    ) : (
                      <span className="font-semibold text-slate-400">Deleted item</span>
                    )}
                    <p className="mt-1 text-xs text-slate-500">
                      {claim.report && `${cap(claim.report.type)} · ${claim.report.location} · `}
                      Claimed {fmtDate(claim.createdAt)}
                    </p>
                  </div>
                  <Badge>{CLAIM_STATUS[claim.status] || cap(claim.status)}</Badge>
                </div>

                <p className="mt-3 text-sm text-slate-300">
                  <span className="text-slate-500">Your message: </span>
                  {claim.message}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  <span className="text-slate-500">Your proof: </span>
                  {claim.proofDescription}
                </p>

                {claim.decisionReason && (
                  <p className="mt-3 rounded-lg bg-white/3 p-3 text-sm text-slate-300">
                    <span className="text-slate-500">Admin note: </span>
                    {claim.decisionReason}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyClaims;