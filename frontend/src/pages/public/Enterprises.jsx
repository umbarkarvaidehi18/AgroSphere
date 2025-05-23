import React from "react";
import PageHeader from "../../components/common/PageHeader.jsx";
import FeatureCard from "../../components/common/FeatureCard.jsx";
import { LineChart, BarChart, Users, FileCheck, Database } from "lucide-react";

function Enterprises() {
  const enterpriseImage =
    "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg";

  return (
    <div>
      <PageHeader
        title="Enterprises & Agribusinesses"
        subtitle="Optimize operations, increase efficiency, and ensure compliance with our comprehensive suite of agribusiness tools."
        imageUrl={enterpriseImage}
      />

      {/* Feature cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Enterprise-Grade Solutions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Powerful tools designed for large-scale agricultural operations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Fleet-wide Crop Monitoring"
              description="Real-time monitoring across all your agricultural assets with satellite imagery, IoT sensors, and predictive analytics."
              icon={LineChart}
              color="blue"
            />
            <FeatureCard
              title="Automated Yield Tracking"
              description="Predict, measure, and analyze yields across multiple locations with precision technology and machine learning."
              icon={BarChart}
              color="green"
            />
            <FeatureCard
              title="Worker Productivity Analytics"
              description="Optimize workforce deployment and monitor productivity metrics while ensuring fair labor practices."
              icon={Users}
              color="purple"
            />
            <FeatureCard
              title="ESG Compliance Tools"
              description="Automate environmental, social, and governance reporting with customizable dashboards and certification tracking."
              icon={FileCheck}
              color="teal"
            />
            <FeatureCard
              title="ERP & GIS Integrations"
              description="Seamlessly integrate with your existing enterprise systems, GIS platforms, and financial software."
              icon={Database}
              color="brown"
            />
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Success Story: Global Harvests Inc.
              </h2>
              <div className="mt-8 overflow-hidden bg-gray-50 rounded-lg p-8">
                <p className="text-xl text-gray-500">
                  Global Harvests Inc. implemented Agrosphere's enterprise suite
                  across 50,000 hectares of farmland in three countries. The
                  results after one year:
                </p>
                <ul className="mt-4 space-y-2 text-gray-500">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                      ✓
                    </span>
                    <span className="ml-3">
                      22% increase in operational efficiency
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                      ✓
                    </span>
                    <span className="ml-3">
                      17% reduction in water usage through precision irrigation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                      ✓
                    </span>
                    <span className="ml-3">
                      35% improvement in harvest forecasting accuracy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                      ✓
                    </span>
                    <span className="ml-3">
                      $2.4M in savings from optimized resource allocation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2480370/pexels-photo-2480370.jpeg"
                  alt="Aerial view of agricultural fields"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Interactive Enterprise Dashboard
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Experience how our intuitive dashboards deliver actionable
              insights.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:grid md:grid-cols-5">
              {/* Sidebar */}
              <div className="bg-gray-800 text-white p-4 md:col-span-1">
                <div className="space-y-4">
                  <div className="py-2 px-4 bg-gray-700 rounded-md">
                    Dashboard
                  </div>
                  <div className="py-2 px-4 rounded-md hover:bg-gray-700">
                    Crop Monitoring
                  </div>
                  <div className="py-2 px-4 rounded-md hover:bg-gray-700">
                    Yield Analytics
                  </div>
                  <div className="py-2 px-4 rounded-md hover:bg-gray-700">
                    Workforce
                  </div>
                  <div className="py-2 px-4 rounded-md hover:bg-gray-700">
                    ESG Reports
                  </div>
                  <div className="py-2 px-4 rounded-md hover:bg-gray-700">
                    Integrations
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="p-6 md:col-span-4">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900">
                    Enterprise Dashboard
                  </h3>
                  <p className="text-gray-500">
                    Overview of all operations across 12 farms
                  </p>
                </div>

                {/* Fake chart section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="text-gray-700 font-medium mb-2">
                      Yield Forecast
                    </div>
                    <div className="h-40 rounded-md bg-gradient-to-r from-blue-200 to-green-200"></div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="text-gray-700 font-medium mb-2">
                      Worker Productivity
                    </div>
                    <div className="h-40 rounded-md bg-gradient-to-r from-purple-200 to-pink-200"></div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="text-gray-700 font-medium mb-2">
                      Resource Utilization
                    </div>
                    <div className="h-40 rounded-md bg-gradient-to-r from-yellow-200 to-red-200"></div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="text-gray-700 font-medium mb-2">
                      ESG Compliance
                    </div>
                    <div className="h-40 rounded-md bg-gradient-to-r from-green-200 to-teal-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your agribusiness?</span>
            <span className="block text-blue-100">Schedule a demo today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
              >
                Schedule Demo
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500"
              >
                Enterprise Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Enterprises;
