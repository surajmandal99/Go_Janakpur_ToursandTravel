import { useState, useEffect } from 'react';
import { Property, SearchFilters } from '../types';
import { supabase } from '../lib/supabase';

const initialFilters: SearchFilters = {
  destination: '',
  checkIn: null,
  checkOut: null,
  guests: 2,
  priceRange: [0, 1000],
  rating: null,
  amenities: []
};

export const useSearch = () => {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [results, setResults] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchProperties = async () => {
      setIsLoading(true);
      try {
        let query = supabase
          .from('properties')
          .select('*');

        if (filters.destination) {
          query = query.or(
            `location->>'city'.ilike.%${filters.destination}%,` +
            `location->>'country'.ilike.%${filters.destination}%,` +
            `name.ilike.%${filters.destination}%`
          );
        }

        if (filters.priceRange) {
          query = query
            .gte('price', filters.priceRange[0])
            .lte('price', filters.priceRange[1]);
        }

        if (filters.rating) {
          query = query.gte('rating', filters.rating);
        }

        if (filters.amenities.length > 0) {
          query = query.contains('amenities', filters.amenities);
        }

        const { data, error } = await query;

        if (error) throw error;
        setResults(data || []);
      } catch (error) {
        console.error('Error searching properties:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(searchProperties, 500);
    return () => clearTimeout(timer);
  }, [filters]);

  const updateFilter = (filterKey: keyof SearchFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return { 
    filters, 
    updateFilter, 
    resetFilters, 
    results, 
    isLoading 
  };
};