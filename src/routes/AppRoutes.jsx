import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";


import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/user/Dashboard"
import ReportItem from "../pages/user/ReportItem";
import LostItems from "../pages/user/LostItems";
import ClaimItem from "../services/ClaimItem";
import PendingVerification from "../pages/admin/PendingVerification";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/report/:type"
            element={<ReportItem />}
          />

          <Route
            path="/lost-items"
            element={<LostItems />}
          />

          <Route
            path="/user/claim-item"
            element={<ClaimItem />}
          />

          <Route
            path="/admin/pending-reports"
            element={<PendingVerification />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;