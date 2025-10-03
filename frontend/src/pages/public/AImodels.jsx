import React, { useState } from "react";
import axios from "axios";

const AImodels = () => {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    Temp: "",
    Humidity: "",
    pH: "",
    Rainfall: "",
  });
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setPrediction("");
    setLoading(true);

    const inputData = [
      [
        parseFloat(formData.N),
        parseFloat(formData.P),
        parseFloat(formData.K),
        parseFloat(formData.Temp),
        parseFloat(formData.Humidity),
        parseFloat(formData.pH),
        parseFloat(formData.Rainfall),
      ],
    ];

    try {
      const response = await axios.post(
        "https://phoneix-lab-crop-reccommendation-model-3.onrender.com/",
        { data: inputData }
      );
      setPrediction(response.data.prediction || "Unknown crop");
    } catch (err) {
      setError("Error fetching prediction. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Crop Recommendation Model
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the soil and environmental parameters to get a crop
            recommendation.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6">
            {["N", "P", "K", "Temp", "Humidity", "pH", "Rainfall"].map(
              (field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field === "Temp"
                      ? "Temperature (°C)"
                      : field === "pH"
                      ? "pH"
                      : `${field} (kg/ha)`}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type="number"
                    step="0.01"
                    required
                    value={formData[field]}
                    onChange={handleChange}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={`Enter ${field}`}
                  />
                </div>
              )
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Predicting..." : "Get Crop Recommendation"}
            </button>
          </div>
        </form>

        {prediction && (
          <div className="mt-4 p-4 bg-green-100 rounded-md text-center">
            <p className="text-lg font-semibold text-green-800">
              Recommended Crop: {prediction}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 rounded-md text-center">
            <p className="text-lg font-semibold text-red-800">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AImodels;
