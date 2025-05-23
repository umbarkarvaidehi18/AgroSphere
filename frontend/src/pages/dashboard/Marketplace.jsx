import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStore, FaTruck } from "react-icons/fa";
import { useAuth } from "../../authentication/AuthContext";

const Marketplace = () => {
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    document.title = "Marketplace - AgroSphere";
    const timer = setTimeout(() => {
      setMarketData({
        offers: [
          {
            id: 1,
            buyer: "AgriCorp",
            crop: "Corn",
            quantity: 500,
            price: 5.2,
            status: "Pending",
          },
          {
            id: 2,
            buyer: "FarmMart",
            crop: "Soybeans",
            quantity: 300,
            price: 12.5,
            status: "Accepted",
          },
        ],
        contracts: [
          { id: 1, crop: "Corn", status: "Signed", expiry: "2025-06-30" },
        ],
        logistics: [
          {
            id: 1,
            partner: "AgriFreight",
            status: "Scheduled",
            date: "2025-05-25",
          },
        ],
        pricing: { crop: "Corn", current: 5.2, trend: "Up 3%" },
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
        Marketplace
      </motion.h1>

      {/* Buyer Offers */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaStore className="mr-2 text-primary-600" /> Buyer Offers
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Buyer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Crop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Quantity (tons)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Price ($/ton)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {marketData.offers.map((offer) => (
                <tr key={offer.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {offer.buyer}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {offer.crop}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {offer.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {offer.price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {offer.status}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {offer.status === "Pending" && (
                      <button className="text-primary-600 hover:text-primary-500">
                        Accept
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Smart Contracts */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Smart Contracts (Beta)
        </h2>
        <ul className="divide-y divide-gray-200">
          {marketData.contracts.map((contract) => (
            <li
              key={contract.id}
              className="py-3 flex items-center justify-between"
            >
              <p className="text-gray-600">
                {contract.crop} Contract - {contract.status} (Expires:{" "}
                {contract.expiry})
              </p>
              <button className="text-primary-600 hover:text-primary-500">
                View
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Logistics */}
      <motion.div
        className="bg-white rounded-lg shadow p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <FaTruck className="mr-2 text-primary-600" /> Logistics
        </h2>
        <ul className="divide-y divide-gray-200">
          {marketData.logistics.map((log) => (
            <li key={log.id} className="py-3 flex items-center justify-between">
              <p className="text-gray-600">
                {log.partner} - {log.status} ({log.date})
              </p>
              <button className="text-primary-600 hover:text-primary-500">
                Track
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Dynamic Pricing */}
      <motion.div
        className="bg-white rounded-lg shadow p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Dynamic Pricing
        </h2>
        <p className="text-gray-600">
          {marketData.pricing.crop}: ${marketData.pricing.current}/ton (
          {marketData.pricing.trend})
        </p>
      </motion.div>
    </div>
  );
};

export default Marketplace;
