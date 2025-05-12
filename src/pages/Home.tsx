import React from 'react';
import Header from '../components/Header';
import PricingSection from '../components/PricingSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs and transform your digital presence with Siber Shop Store.
          </p>
        </div>
        <PricingSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default Home;