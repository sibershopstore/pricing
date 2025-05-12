import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem as FAQItemType } from '../types';

interface FAQItemProps {
  faq: FAQItemType;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border border-gray-700 rounded-lg overflow-hidden transition-all duration-300 ${
        isOpen ? 'bg-gray-800/70' : 'bg-gray-800/30 hover:bg-gray-800/50'
      }`}
    >
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{faq.question}</span>
        {isOpen ? 
          <ChevronUp className="h-5 w-5 text-gray-400" /> : 
          <ChevronDown className="h-5 w-5 text-gray-400" />
        }
      </button>
      
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-300">{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;