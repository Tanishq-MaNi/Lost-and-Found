const ErrorState = ({ message, onRetry }) => (
  <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-10 text-center">
    <h2 className="text-lg font-semibold text-red-200">Something went wrong</h2>
    <p className="mt-2 text-sm text-red-300/80">{message}</p>
    {onRetry && (
      <button
        type="button"
        onClick={onRetry}
        className="mt-5 rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-200 hover:bg-red-500/10"
      >
        Try again
      </button>
    )}
  </div>
);

export default ErrorState;