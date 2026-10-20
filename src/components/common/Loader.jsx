const Loader = ({ label = "Loading..." }) => (
  <div
    role="status"
    className="flex items-center justify-center gap-3 p-16 text-sm text-slate-400"
  >
    <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-600 border-t-sky-400" />
    {label}
  </div>
);

export default Loader;