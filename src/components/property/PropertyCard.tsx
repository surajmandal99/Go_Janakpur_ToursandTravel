import React, { useState } from 'react';
import { Star, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import { Property } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleBookNow = () => {
    const booking = {
      propertyName: property.name,
      propertyId: property.id,
      totalAmount: property.price,
    };
    navigate('/checkout', { state: { booking } });
  };

  return (
    <Card 
      hoverEffect 
      className="h-full flex flex-col transition-transform duration-300"
    >
      {/* Image carousel */}
      <div className="relative h-48 lg:h-56 overflow-hidden">
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        
        {/* Image navigation */}
        {property.images.length > 1 && (
          <>
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white"
              onClick={prevImage}
            >
              <ArrowLeft size={16} className="text-gray-800" />
            </button>
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 hover:bg-white"
              onClick={nextImage}
            >
              <ArrowRight size={16} className="text-gray-800" />
            </button>
            
            {/* Image indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {property.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full ${
                    idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Featured badge */}
        {property.isFeatured && (
          <div className="absolute top-2 left-2 bg-[#FCAF3D] text-xs text-[#1A4F8A] font-bold px-2 py-1 rounded-md">
            Featured
          </div>
        )}
      </div>

      <div className="p-4 flex-grow flex flex-col">
        {/* Rating */}
        <div className="flex items-center mb-1">
          <Star className="text-[#FCAF3D] mr-1" size={16} fill="#FCAF3D" />
          <span className="text-sm font-semibold">{property.rating}</span>
          <span className="text-xs text-gray-500 ml-1">({property.reviewCount} reviews)</span>
        </div>
        
        {/* Name */}
        <h3 className="font-bold text-lg mb-1 text-gray-800">{property.name}</h3>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{property.location}</span>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{property.description}</p>
        
        {/* Amenities highlights */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="mt-auto pt-2 flex items-end justify-between">
          <div>
            <p className="text-xs text-gray-500">Price per night</p>
            <p className="text-lg font-bold text-[#1A4F8A]">${property.price}</p>
          </div>
          
          <Button 
            size="sm" 
            variant="secondary"
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;