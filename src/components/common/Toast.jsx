import { AlertCircle, CheckCircle2 } from "lucide-react";

const Toast = ({ message, type = "success" }) => {
  const isError = type === "error";
  const Icon = isError ? AlertCircle : CheckCircle2;

  return (
    <div
      role={isError ? "alert" : "status"}
      className="fixed right-4 top-20 z-60 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-xl border border-[#35404e] bg-[#151e29] px-4 py-3 text-sm text-white shadow-xl"
    >
      <Icon
        size={17}
        className={`shrink-0 ${isError ? "text-red-400" : "text-emerald-400"}`}
      />
      {message}
    </div>
  );
};

export default Toast;