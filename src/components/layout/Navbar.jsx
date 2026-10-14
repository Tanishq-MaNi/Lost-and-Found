
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  BurgerMenuIcon,
  NotificationIcon,
} from "../../assets/Icons";

const Navbar = ({ burgerMenuActive, setBurgerMenuActive }) => {

  const [notifi, setNotifi] = useState(true);
  return (
    <>
      {/* Header */}
      < header className="flex items-center justify-between" >

        <button
          onClick={() => setBurgerMenuActive(true)}
          type="button"
          aria-label="Open menu"
          aria-controls="app-sidebar"
          aria-expanded={burgerMenuActive}
          className="rounded-xl border border-white/8 bg-white/3 p-2.5 transition hover:bg-white/8 lg:hidden"
        >
          <BurgerMenuIcon size={24} />
        </button>

        {/* temporary navigation */}
        <nav className="relative z-10 flex w-full max-w-7xl justify-end gap-4 px-6 py-4">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/admin/pending-reports">Pending</Link>
        </nav>

        <div className="relative">
          {notifi && (
            <span className="absolute right-2 top-2 z-10 h-2.5 w-2.5 rounded-full border-2 border-[#0d121a] bg-rose-500" />
          )}

          <button
            type="button"
            aria-label="Notifications"
            onClick={() => setNotifi(!notifi)}
            className="rounded-xl border border-white/8 bg-white/3 p-2 transition hover:bg-white/8"
          >
            <NotificationIcon size={28} />
          </button>
        </div>
      </header >
    </>

  );
};

export default Navbar;
