import React, { useState } from 'react';
import { Search, Calendar, Users, X, Minus, Plus } from 'lucide-react';
import Button from './Button';

interface SearchBarProps {
  onSearch: (destination: string, checkIn: Date | null, checkOut: Date | null, guests: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(
      destination, 
      checkIn ? new Date(checkIn) : null, 
      checkOut ? new Date(checkOut) : null, 
      guests
    );
  };

  const clearSearch = () => {
    setDestination('');
    setCheckIn('');
    setCheckOut('');
    setGuests(2);
  };

  const handleGuestChange = (increment: boolean) => {
    if (increment && guests < 10) {
      setGuests(prev => prev + 1);
    } else if (!increment && guests > 1) {
      setGuests(prev => prev - 1);
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden transition-all duration-300 hover:bg-white dark:hover:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
        {/* Destination */}
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Destination</label>
          <div className="relative">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-7 pr-3 py-2 text-gray-700 dark:text-gray-300 bg-transparent focus:outline-none"
              onFocus={() => setIsExpanded(true)}
            />
            {destination && (
              <X
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
                size={16}
                onClick={() => setDestination('')}
              />
            )}
          </div>
        </div>

        {/* Check-in */}
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Check-in</label>
          <div className="relative">
            <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-7 pr-3 py-2 text-gray-700 dark:text-gray-300 bg-transparent focus:outline-none"
              onFocus={() => setIsExpanded(true)}
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Check-out</label>
          <div className="relative">
            <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-7 pr-3 py-2 text-gray-700 dark:text-gray-300 bg-transparent focus:outline-none"
              onFocus={() => setIsExpanded(true)}
            />
          </div>
        </div>

        {/* Guests */}
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Guests</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
              className="w-full flex items-center text-left"
            >
              <Users className="text-gray-400 mr-2" size={18} />
              <span className="text-gray-700 dark:text-gray-300">{guests} Guest{guests !== 1 ? 's' : ''}</span>
            </button>

            {isGuestDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Guests</span>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => handleGuestChange(false)}
                      className="p-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-gray-700 dark:text-gray-300 min-w-[2ch] text-center">{guests}</span>
                    <button
                      type="button"
                      onClick={() => handleGuestChange(true)}
                      className="p-1 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="flex justify-between items-center">
          <button 
            type="button" 
            className="text-primary-light dark:text-primary-dark text-sm hover:underline"
            onClick={clearSearch}
          >
            Clear all
          </button>
          <Button type="submit" variant="secondary">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;