import React from 'react';
import { MapPin } from 'lucide-react';
import { Destination } from '../../types';
import Card from '../common/Card';

interface DestinationCardProps {
  destination: Destination;
  size?: 'small' | 'large';
  onSelect: (destination: Destination) => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  destination, 
  size = 'small',
  onSelect 
}) => {
  return (
    <Card 
      hoverEffect 
      className={`
        overflow-hidden relative group 
        ${size === 'large' ? 'aspect-[3/2]' : 'aspect-square'}
      `}
      onClick={() => onSelect(destination)}
    >
      <img 
        src={destination.image} 
        alt={destination.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-bold text-xl mb-1">{destination.name}</h3>
        
        <div className="flex items-center text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{destination.properties} properties</span>
        </div>
        
        {size === 'large' && (
          <p className="text-sm text-white/90 mb-2">{destination.description}</p>
        )}
        
        {destination.isPopular && (
          <span className="absolute top-3 right-3 bg-[#FCAF3D] text-xs text-[#1A4F8A] font-bold px-2 py-1 rounded-md">
            Popular
          </span>
        )}
      </div>
    </Card>
  );
};

export default DestinationCard;