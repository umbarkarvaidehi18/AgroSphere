import React from "react";
import PageHeader from "../../components/common/PageHeader";
import FeatureCard from "../../components/common/FeatureCard";
import {
  Mic,
  Smartphone,
  Plane as Plant,
  BookOpen,
  Ban as Bank,
} from "lucide-react";

function SmallScaleFarmers() {
  const farmersImage =
    "https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg";

  return (
    <div>
      <PageHeader
        title="Small-Scale Farmers"
        subtitle="Empowering farmers with accessible technology, knowledge, and financial tools to increase yield and improve livelihoods."
        imageUrl={farmersImage}
      />

      {/* Feature cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tools Designed for You
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Simple, powerful tools that work for the way you farm, even in
              remote areas.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Voice AI in 30+ Languages"
              description="Access farming information, weather updates, and crop guidance in your native language through simple voice commands."
              icon={Mic}
              color="green"
            />
            <FeatureCard
              title="Mobile-First Design"
              description="Works perfectly on basic smartphones, with offline capabilities for areas with limited connectivity."
              icon={Smartphone}
              color="blue"
            />
            <FeatureCard
              title="Visual Crop Identification"
              description="Take photos of your crops to identify diseases, pests, and get personalized care recommendations."
              icon={Plant}
              color="teal"
            />
            <FeatureCard
              title="Financial Literacy"
              description="Access easy-to-understand financial education and connect with microfinance opportunities for your farm."
              icon={BookOpen}
              color="brown"
            />
            <FeatureCard
              title="Government Subsidies"
              description="Discover and apply for relevant government grants, subsidies, and support programs available to you."
              icon={Bank}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Real Results for Real Farmers
              </h2>
              <div className="mt-8 overflow-hidden bg-gray-50 rounded-lg p-8">
                <p className="text-xl text-gray-500 italic">
                  "Before Agrosphere, I was guessing when to plant and how to
                  treat crop diseases. Now, I get voice guidance in my language,
                  and my yield has increased by 40%. The microfinance connection
                  helped me expand from 2 to 5 acres."
                </p>
                <div className="mt-6">
                  <p className="text-base font-medium text-gray-900">
                    Maria Njeri
                  </p>
                  <p className="text-base text-gray-500">
                    Small-scale farmer, Kenya
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg"
                  alt="Farmer using mobile app"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Simple steps to get started with Agrosphere today.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white mx-auto">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Download &amp; Register
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Get the app from your app store or through our offline
                  distribution partners. Register with just your phone number.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white mx-auto">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Set Up Your Farm
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Input basic information about your crops, land size, and
                  challenges. Use voice commands in your language.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-700 text-white mx-auto">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Get Personalized Guidance
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Receive customized recommendations for your specific crops,
                  climate, and farming practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to grow your farm?</span>
            <span className="block text-green-100">Get started today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
              >
                Download App
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmallScaleFarmers;
