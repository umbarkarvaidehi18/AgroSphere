import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaDownload } from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";

const FieldData = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [fieldData, setFieldData] = useState(null);

  useEffect(() => {
    document.title = "Field Data - AgroSphere";
    const timer = setTimeout(() => {
      setFieldData({
        soil: [
          {
            id: 1,
            field: "Field 1",
            pH: 6.5,
            EC: 0.8,
            N: 120,
            P: 30,
            K: 150,
            date: "2025-05-20",
          },
          {
            id: 2,
            field: "Field 2",
            pH: 6.2,
            EC: 0.7,
            N: 110,
            P: 25,
            K: 140,
            date: "2025-05-20",
          },
        ],
        drone: [
          { id: 1, field: "Field 1", date: "2025-05-19", image: "drone1.jpg" },
        ],
        timeSeries: [
          { date: "2025-05-15", pH: 6.4, N: 115 },
          { date: "2025-05-20", pH: 6.5, N: 120 },
        ],
      });
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleExport = (format) => {
    console.log(`Exporting data as ${format}`);
    // Implement CSV/PDF export logic
  };

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
        Field Data
      </motion.h1>

      {/* Soil Metrics */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaDatabase className="mr-2 text-primary-600" /> Soil Metrics
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Field
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  pH
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  EC
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  N
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  P
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  K
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {fieldData.soil.map((entry) => (
                <tr key={entry.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.field}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.pH}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.EC}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.N}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.P}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{entry.K}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {entry.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Drone Captures */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Drone Captures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fieldData.drone.map((capture) => (
            <div key={capture.id} className="bg-gray-100 rounded-lg p-4">
              <div className="h-48 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                <p className="text-gray-500">Image: {capture.image}</p>
              </div>
              <p className="text-gray-600">
                {capture.field} - {capture.date}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Time-Series Data */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Time-Series Data
        </h2>
        <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">
            Chart.js Time-Series Graph Placeholder
          </p>
        </div>
      </motion.div>

      {/* Export Options */}
      <motion.div
        className="bg-white rounded-lg shadow p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">Export Data</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => handleExport("CSV")}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700"
          >
            <FaDownload className="mr-2" /> Export CSV
          </button>
          <button
            onClick={() => handleExport("PDF")}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700"
          >
            <FaDownload className="mr-2" /> Export PDF
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FieldData;
