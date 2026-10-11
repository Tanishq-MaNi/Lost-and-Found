import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#080c12] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/8 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-sky-500/[0.07] blur-[100px]" />

      <div className="relative z-10">
        <Navbar />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-300 flex-1 px-0 sm:px-4 lg:px-6">
        <div className="min-h-full border-x border-white/6 bg-[#0d121a] sm:my-5 sm:rounded-2xl sm:border overflow-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
