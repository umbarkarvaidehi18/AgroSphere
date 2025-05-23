import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMap,
  FaExclamationTriangle,
  FaMicrophone,
  FaClipboardList,
} from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";
import WeatherWidget from "../../components/dashboard/WeatherWidget";

const MyFarm = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [farmData, setFarmData] = useState(null);

  useEffect(() => {
    document.title = "My Farm - AgroSphere";
    const timer = setTimeout(() => {
      setFarmData({
        map: { center: [40.7128, -74.006], zoom: 12 },
        zones: [
          { id: 1, name: "Field 1", crop: "Corn", health: 90, color: "green" },
          {
            id: 2,
            name: "Field 2",
            crop: "Soybeans",
            health: 75,
            color: "yellow",
          },
        ],
        alerts: [
          {
            id: 1,
            type: "pest",
            message: "Aphids detected in Field 2",
            severity: "high",
          },
        ],
        irrigation: { status: "Active", schedule: "Daily at 6 AM" },
        logbook: [
          {
            id: 1,
            date: "2025-05-20",
            note: "Planted corn in Field 1",
            voice: false,
          },
          {
            id: 2,
            date: "2025-05-21",
            note: "Voice note: Observed leaf curling",
            voice: true,
          },
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
        My Farm
      </motion.h1>

      {/* Digital Twin Map */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaMap className="mr-2 text-primary-600" /> Farm Map
        </h2>
        <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          {/* Placeholder for GIS map (e.g., Leaflet) */}
          <p className="text-gray-500">
            GIS-based Digital Twin (Leaflet Map Placeholder)
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {farmData.zones.map((zone) => (
            <div key={zone.id} className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full bg-${zone.color}-500 mr-2`}
              ></div>
              <span className="text-gray-600">
                {zone.name} ({zone.crop}): {zone.health}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Weather & Irrigation */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Weather</h2>
          <WeatherWidget />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Irrigation</h2>
          <p className="text-gray-600">Status: {farmData.irrigation.status}</p>
          <p className="text-gray-600">
            Schedule: {farmData.irrigation.schedule}
          </p>
        </div>
      </motion.div>

      {/* Pest & Disease Alerts */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaExclamationTriangle className="mr-2 text-warning-500" /> Alerts
        </h2>
        {farmData.alerts.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {farmData.alerts.map((alert) => (
              <li key={alert.id} className="py-3 flex items-center">
                <span
                  className={`text-${
                    alert.severity === "high" ? "red" : "yellow"
                  }-600 mr-2`}
                >
                  {alert.message}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No active alerts</p>
        )}
      </motion.div>

      {/* Voice Notes & Logbook */}
      <motion.div
        className="bg-white rounded-lg shadow p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaClipboardList className="mr-2 text-primary-600" /> Logbook
        </h2>
        <button className="mb-4 flex items-center px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700">
          <FaMicrophone className="mr-2" /> Record Voice Note
        </button>
        <ul className="divide-y divide-gray-200">
          {farmData.logbook.map((entry) => (
            <li
              key={entry.id}
              className="py-3 flex items-center justify-between"
            >
              <div>
                <p className="text-gray-600">{entry.note}</p>
                <p className="text-sm text-gray-500">{entry.date}</p>
              </div>
              {entry.voice && (
                <button className="text-primary-600 hover:text-primary-500">
                  Play
                </button>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default MyFarm;
