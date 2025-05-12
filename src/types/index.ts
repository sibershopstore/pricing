export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  badge?: string;
  category: 'social' | 'web' | 'seo' | 'support' | 'marketing' | 'ai';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

declare global {
  interface Window {
    setActiveCategory: (category: string) => void;
  }
}