import React from "react";

const TechnologyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Technology
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            AI, IoT, and sustainability at the core of AgroSphere.
          </p>
        </div>
      </section>

      {/* Technology Sections */}
      <section className="container mx-auto py-16 px-4">
        <div className="space-y-12">
          {/* AI & Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">
                AI & Analytics
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Computer vision for leaf/crop analysis</li>
                <li>NLP for multilingual communication</li>
                <li>AI models tuned for region-specific agronomic behavior</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">AI Visualization Placeholder</p>
              </div>
            </div>
          </div>

          {/* Hardware & IoT */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">
                Hardware & IoT
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Plug-and-play sensor kits</li>
                <li>Satellite integration</li>
                <li>Drone compatibility</li>
                <li>Solar-powered field devices</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">IoT Device Image Placeholder</p>
              </div>
            </div>
          </div>

          {/* Sustainability & Compliance */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-green-700 mb-4">
                Sustainability & Compliance
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Water and fertilizer use tracking</li>
                <li>GHG emissions monitoring</li>
                <li>Labor compliance (ILO standards)</li>
                <li>Organic certification support</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">
                  Sustainability Chart Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
