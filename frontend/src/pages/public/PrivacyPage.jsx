import React from "react";

const PrivacyPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            How we protect your data.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="container mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-600">
            Placeholder for detailed Privacy Policy content. This section will
            detail how AgroSphere handles user data, including end-to-end
            encryption and data sovereignty.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
            <li>Data collection practices</li>
            <li>End-to-end encryption details</li>
            <li>User data ownership</li>
            <li>Federated learning and privacy-preserving AI</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
