import React from "react";

const PageHeader = ({ title, subtitle, imageUrl }) => {
  return (
    <section
      className="relative bg-cover bg-center h-[50vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto drop-shadow">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
