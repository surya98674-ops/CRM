import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Plus, Search, X } from "lucide-react";
import { Layout } from "../../components/layout/Layout.jsx";

const assignedCompanies = [
  "Marketing cloudedata", "Restaurant", "Tally on Cloud", "Fairwood", "Bhihmost",
  "VPS Hosting", "CloudeData", "Other", "Focus on cloud", "Computax on cloud",
  "Marq on Cloud", "Busy on Cloud", "Jwelly on cloud", "School CRM", "SwarnApp",
  "Job", "Tally Offer", "Bookkeeper", "Dollar", "Ecommerce", "Website Development",
  "Ecommerce Devlopment", "manish data",
];

const initialForm = {
  status: "", source: "", assigned: "Marketing cloudedata", tags: "", name: "", address: "",
  position: "", city: "", email: "", state: "", website: "", country: "", phone: "",
  zipCode: "", leadValue: "", language: "System Default", company: "", description: "",
  isPublic: false, contactedToday: true, comment: "", remarks: "", interested: "",
};

const SelectField = ({ name, value, onChange, children, placeholder = "Nothing selected" }) => (
  <div className="relative">
    <select name={name} value={value} onChange={onChange} className={`h-9 w-full appearance-none rounded border border-slate-300 bg-white px-2.5 pr-8 text-xs outline-none focus:border-blue-500 ${value ? "text-slate-700" : "text-slate-400"}`}>
      <option value="">{placeholder}</option>
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-500" />
  </div>
);

const Field = ({ label, name, value, onChange, required = false, type = "text", className = "" }) => (
  <label className={`block ${className}`}>
    <span className="mb-1 block text-xs font-medium text-slate-700">{required && <span className="text-red-500">* </span>}{label}</span>
    <input type={type} name={name} value={value} onChange={onChange} required={required} className="h-9 w-full rounded border border-slate-300 bg-white px-2.5 text-xs text-slate-700 outline-none focus:border-blue-500" />
  </label>
);

const TextAreaField = ({ label, name, value, onChange, className = "" }) => (
  <label className={`block ${className}`}>
    <span className="mb-1 block text-xs font-medium text-slate-700">{label}</span>
    <textarea name={name} value={value} onChange={onChange} className="min-h-[60px] w-full resize-none rounded border border-slate-300 bg-white px-2.5 py-2 text-xs text-slate-700 outline-none focus:border-blue-500" />
  </label>
);

const LeadsBackdrop = ({ onCreate }) => (
  <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white">
    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
      <div className="relative w-56"><Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" /><input className="h-9 w-full rounded border border-slate-300 pl-9 text-xs" placeholder="Search leads..." /></div>
      <button onClick={onCreate} className="inline-flex h-9 items-center gap-1.5 rounded bg-indigo-600 px-3 text-xs font-medium text-white"><Plus className="h-3.5 w-3.5" /> Create New Lead</button>
    </div>
    <div className="p-5"><div className="h-9 rounded bg-slate-50" />{[1, 2, 3].map((item) => <div key={item} className="mt-3 h-10 rounded border border-slate-100 bg-white" />)}</div>
  </div>
);

