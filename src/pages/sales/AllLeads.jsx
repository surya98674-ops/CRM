import { useState, useMemo } from "react";
import { Search, Plus, Pencil, UserRound, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../../components/layout/Layout";
import * as XLSX from "xlsx";



const AllLeads = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
         
    const leads = [
        {
            id: 1,
            name: "Rahul Sharma",
            company: "Cloudedata",
            phone: "8851236965",
            email: "datacloude8@gmail.com",
            gst: "NA",
            salesRep: "Himanshu",
            leadType: "New Lead",
            assigned: "CloudData",
            status: "Active",
            source: "Facebook",
            lastContact: "2 days ago",
            created: "2 days ago",
            comment: "no answer",
            interested: "Not Answering",
        },
        {
            id: 2,
            name: "Amit Kumar",
            company: "Tech Solutions",
            phone: "9876543210",
            email: "amit@gmail.com",
            gst: "NA",
            salesRep: "Rahul",

            assigned: "CloudData",
            status: "Active",
            source: "Website",
            lastContact: "1 day ago",
            created: "3 days ago",
            comment: "Interested in demo",
            interested: "Interested",
        },
        {
            id: 3,
            name: "Priya Singh",
            company: "ABC Enterprises",
            phone: "9123456780",
            email: "priya@gmail.com",
            gst: "NA",
            salesRep: "Himanshu",

            assigned: "CloudData",
            status: "Inactive",
            source: "Referral",
            lastContact: "5 days ago",
            created: "6 days ago",
            comment: "Call back later",
            interested: "Maybe",
        },
    ];
    const handleDownloadExcel = () => {
    const excelData = filteredLeads.map((lead, index) => ({
        "S.NO": index + 1,
        NAME: lead.name,
        COMPANY: lead.company,
        "LEAD TYPE": lead.leadType,
        PHONE: lead.phone,
        EMAIL: lead.email,
        GST: lead.gst,
        "SALES REP": lead.salesRep,
        ASSIGNED: lead.assigned,
        STATUS: lead.status,
        SOURCE: lead.source,
        "LAST CONTACT": lead.lastContact,
        CREATED: lead.created,
        COMMENT: lead.comment,
        INTERESTED: lead.interested,
    }));

    const worksheet = XLSX.utils.json_to_sheet(excelData);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "All Leads"
    );

    XLSX.writeFile(workbook, "All-Leads.xlsx");
};
    const filteredLeads = useMemo(() => {
        const value = search.toLowerCase().trim();

        if (!value) {
            return leads;
        }

        return leads.filter(
            (lead) =>
                lead.leadType.toLowerCase().includes(value) ||
                lead.name.toLowerCase().includes(value) ||
                lead.company.toLowerCase().includes(value) ||
                lead.phone.includes(value) ||
                lead.email.toLowerCase().includes(value) ||
                lead.salesRep.toLowerCase().includes(value) ||
                lead.assigned.toLowerCase().includes(value) ||
                lead.source.toLowerCase().includes(value) ||
                lead.comment.toLowerCase().includes(value) ||
                lead.interested.toLowerCase().includes(value)
        );
    }, [search]);

    const handleCreateLead = () => {
        navigate("/sales/leads/create-new-lead");
    };

    const handleEdit = (lead) => {
        console.log("Edit lead:", lead);
    };

    return (
        <Layout pageTitle="All Leads">
            <div className="w-full">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                    {/* Top Toolbar */}
                    <div className="flex flex-col gap-4 border-b border-gray-200 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">

                        {/* Search */}
                        <div className="relative w-full sm:w-[220px]">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search leads..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="
                  h-10 w-full rounded-lg border border-gray-300
                  bg-white pl-10 pr-3 text-sm text-gray-700
                  outline-none transition
                  placeholder:text-gray-400
                  focus:border-indigo-500
                  focus:ring-2 focus:ring-indigo-100
                "
                            />
                        </div>


                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            {/* Download Excel */}
                            <button
                                type="button"
                                onClick={handleDownloadExcel}
                                className="
            inline-flex h-10 items-center justify-center
            gap-2 rounded-lg border border-emerald-200
            bg-emerald-50 px-4
            text-sm font-semibold text-emerald-700
            transition hover:bg-emerald-100
            focus:outline-none focus:ring-2
            focus:ring-emerald-200
            sm:min-w-[150px]
        "
                            >
                                <Download className="h-4 w-4" />
                                Download Excel
                            </button>

                            {/* Create Lead */}
                            <button
                                type="button"
                                onClick={handleCreateLead}
                                className="
            inline-flex h-10 items-center justify-center
            gap-2 rounded-lg bg-indigo-600 px-4
            text-sm font-semibold text-white
            transition hover:bg-indigo-700
            focus:outline-none focus:ring-2
            focus:ring-indigo-200
            sm:min-w-[138px]
        "
                            >
                                <Plus className="h-4 w-4" />
                                Create New Lead
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto px-5 py-6">
                        <table className="w-full min-w-[2050px] border-collapse">

                            <thead>
                                <tr className="bg-gray-50">

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        S.NO
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        NAME
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        COMPANY
                                    </th>
                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        LEAD TYPE
                                    </th>
                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        PHONE
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        EMAIL
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        GST
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        SALES REP
                                    </th>

                                    {/* NEW COLUMNS */}

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        ASSIGNED
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        STATUS
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        SOURCE
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        LAST CONTACT
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        CREATED
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        COMMENT
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        INTERESTED
                                    </th>

                                    <th className="px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-wide text-slate-500">
                                        ACTIONS
                                    </th>

                                </tr>
                            </thead>

                            <tbody>
                                {filteredLeads.length > 0 ? (
                                    filteredLeads.map((lead, index) => (
                                        <tr
                                            key={lead.id}
                                            className="border-t border-gray-100 transition hover:bg-gray-50"
                                        >
                                            <td className="px-4 py-5 text-sm text-gray-700">
                                                {index + 1}
                                            </td>

                                            <td className="px-4 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                {lead.name}
                                            </td>

                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                {lead.company}
                                            </td>
                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                {lead.leadType}
                                            </td>
                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                {lead.phone}
                                            </td>

                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                {lead.email}
                                            </td>

                                            <td className="px-4 py-5 text-sm text-gray-700">
                                                {lead.gst}
                                            </td>

                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                {lead.salesRep}
                                            </td>


                                            {/* ASSIGNED */}

                                            <td className="px-4 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                                                        <UserRound className="h-4 w-4 text-gray-400" />
                                                    </div>

                                                    <button
                                                        type="button"
                                                        className="
                              rounded-md border border-sky-300
                              bg-white px-3 py-1 text-xs
                              font-medium text-sky-600
                              hover:bg-sky-50
                            "
                                                    >
                                                        {lead.assigned}
                                                    </button>
                                                </div>
                                            </td>

                                            {/* STATUS */}

                                            <td className="px-4 py-5">
                                                <button
                                                    type="button"
                                                    className="
                            rounded-md border border-sky-300
                            bg-white px-3 py-1 text-xs
                            font-medium text-sky-600
                            hover:bg-sky-50
                          "
                                                >
                                                    {lead.status}
                                                    <span className="ml-1">⌄</span>
                                                </button>
                                            </td>

                                            {/* SOURCE */}

                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                {lead.source}
                                            </td>

                                            {/* LAST CONTACT */}

                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                <span className="border-b border-dashed border-gray-300">
                                                    {lead.lastContact}
                                                </span>
                                            </td>

                                            {/* CREATED */}

                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                <span className="border-b border-dashed border-gray-300">
                                                    {lead.created}
                                                </span>
                                            </td>

                                            {/* COMMENT */}

                                            <td className="px-4 py-5 text-sm text-gray-700 whitespace-nowrap">
                                                {lead.comment}
                                            </td>

                                            {/* INTERESTED */}

                                            <td className="px-4 py-5 text-sm text-gray-700 max-w-[140px]">
                                                <span className="block whitespace-normal">
                                                    {lead.interested}
                                                </span>
                                            </td>

                                            {/* ACTIONS */}

                                            <td className="px-4 py-5">
                                                <button
                                                    type="button"
                                                    onClick={() => handleEdit(lead)}
                                                    className="
                            inline-flex items-center justify-center
                            rounded-md p-2 text-gray-500
                            transition hover:bg-gray-100
                            hover:text-indigo-600
                          "
                                                    title="Edit Lead"
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="16"
                                            className="px-4 py-10 text-center text-sm text-gray-500"
                                        >
                                            No leads found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AllLeads;