import { useNavigate } from "react-router-dom";

import Badge from "./Badge";
import { cap, fmtDate, REPORT_STATUS } from "../../utils/format";

const FoundItemCard = ({ itemReport, showStatus = false }) => {
  const navigate = useNavigate();

  if (!itemReport) return null;

  const image = itemReport.images?.[0]?.url;
  const open = () => navigate(`/items/${itemReport._id}`);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="flex min-w-0 cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-[#171e27] p-3 transition-colors hover:bg-[#1b2430]"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#222c38] sm:h-19 sm:w-19">
        {image ? (
          <img
            src={image}
            alt={itemReport.title}
            loading="lazy"
            className="block h-full w-full object-cover"
          />
        ) : (
          <span className="text-2xl font-semibold text-slate-500">
            {itemReport.title.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-gray-100 sm:text-[15px]">
          {itemReport.title}
        </h3>
        <p className="mt-1 truncate text-[13px] text-gray-400">
          <span
            className={
              itemReport.type === "lost" ? "text-rose-300" : "text-emerald-300"
            }
          >
            {cap(itemReport.type)}
          </span>
          {" · "}
          {itemReport.location}
        </p>
        <p className="mt-1 text-[13px] text-gray-400">
          {fmtDate(itemReport.incidentDate)}
        </p>
      </div>

      {showStatus && (
        <Badge>{REPORT_STATUS[itemReport.status] || cap(itemReport.status)}</Badge>
      )}
    </article>
  );
};

export default FoundItemCard;