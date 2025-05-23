import { useState, useEffect } from "react";
import React from "react";
import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaSnowflake,
  FaWind,
} from "react-icons/fa";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API call for weather data
    const fetchWeatherData = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock weather data
        const mockData = {
          current: {
            temperature: 22,
            condition: "partly-cloudy",
            humidity: 65,
            windSpeed: 12,
            precipitation: 20,
          },
          forecast: [
            { day: "Today", temperature: 22, condition: "partly-cloudy" },
            { day: "Mon", temperature: 24, condition: "sunny" },
            { day: "Tue", temperature: 20, condition: "rainy" },
            { day: "Wed", temperature: 19, condition: "partly-cloudy" },
            { day: "Thu", temperature: 21, condition: "sunny" },
          ],
        };

        setWeatherData(mockData);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "sunny":
        return <FaSun className="text-yellow-500" />;
      case "partly-cloudy":
        return <FaCloud className="text-gray-400" />;
      case "cloudy":
        return <FaCloud className="text-gray-500" />;
      case "rainy":
        return <FaCloudRain className="text-blue-500" />;
      case "heavy-rain":
        return <FaCloudShowersHeavy className="text-blue-600" />;
      case "snowy":
        return <FaSnowflake className="text-blue-200" />;
      case "windy":
        return <FaWind className="text-gray-400" />;
      default:
        return <FaSun className="text-yellow-500" />;
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Weather</h3>
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-16 w-16 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
          <div className="h-3 bg-gray-200 rounded w-32"></div>
          <div className="mt-6 grid grid-cols-5 gap-2 w-full">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-3 bg-gray-200 rounded w-12 mb-2"></div>
                <div className="h-8 w-8 bg-gray-200 rounded-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Weather</h3>
        <p className="text-center text-gray-500">Unable to load weather data</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header with location */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-4 px-6">
        <h3 className="text-lg font-medium text-white">Local Weather</h3>
        <p className="text-blue-100 text-sm">Farm Location</p>
      </div>

      {/* Current weather */}
      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <div className="text-5xl mb-4">
            {getWeatherIcon(weatherData.current.condition)}
          </div>
          <div className="text-4xl font-bold">
            {weatherData.current.temperature}°C
          </div>
          <div className="text-gray-500 capitalize">
            {weatherData.current.condition.replace("-", " ")}
          </div>
        </div>

        {/* Weather details */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="text-center">
            <div className="text-gray-500 text-sm">Humidity</div>
            <div className="font-medium">{weatherData.current.humidity}%</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">Wind</div>
            <div className="font-medium">
              {weatherData.current.windSpeed} km/h
            </div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">Precip.</div>
            <div className="font-medium">
              {weatherData.current.precipitation}%
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div className="border-t pt-4">
          <div className="grid grid-cols-5 gap-2">
            {weatherData.forecast.map((day, i) => (
              <div key={i} className="text-center">
                <div className="text-sm font-medium mb-1">{day.day}</div>
                <div className="text-xl mb-1">
                  {getWeatherIcon(day.condition)}
                </div>
                <div className="text-sm">{day.temperature}°</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
