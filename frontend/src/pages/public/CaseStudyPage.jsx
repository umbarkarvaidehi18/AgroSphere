import React from "react";

const CaseStudyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Real-world success stories from AgroSphere users.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Case Study Title
            </h3>
            <p className="text-gray-600">
              Downloadable PDF and infographic placeholder.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
              Download PDF
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Case Study Title
            </h3>
            <p className="text-gray-600">
              Downloadable PDF and infographic placeholder.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
