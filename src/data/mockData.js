export const mockReports = [
  { id: "RPT-1024", item: "Black Wallet", type: "Found", category: "Accessories", location: "Central Library", date: "18 Oct 2026", owner: "Aman Sharma", status: "Pending" },
  { id: "RPT-1023", item: "HP Laptop", type: "Lost", category: "Electronics", location: "Computer Lab 2", date: "18 Oct 2026", owner: "Riya Verma", status: "Pending" },
  { id: "RPT-1022", item: "Blue Water Bottle", type: "Found", category: "Accessories", location: "Block B", date: "17 Oct 2026", owner: "Rahul Singh", status: "Verified" },
  { id: "RPT-1021", item: "Student ID Card", type: "Lost", category: "Documents", location: "Cafeteria", date: "17 Oct 2026", owner: "Priya Gupta", status: "Pending" },
];

export const mockClaims = [
  { id: "CLM-208", item: "Black Wallet", claimant: "Aman Sharma", date: "18 Oct 2026", status: "Pending" },
  { id: "CLM-207", item: "Wireless Earbuds", claimant: "Karan Mehta", date: "17 Oct 2026", status: "Pending" },
  { id: "CLM-206", item: "HP Laptop", claimant: "Riya Verma", date: "16 Oct 2026", status: "Pending" },
];

export const mockStudents = [
  { regNo: "SRM2025001", name: "Aman Sharma", department: "CSE", status: "Verified" },
  { regNo: "SRM2025002", name: "Riya Verma", department: "CSE", status: "Verified" },
  { regNo: "SRM2025003", name: "Rahul Singh", department: "ECE", status: "Pending" },
];

export const mockMatches = [
  { id: "MAT-301", lost: "Black Wallet", found: "Black Wallet", score: 94, status: "Suggested" },
  { id: "MAT-302", lost: "HP Laptop", found: "Laptop found in Lab", score: 82, status: "Suggested" },
  { id: "MAT-303", lost: "Blue Bottle", found: "Blue Water Bottle", score: 71, status: "Reviewed" },
];