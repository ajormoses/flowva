import { useState } from "react";
import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/", icon: "mdi:view-dashboard-outline" },
    { label: "Profile", path: "/profile", icon: "mdi:account-outline" },
    { label: "Settings", path: "/settings", icon: "mdi:cog-outline" },
    { label: "Reports", path: "/reports", icon: "mdi:file-chart-outline" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-200 font-bold text-lg">
          My Portal
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 ${
                  isActive ? "bg-gray-200 font-semibold" : ""
                }`
              }
            >
              <Icon icon={item.icon} className="w-5 h-5 mr-2" />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Navbar */}
        <header className="h-16 flex items-center justify-between px-4 bg-white border-b border-gray-200 shadow-sm">
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Icon icon="mdi:menu" className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Welcome, User</span>
            <button className="p-2 rounded-md hover:bg-gray-200">
              <Icon icon="mdi:logout" className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
