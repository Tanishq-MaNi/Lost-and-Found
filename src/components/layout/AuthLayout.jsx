import {
  CampusIllustration,
  FindItLOGO
} from "../../assets/Icons"

export default function AuthLayout({ children, activePage = "Sign in", subtitle = "STUDENT PANEL" }) {
  const title = "Find-It"
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080C12] px-4 py-8 text-white sm:px-6">
      <section className={`grid w-full max-w-5xl overflow-hidden rounded-2xl border border-[#26374A] bg-[#10151D] shadow-2xl shadow-black/40 ${(activePage === "Sign in") ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} `}>

        {/* Illustration panel */}
        {activePage === "Sign in" &&
          <aside className="relative hidden min-h-150 items-center justify-center overflow-hidden border-r border-[#26374A] bg-[#0D1724] p-8 lg:flex">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

            <div className="relative z-10 w-full text-center">
              <CampusIllustration />
              <h2 className="mt-5 text-xl font-semibold tracking-wide">
                Lost something on campus?
              </h2>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-400">
                Report lost items, discover found belongings, and help your
                campus community return them to their owners.
              </p>
            </div>
          </aside>
        }

        {/* Authentication panel */}
        <div className="relative flex min-w-0 flex-col justify-center px-6 py-9 sm:px-10 lg:px-12">
          <div className="mx-auto w-full max-w-full ">
            {activePage === "Sign in" &&
              <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 shadow-lg shadow-blue-950/20">
                <FindItLOGO />
              </div>

              <h1 className="text-xl font-bold tracking-wide">{title}</h1>
              <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-sky-400">
                {subtitle}
              </p>
            </div>
            }

            {children}
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">
            College Lost &amp; Found · Report. Find. Return.
          </p>
        </div>
      </section>
    </main>
  );
}
