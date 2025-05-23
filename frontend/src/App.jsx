import React from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layouts
import MainLayout from "./components/layouts/MainLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

// Public Pages
import HomePage from "./pages/public/HomePage";
import AboutPage from "./pages/public/AboutPage";
import FeaturesPage from "./pages/public/FeaturesPage";
import SolutionsPage from "./pages/public/SolutionsPage";
import TechnologyPage from "./pages/public/TechnologyPage";
import ImpactPage from "./pages/public/ImpactPage";

import ResourcesPage from "./pages/public/ResourcesPage";
import BlogPage from "./pages/public/BlogPage";
import CaseStudyPage from "./pages/public/CaseStudyPage";

import ContactPage from "./pages/public/ContactPage";
import TermsPage from "./pages/public/TermsPage";
import PrivacyPage from "./pages/public/PrivacyPage";
import Pricing from "./pages/public/Pricing";
import GlobalImpact from "./pages/public/GlobalImpact";
import Careers from "./pages/public/Careers";

// Auth Pages
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

//Dashboard Pages
import DashboardHome from "./pages/dashboard/DashboardHome";

// Auth Guard
import ProtectedRoute from "./authentication/ProtectedRoute";
import Enterprises from "./pages/public/Enterprises";
import SmallScaleFarmers from "./pages/public/SmallScaleFarmers";
import GovernmentNGOs from "./pages/public/GovernmentNGOs";
import MyFarm from "./pages/dashboard/MyFarm";
import AIInsights from "./pages/dashboard/AIInsights";
import FieldData from "./pages/dashboard/FieldData";
import Marketplace from "./pages/dashboard/Marketplace";
import Sustainability from "./pages/dashboard/Sustainability";
import Training from "./pages/dashboard/Training";

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="impact" element={<ImpactPage />} />

        <Route path="resources" element={<ResourcesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="case-studies" element={<CaseStudyPage />} />

        <Route path="contact" element={<ContactPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="enterprises" element={<Enterprises />} />
        <Route path="smallScaleFarmers" element={<SmallScaleFarmers />} />
        <Route path="governmentNGOs" element={<GovernmentNGOs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="globalImpact" element={<GlobalImpact />} />
        <Route path="careers" element={<Careers />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Dashboard Routes (Protected) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="farm" element={<MyFarm />} />
        <Route path="insights" element={<AIInsights />} />
        <Route path="field-data" element={<FieldData />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="training" element={<Training />} />
      </Route>
    </Routes>
  );
}

export default App;
