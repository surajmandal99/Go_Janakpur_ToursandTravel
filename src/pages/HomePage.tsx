import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import Button from '../components/common/Button';
import PropertyList from '../components/property/PropertyList';
import DestinationCard from '../components/destination/DestinationCard';
import DealCard from '../components/deals/DealCard';
import { useSearch } from '../hooks/useSearch';
import { destinations, deals, properties } from '../data/mockData';
import { Property, Destination, Deal } from '../types';

const HomePage: React.FC = () => {
  const { filters, updateFilter, results, isLoading } = useSearch();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleSearch = (
    destination: string, 
    checkIn: Date | null, 
    checkOut: Date | null, 
    guests: number
  ) => {
    updateFilter('destination', destination);
    updateFilter('checkIn', checkIn);
    updateFilter('checkOut', checkOut);
    updateFilter('guests', guests);
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDestinationSelect = (destination: Destination) => {
    updateFilter('destination', destination.name);
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDealSelect = (deal: Deal) => {
    alert(`Deal selected: ${deal.title}`);
  };

  const handlePropertySelect = (property: Property) => {
    setSelectedProperty(property);
    alert(`Property selected: ${property.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-sky-400 to-sky-600 dark:from-sky-900 dark:to-sky-950">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 dark:to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl mx-auto w-full">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 text-center">
              Find your perfect stay with us
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8 text-center">
              Search deals on hotels, homes, and much more...
            </p>
            
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-8 sm:py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Popular Destinations
            </h2>
            <Button variant="text" iconPosition="right" icon={<ChevronRight size={18} />}>
              View all
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {destinations.slice(0, 6).map(destination => (
              <DestinationCard 
                key={destination.id} 
                destination={destination}
                onSelect={handleDestinationSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Special Deals Section */}
      <section className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Special Deals & Offers
            </h2>
            <Button variant="text" iconPosition="right" icon={<ChevronRight size={18} />}>
              View all
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {deals.map(deal => (
              <DealCard 
                key={deal.id} 
                deal={deal}
                onSelect={handleDealSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="results" className="py-8 sm:py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {filters.destination 
                ? `Properties in ${filters.destination}` 
                : 'Featured Properties'}
            </h2>
          </div>
          
          <PropertyList 
            properties={results.length > 0 ? results : properties.filter(p => p.isFeatured)} 
            isLoading={isLoading}
            onSelect={handlePropertySelect}
          />
        </div>
      </section>

      {/* Explore World Section */}
      <section className="py-8 sm:py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">
              Explore the World
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
              Discover beautiful destinations, unique experiences, and create unforgettable memories with your loved ones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <DestinationCard 
              destination={destinations[0]} 
              size="large" 
              onSelect={handleDestinationSelect}
            />
            <DestinationCard 
              destination={destinations[1]} 
              size="large"
              onSelect={handleDestinationSelect}
            />
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-8 sm:py-12 bg-primary-light dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Get the GoJanakpurTours&Travels App
              </h2>
              <p className="text-white/80 mb-6 text-sm sm:text-base">
                Book your stay on the go, get real-time notifications for your reservations, and access exclusive mobile-only deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Download for iOS
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" 
                alt="Mobile App"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;