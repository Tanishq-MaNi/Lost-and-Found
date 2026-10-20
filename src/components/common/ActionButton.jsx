export default function ActionButton({ children, onClick, danger = false }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
        danger
          ? "border-red-500/20 text-red-300 hover:bg-red-500/10"
          : "border-[#35404e] text-slate-200 hover:bg-[#252f3c]"
      }`}
    >
      {children}
    </button>
  );
}