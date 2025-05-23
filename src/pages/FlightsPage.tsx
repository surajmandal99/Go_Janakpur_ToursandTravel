import React from 'react';
import { Plane, Calendar, Users } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

const FlightsPage: React.FC = () => {
  const popularFlights = [
    {
      id: 1,
      from: 'Janakpur',
      to: 'Kathmandu',
      price: 99,
      airline: 'Buddha Air',
      departureTime: '10:00 AM',
      arrivalTime: '10:45 AM',
      duration: '45m'
    },
    {
      id: 2,
      from: 'Janakpur',
      to: 'Pokhara',
      price: 149,
      airline: 'Yeti Airlines',
      departureTime: '11:30 AM',
      arrivalTime: '12:30 PM',
      duration: '1h'
    },
    // Add more flights as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-primary-light dark:bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 dark:to-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Find and Book Flights</h1>
            <p className="text-white/90 text-lg mb-8">
              Discover the best flight deals to your favorite destinations
            </p>
            
            <Card className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    From - To
                  </label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="text"
                      placeholder="Enter cities"
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Travel Dates
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
                    Passengers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    >
                      <option>1 Passenger</option>
                      <option>2 Passengers</option>
                      <option>3 Passengers</option>
                      <option>4+ Passengers</option>
                    </select>
                  </div>
                </div>
              </form>

              <div className="mt-6">
                <Button variant="secondary" fullWidth>
                  Search Flights
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Flights Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Popular Flights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularFlights.map((flight) => (
              <Card key={flight.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {flight.from} → {flight.to}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{flight.airline}</p>
                  </div>
                  <p className="text-2xl font-bold text-primary-light dark:text-primary-dark">
                    ${flight.price}
                  </p>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div>
                    <p className="font-semibold">{flight.departureTime}</p>
                    <p>{flight.from}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs">{flight.duration}</p>
                    <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 my-1"></div>
                    <Plane size={16} className="mx-auto" />
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{flight.arrivalTime}</p>
                    <p>{flight.to}</p>
                  </div>
                </div>

                <Button variant="secondary" fullWidth>
                  Book Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlightsPage;