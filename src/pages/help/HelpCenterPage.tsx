import React from 'react';
import { Search } from 'lucide-react';
import Card from '../../components/common/Card';

const HelpCenterPage: React.FC = () => {
  const faqCategories = [
    {
      title: 'Booking & Reservations',
      questions: [
        'How do I make a booking?',
        'Can I modify my reservation?',
        'What is the cancellation policy?'
      ]
    },
    {
      title: 'Payment & Pricing',
      questions: [
        'What payment methods are accepted?',
        'How do refunds work?',
        'Are there any hidden fees?'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-primary-light dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-white/90 text-lg mb-8">How can we help you today?</p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.questions.map((question, qIndex) => (
                  <li key={qIndex}>
                    <button className="text-left w-full text-gray-600 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark">
                      {question}
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;