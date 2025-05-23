import { motion } from "framer-motion";
import React from "react";
import {
  FaTimes,
  FaLeaf,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";

const NotificationsPanel = ({ isOpen, closePanel }) => {
  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: "alert",
      title: "Crop Stress Detected",
      message: "Potential pest issue identified in Zone 3",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "info",
      title: "Weather Alert",
      message: "Heavy rain expected in your region over the next 48 hours",
      time: "3 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "success",
      title: "Soil Analysis Complete",
      message: "Your latest soil samples have been analyzed",
      time: "1 day ago",
      read: true,
    },
    {
      id: 4,
      type: "info",
      title: "Market Price Update",
      message: "Corn prices have increased by 5% in your region",
      time: "1 day ago",
      read: true,
    },
    {
      id: 5,
      type: "alert",
      title: "Low Water Levels",
      message: "Irrigation system in Field 2 reporting low water levels",
      time: "2 days ago",
      read: true,
    },
  ];

  const panelVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "alert":
        return <FaExclamationTriangle className="text-warning-500" />;
      case "success":
        return <FaCheckCircle className="text-success-500" />;
      case "info":
      default:
        return <FaInfoCircle className="text-accent-500" />;
    }
  };

  return (
    <motion.div
      className="fixed right-0 top-0 h-full w-80 z-30 bg-white shadow-lg"
      variants={panelVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3, type: "tween" }}
    >
      {/* Header */}
      <div className="h-16 border-b border-gray-200 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaLeaf className="text-primary-500 mr-2" />
          <h2 className="font-medium">Notifications</h2>
        </div>
        <button
          onClick={closePanel}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <FaTimes size={18} />
        </button>
      </div>

      {/* Notification List */}
      <div className="overflow-y-auto h-[calc(100%-4rem)]">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-4">
            <p className="text-gray-500 text-center">No notifications yet</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 hover:bg-gray-50 transition-colors ${
                  !notification.read ? "bg-primary-50" : ""
                }`}
              >
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {notification.time}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default NotificationsPanel;
