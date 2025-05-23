import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaChartLine } from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";

const AIInsights = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [insights, setInsights] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState("base");

  useEffect(() => {
    document.title = "AI Insights - AgroSphere";
    const timer = setTimeout(() => {
      setInsights({
        planting: {
          recommendation: "Soybeans",
          confidence: 0.85,
          reasons: ["High market demand", "Suitable soil conditions"],
        },
        profit: {
          estimate: "$12,500",
          probability: 0.78,
          factors: ["Current market prices", "Yield projections"],
        },
        carbonCredits: {
          eligible: true,
          credits: 15,
          requirements: ["No-till practices", "Cover cropping"],
        },
        scenarios: [
          { id: "base", name: "Base Case", yield: 4.2, profit: 12500 },
          { id: "dry", name: "Dry Season", yield: 3.8, profit: 10000 },
          { id: "high-demand", name: "High Demand", yield: 4.5, profit: 15000 },
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
        AI Insights
      </motion.h1>

      {/* Planting Recommendation */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaRobot className="mr-2 text-primary-600" /> What should I plant next
          season?
        </h2>
        <p className="text-gray-600">
          Recommendation:{" "}
          <span className="font-semibold">
            {insights.planting.recommendation}
          </span>{" "}
          (Confidence: {insights.planting.confidence * 100}%)
        </p>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          {insights.planting.reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </motion.div>

      {/* Profit Forecast */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaChartLine className="mr-2 text-primary-600" /> Will I make a profit
          at market?
        </h2>
        <p className="text-gray-600">
          Estimated Profit:{" "}
          <span className="font-semibold">{insights.profit.estimate}</span>{" "}
          (Probability: {insights.profit.probability * 100}%)
        </p>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          {insights.profit.factors.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
      </motion.div>

      {/* Carbon Credits */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Am I eligible for carbon credits?
        </h2>
        <p className="text-gray-600">
          Status:{" "}
          <span className="font-semibold">
            {insights.carbonCredits.eligible ? "Eligible" : "Not Eligible"}
          </span>{" "}
          ({insights.carbonCredits.credits} credits)
        </p>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          {insights.carbonCredits.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </motion.div>

      {/* Scenario Simulations */}
      <motion.div
        className="bg-white rounded-lg shadow p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Scenario Simulations
        </h2>
        <div className="flex space-x-2 mb-4">
          {insights.scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedScenario === scenario.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {scenario.name}
            </button>
          ))}
        </div>
        {insights.scenarios.map(
          (scenario) =>
            selectedScenario === scenario.id && (
              <div key={scenario.id}>
                <p className="text-gray-600">Yield: {scenario.yield} t/ha</p>
                <p className="text-gray-600">Profit: ${scenario.profit}</p>
              </div>
            )
        )}
      </motion.div>
    </div>
  );
};

export default AIInsights;
