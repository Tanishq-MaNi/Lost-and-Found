import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ArrowIcon } from "../../assets/Icons";

const ReportItem = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const isLost = type === "lost";

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //send formData to your Express backend.
    console.log({ type, ...formData });
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-1  mb-5 text-sm text-gray-400 hover:text-white"
      >
        <ArrowIcon /> 
        Back to Dashboard
      </button>

      <h1 className="text-2xl font-semibold">
        {isLost ? "Report Lost Item" : "Report Found Item"}
      </h1>

      <p className="mt-2 text-sm text-gray-400">
        Provide the details to help identify the item.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

        <div>
          <label className="mb-2 block text-sm">Item name</label>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Wallet, ID card"
            className="w-full rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">Description</label>
          <textarea
            required
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the item and identifying details"
            rows={3}
            className="w-full resize-y rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">
            {isLost ? "Last seen location" : "Found location"}
          </label>
          <input
            required
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. College library"
            className="w-full rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">Date</label>
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-lg border border-white/10 bg-[#19202A] p-3 outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm">Item image (optional)</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-sm text-gray-400 file:mr-3 file:rounded-md file:border-0 file:bg-[#263241] file:p-2 file:text-white"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-sky-600 p-3 font-medium transition hover:bg-sky-500"
        >
          Submit Report
        </button>

      </form>
    </div>
  );
};

export default ReportItem;
