import React from "react";
import PageHeader from "../../components/common/PageHeader";
import FeatureCard from "../../components/common/FeatureCard";
import {
  GlobeIcon,
  AlertTriangle,
  PieChart,
  FileText,
  Users,
} from "lucide-react";

function GovernmentNGOs() {
  const governmentImage =
    "https://images.pexels.com/photos/2990561/pexels-photo-2990561.jpeg";

  return (
    <div>
      <PageHeader
        title="Governments & NGOs"
        subtitle="Improve food security, respond effectively to crises, and measure program impact with data-driven agricultural insights."
        imageUrl={governmentImage}
      />

      {/* Feature cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Food System Solutions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Tools designed for public sector organizations and NGOs to improve
              food systems and agricultural sustainability.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Real-time Food System Mapping"
              description="Visualize food production, distribution networks, and consumption patterns with interactive GIS mapping."
              icon={GlobeIcon}
              color="teal"
            />
            <FeatureCard
              title="Disaster Response Dashboards"
              description="Monitor and respond to agricultural emergencies with real-time data and coordinated response tools."
              icon={AlertTriangle}
              color="brown"
            />
            <FeatureCard
              title="Program Efficacy Analytics"
              description="Measure the impact of agricultural interventions and food security programs with comprehensive analytics."
              icon={PieChart}
              color="purple"
            />
            <FeatureCard
              title="Open Data & Transparency Tools"
              description="Share agricultural data while maintaining privacy controls and ensuring regulatory compliance."
              icon={FileText}
              color="blue"
            />
            <FeatureCard
              title="Multi-stakeholder Collaboration"
              description="Connect farmers, businesses, and agencies on a single platform for coordinated agricultural initiatives."
              icon={Users}
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Map Visualization Demo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Food System Visualization
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Interactive mapping tools for comprehensive agricultural planning.
            </p>
          </div>

          <div className="mt-12 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 w-full h-full p-4">
                {/* Simulated map interface */}
                <div className="bg-white rounded-lg p-3 inline-block shadow-sm absolute top-4 left-4 z-10">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span className="text-sm">Crop Production</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                      <span className="text-sm">Water Resources</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <span className="text-sm">Food Insecurity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Distribution Centers</span>
                    </div>
                  </div>
                </div>

                {/* Mock map with regions */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-4/5 h-4/5 border-2 border-gray-400 rounded-lg">
                    {/* Map regions - stylized representation */}
                    <div className="absolute top-[20%] left-[30%] w-[25%] h-[30%] bg-green-200/70 rounded-lg border border-green-400"></div>
                    <div className="absolute top-[15%] left-[15%] w-[15%] h-[20%] bg-blue-200/70 rounded-lg border border-blue-400"></div>
                    <div className="absolute bottom-[25%] right-[20%] w-[30%] h-[35%] bg-green-100/70 rounded-lg border border-green-300"></div>
                    <div className="absolute bottom-[10%] left-[10%] w-[20%] h-[15%] bg-red-100/70 rounded-lg border border-red-300"></div>

                    {/* Distribution points */}
                    <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="absolute top-[45%] right-[35%] w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="absolute bottom-[30%] left-[40%] w-3 h-3 bg-yellow-500 rounded-full"></div>

                    {/* Roads/connections */}
                    <div className="absolute top-[36%] left-[26%] w-[30%] h-[1px] bg-gray-500 transform rotate-12"></div>
                    <div className="absolute top-[45%] right-[36%] w-[20%] h-[1px] bg-gray-500 transform -rotate-45"></div>
                  </div>
                </div>

                {/* Data panel */}
                <div className="bg-white rounded-lg p-3 shadow-sm absolute top-4 right-4 w-64">
                  <h3 className="font-medium text-gray-900">
                    Region Analytics
                  </h3>
                  <div className="mt-2 space-y-2">
                    <div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          Crop Yield
                        </span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-green-600 h-1.5 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          Water Access
                        </span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-blue-600 h-1.5 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          Food Security
                        </span>
                        <span className="text-sm font-medium">62%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-yellow-600 h-1.5 rounded-full"
                          style={{ width: "62%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Impact Stories
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              How government agencies and NGOs are using Agrosphere to transform
              food systems.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg"
                alt="East African drought response"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  East African Drought Response
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  How the Regional Agricultural Authority used Agrosphere's
                  disaster response tools to coordinate aid during a severe
                  drought.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-teal-600 hover:text-teal-500">
                    Read case study →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg"
                alt="Southeast Asian Food System"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Southeast Asian Food System Map
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  How an international NGO created the first comprehensive food
                  system map in Southeast Asia using Agrosphere.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-teal-600 hover:text-teal-500">
                    Read case study →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2990561/pexels-photo-2990561.jpeg"
                alt="Latin American Cooperative"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Latin American Cooperative
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  How a government initiative connected 50,000 smallholder
                  farmers with markets using Agrosphere's platform.
                </p>
                <div className="mt-4">
                  <a href="#" className="text-teal-600 hover:text-teal-500">
                    Read case study →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform food systems?</span>
            <span className="block text-teal-100">Let's work together.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50"
              >
                Request Consultation
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500"
              >
                View Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GovernmentNGOs;
