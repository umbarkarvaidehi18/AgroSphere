import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import {
  FaLeaf,
  FaRobot,
  FaGlobeAmericas,
  FaUsers,
  FaChartLine,
  FaMobile,
} from "react-icons/fa";

const HomePage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    document.title =
      "AgroSphere - Smarter Farms. Greener Futures. Global Impact.";
  }, []);

  return (
    <>
      {/* Hero Section with background image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Aerial view of farmland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Smarter Farms. <span className="text-primary-400">Greener</span>{" "}
            Futures. <br />
            Global Impact.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AgroSphere is your intelligent partner for sustainable, data-driven
            farming — from remote villages to industrial-scale operations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/register" className="btn btn-primary text-lg">
              🚜 Start Free Trial
            </Link>
            <Link
              to="/solutions"
              className="btn btn-outline text-lg border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              🌎 Explore Enterprise Solutions
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <button
            onClick={() =>
              sectionRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* How AgroSphere Works */}
      <section
        ref={sectionRef}
        className="py-16 md:py-24 bg-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How AgroSphere Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines AI, IoT, and local knowledge to transform
              agricultural practices.
            </p>
          </div>

          <div className="relative">
            {/* Connected line graphic */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <motion.div
                className="card p-6 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <FaMobile className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Collect & Connect
                </h3>
                <p className="text-gray-600 text-center">
                  Field sensors, drones, satellite data, and manual input from
                  farmers are combined with our multilingual voice interface.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="card p-6 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <FaRobot className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Analyze & Predict
                </h3>
                <p className="text-gray-600 text-center">
                  Our AI systems process your farm's unique data to provide
                  actionable insights and predictive analytics.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="card p-6 relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Optimize & Grow
                </h3>
                <p className="text-gray-600 text-center">
                  Make data-driven decisions to increase yields, reduce inputs,
                  and maximize profits while minimizing environmental impact.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/features" className="btn btn-primary">
              Explore All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions for Different Users */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual farmers to large enterprises, we have solutions
              designed for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Small-Scale Farmers */}
            <motion.div
              className="card overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Small-scale farmer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <FaLeaf className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Small-Scale Farmers
                </h3>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Voice AI in 30+ languages
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Mobile-first design (offline capable)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Visual crop identification
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Financial literacy modules
                  </li>
                </ul>
                <Link
                  to="/solutions#small-scale"
                  className="btn btn-outline w-full"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Enterprises */}
            <motion.div
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Agriculture enterprise"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <FaChartLine className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Enterprises & Agribusinesses
                </h3>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Fleet-wide crop monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Automated yield tracking
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Worker productivity analytics
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    ESG compliance tools
                  </li>
                </ul>
                <Link
                  to="/solutions#enterprises"
                  className="btn btn-outline w-full"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Governments & NGOs */}
            <motion.div
              className="card overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7215514/pexels-photo-7215514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Government and NGO agricultural monitoring"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <FaGlobeAmericas className="text-primary-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Governments & NGOs
                </h3>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Real-time food system mapping
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Disaster response dashboards
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Program efficacy analytics
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    Open data & transparency tools
                  </li>
                </ul>
                <Link
                  to="/solutions#governments"
                  className="btn btn-outline w-full"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Making a Global Impact
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're committed to creating sustainable agricultural systems
                that improve lives worldwide. AgroSphere is actively used in 21
                countries, monitoring over 2.4 million hectares globally.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">
                    2.4M+
                  </div>
                  <p className="text-gray-600">Hectares Monitored</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">21</div>
                  <p className="text-gray-600">Countries Active</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">30+</div>
                  <p className="text-gray-600">Languages Supported</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">
                    150K+
                  </div>
                  <p className="text-gray-600">Farmers Empowered</p>
                </div>
              </div>

              <Link to="/impact" className="btn btn-primary">
                Explore Our Impact
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/2539391/pexels-photo-2539391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Global impact"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-4 rounded-lg shadow-lg">
                <h4 className="font-bold text-primary-600 text-lg">
                  Climate Impact
                </h4>
                <p className="text-gray-600 text-sm">
                  Reduced water usage by 28% and carbon footprint by 42% across
                  partner farms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Farmers Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the agricultural professionals who have transformed
              their operations with AgroSphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120"
                  alt="Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">
                    Small-Scale Farmer, Kenya
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "AgroSphere's voice interface helps me make decisions in my
                native language. I've increased my crop yield by 35% while using
                less water and fertilizer."
              </p>
              <div className="flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120"
                  alt="Michael Rodriguez"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Michael Rodriguez</h4>
                  <p className="text-gray-600 text-sm">
                    Farm Operations Director, USA
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The enterprise solution from AgroSphere has revolutionized how
                we manage our 5,000-acre operation. The predictive analytics
                have been spot-on."
              </p>
              <div className="flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=120"
                  alt="Aisha Patel"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Aisha Patel</h4>
                  <p className="text-gray-600 text-sm">
                    Agricultural Officer, India
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Our government agency uses AgroSphere to track agricultural
                productivity across 50,000 small farms. The data visualization
                and reporting tools are excellent."
              </p>
              <div className="flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Agricultural Operations?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your journey towards more sustainable, profitable, and
            data-driven farming today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="btn bg-white text-primary-700 hover:bg-gray-100"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="btn border-2 border-white hover:bg-white hover:bg-opacity-10"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">
              Trusted Partners & Endorsements
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {/* Partner logos would go here. Using placeholder colored boxes */}
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              USDA
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              UN FAO
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              NGO 1
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              Partner 4
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              Partner 5
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
