import React from "react";

const ImpactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Global Impact
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Transforming agriculture across 21 countries.
          </p>
        </div>
      </section>

      {/* Impact Sections */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Monitoring over 2.4 million hectares globally with partnerships in
            21 countries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Climate Adaptation
            </h3>
            <p className="text-gray-600">Active programs for resilience.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Women Farmers
            </h3>
            <p className="text-gray-600">Training initiatives in Afro-Asia.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              UN-Aligned Metrics
            </h3>
            <p className="text-gray-600">Supporting food security goals.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-colors">
            Download Whitepapers
          </button>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
