import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaGlobe,
  FaMicrochip,
  FaUsers,
  FaHandshake,
  FaSeedling,
} from "react-icons/fa";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - AgroSphere";
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-700">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Farming landscape"
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
            Our Mission
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            To revolutionize agriculture by empowering farmers with intelligent,
            accessible, and regenerative technologies.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Born from a vision at the intersection of AI, sustainability,
                and human equity, AgroSphere merges deep tech with grassroots
                farming wisdom. Our journey began with a simple question: How
                can we make advanced agricultural technology accessible to every
                farmer?
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve farmers across 21 countries, helping
                them make data-driven decisions while preserving traditional
                farming knowledge. Our platform bridges the gap between
                cutting-edge technology and practical farming needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Farmers using technology"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Makes Us Different
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Data */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaMicrochip className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Trained on Global Data
              </h3>
              <p className="text-gray-600">
                Our AI models are trained on diverse agricultural data from
                around the world, ensuring accurate insights for any farming
                context.
              </p>
            </motion.div>

            {/* Voice Interface */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaUsers className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Multilingual Voice Interface
              </h3>
              <p className="text-gray-600">
                Breaking language barriers with voice AI that speaks 30+
                languages, making technology accessible to all farmers.
              </p>
            </motion.div>

            {/* Offline Capability */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FaGlobe className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Offline-Capable Platform
              </h3>
              <p className="text-gray-600">
                Designed for remote regions with limited connectivity, ensuring
                continuous access to critical farming insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                2.4M+
              </div>
              <p className="text-gray-600">Hectares Monitored</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">21</div>
              <p className="text-gray-600">Countries Active</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                150K+
              </div>
              <p className="text-gray-600">Farmers Empowered</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                42%
              </div>
              <p className="text-gray-600">Carbon Reduction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSeedling className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sustainability First
              </h3>
              <p className="text-gray-600">
                Every feature we build considers its environmental impact and
                contribution to sustainable agriculture.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Farmer-Centric
              </h3>
              <p className="text-gray-600">
                We design with and for farmers, ensuring our solutions address
                real-world agricultural challenges.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovation with Purpose
              </h3>
              <p className="text-gray-600">
                We innovate not for innovation's sake, but to create meaningful
                impact in global agriculture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Transforming Agriculture
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a farmer, enterprise, or organization, be part of the
            agricultural revolution with AgroSphere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="btn bg-white text-primary-700 hover:bg-gray-100"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="btn border-2 border-white hover:bg-white hover:text-primary-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
