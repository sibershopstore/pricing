import React, { useState, useEffect } from 'react';
import PricingCard from './PricingCard';
import { pricingPlans } from '../data/pricingData';
import { PricingPlan } from '../types';

const PricingSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'Semua Layanan' },
    { id: 'social', name: 'Sosial Media' },
    { id: 'web', name: 'Web Development' },
    { id: 'seo', name: 'SEO' },
    { id: 'support', name: 'IT Support' },
    { id: 'marketing', name: 'Digital Marketing' },
    { id: 'ai', name: 'AI Services' }
  ];
  
  const filteredPlans = activeCategory === 'all' 
    ? pricingPlans 
    : pricingPlans.filter(plan => plan.category === activeCategory);

  useEffect(() => {
    // Make setActiveCategory available globally
    window.setActiveCategory = setActiveCategory;

    // Check for hash in URL and set active category
    const hash = window.location.hash;
    if (hash.includes('pricing')) {
      const urlParams = new URLSearchParams(window.location.search);
      const category = urlParams.get('category');
      if (category) {
        setActiveCategory(category);
      }
    }

    return () => {
      delete window.setActiveCategory;
    };
  }, []);

  return (
    <section id="pricing" className="py-16">
      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 transform scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlans.map((plan: PricingPlan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;