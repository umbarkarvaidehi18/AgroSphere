import React from "react";

const FeatureCard = ({ title, description, icon: Icon, color }) => {
  // Map color prop to Tailwind CSS classes
  const colorClasses = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    teal: "bg-teal-100 text-teal-700",
    brown: "bg-brown-100 text-brown-700",
    purple: "bg-purple-100 text-purple-700",
  };

  const iconColorClasses = {
    green: "text-green-600",
    blue: "text-blue-600",
    teal: "text-teal-600",
    brown: "text-brown-600",
    purple: "text-purple-600",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div
        className={`flex items-center justify-center h-12 w-12 rounded-md ${colorClasses[color]} mx-auto mb-4`}
      >
        <Icon className={`h-6 w-6 ${iconColorClasses[color]}`} />
      </div>
      <h3 className="text-lg font-medium text-gray-900 text-center">{title}</h3>
      <p className="mt-2 text-base text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
