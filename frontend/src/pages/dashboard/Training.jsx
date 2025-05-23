import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBook, FaDownload, FaCalendar } from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";

const Training = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [trainingData, setTrainingData] = useState(null);

  useEffect(() => {
    document.title = "Training & Support - AgroSphere";
    const timer = setTimeout(() => {
      setTrainingData({
        guides: [
          {
            id: 1,
            title: "Crop Rotation Basics",
            type: "Video",
            duration: "10 min",
          },
          { id: 2, title: "Soil Testing Guide", type: "PDF", size: "2 MB" },
        ],
        qa: [
          {
            id: 1,
            question: "How to improve soil pH?",
            answer: "Use lime...",
            user: "John",
          },
        ],
        sessions: [
          { id: 1, expert: "Dr. Smith", date: "2025-05-25", time: "2:00 PM" },
        ],
        videos: [{ id: 1, title: "Pest Management", size: "150 MB" }],
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
        Training & Support
      </motion.h1>

      {/* Visual Guides */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaBook className="mr-2 text-primary-600" /> Visual Guides
        </h2>
        <ul className="divide-y divide-gray-200">
          {trainingData.guides.map((guide) => (
            <li
              key={guide.id}
              className="py-3 flex items-center justify-between"
            >
              <p className="text-gray-600">
                {guide.title} ({guide.type}, {guide.duration || guide.size})
              </p>
              <button className="text-primary-600 hover:text-primary-500">
                View
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Community Q&A */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Community Q&A
        </h2>
        <ul className="divide-y divide-gray-200">
          {trainingData.qa.map((qa) => (
            <li key={qa.id} className="py-3">
              <p className="text-gray-900 font-medium">{qa.question}</p>
              <p className="text-gray-600">{qa.answer}</p>
              <p className="text-sm text-gray-500">Asked by {qa.user}</p>
            </li>
          ))}
        </ul>
        <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700">
          Ask a Question
        </button>
      </motion.div>

      {/* Expert Sessions */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaCalendar className="mr-2 text-primary-600" /> Expert Sessions
        </h2>
        <ul className="divide-y divide-gray-200">
          {trainingData.sessions.map((session) => (
            <li
              key={session.id}
              className="py-3 flex items-center justify-between"
            >
              <p className="text-gray-600">
                {session.expert} - {session.date} at {session.time}
              </p>
              <button className="text-primary-600 hover:text-primary-500">
                Book
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Offline Videos */}
      <motion.div
        className="bg-white rounded-lg shadow p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaDownload className="mr-2 text-primary-600" /> Offline Videos
        </h2>
        <ul className="divide-y divide-gray-200">
          {trainingData.videos.map((video) => (
            <li
              key={video.id}
              className="py-3 flex items-center justify-between"
            >
              <p className="text-gray-600">
                {video.title} ({video.size})
              </p>
              <button className="text-primary-600 hover:text-primary-500">
                Download
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Training;
