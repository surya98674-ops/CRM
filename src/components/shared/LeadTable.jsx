import { Table } from "../ui/Table.jsx";

const dummyLeads = [
  {
    name: "Aarav Sharma",
    company: "Sharma Traders",
    phone: "+91 98765 43210",
    email: "aarav@example.com",
    lastContact: "2026-09-18",
    status: "Open",
  },
  {
    name: "Priya Mehta",
    company: "Mehta Enterprises",
    phone: "+91 98765 43211",
    email: "priya@example.com",
    lastContact: "2026-09-17",
    status: "Follow Up",
  },
  {
    name: "Rohan Verma",
    company: "Verma Solutions",
    phone: "+91 98765 43212",
    email: "rohan@example.com",
    lastContact: "2026-09-16",
    status: "Pending",
  },
  {
    name: "Ananya Gupta",
    company: "Gupta Industries",
    phone: "+91 98765 43213",
    email: "ananya@example.com",
    lastContact: "2026-09-15",
    status: "Open",
  },
];

const columns = [
  { key: "name", label: "Name" },
  { key: "company", label: "Company" },
  { key: "phone", label: "Phone" },
  { key: "email", label: "Email" },
  { key: "lastContact", label: "Last Contact" },
  { key: "status", label: "Status" },
];

export const LeadTable = () => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900">Leads</h3>
      <p className="mt-1 text-sm text-gray-500">Showing sample lead records</p>
    </div>
    <Table columns={columns} data={dummyLeads} />
  </div>
);
