import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ArrowIcon } from "../../assets/Icons";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
import { useFetch } from "../../hooks/useFetch";
import { reportService } from "../../services/reportService";
import { claimService } from "../../services/claimService";

const inputClass =
  "w-full resize-y rounded-lg border border-white/10 bg-[#19202A] p-3 text-sm outline-none focus:border-sky-500";

const ClaimItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { notify } = useToast();

  const { data: report, loading, error, reload } = useFetch(
    () => reportService.get(id),
    [id]
  );

  const [message, setMessage] = useState("");
  const [proofDescription, setProofDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (loading && !report) return <Loader />;
  if (error && !report) return <ErrorState message={error} onRetry={reload} />;

  const claimable =
    report.type === "found" &&
    report.status === "published" &&
    String(report.reportedBy) !== user.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      await claimService.create({ reportId: id, message, proofDescription });
      notify("Claim submitted. An admin will review it.");
      navigate("/my-claims");
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

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

      <h1 className="text-2xl font-semibold">Claim this item</h1>
      <p className="mt-2 text-sm text-gray-400">
        Claiming: <span className="font-medium text-white">{report.title}</span>{" "}
        ({report.location})
      </p>

      {!claimable ? (
        <p className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200">
          This item can't be claimed. Only verified found items reported by
          someone else can be claimed.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="message" className="mb-2 block text-sm">
              Message to the admin
            </label>
            <textarea
              id="message"
              required
              rows={3}
              maxLength={1500}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. I lost this on Monday near the library."
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="proof" className="mb-2 block text-sm">
              Proof of ownership
            </label>
            <textarea
              id="proof"
              required
              rows={5}
              maxLength={2000}
              value={proofDescription}
              onChange={(e) => setProofDescription(e.target.value)}
              placeholder="Details only the owner would know: contents, marks, serial number, lock screen..."
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-sky-600 p-3 font-medium transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit claim"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ClaimItem;