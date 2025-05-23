import React from 'react';
import { Property } from '../../types';
import PropertyCard from './PropertyCard';
import { Loader2 } from 'lucide-react';

interface PropertyListProps {
  properties: Property[];
  isLoading?: boolean;
  onSelect: (property: Property) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({ 
  properties, 
  isLoading = false,
  onSelect 
}) => {
  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-12">
        <Loader2 className="animate-spin text-[#1A4F8A] mb-3" size={40} />
        <p className="text-gray-600">Finding the best properties for you...</p>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-gray-600 mb-2">No properties found for your search criteria.</p>
        <p className="text-gray-500 text-sm">Try adjusting your filters or search for a different location.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(property => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default PropertyList;