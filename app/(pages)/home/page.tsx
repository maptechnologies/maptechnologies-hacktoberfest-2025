import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6">
              Welcome to MapTechnologies
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering innovation through technology. We craft modern, scalable, 
              and smart digital solutions that transform your ideas into reality.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge solutions using the latest technologies and best practices
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Precision</h3>
              <p className="text-gray-600">
                Tailored solutions that meet your specific business needs and goals
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance</h3>
              <p className="text-gray-600">
                Fast, reliable, and scalable applications built for the future
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
