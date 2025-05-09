import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import FAQItem from './FAQItem';

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = ['all', ...new Set(faqData.map(item => item.category))];
  
  const filteredFAQs = activeCategory === 'all'
    ? faqData
    : faqData.filter(item => item.category === activeCategory);

  return (
    <section id="faq" className="py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'Semua' : category}
            </button>
          ))}
        </div>
        
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;