import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Check, Info, Minus, Plus } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { deals } from '../data/mockData';

const DealPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState('');
  const deal = deals.find(d => d.id === id);

  // Base price per person
  const basePricePerPerson = 799;
  const originalPricePerPerson = 999;

  const handleGuestChange = (increment: boolean) => {
    if (increment && guests < 10) {
      setGuests(prev => prev + 1);
    } else if (!increment && guests > 1) {
      setGuests(prev => prev - 1);
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deal || !checkIn) {
      alert('Please select a check-in date');
      return;
    }

    const booking = {
      propertyName: deal.title,
      checkIn,
      guests,
      totalAmount: basePricePerPerson * guests,
      dealId: deal.id,
      dealTitle: deal.title
    };

    navigate('/checkout', { state: { booking } });
  };

  if (!deal) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <Card className="p-6 text-center">
          <Info size={48} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Deal Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            The deal you're looking for doesn't exist or has expired.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="bg-[#FCAF3D] text-[#1A4F8A] font-bold px-4 py-2 rounded-md inline-block mb-4">
              {deal.discount}
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">{deal.title}</h1>
            <p className="text-white/90 text-lg">{deal.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Deal Details
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="text-primary-light dark:text-primary-dark mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                        Valid Until
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {deal.validUntil}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Accommodation in selected hotels',
                        'Daily breakfast',
                        'Airport transfers',
                        'Local guide for sightseeing',
                        'All taxes and service charges'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                          <Check className="text-green-500 mr-2" size={20} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
                      Terms and Conditions
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Booking must be made before the valid until date</li>
                      <li>Subject to availability</li>
                      <li>Cannot be combined with other offers</li>
                      <li>Prices are per person based on double occupancy</li>
                      <li>Cancellation policy applies</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Book This Deal
                </h3>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Number of Guests
                    </label>
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => handleGuestChange(false)}
                        className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {guests}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleGuestChange(true)}
                        className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-300">Original Price</span>
                      <span className="text-gray-600 dark:text-gray-300 line-through">
                        ${originalPricePerPerson * guests}
                      </span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold text-gray-800 dark:text-white">Deal Price</span>
                      <span className="font-semibold text-primary-light dark:text-primary-dark">
                        ${basePricePerPerson * guests}
                      </span>
                    </div>
                    <Button variant="secondary" fullWidth type="submit">
                      Book Now
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealPage;