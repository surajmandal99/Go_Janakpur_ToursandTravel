import React from 'react';
import { MapPin, Star, Clock } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const AttractionsPage: React.FC = () => {
  const attractions = [
    {
      id: 1,
      name: 'Janaki Temple',
      location: 'Janakpur',
      rating: 4.8,
      reviews: 1250,
      image: 'https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg',
      description: 'Historic temple dedicated to goddess Sita, built in an area of about 4,860 sq feet in a mixed style of Mughal and Koiri architecture.',
      price: 10,
      duration: '2-3 hours'
    },
    {
      id: 2,
      name: 'Ram Mandir',
      location: 'Janakpur',
      rating: 4.6,
      reviews: 980,
      image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg',
      description: 'Beautiful temple complex with intricate architecture and peaceful surroundings.',
      price: 0,
      duration: '1-2 hours'
    },
    // Add more attractions as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-primary-light dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 dark:to-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Discover Amazing Attractions</h1>
            <p className="text-white/90 text-lg mb-8">
              Explore the best tourist spots and cultural landmarks
            </p>
            
            <Card className="p-6">
              <form className="flex gap-4">
                <div className="flex-grow">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Search attractions, activities, or destinations"
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    />
                  </div>
                </div>
                <Button variant="secondary">
                  Search
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Attractions List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Popular Attractions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction) => (
              <Card key={attraction.id} className="overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {attraction.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="ml-1 text-gray-600 dark:text-gray-300">
                        {attraction.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-3">
                    <MapPin size={16} className="mr-1" />
                    {attraction.location}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {attraction.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <Clock size={16} className="mr-1" />
                      {attraction.duration}
                    </div>
                    <p className="text-lg font-bold text-primary-light dark:text-primary-dark">
                      {attraction.price === 0 ? 'Free' : `$${attraction.price}`}
                    </p>
                  </div>

                  <Button variant="secondary" fullWidth>
                    Book Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttractionsPage;