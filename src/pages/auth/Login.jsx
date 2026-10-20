
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import { EyeIcon } from "../../assets/Icons";
import { useAuth } from "../../context/AuthContext";

const API_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"
).replace(/\/+$/, "");

const inputClass =
  "w-full rounded-lg border border-[#35404e] bg-[#1b222c] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("student");
  const [collegeCode, setCollegeCode] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleRoleChange(newRole) {
    setRole(newRole);
    setIdentifier("");
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setError("");

    const normalizedCollegeCode = collegeCode.trim().toUpperCase();
    const normalizedIdentifier =
      role === "admin"
        ? identifier.trim().toLowerCase()
        : identifier.trim().toUpperCase();

    if (!normalizedCollegeCode || !normalizedIdentifier || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    // Match the exact fields expected by your backend.
    const payload = {
      role,
      collegeCode: normalizedCollegeCode,
      password,
      ...(role === "admin"
        ? { email: normalizedIdentifier }
        : { registrationNumber: normalizedIdentifier }),
    };

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle non-JSON responses without crashing.
      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          response.ok
            ? "The server returned an invalid response."
            : "Unable to sign in. Please try again later."
        );
      }

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to sign in.");
      }

      const { token, user } = data;

      if (!token || !user || !user.id || !user.role) {
        throw new Error("The server returned incomplete login information.");
      }

      if (user.role !== role) {
        throw new Error("The returned account role does not match your selection.");
      }

      login({ token, user }, rememberMe);

      navigate(role === "admin" ? "/admin/dashboard" : "/", {
        replace: true,
      });
    } catch (err) {
      if (err instanceof TypeError) {
        setError("Cannot connect to the server. Check your connection and try again.");
      } else {
        setError(err.message || "Unable to sign in.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      subtitle={role === "admin" ? "ADMIN PANEL" : "STUDENT PANEL"}
      activePage="Sign in"
    >
      {/* Role selector */}
      <div className="mb-6 grid grid-cols-2 rounded-lg bg-[#1b222c] p-1">
        {["student", "admin"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => handleRoleChange(item)}
            aria-pressed={role === item}
            className={`rounded-md py-2.5 text-sm font-medium capitalize transition ${role === item
              ? "bg-blue-600 text-white shadow-md shadow-blue-950/30"
              : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* College code */}
        <div>
          <label
            htmlFor="collegeCode"
            className="mb-2 block text-xs font-medium text-gray-300"
          >
            College code
          </label>

          <input
            id="collegeCode"
            name="collegeCode"
            type="text"
            value={collegeCode}
            onChange={(e) => setCollegeCode(e.target.value)}
            placeholder="Enter college code"
            autoComplete="organization"
            maxLength={50}
            required
            disabled={loading}
            className={inputClass}
          />
        </div>

        {/* Role-specific identifier */}
        <div>
          <label
            htmlFor="identifier"
            className="mb-2 block text-xs font-medium text-gray-300"
          >
            {role === "admin" ? "Official email address" : "Registration number"}
          </label>

          <input
            id="identifier"
            name={role === "admin" ? "email" : "registrationNumber"}
            type={role === "admin" ? "email" : "text"}
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder={
              role === "admin"
                ? "admin@college.edu"
                : "Enter registration number"
            }
            autoComplete={role === "admin" ? "username" : "off"}
            maxLength={254}
            required
            disabled={loading}
            className={inputClass}
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-xs font-medium text-gray-300"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoComplete="current-password"
              required
              disabled={loading}
              className={`${inputClass} pr-12`}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              className="absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400 hover:text-white"
            >
              <EyeIcon visible={showPassword} />
            </button>
          </div>
        </div>

        {/* Remember me and password recovery */}
        <div className="flex items-center justify-between gap-3 text-xs">
          <label className="flex cursor-pointer items-center gap-2 text-gray-300">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 accent-blue-600"
            />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sky-400 transition hover:text-sky-300"
          >
            Forgot password?
          </Link>
        </div>

        {/* Backend validation and network errors */}
        {error && (
          <p
            role="alert"
            aria-live="polite"
            className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-sm text-red-300"
          >
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div className="mt-6 space-y-2 text-center text-xs leading-5 text-gray-400">
        <p>
          New student?{" "}
          <Link
            to="/register-student"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Create your account
          </Link>
        </p>
        <p>
          Setting up a college?{" "}
          <Link
            to="/register"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Register your College
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
