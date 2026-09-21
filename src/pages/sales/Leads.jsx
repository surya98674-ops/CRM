import React, { useMemo, useState } from "react";
import {
    Building2,
    CalendarDays,
    Mail,
    MoreVertical,
    Phone,
    Plus,
    Search,
    Users,
} from "lucide-react";
import { Layout } from "../../components/layout/Layout";

const Leads = () => {
    const [search, setSearch] = useState("");
    const [activeStatus, setActiveStatus] = useState("new");

    const leads = [
        {
            id: 1,
            name: "Rahul Sharma",
            phone: "9876543210",
            email: "rahul@abc.com",
            company: "ABC Pvt Ltd",
            date: "2 days ago",
            status: "new",
        },
        {
            id: 2,
            name: "Amit Verma",
            phone: "9123456780",
            email: "amit@xyz.com",
            company: "XYZ Solutions",
            date: "3 days ago",
            status: "new",
        },
        {
            id: 3,
            name: "Priya Singh",
            phone: "9988776655",
            email: "priya@pqr.com",
            company: "PQR Limited",
            date: "4 days ago",
            status: "connected",
        },
        {
            id: 4,
            name: "Rohit Kumar",
            phone: "9876541230",
            email: "rohit@rk.com",
            company: "RK Enterprises",
            date: "1 day ago",
            status: "connected",
        },
        {
            id: 5,
            name: "Neha Gupta",
            phone: "9012345678",
            email: "neha@ng.com",
            company: "NG Traders",
            date: "2 days ago",
            status: "not_connected",
        },
        {
            id: 6,
            name: "Suresh Patel",
            phone: "9876501234",
            email: "suresh@sp.com",
            company: "SP Industries",
            date: "1 day ago",
            status: "not_connected",
        },
    ];

    const statusButtons = [
        {
            key: "connected",
            label: "Call Connected",
            count: leads.filter((lead) => lead.status === "connected").length,
            bg: "bg-green-600",
            hover: "hover:bg-green-700",
            lightBg: "bg-green-50",
            border: "border-green-200",
            text: "text-green-700",
            dot: "bg-green-500",
        },
        {
            key: "not_connected",
            label: "Not Connected",
            count: leads.filter((lead) => lead.status === "not_connected").length,
            bg: "bg-red-600",
            hover: "hover:bg-red-700",
            lightBg: "bg-red-50",
            border: "border-red-200",
            text: "text-red-700",
            dot: "bg-red-500",
        },
        {
            key: "new",
            label: "New Lead",
            count: leads.filter((lead) => lead.status === "new").length,
            bg: "bg-blue-600",
            hover: "hover:bg-blue-700",
            lightBg: "bg-blue-50",
            border: "border-blue-200",
            text: "text-blue-700",
            dot: "bg-blue-500",
        },
    ];

    const filteredLeads = useMemo(() => {
        const value = search.toLowerCase().trim();

        return leads.filter((lead) => {
            const matchesStatus = lead.status === activeStatus;

            const matchesSearch =
                !value ||
                lead.name.toLowerCase().includes(value) ||
                lead.company.toLowerCase().includes(value) ||
                lead.phone.includes(value) ||
                lead.email.toLowerCase().includes(value);

            return matchesStatus && matchesSearch;
        });
    }, [activeStatus, search]);

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
    };

    const avatarColors = [
        "bg-blue-100 text-blue-600",
        "bg-purple-100 text-purple-600",
        "bg-green-100 text-green-600",
        "bg-orange-100 text-orange-600",
        "bg-pink-100 text-pink-600",
        "bg-cyan-100 text-cyan-600",
    ];

    const getAvatarColor = (name) => {
        const index =
            name
                .split("")
                .reduce((sum, char) => sum + char.charCodeAt(0), 0) %
            avatarColors.length;

        return avatarColors[index];
    };

    const getStatusConfig = (status) => {
        return statusButtons.find((item) => item.key === status);
    };

    const activeStatusConfig = getStatusConfig(activeStatus);

    return (
        <Layout pageTitle="Leads">
            <div className="min-h-full bg-[#f8fafc] p-4 md:p-6">

                {/* Header */}
                <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                            <Users className="h-7 w-7 text-blue-600" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-[#0f2f55]">
                                Leads
                            </h1>

                            <p className="mt-1 text-sm text-slate-500">
                                Track and manage your leads efficiently
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        {/* Search */}
                        <div className="relative w-full sm:w-80">
                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search leads..."
                                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Add Lead */}
                        <button
                            type="button"
                            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            <Plus size={19} />
                            Add Lead
                        </button>
                    </div>
                </div>

                {/* Status Buttons */}
                <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

                    {statusButtons.map((status) => {
                        const isActive = activeStatus === status.key;

                        return (
                            <button
                                key={status.key}
                                type="button"
                                onClick={() => setActiveStatus(status.key)}
                                className={`group flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200 ${
                                    isActive
                                        ? `${status.bg} ${status.hover} border-transparent text-white shadow-md`
                                        : `bg-white ${status.border} ${status.text} hover:${status.lightBg}`
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`h-3 w-3 rounded-full ${
                                            isActive
                                                ? "bg-white"
                                                : status.dot
                                        }`}
                                    />

                                    <div>
                                        <p
                                            className={`text-sm font-semibold ${
                                                isActive
                                                    ? "text-white"
                                                    : status.text
                                            }`}
                                        >
                                            {status.label}
                                        </p>

                                        <p
                                            className={`mt-1 text-xs ${
                                                isActive
                                                    ? "text-white/80"
                                                    : "text-slate-500"
                                            }`}
                                        >
                                            {status.count} leads
                                        </p>
                                    </div>
                                </div>

                                <span
                                    className={`flex h-9 min-w-9 items-center justify-center rounded-full px-2 text-xs font-bold ${
                                        isActive
                                            ? "bg-white/20 text-white"
                                            : `${status.lightBg} ${status.text}`
                                    }`}
                                >
                                    {status.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Status Header */}
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-[#0f2f55]">
                            {activeStatusConfig?.label}
                        </h2>

                        <p className="text-sm text-slate-500">
                            Showing {filteredLeads.length} lead
                            {filteredLeads.length !== 1 ? "s" : ""}
                        </p>
                    </div>
                </div>

                {/* Leads Grid */}
                {filteredLeads.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                            <Users className="h-7 w-7 text-slate-400" />
                        </div>

                        <h3 className="mt-4 text-base font-semibold text-slate-700">
                            No leads found
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                            Try another search or select a different status.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {filteredLeads.map((lead) => {
                            const status = getStatusConfig(lead.status);

                            return (
                                <div
                                    key={lead.id}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                >
                                    {/* Name */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${getAvatarColor(
                                                    lead.name
                                                )}`}
                                            >
                                                {getInitials(lead.name)}
                                            </div>

                                            <div>
                                                <h3 className="text-sm font-semibold text-[#0f2f55]">
                                                    {lead.name}
                                                </h3>

                                                <p className="mt-0.5 text-xs text-slate-500">
                                                    {lead.company}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                                        >
                                            <MoreVertical size={18} />
                                        </button>
                                    </div>

                                    {/* Details */}
                                    <div className="mt-5 space-y-3">
                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Phone
                                                size={15}
                                                className="text-slate-400"
                                            />
                                            <span>{lead.phone}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Mail
                                                size={15}
                                                className="text-slate-400"
                                            />
                                            <span className="truncate">
                                                {lead.email}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-slate-500">
                                            <Building2
                                                size={15}
                                                className="text-slate-400"
                                            />
                                            <span>{lead.company}</span>
                                        </div>
                                    </div>

                                    {/* Bottom */}
                                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                                        <span
                                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold ${status.lightBg} ${status.text}`}
                                        >
                                            <span
                                                className={`h-2 w-2 rounded-full ${status.dot}`}
                                            />
                                            {status.label}
                                        </span>

                                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                                            <CalendarDays size={13} />
                                            {lead.date}
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <button
                                        type="button"
                                        className={`mt-4 w-full rounded-xl border py-2.5 text-sm font-semibold transition ${
                                            status.border
                                        } ${status.text} ${
                                            status.lightBg
                                        } hover:opacity-90`}
                                    >
                                        View Details
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Leads;