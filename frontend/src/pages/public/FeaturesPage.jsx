import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaSearchLocation, 
  FaMicrophone, 
  FaSatellite, 
  FaChartLine, 
  FaLeaf, 
  FaHandshake,
  FaShieldAlt,
  FaRobot
} from 'react-icons/fa'

const FeaturesPage = () => {
  useEffect(() => {
    document.title = 'Platform Features - AgroSphere'
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-700 to-primary-800">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Advanced farming technology" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Platform Features
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cutting-edge technology meets practical farming solutions
          </motion.p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Precision Farming Intelligence */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaSearchLocation className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Precision Farming Intelligence
              </h3>
              <p className="text-gray-600 mb-4">
                Real-time monitoring and analysis of your farm's vital signs through advanced 
                sensor fusion and satellite imagery.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Soil diagnostics
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Crop health detection
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Irrigation optimization
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Harvest prediction
                </li>
              </ul>
            </motion.div>

            {/* Voice AI Assistant */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaMicrophone className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Multilingual Voice AI Assistant
              </h3>
              <p className="text-gray-600 mb-4">
                Natural language interaction in 30+ languages, making technology accessible to 
                all farmers regardless of literacy level.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Voice commands
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Spoken alerts
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Natural conversations
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Offline support
                </li>
              </ul>
            </motion.div>

            {/* Hardware Integration */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaSatellite className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hardware Integration Layer
              </h3>
              <p className="text-gray-600 mb-4">
                Seamless connection with various agricultural hardware and IoT devices for 
                comprehensive monitoring.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Soil sensors
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Weather stations
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Drone integration
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Livestock monitoring
                </li>
              </ul>
            </motion.div>

            {/* Predictive Analytics */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaChartLine className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Predictive Analytics & Forecasting
              </h3>
              <p className="text-gray-600 mb-4">
                AI-powered insights for better decision-making and risk management in farming 
                operations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Yield forecasts
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Market predictions
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Risk alerts
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Climate analysis
                </li>
              </ul>
            </motion.div>

            {/* Sustainable Farming */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaLeaf className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainable Farming Engine
              </h3>
              <p className="text-gray-600 mb-4">
                Track and optimize your farm's environmental impact while maintaining 
                productivity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Carbon footprint
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Water usage
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Fertilizer tracking
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Compliance tools
                </li>
              </ul>
            </motion.div>

            {/* Marketplace */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaHandshake className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Marketplace Connector
              </h3>
              <p className="text-gray-600 mb-4">
                Connect directly with buyers and get better prices for your produce through our 
                digital marketplace.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Direct buyer links
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Dynamic pricing
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Smart contracts
                </li>
                <li className="flex items-center">
                  <span className="text-primary-500 mr-2">✓</span>
                  Logistics support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI & Machine Learning Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Powered by Advanced AI
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI models are trained on diverse agricultural data from around the world, 
                providing accurate insights for any farming context. The system continuously 
                learns and adapts to your specific conditions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaRobot className="text-primary-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Computer Vision</h4>
                    <p className="text-gray-600">
                      Automated crop health assessment and pest detection through image analysis
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaRobot className="text-primary-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Predictive Modeling</h4>
                    <p className="text-gray-600">
                      Accurate yield forecasting and risk assessment using historical and 
                      real-time data
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaRobot className="text-primary-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Natural Language Processing</h4>
                    <p className="text-gray-600">
                      Multilingual voice interface for easy interaction with the platform
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AI in agriculture" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-3xl text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Data Security & Privacy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your data security is our top priority. We implement industry-leading security 
                measures to ensure your farming data remains private and protected.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Encryption</h3>
              <p className="text-gray-600">
                All your data is encrypted in transit and at rest using industry-standard 
                protocols.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Sovereignty</h3>
              <p className="text-gray-600">
                You maintain full ownership and control over your farming data at all times.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy by Design</h3>
              <p className="text-gray-600">
                Our platform is built with privacy-preserving technologies and follows GDPR 
                principles.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using AgroSphere to improve their 
            farming operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Start Free Trial
            </Link>
            <Link to="/contact" className="btn border-2 border-white hover:bg-white hover:text-primary-700">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage