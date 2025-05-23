import React from 'react';
import Card from '../../components/common/Card';

const PressPage: React.FC = () => {
  const pressReleases = [
    {
      title: 'GoJanakpurTours Launches New Eco-Tourism Initiative',
      date: 'March 15, 2025',
      excerpt: 'Leading travel company introduces sustainable tourism practices in Nepal...'
    },
    {
      title: 'Record Growth in Tourist Visits to Janakpur',
      date: 'February 28, 2025',
      excerpt: 'Tourism sector sees unprecedented growth as cultural heritage sites attract visitors...'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-primary-light dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Press Center</h1>
          <p className="text-white/90 text-lg">Latest news and updates from GoJanakpurTours</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          {pressReleases.map((press, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {press.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{press.date}</p>
              <p className="text-gray-600 dark:text-gray-300">{press.excerpt}</p>
              <button className="mt-4 text-primary-light dark:text-primary-dark hover:underline">
                Read More
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressPage;