import React from "react";
import { Navbar, Footer } from "../../components/layout";
import { Button, FeatureCard } from "../../components/ui";
import { COMPANY_INFO } from "@/constants";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6">
              Welcome to {COMPANY_INFO.name}
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {COMPANY_INFO.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<span className="text-2xl text-white">💡</span>}
              title="Innovation"
              description="Cutting-edge solutions using the latest technologies and best practices"
              gradient="from-blue-500 to-cyan-500"
            />
            
            <FeatureCard
              icon={<span className="text-2xl text-white">🎯</span>}
              title="Precision"
              description="Tailored solutions that meet your specific business needs and goals"
              gradient="from-purple-500 to-pink-500"
            />
            
            <FeatureCard
              icon={<span className="text-2xl text-white">🚀</span>}
              title="Performance"
              description="Fast, reliable, and scalable applications built for the future"
              gradient="from-green-500 to-teal-500"
            />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in building the future of technology, one innovation at a time.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-700 hover:scale-100"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
