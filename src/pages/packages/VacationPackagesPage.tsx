import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const VacationPackagesPage: React.FC = () => {
  const packages = [
    {
      title: 'Cultural Heritage Tour',
      duration: '5 days',
      price: 599,
      image: 'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg',
      description: 'Explore the rich cultural heritage of Janakpur and surrounding areas',
      includes: ['Hotel accommodation', 'Daily breakfast', 'Guided tours', 'Airport transfers']
    },
    {
      title: 'Religious Circuit Package',
      duration: '7 days',
      price: 899,
      image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg',
      description: 'Visit sacred temples and religious sites in Nepal',
      includes: ['Luxury accommodation', 'All meals', 'Private guide', 'Transportation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-primary-light dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Vacation Packages</h1>
          <p className="text-white/90 text-lg">Discover our carefully curated travel experiences</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {pkg.title}
                </h3>
                
                <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-3">
                  <Clock size={16} className="mr-1" />
                  <span>{pkg.duration}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-gray-800 dark:text-white">Includes:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-light dark:bg-primary-dark rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Starting from</span>
                    <p className="text-2xl font-bold text-primary-light dark:text-primary-dark">
                      ${pkg.price}
                    </p>
                  </div>
                  <Button variant="secondary">
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VacationPackagesPage;