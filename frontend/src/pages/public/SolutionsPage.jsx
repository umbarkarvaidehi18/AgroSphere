import React from "react";

const SolutionsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Tailored for small-scale farmers, enterprises, and governments.
          </p>
        </div>
      </section>

      {/* Solutions Sections */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Small-Scale Farmers */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Small-Scale Farmers
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Voice AI in 30+ languages</li>
              <li>Mobile-first design (offline capable)</li>
              <li>Visual crop identification and guidance</li>
              <li>Financial literacy & microfinance modules</li>
              <li>Government subsidy and grant info integration</li>
            </ul>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Enterprises & Agribusinesses */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Enterprises & Agribusinesses
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Fleet-wide crop monitoring</li>
              <li>Automated yield tracking</li>
              <li>Worker productivity analytics</li>
              <li>ESG compliance tools</li>
              <li>ERP & GIS integrations</li>
            </ul>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
              Explore Solutions
            </button>
          </div>

          {/* Governments & NGOs */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              Governments & NGOs
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Real-time food system mapping</li>
              <li>Disaster response dashboards</li>
              <li>Program efficacy analytics</li>
              <li>Open data & transparency tools</li>
              <li>Multi-stakeholder collaboration portal</li>
            </ul>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
