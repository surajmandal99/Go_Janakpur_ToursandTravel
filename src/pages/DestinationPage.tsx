import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Star, Info } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { destinations } from '../data/mockData';

const DestinationPage: React.FC = () => {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <Card className="p-6 text-center">
          <Info size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Destination Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            The destination you're looking for doesn't exist or has been removed.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">{destination.name}</h1>
            <p className="text-white/90 text-lg mb-4">{destination.description}</p>
            <div className="flex items-center text-white/80">
              <MapPin size={20} className="mr-2" />
              <span>{destination.properties} properties available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  About {destination.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Best Time to Visit</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">October to March</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Known For</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Culture, History, Architecture</p>
                  </div>
                </div>
              </Card>

              {/* Reviews Section */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Reviews
                  </h2>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={20} />
                    <span className="ml-2 text-lg font-semibold">4.8</span>
                    <span className="ml-1 text-gray-600 dark:text-gray-300">(124 reviews)</span>
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 mr-3" />
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">John Doe</h4>
                          <div className="flex items-center">
                            <Star className="text-yellow-400 fill-current" size={14} />
                            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">5.0</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Amazing place to visit! The culture and architecture are breathtaking.
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Plan Your Trip
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Guests
                    </label>
                    <select className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                  <Button variant="secondary" fullWidth>
                    Check Availability
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;