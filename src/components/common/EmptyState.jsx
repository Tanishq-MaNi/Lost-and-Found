const EmptyState = ({ title, message }) => (
    <div className="rounded-2xl border border-dashed border-[#35404e] bg-[#111720] p-10 text-center">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {message && <p className="mt-2 text-sm text-slate-400">{message}</p>}
    </div>
);

export default EmptyState;