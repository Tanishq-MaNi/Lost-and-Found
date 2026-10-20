import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { reportService } from "../../services/reportService";
import { useToast } from "../../context/ToastContext";
import { CATEGORIES, cap } from "../../utils/format";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#19202A] p-3 text-sm outline-none focus:border-sky-500";

const ReportItem = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { notify } = useToast();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "other",
    location: "",
    incidentDate: "",
    contactInfo: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // /report/anything-else is not a valid page.
  if (type !== "lost" && type !== "found") return <Navigate to="/" replace />;

  const isLost = type === "lost";
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    try {
      await reportService.create({ ...form, type });
      notify("Report submitted. It will be listed once an admin verifies it.");
      navigate("/my-reports");
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-semibold">
        {isLost ? "Report Lost Item" : "Report Found Item"}
      </h1>
      <p className="mt-2 text-sm text-gray-400">
        Provide the details to help identify the item. Avoid putting private
        details (like ID numbers) in the description. Keep those for the claim.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div>
          <label htmlFor="title" className="mb-2 block text-sm">Item name</label>
          <input
            id="title"
            required
            name="title"
            maxLength={100}
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. Black wallet, HP laptop"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="category" className="mb-2 block text-sm">Category</label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClass}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{cap(c)}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="incidentDate" className="mb-2 block text-sm">
              {isLost ? "Date lost" : "Date found"}
            </label>
            <input
              id="incidentDate"
              required
              type="date"
              name="incidentDate"
              max={today}
              value={form.incidentDate}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="mb-2 block text-sm">
            {isLost ? "Last seen location" : "Found location"}
          </label>
          <input
            id="location"
            required
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Central Library, 2nd floor"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block text-sm">Description</label>
          <textarea
            id="description"
            required
            name="description"
            rows={4}
            maxLength={2000}
            value={form.description}
            onChange={handleChange}
            placeholder="Colour, brand, size, marks, anything that helps identify it"
            className={`${inputClass} resize-y`}
          />
        </div>

        <div>
          <label htmlFor="contactInfo" className="mb-2 block text-sm">
            Contact info (optional)
          </label>
          <input
            id="contactInfo"
            name="contactInfo"
            value={form.contactInfo}
            onChange={handleChange}
            placeholder="Phone or where to find you"
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 rounded-lg bg-sky-600 p-3 font-medium transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Report"}
        </button>
      </form>
    </div>
  );
};

export default ReportItem;