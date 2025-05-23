import { useState } from "react";
import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../navigation/DashboardSidebar";
import DashboardHeader from "../navigation/DashboardHeader";
import NotificationsPanel from "../dashboard/NotificationsPanel";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader
          openSidebar={toggleSidebar}
          toggleNotifications={toggleNotifications}
        />

        {/* Notifications panel (slides in from right) */}
        <NotificationsPanel
          isOpen={notificationsOpen}
          closePanel={() => setNotificationsOpen(false)}
        />

        {/* Main dashboard content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 mt-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
