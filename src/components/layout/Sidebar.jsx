import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Building2,
  X,
  UserRoundCheck,
  CloudSync,
  AlertTriangle,
  ServerIcon,
  UserCheck,
  AlertCircle,
  Server,
  ScrollText,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext.jsx";

export const Sidebar = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({
    leads: true,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const getNavItems = () => {
    if (user.role === "superadmin") {
      return [
        { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { to: "/admin/users", icon: Users, label: "Team Members" },
        { to: "/admin/clients", icon: UserRoundCheck, label: "All Clients" },
        {
          to: "/admin/clients-without-bills",
          icon: AlertTriangle,
          label: "Clients Without Bills",
        },
        { to: "/admin/bills", icon: FileText, label: "All Bills" },
        {
          to: "/admin/proforma-invoice",
          icon: ScrollText,
          label: "Proforma Invoice",
        },
        {
          to: "/billing-renewal",
          icon: CloudSync,
          label: "upcoming renewal ",
        },
        {
          to: "/admin/server-info",
          icon: Server,
          label: "Server Information",
        },
        {
          to: "/sales/leads",
          icon: Users,
          label: "Leads",
        },
      ];
    }
    if (user.role === "server_admin") {
      return [
        { to: "/server/dashboard", icon: LayoutDashboard, label: "Dashboard" },
        { to: "/admin/clients", icon: UserRoundCheck, label: "All Clients" },
        { to: "/server/servers", icon: ServerIcon, label: "Servers" },
        { to: "/server/assignments", icon: UserCheck, label: "Client Servers" },
        { to: "/server/expiring", icon: AlertCircle, label: "Expiring Soon" },
      ];
    }
    if (user.role === "sales") {
      return [
        {
          type: "nested",
          key: "leads",
          icon: ScrollText,
          label: "Leads",

          children: [
            {
              to: "/sales/leads",
              label: "All Leads",
            },
            {
              to: "/sales/leads/new",
              label: "New Leads",
            },
            {
              to: "/sales/leads/connected",
              label: "Connected",
            },
            {
              to: "/sales/leads/not-connected",
              label: "Not Connected",
            },
          ],
        },

        {
          to: "/sales/clients",
          icon: Users,
          label: "Clients",
        },

        {
          to: "/sales/billing",
          icon: FileText,
          label: "Billing",
        },

        {
          to: "/sales/billing-renewal",
          icon: CloudSync,
          label: "upcoming renewal",
        },
      ];
    }
    if (user.role === "accountant") {
      return [
        { to: "/admin/clients", icon: UserRoundCheck, label: "All Clients" },
        { to: "/accountant/billing", icon: FileText, label: "Billing" },
        {
          to: "/billing-renewal",
          icon: CloudSync,
          label: "upcoming renewal ",
        },
      ];
    }
    return [];
  };

  const navItems = getNavItems();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`
          fixed md:static top-0 left-0 h-full w-60 bg-white border-r border-gray-200
          flex flex-col z-40 transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div className="p-2 border-b border-gray-200 flex items-center justify-between">
          <div className="flex flex-col items-center ">
            <img
              src="/Cloudedata.svg"
              alt="Cloudedata"
              className="h-15 w-auto"
            />
          </div>
          <button
            onClick={onClose}
            className="md:hidden cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            // Normal menu item
            if (item.type !== "nested") {
              const isActive = location.pathname === item.to;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={`
          flex items-center gap-3 px-4 py-3 rounded-lg
          text-sm font-medium
          transition-colors duration-200
          ${isActive
                      ? "bg-indigo-50 text-indigo-700 border-l-2 border-indigo-600"
                      : "text-gray-600 hover:bg-gray-100"
                    }
        `}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </NavLink>
              );
            }

            // Nested menu
            const isParentActive = item.children?.some((child) =>
              location.pathname.startsWith(child.to)
            );

            return (
              <div key={item.key}>
                <button
                  type="button"
                  onClick={() => toggleMenu(item.key)}
                  className={`
          w-full flex items-center justify-between
          px-4 py-3 rounded-lg
          text-sm font-medium
          transition-colors duration-200
          ${isParentActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-100"
                    }
        `}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span>{item.label}</span>
                  </div>

                  <ChevronDown
                    className={`
            w-4 h-4 transition-transform duration-200
            ${openMenus[item.key]
                        ? "rotate-180"
                        : ""
                      }
          `}
                  />
                </button>

                {openMenus[item.key] && (
                  <div className="ml-8 mt-1 space-y-1 border-l border-gray-200 pl-3">
                    {item.children.map((child) => {
                      const isChildActive =
                        location.pathname === child.to;

                      return (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={onClose}
                          className={`
                  block px-3 py-2 rounded-md
                  text-sm transition-colors
                  ${isChildActive
                              ? "bg-indigo-50 text-indigo-700 font-medium"
                              : "text-gray-500 hover:bg-gray-100"
                            }
                `}
                        >
                          {child.label}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
};
