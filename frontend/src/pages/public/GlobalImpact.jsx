import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaGlobe,
  FaHandHoldingHeart,
  FaFileDownload,
  FaSeedling,
} from "react-icons/fa";

// Placeholder image for hero (replace with your own)
const heroImage =
  "https://images.unsplash.com/photo-1500595046743-ff614d63071a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

const GlobalImpact = () => {
  useEffect(() => {
    document.title = "Global Impact - AgroSphere";
  }, []);

  const stats = [
    { value: "2.4M+", label: "Hectares Monitored Globally", icon: FaGlobe },
    {
      value: "21",
      label: "Countries with Partnerships",
      icon: FaHandHoldingHeart,
    },
    { value: "UN-Aligned", label: "Food Security Metrics", icon: FaSeedling },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section with Background Image */}
      <motion.section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <FaLeaf size={60} className="mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Our Global Impact
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto drop-shadow">
            AgroSphere is revolutionizing agriculture with sustainable
            solutions, empowering farmers worldwide.
          </p>
          <Link
            to="/register"
            className="mt-6 inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transform hover:scale-105 transition-transform duration-300"
          >
            Join the Movement
          </Link>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Our Reach
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
              >
                <stat.icon
                  className="text-primary-600 mx-auto mb-4"
                  size={48}
                />
                <h3 className="text-3xl font-extrabold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partnerships Section with Map Placeholder */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Partnerships Across 21 Countries
          </h2>
          <motion.div
            className="relative h-[400px] bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1503614472-8c93ca36b6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="World Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
              <p className="text-white text-lg font-semibold">
                Interactive Map of Our Global Partnerships (Coming Soon)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Climate & Women Initiatives with Video */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Driving Change
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Climate Adaptation Programs
              </h3>
              <p className="text-gray-600 mb-4">
                AgroSphere partners with global organizations to support climate
                adaptation, using AI-driven insights to help farmers thrive in
                changing environments.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual AgroSphere video
                  title="Climate Adaptation Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Women Farmers Training (Afro-Asia)
              </h3>
              <p className="text-gray-600 mb-4">
                Our Afro-Asia initiative empowers women farmers with
                cutting-edge training, fostering sustainable agriculture and
                economic growth.
              </p>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Women Farmers"
                className="w-full h-64 object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Download Our Insights
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Explore our whitepapers and case studies to learn more about
            AgroSphere’s impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/path/to/whitepaper.pdf" // Replace with actual file path
              download
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300"
            >
              <FaFileDownload className="mr-2" />
              Whitepapers
            </a>
            <a
              href="/path/to/casestudy.pdf" // Replace with actual file path
              download
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300"
            >
              <FaFileDownload className="mr-2" />
              Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalImpact;
