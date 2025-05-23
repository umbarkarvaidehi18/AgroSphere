import { Link } from "react-router-dom";
import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaLeaf,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <FaLeaf size={24} className="mr-2 text-primary-400" />
              <span className="font-bold text-xl">AgroSphere</span>
            </Link>
            <p className="mb-4 text-gray-400">
              Smarter Farms. Greener Futures. Global Impact.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <FooterLink to="/about" label="About AgroSphere" />
              <FooterLink to="/features" label="Platform Features" />
              <FooterLink to="/technology" label="Technology" />
              <FooterLink to="/impact" label="Global Impact" />
              <FooterLink to="/pricing" label="Pricing" />
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <FooterLink
                to="/solutions#small-scale"
                label="Small-Scale Farmers"
              />
              <FooterLink
                to="/solutions#enterprises"
                label="Enterprises & Agribusinesses"
              />
              <FooterLink
                to="/solutions#governments"
                label="Governments & NGOs"
              />
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink to="/blog" label="Blog" />
              <FooterLink to="/case-studies" label="Case Studies" />
              <FooterLink to="/resources#webinars" label="Webinars" />
              <FooterLink to="/resources#docs" label="API Documentation" />
              <FooterLink to="/careers" label="Careers" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink to="/terms" label="Terms of Use" />
              <FooterLink to="/privacy" label="Privacy Policy" />
              <FooterLink to="/privacy#cookies" label="Cookie Settings" />
              <FooterLink to="/accessibility" label="Accessibility Statement" />
              <FooterLink
                to="/responsible-ai"
                label="Responsible AI & Ethics"
              />
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} AgroSphere. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <select className="bg-gray-800 text-gray-300 py-1 px-2 rounded text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="pt">Português</option>
                <option value="zh">中文</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="text-gray-400 hover:text-white transition duration-200"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
