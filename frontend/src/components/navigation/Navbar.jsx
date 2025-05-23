import { useState, useEffect } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaLeaf } from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";

const Navbar = ({ isScrolled, isTransparent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navbarClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isTransparent || isMenuOpen
      ? "bg-white shadow-md"
      : "bg-transparent"
  }`;

  const textClass =
    isScrolled || !isTransparent || isMenuOpen ? "text-gray-900" : "text-white";

  const logoColor =
    isScrolled || !isTransparent || isMenuOpen ? "#2D7738" : "#FFFFFF";

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FaLeaf size={24} color={logoColor} className="mr-2" />
            <span className={`font-bold text-xl ${textClass}`}>AgroSphere</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex space-x-1">
              {/* Navigation Items */}
              <NavItem
                to="/"
                label="Home"
                textClass={textClass}
                isActive={activeDropdown === "home"}
                onClick={() => toggleDropdown("home")}
              />

              <NavItem
                to="/about"
                label="About"
                textClass={textClass}
                isActive={activeDropdown === "about"}
                onClick={() => toggleDropdown("about")}
              />

              <NavItem
                to="/features"
                label="Features"
                textClass={textClass}
                isActive={activeDropdown === "features"}
                onClick={() => toggleDropdown("features")}
              />

              <NavDropdown
                label="Solutions"
                textClass={textClass}
                isActive={activeDropdown === "solutions"}
                onClick={() => toggleDropdown("solutions")}
                items={[
                  {
                    label: "Small-Scale Farmers",
                    to: "/smallScaleFarmers",
                  },
                  { label: "Enterprises", to: "/enterprises" },
                  { label: "Governments & NGOs", to: "/governmentNGOs" },
                ]}
              />

              <NavItem
                to="/resources"
                label="Resources"
                textClass={textClass}
                isActive={activeDropdown === "resources"}
                onClick={() => toggleDropdown("resources")}
              />

              <NavItem to="/contact" label="Contact" textClass={textClass} />

              <NavItem
                to="/globalImpact"
                label="GlobalImpact"
                textClass={textClass}
              />
              <NavItem to="/pricing" label="Pricing" textClass={textClass} />
              <NavItem to="/careers" label="Careers" textClass={textClass} />
            </div>

            <div className="ml-8 flex items-center">
              {currentUser ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard" className="btn btn-sm btn-primary">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className={`font-medium ${textClass} hover:text-primary-600`}
                  >
                    Log in
                  </Link>
                  <Link to="/register" className="btn btn-sm btn-primary">
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${textClass}`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <MobileNavItem to="/" label="Home" />
            <MobileNavItem to="/about" label="About" />
            <MobileNavItem to="/features" label="Features" />

            <MobileNavDropdown
              label="Solutions"
              items={[
                { label: "Small-Scale Farmers", to: "/solutions#small-scale" },
                { label: "Enterprises", to: "/solutions#enterprises" },
                { label: "Governments & NGOs", to: "/solutions#governments" },
              ]}
              isOpen={activeDropdown === "mobile-solutions"}
              toggleDropdown={() => toggleDropdown("mobile-solutions")}
            />

            <MobileNavDropdown
              label="Resources"
              items={[
                { label: "Blog", to: "/blog" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "Documentation", to: "/resources#docs" },
              ]}
              isOpen={activeDropdown === "mobile-resources"}
              toggleDropdown={() => toggleDropdown("mobile-resources")}
            />

            <MobileNavItem to="/contact" label="Contact" />

            {currentUser ? (
              <>
                <MobileNavItem to="/dashboard" label="Dashboard" />
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <MobileNavItem to="/login" label="Log in" />
                <MobileNavItem to="/register" label="Sign up" highlight />
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

// Desktop Navigation Item
const NavItem = ({ to, label, textClass, isActive, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium ${textClass} hover:text-primary-600 ${
      isActive ? "bg-primary-50" : ""
    }`}
  >
    {label}
  </Link>
);

// Desktop Navigation Dropdown
const NavDropdown = ({ label, textClass, isActive, onClick, items }) => (
  <div className="relative">
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${textClass} hover:text-primary-600 ${
        isActive ? "bg-primary-50" : ""
      }`}
    >
      {label}
      <FaChevronDown size={12} className="ml-1" />
    </button>

    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
      >
        <div className="py-1">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </div>
);

// Mobile Navigation Item
const MobileNavItem = ({ to, label, highlight = false }) => (
  <Link
    to={to}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      highlight
        ? "bg-primary-600 text-white"
        : "text-gray-900 hover:bg-primary-50 hover:text-primary-600"
    }`}
  >
    {label}
  </Link>
);

// Mobile Navigation Dropdown
const MobileNavDropdown = ({ label, items, isOpen, toggleDropdown }) => (
  <div>
    <button
      onClick={toggleDropdown}
      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-600"
    >
      {label}
      <FaChevronDown
        size={12}
        className={`transition-transform duration-200 ${
          isOpen ? "transform rotate-180" : ""
        }`}
      />
    </button>

    {isOpen && (
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        transition={{ duration: 0.2 }}
        className="pl-4"
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600"
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    )}
  </div>
);

export default Navbar;
