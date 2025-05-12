import React from 'react';
import { PricingPlan } from '../types';
import { Check, ExternalLink } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const handleBuyNow = () => {
    const message = `Halo, saya tertarik dengan paket ${plan.title} seharga ${plan.price}. Bisakah Anda memberikan informasi lebih lanjut?`;
    window.open(`https://wa.me/6285174155134?text=${encodeURIComponent(message)}`, '_blank');
  };

  const getBadgeColor = (badge?: string) => {
    if (!badge) return '';
    
    switch (badge) {
      case 'TERPOPULER':
        return 'bg-blue-500';
      case 'TERLARIS':
        return 'bg-green-500';
      case 'TERMURAH':
        return 'bg-yellow-500';
      case 'HOT SALE':
        return 'bg-red-500';
      case 'NEW':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl transition-all duration-500 
        ${plan.badge ? 'border-2 border-opacity-50 shadow-xl' : 'border border-gray-700'} 
        hover:shadow-2xl transform hover:-translate-y-2 group bg-gray-800`}
      style={{
        borderColor: plan.badge ? getBadgeColor(plan.badge).replace('bg-', '') : 'transparent',
        perspective: '1000px'
      }}
    >
      {plan.badge && (
        <div 
          className={`absolute top-0 right-0 ${getBadgeColor(plan.badge)} px-4 py-1 text-xs font-bold z-10 rounded-bl-lg shadow-lg`}
        >
          {plan.badge}
        </div>
      )}

      <div className="p-6 relative z-10 transform transition-transform duration-700 group-hover:scale-105">
        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
        
        <div className="mb-6">
          {plan.originalPrice && (
            <span className="text-gray-400 line-through mr-2 text-lg">{plan.originalPrice}</span>
          )}
          <span className="text-4xl font-bold text-white">{plan.price}</span>
        </div>
        
        {plan.description && (
          <p className="text-gray-300 mb-6">{plan.description}</p>
        )}
        
        <ul className="mb-8 space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={handleBuyNow}
          className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center 
            transition-all duration-300 bg-blue-600 hover:bg-blue-500 
            transform hover:scale-105 shadow-lg hover:shadow-blue-500/30`}
        >
          Buy Now
          <ExternalLink className="ml-2 h-4 w-4" />
        </button>
      </div>
      
      {/* 3D effect elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default PricingCard;