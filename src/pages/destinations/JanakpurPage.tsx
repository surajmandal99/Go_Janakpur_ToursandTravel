import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import Card from '../../components/common/Card';

const JanakpurPage: React.FC = () => {
  const attractions = [
    {
      name: 'Janaki Temple',
      description: 'Historic temple dedicated to goddess Sita',
      image: 'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg',
      rating: 4.8
    },
    {
      name: 'Ram Mandir',
      description: 'Ancient temple with beautiful architecture',
      image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg',
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative h-[500px]">
        <img
          src="https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg"
          alt="Janakpur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Discover Janakpur</h1>
            <p className="text-white/90 text-lg">Experience the rich cultural heritage and spirituality</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                About Janakpur
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Janakpur, also known as Janakpurdham, is a historic city in Nepal's Terai region. 
                It is believed to be the birthplace of Sita, the consort of Lord Ram, and holds 
                great religious and cultural significance in Hindu mythology.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Popular Attractions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {attractions.map((attraction, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800 dark:text-white">
                          {attraction.name}
                        </h4>
                        <div className="flex items-center">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="ml-1 text-sm">{attraction.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {attraction.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Travel Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Best Time to Visit</h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock size={18} className="mr-2" />
                    <span>October to March</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white mb-2">Location</h4>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin size={18} className="mr-2" />
                    <span>Dhanusha District, Nepal</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JanakpurPage;