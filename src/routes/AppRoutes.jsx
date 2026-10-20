import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../context/AuthContext";
import { AdminDataLayout } from "../context/AdminDataContext";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RegisterStudent from "../pages/auth/RegisterStudent";

import NotFound from "../pages/NotFound";
import Dashboard from "../pages/user/Dashboard";
import ReportItem from "../pages/user/ReportItem";
import LostItems from "../pages/user/LostItems";
import ClaimItem from "../pages/user/ClaimItem";
import MyReports from "../pages/user/MyReports";
import MyClaims from "../pages/user/MyClaims";
import Profile from "../pages/user/Profile";
import ItemDetails from "../pages/user/ItemDetails";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Reports from "../pages/admin/Reports";
import ClaimManagement from "../pages/admin/ClaimManagement";
import StudentManagement from "../pages/admin/StudentManagement";
import AutomaticMatches from "../pages/admin/AutomaticMatches";

// "/" shows the student dashboard, but admins are sent to their own.
function Home() {
  const { user } = useAuth();
  return user.role === "admin" ? (
    <Navigate to="/admin/dashboard" replace />
  ) : (
    <Dashboard />
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-student" element={<RegisterStudent />} />

        {/* Everything below requires login */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="items" element={<LostItems />} />
            <Route path="items/:id/claim" element={<ClaimItem />} />
            <Route path="report/:type" element={<ReportItem />} />
            <Route path="my-reports" element={<MyReports />} />
            <Route path="my-claims" element={<MyClaims />} />
            <Route path="profile" element={<Profile />} />
            <Route path="items/:id" element={<ItemDetails />} />

            {/* Admin only */}
            <Route element={<ProtectedRoute role="admin" />}>
              <Route element={<AdminDataLayout />}>
                <Route path="admin/dashboard" element={<AdminDashboard />} />
                <Route
                  path="admin/pending-reports"
                  element={<Reports status="Pending" title="Pending Reports" />}
                />
                <Route
                  path="admin/all"
                  element={<Reports title="All Reports" />}
                />
                <Route
                  path="admin/claims-management"
                  element={<ClaimManagement />}
                />
                <Route
                  path="admin/student-management"
                  element={<StudentManagement />}
                />
                <Route
                  path="admin/automatic-matches"
                  element={<AutomaticMatches />}
                />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;