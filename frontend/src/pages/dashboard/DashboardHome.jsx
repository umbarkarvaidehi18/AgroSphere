import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaChartLine,
  FaClipboardList,
  FaBell,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useAuth } from "../../authentication/AuthContext";
import WeatherWidget from "../../components/dashboard/WeatherWidget";
import YieldChart from "../../components/dashboard/YieldChart";

const DashboardHome = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    document.title = "Dashboard - AgroSphere";

    // Simulate API loading
    const timer = setTimeout(() => {
      // Mock dashboard data
      setDashboardData({
        alerts: 3,
        todayTasks: 2,
        crops: ["Corn", "Soybeans", "Wheat"],
        farmHealth: 85,
        recentActivity: [
          {
            id: 1,
            type: "alert",
            message: "Possible pest detected in Field 3",
            time: "2 hours ago",
          },
          {
            id: 2,
            type: "update",
            message: "Soil moisture levels updated",
            time: "4 hours ago",
          },
          {
            id: 3,
            type: "task",
            message: "Irrigation scheduled for tomorrow",
            time: "6 hours ago",
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
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {currentUser.name || "Farmer"}
        </h1>
        <p className="text-gray-600">
          Here's what's happening on your farm today
        </p>
      </div>

      {/* Alert Banner (if there are alerts) */}
      {dashboardData.alerts > 0 && (
        <motion.div
          className="mb-6 bg-warning-500 bg-opacity-10 border-l-4 border-warning-500 p-4 rounded-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <FaExclamationTriangle className="h-5 w-5 text-warning-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-warning-700">
                Attention needed
              </h3>
              <div className="mt-2 text-sm text-warning-600">
                <p>
                  You have {dashboardData.alerts} active{" "}
                  {dashboardData.alerts === 1 ? "alert" : "alerts"} that require
                  your attention.
                </p>
              </div>
              <div className="mt-4">
                <div className="-mx-2 -my-1.5 flex">
                  <Link
                    to="/dashboard/farm"
                    className="bg-warning-50 px-2 py-1.5 rounded-md text-sm font-medium text-warning-800 hover:bg-warning-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warning-500"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          className="bg-white rounded-lg shadow p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center">
            <div className="bg-primary-100 p-3 rounded-lg">
              <FaLeaf className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Farm Health</h3>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {dashboardData.farmHealth}%
                </p>
                <p className="ml-2 text-sm text-success-500">↑ 12%</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Active Fields
              </h3>
              <div className="mt-1">
                <p className="text-2xl font-semibold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <FaChartLine className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Predicted Yield
              </h3>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">4.2 t/ha</p>
                <p className="ml-2 text-sm text-success-500">↑ 8%</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-lg">
              <FaBell className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Pending Tasks
              </h3>
              <div className="mt-1">
                <p className="text-2xl font-semibold text-gray-900">
                  {dashboardData.todayTasks}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Farm Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Crop Health Visualization */}
          <motion.div
            className="bg-white rounded-lg shadow p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Crop Performance
            </h3>
            <div className="h-64">
              <YieldChart />
            </div>
          </motion.div>

          {/* Today's Tasks */}
          <motion.div
            className="bg-white rounded-lg shadow p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                Today's Tasks
              </h3>
              <Link
                to="/dashboard/farm"
                className="text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                View all
              </Link>
            </div>

            {dashboardData.todayTasks > 0 ? (
              <ul className="divide-y divide-gray-200">
                <li className="py-3 flex items-start">
                  <div className="flex-shrink-0">
                    <FaClipboardList className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Check irrigation system in Field 2
                    </p>
                    <p className="text-sm text-gray-500">Due by 3:00 PM</p>
                  </div>
                  <div>
                    <button className="text-sm text-primary-600 hover:text-primary-500">
                      Complete
                    </button>
                  </div>
                </li>
                <li className="py-3 flex items-start">
                  <div className="flex-shrink-0">
                    <FaClipboardList className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Record soil samples from Field 1
                    </p>
                    <p className="text-sm text-gray-500">Due by 5:00 PM</p>
                  </div>
                  <div>
                    <button className="text-sm text-primary-600 hover:text-primary-500">
                      Complete
                    </button>
                  </div>
                </li>
              </ul>
            ) : (
              <p className="text-gray-500 text-center py-4">
                No tasks scheduled for today
              </p>
            )}
          </motion.div>
        </div>

        {/* Right Column - Activity & Weather */}
        <div className="space-y-6">
          {/* Weather Widget */}
          <motion.div
            className="bg-white rounded-lg shadow overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <WeatherWidget />
          </motion.div>

          {/* Active Crops */}
          <motion.div
            className="bg-white rounded-lg shadow p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Active Crops
            </h3>
            <div className="space-y-3">
              {dashboardData.crops.map((crop, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary-500 mr-2"></div>
                  <span className="text-gray-600">{crop}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-lg shadow p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Recent Activity
            </h3>

            <div className="flow-root">
              <ul className="-mb-8">
                {dashboardData.recentActivity.map((activity, index) => (
                  <li key={activity.id}>
                    <div className="relative pb-8">
                      {index !== dashboardData.recentActivity.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        ></span>
                      ) : null}
                      <div className="relative flex space-x-3">
                        <div>
                          <span
                            className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                              activity.type === "alert"
                                ? "bg-red-100"
                                : activity.type === "update"
                                ? "bg-blue-100"
                                : "bg-green-100"
                            }`}
                          >
                            {activity.type === "alert" && (
                              <FaExclamationTriangle className="h-4 w-4 text-red-600" />
                            )}
                            {activity.type === "update" && (
                              <FaChartLine className="h-4 w-4 text-blue-600" />
                            )}
                            {activity.type === "task" && (
                              <FaClipboardList className="h-4 w-4 text-green-600" />
                            )}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              {activity.message}
                            </p>
                          </div>
                          <div className="text-right text-sm whitespace-nowrap text-gray-500">
                            <time>{activity.time}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
