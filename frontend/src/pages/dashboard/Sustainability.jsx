import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaCertificate } from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";

const Sustainability = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [sustainabilityData, setSustainabilityData] = useState(null);

  useEffect(() => {
    document.title = "Sustainability - AgroSphere";
    const timer = setTimeout(() => {
      setSustainabilityData({
        carbon: { score: 75, emissions: "2.5 tCO2/ha", trend: "Down 10%" },
        rainwater: { collected: "1200 L", efficiency: 85 },
        inputs: [
          { id: 1, type: "Fertilizer", amount: "50 kg", date: "2025-05-15" },
        ],
        certifications: [
          { id: 1, name: "Organic", status: "In Progress", progress: 80 },
        ],
      });
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <motion.h1
        className="text-2xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Sustainability Scorecard
      </motion.h1>

      {/* Carbon Impact */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaLeaf className="mr-2 text-primary-600" /> Carbon Impact
        </h2>
        <p className="text-gray-600">
          Score: {sustainabilityData.carbon.score}/100
        </p>
        <p className="text-gray-600">
          Emissions: {sustainabilityData.carbon.emissions}
        </p>
        <p className="text-gray-600">
          Trend: {sustainabilityData.carbon.trend}
        </p>
        <div className="mt-4 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Carbon Footprint Chart Placeholder</p>
        </div>
      </motion.div>

      {/* Rainwater Collection */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Rainwater Collection
        </h2>
        <p className="text-gray-600">
          Collected: {sustainabilityData.rainwater.collected}
        </p>
        <p className="text-gray-600">
          Efficiency: {sustainabilityData.rainwater.efficiency}%
        </p>
      </motion.div>

      {/* Synthetic Inputs */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Synthetic Inputs
        </h2>
        <ul className="divide-y divide-gray-200">
          {sustainabilityData.inputs.map((input) => (
            <li key={input.id} className="py-3 flex items-center">
              <p className="text-gray-600">
                {input.type}: {input.amount} ({input.date})
              </p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="bg-white rounded-lg shadow p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaCertificate className="mr-2 text-primary-600" /> Certifications
        </h2>
        <ul className="divide-y divide-gray-200">
          {sustainabilityData.certifications.map((cert) => (
            <li
              key={cert.id}
              className="py-3 flex items-center justify-between"
            >
              <p className="text-gray-600">
                {cert.name}: {cert.status} ({cert.progress}%)
              </p>
              <button className="text-primary-600 hover:text-primary-500">
                View Progress
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Sustainability;
