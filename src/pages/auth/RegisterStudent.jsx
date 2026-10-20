import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import { EyeIcon } from "../../assets/Icons";
import { authService } from "../../services/authService";

const inputClass =
  "w-full rounded-lg border border-[#35404e] bg-[#1b222c] px-3.5 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 hover:border-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

const labelClass = "mb-2 block text-sm font-medium text-gray-300";

const initialForm = {
  collegeCode: "",
  registrationNumber: "",
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterStudent() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await authService.registerStudent({
        collegeCode: form.collegeCode.trim(),
        registrationNumber: form.registrationNumber.trim(),
        email: form.email.trim(),
        name: form.name.trim(),
        password: form.password,
      });
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Success screen
  if (result) {
    const verified = result.autoVerified;

    return (
      <AuthLayout subtitle="STUDENT PANEL" activePage="Register">
        <div className="text-center">
          <div
            className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
              verified
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-amber-500/10 text-amber-400"
            }`}
          >
            <span className="text-2xl">{verified ? "✓" : "…"}</span>
          </div>

          <h1 className="text-2xl font-bold">
            {verified ? "Account activated" : "Registration submitted"}
          </h1>

          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-400">
            {verified
              ? "Your details matched the college records. You can sign in now."
              : "Your registration number was not found in the college records, so an admin needs to approve your account before you can sign in."}
          </p>

          <Link
            to="/login"
            className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold hover:bg-blue-500"
          >
            Go to sign in
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout subtitle="STUDENT PANEL" activePage="Register">
      <div className="mb-6">
        <h1 className="text-xl font-bold">Create your student account</h1>
        <p className="mt-1 text-sm text-gray-400">
          Use the college code and the registration number and email your
          college has on record.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="collegeCode" className={labelClass}>
              College code <span className="text-red-400">*</span>
            </label>
            <input
              id="collegeCode"
              name="collegeCode"
              value={form.collegeCode}
              onChange={handleChange}
              placeholder="e.g. COL-1A2B3C4D"
              required
              disabled={loading}
              className={`${inputClass} uppercase`}
            />
          </div>

          <div>
            <label htmlFor="registrationNumber" className={labelClass}>
              Registration number <span className="text-red-400">*</span>
            </label>
            <input
              id="registrationNumber"
              name="registrationNumber"
              value={form.registrationNumber}
              onChange={handleChange}
              placeholder="e.g. SRM2025001"
              required
              disabled={loading}
              className={`${inputClass} uppercase`}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="the email your college has on record"
              autoComplete="email"
              required
              disabled={loading}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="name" className={labelClass}>
              Full name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Only needed if not in college records"
              autoComplete="name"
              disabled={loading}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="password" className={labelClass}>
              Password <span className="text-red-400">*</span>
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
              disabled={loading}
              className={inputClass}
            />
          </div>

          <div className="relative">
            <label htmlFor="confirmPassword" className={labelClass}>
              Confirm password <span className="text-red-400">*</span>
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
              disabled={loading}
              className={`${inputClass} pr-12`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute bottom-0 right-0 flex h-11.5 items-center px-3.5 text-gray-400 hover:text-white"
            >
              <EyeIcon visible={showPassword} />
            </button>
          </div>
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Create account"}
        </button>

        <p className="text-center text-sm text-gray-400">
          Already registered?{" "}
          <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}