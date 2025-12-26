import { useState } from "react";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../../public/img/flowva_portal_logo.png";
import UserInfo from "../Resources/UserInfo";
import NotificationBell from "../Resources/NotificationBell";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  desc: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
  desc,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      label: "Reward Hub",
      path: "/",
      icon: "material-symbols-light:diamond-outline",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="h-[100px] overflow-hidden flex items-center justify-center">
          <img className="h-[100px] " src={logo} />
          <Icon
            onClick={() => setSidebarOpen(false)}
            icon="mdi:close"
            className="w-6 h-6 absolute top-4 right-4 md:hidden cursor-pointer"
          />
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-purple-100 ${
                  isActive ? "bg-purple-300 font-semibold !text-primary" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    icon={item.icon}
                    className={`w-5 h-5 mr-2 ${
                      isActive ? "text-purple-600" : "text-gray-500"
                    }`}
                  />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User Details */}
        <UserInfo />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col pr-3 pt-4">
        {/* Top Navbar */}
        <div className="px-4">
          <header className="h-16 flex items-center justify-between ">
            <button
              type="button"
              className="p-2 flex gap-4 items-center"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Icon icon="mdi:menu" className="w-6 h-6 md:hidden" />
              <span className="font-medium text-2xl">{title}</span>
            </button>
            <NotificationBell />
          </header>
          <p className="px-2">{desc}</p>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
