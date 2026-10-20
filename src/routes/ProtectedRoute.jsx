import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ role }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Wrong role: send them to their own home instead of a blank page.
  if (role && user.role !== role) {
    return (
      <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/"} replace />
    );
  }

  return <Outlet />;
}