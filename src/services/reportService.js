import { api } from "./api";

// Drops empty values so the URL stays clean.
const toQuery = (params) =>
  new URLSearchParams(Object.entries(params).filter(([, v]) => v)).toString();

export const reportService = {
  // Published reports in the student's college: { reports, pagination }
  list: (params = {}) => api(`/reports?${toQuery(params)}`),

  mine: async () => (await api("/reports/my")).reports,
  stats: async () => (await api("/reports/my/stats")).stats,
  get: async (id) => (await api(`/reports/${id}`)).report,

  create: (body) => api("/reports", { method: "POST", body }),
  resolve: (id) => api(`/reports/${id}/resolve`, { method: "PATCH" }),
  remove: (id) => api(`/reports/${id}`, { method: "DELETE" }),
};