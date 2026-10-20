import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#080C12] px-4 text-center text-white">
    <p className="text-5xl font-bold text-sky-400">404</p>
    <h1 className="text-xl font-semibold">Page not found</h1>
    <p className="text-sm text-gray-400">
      The page you are looking for doesn't exist or hasn't been built yet.
    </p>
    <Link
      to="/"
      className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
    >
      Go to dashboard
    </Link>
  </main>
);

export default NotFound;