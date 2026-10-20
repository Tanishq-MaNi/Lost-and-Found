import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  Dashboard,
  File,
  Users,
  ClipboardCheck,
  GitCompareArrows,
  PackageCheck,
} from "../../assets/Icons";
import { useAuth } from "../../context/AuthContext";

const adminGroups = [
  {
    title: "ADMIN",
    links: [
      { label: "Admin Dashboard", path: "/admin/dashboard", icon: <Dashboard color="#90a1b9" /> },
      { label: "Pending Reports", path: "/admin/pending-reports", icon: <File color="#90a1b9" /> },
      { label: "Student Management", path: "/admin/student-management", icon: <Users color="#90a1b9" /> },
      { label: "Claims Management", path: "/admin/claims-management", icon: <ClipboardCheck color="#90a1b9" /> },
      { label: "Automatic Matches", path: "/admin/automatic-matches", icon: <GitCompareArrows color="#90a1b9" /> },
      { label: "All Reports", path: "/admin/all", icon: <PackageCheck color="#90a1b9" /> },
    ],
  },
];

const studentGroups = [
  {
    title: "WORKSPACE",
    links: [
      { label: "Dashboard", path: "/", icon: <Dashboard color="#90a1b9" /> },
      { label: "Browse Items", path: "/items", icon: "⌕" },
    ],
  },
  {
    title: "MY ACTIVITY",
    links: [
      { label: "My Reports", path: "/my-reports", icon: "▤" },
      { label: "My Claims", path: "/my-claims", icon: "✓" },
      { label: "Report Lost Item", path: "/report/lost", icon: "↗" },
      { label: "Report Found Item", path: "/report/found", icon: "＋" },
    ],
  },
];

const accountGroup = {
  title: "ACCOUNT",
  links: [{ label: "My Profile", path: "/profile", icon: "♙" }],
};

const SideBar = ({ open, onClose, userInfo, desktop = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const isAdmin = userInfo?.role === "admin";
  const groups = [...(isAdmin ? adminGroups : studentGroups), accountGroup];
  const home = isAdmin ? "/admin/dashboard" : "/";

  useEffect(() => {
    if (!open || desktop) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose, desktop]);

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  const displayName =
    userInfo?.name ||
    userInfo?.email ||
    userInfo?.registrationNumber ||
    "Campus Member";

  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleSignOut = () => {
    onClose();
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <>
      {/* Mobile backdrop */}
      {!desktop && (
        <button
          type="button"
          aria-label="Close navigation"
          tabIndex={open ? 0 : -1}
          onClick={onClose}
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        />
      )}

      {/* Sidebar drawer / desktop sidebar */}
      <aside
        id="app-sidebar"
        aria-label="Main navigation"
        aria-hidden={!desktop && !open}
        className={
          desktop
            ? "flex h-full w-full flex-col bg-[#0b111b]"
            : `fixed inset-y-0 left-0 z-50 flex w-[min(300px,85vw)] flex-col border-r border-white/8 bg-[#0d1420] shadow-2xl shadow-black/40 transition-transform duration-300 ease-out lg:hidden ${
                open ? "translate-x-0" : "-translate-x-full"
              }`
        }
      >
        {/* Brand */}
        <div className="flex h-19 shrink-0 items-center justify-between border-b border-white/[0.07] px-5">
          <Link to={home} onClick={onClose} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-xl text-sky-300">
              ◈
            </span>
            <span>
              <span className="block text-base font-bold text-white">
                Lost &amp; Found
              </span>
              <span className="block text-[11px] text-slate-500">
                Campus community
              </span>
            </span>
          </Link>

          {!desktop && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-lg px-3 py-2 text-xl text-slate-400 transition hover:bg-white/6 hover:text-white"
            >
              ×
            </button>
          )}
        </div>

        {/* User profile */}
        <div className="mx-4 mt-5 rounded-2xl border border-white/[0.07] bg-white/2.5 p-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 font-bold text-sky-300 ring-1 ring-sky-400/15">
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {displayName}
              </p>
              <p className="mt-1 text-xs text-emerald-400">
                ● {isAdmin ? "Administrator" : "Campus member"}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="custom-scrollbar flex-1 overflow-y-auto px-4 pb-5 pt-6">
          {groups.map((group, index) => (
            <div key={group.title} className={index ? "mt-7" : ""}>
              <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.18em] text-slate-500">
                {group.title}
              </p>

              <div className="space-y-1">
                {group.links.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`relative flex min-h-11 items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-sky-400/10 text-sky-300"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {active && (
                        <span className="absolute bottom-2 left-0 top-2 w-0.75 rounded-r-full bg-sky-400" />
                      )}
                      <span className="flex h-6 w-6 items-center justify-center text-lg">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-white/[0.07] p-4">
          <p className="mb-3 rounded-xl bg-sky-400/5 p-3 text-xs leading-5 text-slate-400">
            Help your campus community reunite people with their belongings.
          </p>

          <button
            type="button"
            onClick={handleSignOut}
            className="flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-rose-300 transition hover:bg-rose-400/8"
          >
            <span className="text-lg">↪</span>
            Sign out
          </button>

          <p className="mt-3 text-center text-[10px] text-slate-600">
            Lost &amp; Found · Campus Edition
          </p>
        </div>
      </aside>
    </>
  );
};

export default SideBar;