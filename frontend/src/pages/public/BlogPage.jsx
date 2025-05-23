import React from "react";

const BlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Blog
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Stay updated with tips, tech, and policy news.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Blog Post Title
            </h3>
            <p className="text-gray-600">
              Placeholder for blog content on tips, tech updates, or policy
              news.
            </p>
            <button className="mt-4 text-green-600 hover:text-green-700 font-semibold">
              Read More
            </button>
          </div>
          {/* Repeat for more blog posts */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Blog Post Title
            </h3>
            <p className="text-gray-600">
              Placeholder for blog content on tips, tech updates, or policy
              news.
            </p>
            <button className="mt-4 text-green-600 hover:text-green-700 font-semibold">
              Read More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Blog Post Title
            </h3>
            <p className="text-gray-600">
              Placeholder for blog content on tips, tech updates, or policy
              news.
            </p>
            <button className="mt-4 text-green-600 hover:text-green-700 font-semibold">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
