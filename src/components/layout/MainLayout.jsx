import { Outlet } from "react-router-dom";
import { useState } from "react";

import SideBar from "./SideBar";
import Navbar from "./Navbar"

function MainLayout() {
  const userInfo = { name: "User" };
  const [burgerMenuActive, setBurgerMenuActive] = useState(false)

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#080c12] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/8 blur-[100px]" />
      <div className="pointer-events-none fixed -right-32 top-1/2 h-80 w-80 rounded-full bg-sky-500/[0.07] blur-[100px]" />

      <div className="relative z-10 flex min-h-screen">

        {/* Desktop sidebar */}
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-white/[0.07] bg-[#0b111b] lg:block">
          <SideBar
            open={true}
            onClose={() => { }}
            userInfo={userInfo}
            desktop
          />
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1 lg:ml-64">
          <div className="mx-auto flex w-full max-w-350 flex-col gap-7 px-4 py-5 sm:gap-8 sm:px-6 sm:py-7 lg:gap-9 lg:px-10 lg:py-10 2xl:px-12">
            {burgerMenuActive &&
              <SideBar
                open={burgerMenuActive}
                onClose={() => setBurgerMenuActive(false)}
                userInfo={userInfo}
              />
            }
            <Navbar burgerMenuActive={burgerMenuActive} setBurgerMenuActive={setBurgerMenuActive} />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
