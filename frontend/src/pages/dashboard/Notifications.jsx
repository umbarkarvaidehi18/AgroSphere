import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBell, FaExclamationTriangle } from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";

const Notifications = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    document.title = "Notifications & Alerts - AgroSphere";
    const timer = setTimeout(() => {
      setNotifications([
        {
          id: 1,
          type: "crop-stress",
          message: "Crop stress detected in Field 1",
          time: "2025-05-22 10:00 AM",
          severity: "high",
        },
        {
          id: 2,
          type: "market",
          message: "Corn price spiked by 5%",
          time: "2025-05-22 09:00 AM",
          severity: "medium",
        },
        {
          id: 3,
          type: "pest",
          message: "Pest outbreak reported in region",
          time: "2025-05-21 03:00 PM",
          severity: "high",
        },
        {
          id: 4,
          type: "task",
          message: "Reminder: Fertilize Field 2",
          time: "2025-05-21 08:00 AM",
          severity: "low",
        },
      ]);
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
        Notifications & Alerts
      </motion.h1>

      <motion.div
        className="bg-white rounded-lg shadow p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaBell className="mr-2 text-primary-600" /> Recent Notifications
        </h2>
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="py-3 flex items-center justify-between"
            >
              <div className="flex items-center">
                <FaExclamationTriangle
                  className={`mr-2 ${
                    notification.severity === "high"
                      ? "text-red-600"
                      : notification.severity === "medium"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                />
                <div>
                  <p className="text-gray-900">{notification.message}</p>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              </div>
              <button className="text-primary-600 hover:text-primary-500">
                View Details
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Notifications;
