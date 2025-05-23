import React from 'react';
import { Car, Calendar, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const CarRentalsPage: React.FC = () => {
  const availableCars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      category: 'Sedan',
      price: 45,
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      features: ['4 Seats', 'Automatic', 'AC', 'Bluetooth']
    },
    {
      id: 2,
      name: 'Honda CR-V',
      category: 'SUV',
      price: 65,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      features: ['5 Seats', 'Automatic', 'AC', 'Navigation']
    },
    // Add more cars as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-primary-light dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 dark:to-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Rent a Car</h1>
            <p className="text-white/90 text-lg mb-8">
              Find the perfect car for your journey
            </p>
            
            <Card className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Pick-up Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Pick-up Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Return Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    />
                  </div>
                </div>
              </form>

              <div className="mt-6">
                <Button variant="secondary" fullWidth>
                  Search Cars
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Cars Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Available Cars
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableCars.map((car) => (
              <Card key={car.id} className="overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {car.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{car.category}</p>
                    </div>
                    <p className="text-2xl font-bold text-primary-light dark:text-primary-dark">
                      ${car.price}
                      <span className="text-sm font-normal text-gray-600 dark:text-gray-300">/day</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded"
                      >
                        {feature}
                      </span>
                    ))}
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

export default CarRentalsPage;