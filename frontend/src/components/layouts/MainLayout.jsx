import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";

import NewsletterSignup from "../common/NewsLetterSignup";

const MainLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isScrolled={isScrolled} isTransparent={isHomePage} />

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Newsletter section before footer */}
      <section className="bg-primary-50 py-16">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainLayout;
