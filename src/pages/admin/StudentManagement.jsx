import { useRef, useState } from "react";
import Papa from "papaparse";
import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  Copy,
  Download,
  Search,
  ShieldCheck,
  Upload,
  Users,
} from "lucide-react";

import SectionTitle from "../../components/common/SectionTitle";
import ActionButton from "../../components/common/ActionButton";
import Badge from "../../components/common/Badge";
import StatCard from "../../components/common/StatCard";
import Loader from "../../components/common/Loader";
import ErrorState from "../../components/common/ErrorState";
import { useToast } from "../../context/ToastContext";
import { useFetch } from "../../hooks/useFetch";
import { useDebounce } from "../../hooks/useDebounce";
import { adminService } from "../../services/adminService";

const PAGE_SIZE = 25;

const MODES = [
  {
    value: "roster_or_manual",
    label: "Student list + manual approval",
    hint: "Students on the list are verified automatically. Others wait for you.",
  },
  {
    value: "roster_only",
    label: "Student list only",
    hint: "Students who are not on the list cannot register.",
  },
  {
    value: "manual_only",
    label: "Manual approval only",
    hint: "Every student waits for you to verify them.",
  },
];

// Column names are matched loosely: "Reg No", "registration_number" etc. all work.
const pick = (row, keys) => {
  for (const key of keys) {
    if (row[key] !== undefined && String(row[key]).trim() !== "") {
      return String(row[key]).trim();
    }
  }
  return "";
};

function toRoster(rows) {
  return rows.map((row) => ({
    registrationNumber: pick(row, [
      "registrationnumber",
      "registrationno",
      "regno",
      "rollno",
      "rollnumber",
    ]),
    name: pick(row, ["name", "fullname", "studentname"]),
    email: pick(row, ["email", "emailid", "emailaddress"]),
    department: pick(row, ["department", "dept", "branch"]),
  }));
}

function downloadTemplate() {
  const csv =
    "registrationNumber,name,email,department\n" +
    "SRM2025001,Aman Sharma,aman@college.edu,CSE\n";
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "student-list-template.csv";
  link.click();
  URL.revokeObjectURL(url);
}

