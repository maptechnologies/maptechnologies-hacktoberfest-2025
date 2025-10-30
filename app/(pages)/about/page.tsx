import React from "react";
import { Navbar, Footer } from "../../components/layout";

const About = () => {
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
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Cutting-edge solutions using the latest technologies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Working together to achieve extraordinary results
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Committed to delivering high-quality solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