const CreateNewLead = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((previous) => ({ ...previous, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/sales/leads");
  };

  return (
    <Layout pageTitle="All Leads">
      <LeadsBackdrop onCreate={() => {}} />
      <div className="fixed inset-0 z-40 bg-slate-900/50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        <div className="w-full max-w-[720px] overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="flex h-11 items-center justify-between border-b border-slate-200 px-3"><h1 className="text-xs font-semibold text-slate-800">Add New lead</h1><button type="button" onClick={() => navigate("/sales/leads")} aria-label="Close" className="text-slate-400 hover:text-slate-700"><X className="h-3.5 w-3.5" /></button></div>
          <form onSubmit={handleSubmit} className="max-h-[calc(100vh-48px)] overflow-y-auto px-5 pb-5 pt-4">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-700"><span className="text-red-500">* </span>Status</span><SelectField name="status" value={formData.status} onChange={handleChange}><option value="New Lead">New Lead</option><option value="Connected">Connected</option><option value="Not Connected">Not Connected</option></SelectField></label>
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-700"><span className="text-red-500">* </span>Source</span><SelectField name="source" value={formData.source} onChange={handleChange}><option value="Website">Website</option><option value="Facebook">Facebook</option><option value="Referral">Referral</option></SelectField></label>
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-700">Tags</span><input name="tags" value={formData.tags} onChange={handleChange} className="h-9 w-full rounded border border-slate-300 px-2.5 text-xs" placeholder="Tag" /></label>
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-700">Assigned</span><SelectField name="assigned" value={formData.assigned} onChange={handleChange} placeholder="Select company">{assignedCompanies.map((company) => <option key={company} value={company}>{company}</option>)}</SelectField></label>
              <Field label="Name" name="name" value={formData.name} onChange={handleChange} required /><TextAreaField label="Address" name="address" value={formData.address} onChange={handleChange} />
              <Field label="Position" name="position" value={formData.position} onChange={handleChange} /><Field label="City" name="city" value={formData.city} onChange={handleChange} />
              <Field label="Email Address" name="email" value={formData.email} onChange={handleChange} type="email" /><Field label="State" name="state" value={formData.state} onChange={handleChange} />
              <Field label="Website" name="website" value={formData.website} onChange={handleChange} /><label className="block"><span className="mb-1 block text-xs font-medium text-slate-700">Country</span><SelectField name="country" value={formData.country} onChange={handleChange}><option value="India">India</option><option value="United States">United States</option></SelectField></label>
              <Field label="Phone" name="phone" value={formData.phone} onChange={handleChange} /><Field label="Zip Code" name="zipCode" value={formData.zipCode} onChange={handleChange} />
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-700">Lead value</span><div className="flex h-9"><input type="number" name="leadValue" value={formData.leadValue} onChange={handleChange} className="min-w-0 flex-1 rounded-l border border-slate-300 px-2.5 text-xs" /><span className="flex w-7 items-center justify-center rounded-r border border-l-0 border-slate-300 text-xs text-slate-600">$</span></div></label>
              <label className="block"><span className="mb-1 block text-xs font-medium text-slate-700">Default Language</span><SelectField name="language" value={formData.language} onChange={handleChange}><option value="System Default">System Default</option><option value="English">English</option></SelectField></label>
              <Field label="Company" name="company" value={formData.company} onChange={handleChange} /><TextAreaField label="Description" name="description" value={formData.description} onChange={handleChange} className="col-span-2" />
              <div className="col-span-2 flex items-center gap-3 text-xs text-slate-700"><label className="inline-flex items-center gap-1"><input type="checkbox" name="isPublic" checked={formData.isPublic} onChange={handleChange} className="h-3 w-3 accent-blue-600" /> Public</label><label className="inline-flex items-center gap-1"><input type="checkbox" name="contactedToday" checked={formData.contactedToday} onChange={handleChange} className="h-3 w-3 accent-blue-600" /> Contacted Today</label></div>
              <TextAreaField label="Comment" name="comment" value={formData.comment} onChange={handleChange} className="col-span-2" /><TextAreaField label="Remarks" name="remarks" value={formData.remarks} onChange={handleChange} className="col-span-2" />
              <label className="col-span-2 block"><span className="mb-1 block text-xs font-medium text-slate-700">Interested</span><SelectField name="interested" value={formData.interested} onChange={handleChange}><option value="Interested">Interested</option><option value="Not Interested">Not Interested</option><option value="Maybe">Maybe</option></SelectField></label>
            </div>
            <div className="mt-3 flex justify-end gap-1.5 border-t border-slate-100 pt-3"><button type="button" onClick={() => navigate("/sales/leads")} className="h-8 rounded border border-slate-200 px-3 text-xs text-slate-700 hover:bg-slate-50">Close</button><button type="submit" className="h-8 rounded bg-slate-800 px-3 text-xs font-semibold text-white hover:bg-slate-700">Save</button></div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CreateNewLead;
