import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              About MapTechnologies
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a forward-thinking technology company dedicated to creating
              innovative digital solutions that empower businesses and communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between technology and human needs by developing
                scalable, user-friendly solutions that make a positive impact on
                society.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To become a leading technology partner that transforms ideas into
                reality through innovation, collaboration, and excellence.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
