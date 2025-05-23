import React from "react";

const TermsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Terms of Use
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Our policies for using AgroSphere.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Terms of Use
          </h2>
          <p className="text-gray-600">
            Placeholder for detailed Terms of Use content. This section will
            outline the legal policies and guidelines for using AgroSphere's
            platform and services.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
            <li>User responsibilities</li>
            <li>Service usage guidelines</li>
            <li>Data ownership policies</li>
            <li>Liability and disclaimers</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
