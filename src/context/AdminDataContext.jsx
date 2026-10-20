import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Outlet } from "react-router-dom";

import { useToast } from "./ToastContext";
import { adminService } from "../services/adminService";
import Loader from "../components/common/Loader";
import ErrorState from "../components/common/ErrorState";

const AdminDataContext = createContext(null);

export function AdminDataProvider({ children }) {
  const { notify } = useToast();

  const [stats, setStats] = useState(null);
  const [reports, setReports] = useState([]);
  const [claims, setClaims] = useState([]);
  const [matches, setMatches] = useState([]);

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [s, r, c, m] = await Promise.all([
        adminService.stats(),
        adminService.reports(),
        adminService.claims(),
        adminService.matches(),
      ]);
      setStats(s);
      setReports(r);
      setClaims(c);
      setMatches(m);
      setLoaded(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Dashboard numbers change after most actions, so re-fetch them quietly.
  const refreshStats = () =>
    adminService.stats().then(setStats).catch(() => {});

  const replace = (setter, updated) =>
    setter((rows) => rows.map((row) => (row.id === updated.id ? updated : row)));

  // `run` calls the server, swaps the returned row into state, then toasts.
  const run = async (action, setter, message) => {
    try {
      const updated = await action();
      replace(setter, updated);
      refreshStats();
      notify(message(updated));
    } catch (err) {
      notify(err.message, "error");
    }
  };

  const updateReport = (id, label) =>
    run(
      () => adminService.setReportStatus(id, label),
      setReports,
      (r) => `Report ${r.code} marked ${label.toLowerCase()}.`
    );

  const updateClaim = (id, label) =>
    run(
      () => adminService.setClaimStatus(id, label),
      setClaims,
      (c) => `Claim ${c.code} ${label.toLowerCase()}.`
    );

  const updateMatch = (id, label) =>
    run(
      () => adminService.setMatchStatus(id, label),
      setMatches,
      (m) => `Match ${m.code} marked ${label.toLowerCase()}.`
    );

  return (
    <AdminDataContext.Provider
      value={{
        stats,
        reports,
        claims,
        matches,
        loaded,
        loading,
        error,
        reload: load,
        updateReport,
        updateClaim,
        updateMatch,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

// Shows a loader on the first load and an error screen if it fails.
function AdminGate() {
  const { loaded, loading, error, reload } = useAdminData();

  if (!loaded && loading) return <Loader label="Loading admin data..." />;
  if (!loaded && error) return <ErrorState message={error} onRetry={reload} />;

  return <Outlet />;
}

// Layout route: every admin page below it shares this data.
export function AdminDataLayout() {
  return (
    <AdminDataProvider>
      <AdminGate />
    </AdminDataProvider>
  );
}

export function useAdminData() {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error("useAdminData must be used inside <AdminDataProvider>");
  }
  return context;
}