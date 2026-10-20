import { api } from "./api";

const cap = (text = "") => text.charAt(0).toUpperCase() + text.slice(1);

const shortCode = (prefix, id) => `${prefix}-${String(id).slice(-6).toUpperCase()}`;

const fmtDate = (value) =>
  value
    ? new Date(value).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

// ---- backend value -> label shown in the UI ----
const REPORT_LABEL = {
  pending: "Pending",
  published: "Verified",
  rejected: "Rejected",
  resolved: "Resolved",
  archived: "Archived",
};

// ---- label from the UI -> value the backend expects ----
const REPORT_API = {
  Verified: "published",
  Rejected: "rejected",
  Resolved: "resolved",
};

const CLAIM_LABEL = {
  pending: "Pending",
  under_review: "Under review",
  approved: "Approved",
  rejected: "Rejected",
  withdrawn: "Withdrawn",
};

const mapReport = (r) => ({
  id: r._id,
  code: shortCode("RPT", r._id),
  item: r.title,
  type: cap(r.type),
  category: cap(r.category),
  location: r.location,
  date: fmtDate(r.incidentDate),
  owner: r.reportedBy?.name || "Unknown",
  status: REPORT_LABEL[r.status] || cap(r.status),
});

const mapClaim = (c) => ({
  id: c._id,
  code: shortCode("CLM", c._id),
  item: c.report?.title || "Deleted item",
  claimant: c.claimedBy?.name || "Unknown",
  date: fmtDate(c.createdAt),
  message: c.message,
  proof: c.proofDescription,
  status: CLAIM_LABEL[c.status] || cap(c.status),
});

const mapMatch = (m) => ({
  id: m._id,
  code: shortCode("MAT", m._id),
  lost: m.lostReport?.title || "Deleted report",
  found: m.foundReport?.title || "Deleted report",
  score: Math.round(m.score),
  status: m.status,
});

const mapStudent = (s) => ({
  id: s._id,
  name: s.name,
  email: s.email || "",
  regNo: s.registrationNumber,
  department: s.department || "-",
  status: cap(s.verificationStatus),
});

export const adminService = {
  // ----- dashboard -----
  stats: async () => (await api("/admin/dashboard")).stats,

  // ----- reports -----
  reports: async () => (await api("/admin/reports")).reports.map(mapReport),
  setReportStatus: async (id, label) => {
    const res = await api(`/admin/reports/${id}/status`, {
      method: "PATCH",
      body: { status: REPORT_API[label] },
    });
    return mapReport(res.report);
  },

  // ----- claims -----
  claims: async () => (await api("/admin/claims")).claims.map(mapClaim),
  setClaimStatus: async (id, label) => {
    const res = await api(`/admin/claims/${id}/status`, {
      method: "PATCH",
      body: { status: label.toLowerCase() },
    });
    return mapClaim(res.claim);
  },

  // ----- matches -----
  matches: async () => (await api("/admin/matches")).matches.map(mapMatch),
  setMatchStatus: async (id, label) => {
    const res = await api(`/admin/matches/${id}/status`, {
      method: "PATCH",
      body: { status: label },
    });
    return mapMatch(res.match);
  },

  // ----- students (paginated on the server) -----
  students: async (params = {}) => {
    const query = new URLSearchParams(
      Object.entries(params).filter(([, value]) => value)
    );
    const res = await api(`/admin/students?${query}`);
    return {
      students: res.students.map(mapStudent),
      counts: res.counts,
      pagination: res.pagination,
    };
  },

  setStudentStatus: (id, label) =>
    api(`/admin/students/${id}/status`, {
      method: "PATCH",
      body: { status: label.toLowerCase() },
    }),

  // body: { status, ids } or { status, allPending: true }
  bulkStudents: (body) =>
    api("/admin/students/bulk-status", { method: "PATCH", body }),

  // Sends the rows in chunks of 1000 and adds up the results.
  importStudents: async (rows) => {
    const CHUNK = 1000;
    const summary = { added: 0, updated: 0, skipped: 0 };
    const invalid = [];

    for (let i = 0; i < rows.length; i += CHUNK) {
      const res = await api("/admin/students/import", {
        method: "POST",
        body: { students: rows.slice(i, i + CHUNK) },
      });

      summary.added += res.summary.added;
      summary.updated += res.summary.updated;
      summary.skipped += res.summary.skipped;
      res.invalid.forEach((item) =>
        invalid.push({ row: item.row + i, reason: item.reason })
      );
    }

    return { summary, invalid: invalid.slice(0, 50) };
  },

  // ----- settings -----
  settings: async () => (await api("/admin/settings")).settings,
  updateSettings: async (registrationMode) =>
    (await api("/admin/settings", { method: "PATCH", body: { registrationMode } }))
      .settings,
};