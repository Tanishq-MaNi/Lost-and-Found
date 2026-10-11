import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";


import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import UserDashboard from "../pages/user/Dashboard"
import ReportItem from "../pages/user/ReportItem";
import LostItems from "../pages/user/LostItems";
import ClaimItem from "../services/ClaimItem";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/user"
            element={<UserDashboard />}
          />

          <Route
            path="/user/report/:type"
            element={<ReportItem />}
          />

          <Route
            path="/user/lost-items"
            element={<LostItems />}
          />

          <Route
            path="/user/claim-item"
            element={<ClaimItem />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;