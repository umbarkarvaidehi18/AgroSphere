import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import {
  FaLeaf,
  FaHome,
  FaMap,
  FaRobot,
  FaDatabase,
  FaStore,
  FaLeaf as FaSustainability,
  FaBook,
  FaUser,
} from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";

const DashboardSidebar = ({ isOpen, closeSidebar }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const navigation = [
    { name: "Dashboard", icon: FaHome, href: "/dashboard" },
    { name: "My Farm", icon: FaMap, href: "/dashboard/farm" },
    { name: "AI Insights", icon: FaRobot, href: "/dashboard/insights" },
    { name: "Field Data", icon: FaDatabase, href: "/dashboard/field-data" },
    { name: "Marketplace", icon: FaStore, href: "/dashboard/marketplace" },
    {
      name: "Sustainability",
      icon: FaSustainability,
      href: "/dashboard/sustainability",
    },
    { name: "Training", icon: FaBook, href: "/dashboard/training" },
    { name: "Account", icon: FaUser, href: "/dashboard/account" },
  ];

  return (
    <>
      {/* Desktop Sidebar (permanent) */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-600">
              <Link to="/" className="flex items-center">
                <FaLeaf size={24} className="text-white mr-2" />
                <span className="font-bold text-xl text-white">AgroSphere</span>
              </Link>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
              {currentUser && (
                <div className="flex items-center px-4 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary-200 flex items-center justify-center">
                    <span className="text-primary-700 font-medium text-sm">
                      {currentUser.name ? currentUser.name.charAt(0) : "U"}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">
                      {currentUser.name || "User"}
                    </p>
                    <p className="text-xs font-medium text-gray-500">
                      {currentUser.email}
                    </p>
                  </div>
                </div>
              )}
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? "bg-primary-50 text-primary-700"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <item.icon
                        className={`mr-3 flex-shrink-0 h-5 w-5 ${
                          isActive
                            ? "text-primary-600"
                            : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (slides in) */}
      <motion.div
        className="lg:hidden fixed inset-y-0 flex flex-col z-40 w-72 bg-white shadow-xl"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, type: "tween" }}
      >
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-600">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="flex items-center">
              <FaLeaf size={24} className="text-white mr-2" />
              <span className="font-bold text-xl text-white">AgroSphere</span>
            </Link>
            <button
              onClick={closeSidebar}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
          {currentUser && (
            <div className="flex items-center px-4 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary-200 flex items-center justify-center">
                <span className="text-primary-700 font-medium text-sm">
                  {currentUser.name ? currentUser.name.charAt(0) : "U"}
                </span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">
                  {currentUser.name || "User"}
                </p>
                <p className="text-xs font-medium text-gray-500">
                  {currentUser.email}
                </p>
              </div>
            </div>
          )}
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeSidebar}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-5 w-5 ${
                      isActive
                        ? "text-primary-600"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default DashboardSidebar;
