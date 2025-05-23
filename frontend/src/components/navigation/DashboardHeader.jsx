import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";
import Navbar from "./Navbar";

const DashboardHeader = ({ openSidebar, toggleNotifications }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic would go here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <Navbar />
      <header className="bg-white shadow-sm fixed top-0 right-0 left-0 z-10 lg:left-64">
        <div className="flex justify-between h-16 px-4 sm:px-6">
          {/* Left side - Menu button and search */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={openSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Search input */}
            <div className="ml-4 flex-1 flex">
              <form onSubmit={handleSearch} className="w-full flex md:ml-0">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <FaSearch className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Right side - Notifications and profile */}
          <div className="flex items-center">
            {/* Help button */}
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span className="sr-only">View help</span>
              <FaQuestionCircle className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Notifications button */}
            <button
              type="button"
              className="ml-4 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 relative"
              onClick={toggleNotifications}
            >
              <span className="sr-only">View notifications</span>
              <FaBell className="h-6 w-6" aria-hidden="true" />
              {/* Notification indicator */}
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
            </button>

            {/* Profile dropdown */}
            <div className="ml-4 relative flex-shrink-0">
              <div>
                <button
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-700 font-medium text-sm">
                      {currentUser.name ? currentUser.name.charAt(0) : "U"}
                    </span>
                  </div>
                </button>
              </div>

              {/* User menu dropdown */}
              {showUserMenu && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <div className="py-1" role="none">
                    <Link
                      to="/dashboard/account"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Account settings
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      <div className="flex items-center">
                        <FaSignOutAlt className="mr-2" /> Sign out
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
