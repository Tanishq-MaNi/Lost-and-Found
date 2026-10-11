import { useState } from "react";
import { EyeIcon } from "../../assets/Icons";

const campusImage =
  "vadim-sherbakov-d6ebY-faOO0-unsplash.jpg";

function BoxIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-16 w-16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M32 4 59 18 32 33 5 18 32 4Z" fill="#60A5FA" />
      <path d="M5 18 32 33V61L5 46V18Z" fill="#1675F9" />
      <path d="M59 18 32 33V61L59 46V18Z" fill="#0757CF" />
      <path
        d="M32 4 59 18 32 33 5 18 32 4Z"
        stroke="#93C5FD"
        strokeWidth="1.5"
      />
      <path
        d="M32 33V61M5 18V46L32 61 59 46V18"
        stroke="#60A5FA"
        strokeWidth="1.3"
      />
      <path
        d="M43 24v-6l-6 3v7l6-3"
        stroke="#172554"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Login = () => {
  const [role, setRole] = useState("Member");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Connect your authentication API here.
    console.log({
      role,
      email,
      password,
      rememberMe,
    });
  }

  return (

    <section >
      {/* Login form */}
      <div className="relative z-10 px-7 pb-7 pt-10 sm:px-8 sm:pt-12">
        <header className="mb-8 flex flex-col items-center text-center">
          <div className="mb-3 drop-shadow-[0_0_18px_rgba(37,99,235,0.25)]">
            <BoxIcon />
          </div>

          <h1 className="text-[29px] font-bold leading-[1.12] tracking-tight">
            College
            <br />
            Lost &amp; Found
          </h1>

          <p className="mt-3 text-[15px] text-gray-400">
            Report. Find. Return.
          </p>
        </header>

        {/* Student / Admin toggle */}
        <div
          className="mb-6 grid grid-cols-2 rounded-xl bg-[#1b222c] p-1"
          role="group"
          aria-label="Choose account type"
        >
          {["Member", "Admin"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setRole(item)}
              aria-pressed={role === item}
              className={`rounded-lg py-3 text-sm font-medium transition-all duration-200 ${role === item
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-950/40"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              College Email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@college.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-[#35404e] bg-[#1b222c] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete={
                  role === "Admin"
                    ? "current-password"
                    : "current-password"
                }
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-[#35404e] bg-[#1b222c] px-3.5 py-3 pr-12 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400 transition hover:text-white"
              >
                <EyeIcon visible={showPassword} />
              </button>
            </div>
          </div>

          {/* Remember me / Forgot password */}
          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 cursor-pointer accent-blue-600"
              />
              Remember me
            </label>

            <button
              type="button"
              onClick={() =>
                alert("Connect your forgot-password flow here.")
              }
              className="font-medium text-sky-400 transition hover:text-sky-300"
            >
              Forgot password?
            </button>
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#10151d]"
          >
            Login
          </button>
        </form>

        {/* Sign up */}
        <p className="mt-5 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => alert("Connect your registration page here.")}
            className="font-medium text-sky-400 transition hover:text-sky-300"
          >
            Sign up
          </button>
        </p>
      </div>

      {/* Campus image at the bottom */}
      <div className="relative h-28 sm:h-32.5">
        <img
          src={campusImage}
          alt="College campus building"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-b from-[#10151d] via-[#10151d]/35 to-black/40" />
        <div className="absolute inset-0 bg-linear-to-r from-[#10151d]/30 via-transparent to-[#10151d]/30" />
      </div>
    </section>

  );
}
export default Login