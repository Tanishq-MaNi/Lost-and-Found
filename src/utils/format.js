export const cap = (text = "") => text.charAt(0).toUpperCase() + text.slice(1);

export const fmtDate = (value) =>
  value
    ? new Date(value).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

// Backend status -> label shown to students
export const REPORT_STATUS = {
  pending: "Pending",
  published: "Verified",
  rejected: "Rejected",
  resolved: "Resolved",
  archived: "Archived",
};

export const CLAIM_STATUS = {
  pending: "Pending",
  under_review: "Under review",
  approved: "Approved",
  rejected: "Rejected",
  withdrawn: "Withdrawn",
};

// Must match the enum in the Report model
export const CATEGORIES = [
  "electronics",
  "documents",
  "accessories",
  "bags",
  "clothing",
  "keys",
  "books",
  "other",
];