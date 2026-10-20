import { api } from "./api";

export const itemService = {
    list: (params = {}) => api(`/items?${new URLSearchParams(params)}`),
    mine: () => api("/items/mine"),
    get: (id) => api(`/items/${id}`),
    create: (formData) => api("/items", { method: "POST", body: formData }), // multipart for the image
};

export const adminService = {
    stats: () => api("/admin/stats"),
    reports: (status) => api(`/admin/reports${status ? `?status=${status}` : ""}`),
    setReportStatus: (id, status) => api(`/admin/reports/${id}/status`, { method: "PATCH", body: { status } }),
    claims: () => api("/admin/claims"),
    setClaimStatus: (id, status) => api(`/admin/claims/${id}/status`, { method: "PATCH", body: { status } }),
    students: () => api("/admin/students"),
    importStudents: (file) => { const f = new FormData(); f.append("file", file); return api("/admin/students/import", { method: "POST", body: f }); },
    matches: () => api("/admin/matches"),
};