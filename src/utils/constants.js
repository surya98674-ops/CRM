export const SERVICES = [
  { value: "ERP_ON_CLOUD", label: "ERP On Cloud" },
  { value: "RMS", label: "RMS" },
  { value: "FAIRWOOD", label: "Fairwood" },
];

export const DEFAULT_SPECS = {
  ERP_ON_CLOUD: [
    "Username",
    "Last four digit of IP",
    "Quantity",
    "RAM",
    "Storage",
    "Core",
  ],
  RMS: ["Username", "Last three digit of IP", "Quantity"],
  FAIRWOOD: ["Quantity", "Amount", "Billing date", "Renewal date"],
};

export const ROLE_LABELS = {
  superadmin: "Super Admin",
  sales: "Sales",
  accountant: "Accountant",
  server_admin: "Server Admin",
};

export const ROLE_COLORS = {
  superadmin: "bg-purple-100 text-purple-700",
  sales: "bg-blue-100 text-blue-700",
  accountant: "bg-green-100 text-green-700",
  server_admin: "bg-indigo-100 text-indigo-700",
};

export const STATUS_COLORS = {
  
  inactive: "bg-gray-100 text-gray-700",
  active: "bg-green-100 text-green-700",
  expired: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
  suspended: "bg-orange-100 text-orange-700",
  draft: "bg-gray-200 text-gray-700",
  pending_approval: "bg-yellow-100 text-yellow-700",
  approved: "bg-green-100 text-green-700",
  correction: "bg-orange-100 text-orange-700",
  orange: "bg-orange-100 text-orange-700",
  blue: "bg-blue-100 text-blue-700",
  indigo: "bg-indigo-100 text-indigo-700",
};

export const STATUS_LABELS = {
  draft: "Proforma Invoice",
  pending_approval: "Pending Approval",
  approved: "Approved",
  correction: "Correction",
};

export const companyInfo = {
  companyName: "PayTel Financial Technologies Pvt. Ltd.(Delhi)",
  addressLine1: "A-212, 1st Floor, Phase-3",
  addressLine2: "Okhla Industrial Area",
  cityPincode: "New Delhi-110020",
  gstin: "07AALCP3083C1ZH",
  stateName: "Delhi",
  stateCode: "07",
  cin: "U74999DL2020PTC367460",
  email: "customercare@cloudedata.com",
  website: "www.cloudedata.com",
  bankAccountHolder: "PAYTEL FINANCIAL TECHNOLOGIES PVT. LTD.",
  bankName: "Yes Bank Ltd.",
  bankAccountNumber: "029861900004141",
  bankBranch: "Okhla Industrial Estate-3",
  bankIFSC: "YESB0000298",
  declarationTerms: [
    "Support Other Than Cloud Services will not be Provided.",
    "For Software related query, Kindly Contact to the respected Software Company only.",
  ],
  governmentLaw:
    "This Agreement shall be governed by the laws of India, and any disputes shall fall under the exclusive jurisdiction of the courts at New Delhi.",
  jurisdiction: "DELHI",
};