const StudentManagement = () => {
  const { notify } = useToast();
  const fileRef = useRef(null);

  // ----- table filters -----
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const search = useDebounce(searchInput.trim(), 400);
  const [selected, setSelected] = useState(new Set());

  // ----- import -----
  const [preview, setPreview] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState(null);

  const students = useFetch(
    () => adminService.students({ page, limit: PAGE_SIZE, status, search }),
    [page, status, search]
  );
  const settings = useFetch(() => adminService.settings(), []);

  const rows = students.data?.students ?? [];
  const counts = students.data?.counts ?? { total: 0, verified: 0, pending: 0 };
  const pagination = students.data?.pagination ?? { total: 0, totalPages: 1 };

  const allOnPageSelected =
    rows.length > 0 && rows.every((student) => selected.has(student.id));

  // ----- selection -----
  const toggleOne = (id) =>
    setSelected((current) => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleAllOnPage = () =>
    setSelected(allOnPageSelected ? new Set() : new Set(rows.map((s) => s.id)));

  const changeFilter = (setter) => (value) => {
    setter(value);
    setPage(1);
    setSelected(new Set());
  };

  const goToPage = (next) => {
    setPage(next);
    setSelected(new Set());
  };

  // ----- verify / reject -----
  async function setOne(id, label) {
    try {
      await adminService.setStudentStatus(id, label);
      notify(`Student marked ${label.toLowerCase()}.`);
      students.reload();
    } catch (err) {
      notify(err.message, "error");
    }
  }

  async function bulk(body, question) {
    if (!window.confirm(question)) return;
    try {
      const res = await adminService.bulkStudents(body);
      notify(res.message);
      setSelected(new Set());
      students.reload();
    } catch (err) {
      notify(err.message, "error");
    }
  }

  // ----- CSV import -----
  function handleFile(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    setImportResult(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim().toLowerCase().replace(/[\s_-]/g, ""),
      complete: ({ data }) => {
        const roster = toRoster(data);

        if (roster.length === 0) {
          notify("The file has no rows.", "error");
          return;
        }
        if (roster.every((row) => !row.registrationNumber)) {
          notify(
            "Could not find a registration number column. Download the template to see the format.",
            "error"
          );
          return;
        }

        setPreview({ fileName: file.name, rows: roster });
      },
      error: () => notify("Could not read that file.", "error"),
    });
  }

  async function confirmImport() {
    if (!preview || importing) return;
    setImporting(true);
    try {
      const result = await adminService.importStudents(preview.rows);
      setImportResult(result);
      setPreview(null);
      notify(
        `${result.summary.added} added, ${result.summary.updated} updated, ${result.summary.skipped} skipped.`
      );
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setImporting(false);
    }
  }

  // ----- registration mode -----
  async function changeMode(mode) {
    try {
      await adminService.updateSettings(mode);
      notify("Registration setting updated.");
      settings.reload();
    } catch (err) {
      notify(err.message, "error");
    }
  }

  const collegeCode = settings.data?.code;
  const currentMode = MODES.find((m) => m.value === settings.data?.registrationMode);

  return (
    <>
      <SectionTitle
        title="Student Management"
        description="Upload your college's student list once. Students on it are verified automatically."
        action={
          <button
            onClick={() => fileRef.current?.click()}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-400"
          >
            <Upload size={17} /> Upload student list
          </button>
        }
      />

      <input
        ref={fileRef}
        type="file"
        accept=".csv,text/csv"
        className="hidden"
        onChange={handleFile}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          title="Registered Students"
          value={counts.total}
          change="Accounts created"
          icon={Users}
          color="bg-blue-500/10 text-blue-400"
        />
        <StatCard
          title="Verified Students"
          value={counts.verified}
          change="Can sign in"
          icon={ShieldCheck}
          color="bg-emerald-500/10 text-emerald-400"
        />
        <StatCard
          title="Pending Verification"
          value={counts.pending}
          change="Not on the list, need review"
          icon={Clock3}
          color="bg-amber-500/10 text-amber-400"
        />
      </div>

      {/* College code and registration mode */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#26303d] bg-[#111720] p-5">
          <h3 className="font-semibold text-white">Your college code</h3>
          <p className="mt-1 text-xs text-slate-500">
            Students need this code to register and sign in.
          </p>
          <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-blue-500/30 bg-blue-500/5 px-4 py-3">
            <span className="break-all font-mono text-lg font-bold text-blue-300">
              {collegeCode || "..."}
            </span>
            <button
              type="button"
              disabled={!collegeCode}
              onClick={() => {
                navigator.clipboard.writeText(collegeCode);
                notify("College code copied.");
              }}
              className="flex shrink-0 items-center gap-1.5 rounded-lg border border-[#354456] px-3 py-2 text-sm hover:bg-white/5 disabled:opacity-50"
            >
              <Copy size={14} /> Copy
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-[#26303d] bg-[#111720] p-5">
          <h3 className="font-semibold text-white">Who can register</h3>
          <p className="mt-1 text-xs text-slate-500">
            {currentMode?.hint || "Loading..."}
          </p>
          <select
            value={settings.data?.registrationMode || ""}
            onChange={(e) => changeMode(e.target.value)}
            disabled={!settings.data}
            className="mt-4 w-full rounded-lg border border-[#35404e] bg-[#151d28] px-3 py-3 text-sm text-white outline-none"
          >
            {MODES.map((mode) => (
              <option key={mode.value} value={mode.value}>
                {mode.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Import panel */}
      <div className="rounded-2xl border border-dashed border-[#35404e] bg-[#111720] p-5 sm:p-6">
        {!preview && (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-400">
              <Upload size={23} />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-white">Upload your student list</h3>
              <p className="mt-1 text-sm text-slate-400">
                A CSV with these columns: registrationNumber, name, email,
                department. Re-uploading updates existing rows and adds new ones.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Include emails. A student must enter the email on the list to
                activate their account.
              </p>
            </div>
            <button
              onClick={downloadTemplate}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#35404e] px-3 py-2 text-sm hover:bg-[#19222e]"
            >
              <Download size={15} /> Template
            </button>
          </div>
        )}

        {preview && (
          <div>
            <h3 className="font-medium text-white">
              Ready to import {preview.rows.length} students
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              From <span className="text-slate-200">{preview.fileName}</span>.
              First rows:
            </p>

            <div className="mt-3 overflow-x-auto rounded-xl border border-[#26303d]">
              <table className="w-full min-w-125 text-left text-xs">
                <thead className="bg-[#151d28] text-slate-500">
                  <tr>
                    <th className="px-3 py-2 font-medium">Registration no.</th>
                    <th className="px-3 py-2 font-medium">Name</th>
                    <th className="px-3 py-2 font-medium">Email</th>
                    <th className="px-3 py-2 font-medium">Department</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#26303d] text-slate-300">
                  {preview.rows.slice(0, 5).map((row, i) => (
                    <tr key={i}>
                      <td className="px-3 py-2">{row.registrationNumber || "-"}</td>
                      <td className="px-3 py-2">{row.name || "-"}</td>
                      <td className="px-3 py-2">{row.email || "-"}</td>
                      <td className="px-3 py-2">{row.department || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={confirmImport}
                disabled={importing}
                className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-60"
              >
                {importing ? "Importing..." : `Import ${preview.rows.length} students`}
              </button>
              <button
                onClick={() => setPreview(null)}
                disabled={importing}
                className="rounded-lg border border-[#35404e] px-4 py-2.5 text-sm hover:bg-[#19222e]"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {importResult && (
          <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm">
            <p className="font-medium text-emerald-300">
              Import finished: {importResult.summary.added} added,{" "}
              {importResult.summary.updated} updated, {importResult.summary.skipped} skipped.
            </p>

            {importResult.invalid.length > 0 && (
              <ul className="mt-3 max-h-40 space-y-1 overflow-y-auto text-xs text-amber-300">
                {importResult.invalid.map((item, i) => (
                  <li key={i}>
                    Row {item.row}: {item.reason}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Student table */}
      <div className="overflow-hidden rounded-2xl border border-[#26303d] bg-[#111720]">
        <div className="flex flex-col gap-3 border-b border-[#26303d] p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-10 items-center gap-2 rounded-lg border border-[#35404e] bg-[#151d28] px-3 sm:w-72">
              <Search size={15} className="shrink-0 text-slate-500" />
              <input
                type="search"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setPage(1);
                  setSelected(new Set());
                }}
                placeholder="Search name, reg. no, department"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>

            <select
              value={status}
              onChange={(e) => changeFilter(setStatus)(e.target.value)}
              className="h-10 rounded-lg border border-[#35404e] bg-[#151d28] px-3 text-sm text-white outline-none"
            >
              <option value="">All statuses</option>
              <option value="pending">Pending</option>
              <option value="verified">Verified</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            {selected.size > 0 && (
              <>
                <ActionButton
                  onClick={() =>
                    bulk(
                      { status: "verified", ids: [...selected] },
                      `Verify ${selected.size} selected student(s)?`
                    )
                  }
                >
                  Verify selected ({selected.size})
                </ActionButton>
                <ActionButton
                  danger
                  onClick={() =>
                    bulk(
                      { status: "rejected", ids: [...selected] },
                      `Reject ${selected.size} selected student(s)?`
                    )
                  }
                >
                  Reject selected
                </ActionButton>
              </>
            )}

            {counts.pending > 0 && (
              <ActionButton
                onClick={() =>
                  bulk(
                    { status: "verified", allPending: true },
                    `Verify all ${counts.pending} pending students? Only do this if you have checked them.`
                  )
                }
              >
                Verify all pending ({counts.pending})
              </ActionButton>
            )}
          </div>
        </div>

        {students.error && !students.data ? (
          <div className="p-5">
            <ErrorState message={students.error} onRetry={students.reload} />
          </div>
        ) : !students.data ? (
          <Loader label="Loading students..." />
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-175 text-left text-sm">
                <thead className="bg-[#151d28] text-xs text-slate-500">
                  <tr>
                    <th className="w-10 px-5 py-4">
                      <input
                        type="checkbox"
                        checked={allOnPageSelected}
                        onChange={toggleAllOnPage}
                        aria-label="Select all on this page"
                        className="h-4 w-4 accent-blue-600"
                      />
                    </th>
                    <th className="px-5 py-4 font-medium">Student</th>
                    <th className="px-5 py-4 font-medium">Registration number</th>
                    <th className="px-5 py-4 font-medium">Department</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#26303d]">
                  {rows.map((student) => (
                    <tr key={student.id} className="hover:bg-white/2">
                      <td className="px-5 py-4">
                        <input
                          type="checkbox"
                          checked={selected.has(student.id)}
                          onChange={() => toggleOne(student.id)}
                          aria-label={`Select ${student.name}`}
                          className="h-4 w-4 accent-blue-600"
                        />
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-medium text-white">{student.name}</p>
                        {student.email && (
                          <p className="mt-1 text-xs text-slate-500">{student.email}</p>
                        )}
                      </td>
                      <td className="px-5 py-4 text-slate-400">{student.regNo}</td>
                      <td className="px-5 py-4 text-slate-300">{student.department}</td>
                      <td className="px-5 py-4">
                        <Badge>{student.status}</Badge>
                      </td>
                      <td className="px-5 py-4">
                        {student.status === "Verified" ? (
                          <ActionButton danger onClick={() => setOne(student.id, "Rejected")}>
                            Revoke approval
                          </ActionButton>
                        ) : (
                          <ActionButton onClick={() => setOne(student.id, "Verified")}>
                            Verify
                          </ActionButton>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {rows.length === 0 && (
                <p className="p-10 text-center text-sm text-slate-500">
                  {search || status
                    ? "No students match your search or filter."
                    : "No students have registered yet. Upload your student list and share the college code."}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-[#26303d] px-5 py-3 text-sm text-slate-400">
              <span>
                {pagination.total} student{pagination.total === 1 ? "" : "s"}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goToPage(page - 1)}
                  disabled={page <= 1}
                  aria-label="Previous page"
                  className="rounded-lg border border-[#35404e] p-2 hover:bg-[#19222e] disabled:opacity-40"
                >
                  <ChevronLeft size={16} />
                </button>
                <span>
                  Page {page} of {Math.max(1, pagination.totalPages)}
                </span>
                <button
                  type="button"
                  onClick={() => goToPage(page + 1)}
                  disabled={page >= pagination.totalPages}
                  aria-label="Next page"
                  className="rounded-lg border border-[#35404e] p-2 hover:bg-[#19222e] disabled:opacity-40"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StudentManagement;