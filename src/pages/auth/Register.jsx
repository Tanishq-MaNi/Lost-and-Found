import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import { EyeIcon } from "../../assets/Icons";

const API_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// Update this path to match your Express route.
const REGISTER_URL = `${API_URL}/api/auth/register-admin`;

const initialForm = {
  collegeName: "",
  collegeEmail: "",
  collegePhone: "",
  collegeAddress: "",
  collegeWebsite: "",
  adminName: "",
  adminEmail: "",
  password: "",
  confirmPassword: "",
};

const inputClass =
  "w-full rounded-lg border border-[#35404e] bg-[#1b222c] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

const labelClass = "mb-2 block text-sm font-medium text-gray-300";

function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        maxLength={type === "password" ? undefined : 200}
        className={inputClass}
      />
    </div>
  );
}

export default function CollegeAdminRegister() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collegeName: form.collegeName.trim(),
          collegeEmail: form.collegeEmail.trim(),
          collegePhone: form.collegePhone.trim(),
          collegeAddress: form.collegeAddress.trim(),
          collegeWebsite: form.collegeWebsite.trim(),
          adminName: form.adminName.trim(),
          adminEmail: form.adminEmail.trim(),
          password: form.password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Registration failed. Please try again."
        );
      }

      setSuccess(result.data);
      setForm(initialForm);
    } catch (err) {
      setError(
        err.message ||
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080c12] px-4 py-10 text-white">
        <div className="w-full max-w-lg rounded-2xl border border-[#283545] bg-[#0e141e] p-6 shadow-2xl sm:p-9">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-8 w-8"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="m5 12 4 4L19 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold">
            Registration successful!
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Your college and administrator account have been created.
            Save the college code below. Students will need it to log in.
          </p>

          <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Your college code
            </p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="break-all font-mono text-xl font-bold text-blue-300">
                {success.college.code}
              </p>

              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText(success.college.code)
                }
                className="shrink-0 rounded-lg border border-[#354456] px-3 py-2 text-sm hover:bg-white/5"
              >
                Copy
              </button>
            </div>
          </div>

          <div className="mt-5 space-y-2 text-sm text-gray-400">
            <p>
              College:{" "}
              <span className="text-white">{success.college.name}</span>
            </p>
            <p>
              Admin:{" "}
              <span className="text-white">{success.admin.email}</span>
            </p>
          </div>

          <Link
            to="/login"
            className="mt-7 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold hover:bg-blue-500"
          >
            Continue to Login
          </Link>

          <p className="mt-4 text-center text-xs text-gray-500">
            Keep your college code safe and share it only with authorized
            members of your college.
          </p>
        </div>
      </main>
    );
  }

  return (
    <AuthLayout subtitle={'ADMIN PANEL'} activePage={"Register"}>

      <div className="relative w-full ">

        <form
          onSubmit={handleSubmit}
          className=""
        >
          {/* College details */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400">
                01
              </div>

              <div>
                <h2 className="font-semibold">College information</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Details used to identify your institution
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label="College name"
                name="collegeName"
                value={form.collegeName}
                onChange={handleChange}
                placeholder="e.g. SRM University, Delhi-NCR"
                required
              />

              <FormField
                label="Official college email"
                name="collegeEmail"
                type="email"
                value={form.collegeEmail}
                onChange={handleChange}
                placeholder="contact@college.edu"
                autoComplete="organization"
                required
              />

              <FormField
                label="College phone"
                name="collegePhone"
                type="tel"
                value={form.collegePhone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />

              <FormField
                label="College website"
                name="collegeWebsite"
                type="url"
                value={form.collegeWebsite}
                onChange={handleChange}
                placeholder="https://college.edu"
              />

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="collegeAddress">
                  College address
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <textarea
                  id="collegeAddress"
                  name="collegeAddress"
                  value={form.collegeAddress}
                  onChange={handleChange}
                  placeholder="Enter the complete college address"
                  required
                  rows={3}
                  maxLength={500}
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>
          </section>

          <div className="border-y my-6 border-[#27313e]" />

          {/* Admin details */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400">
                02
              </div>

              <div>
                <h2 className="font-semibold">Administrator account</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Create the account used to manage your college
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <FormField
                label="Admin full name"
                name="adminName"
                value={form.adminName}
                onChange={handleChange}
                placeholder="Enter full name"
                autoComplete="name"
                required
              />

              <FormField
                label="Official admin email"
                name="adminEmail"
                type="email"
                value={form.adminEmail}
                onChange={handleChange}
                placeholder="admin@college.edu"
                autoComplete="email"
                required
              />

              <div>
                <label className={labelClass} htmlFor="password">
                  Password
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className={inputClass}
                />
              </div>

              <div className="relative">
                <label className={labelClass} htmlFor="confirmPassword">
                  Confirm password
                  <span className="ml-1 text-red-400">*</span>
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-400 hover:text-white"
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>

            </div>
          </section>

          {/* Error message */}
          {error && (
            <div
              role="alert"
              className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Registering college...
              </>
            ) : (
              "Register College & Admin"
            )}
          </button>

          <p className="mt-5 text-center text-sm text-gray-400">
            Already registered?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>


        </form>


      </div>

    </AuthLayout>
  );
}
