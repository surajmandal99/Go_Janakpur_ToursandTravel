import React from 'react';
import { Clock } from 'lucide-react';
import { Deal } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

interface DealCardProps {
  deal: Deal;
  onSelect: (deal: Deal) => void;
}

const DealCard: React.FC<DealCardProps> = ({ deal, onSelect }) => {
  const navigate = useNavigate();

  const handleViewDeal = () => {
    navigate(`/deal/${deal.id}`);
  };

  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative h-40">
        <img 
          src={deal.image} 
          alt={deal.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-[#FCAF3D] text-[#1A4F8A] font-bold py-1 px-2 rounded-md">
          {deal.discount}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-1 text-gray-800">{deal.title}</h3>
        <p className="text-sm text-gray-600 mb-3">{deal.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock size={14} className="mr-1" />
          <span>Valid until {deal.validUntil}</span>
        </div>
        
        <div className="mt-auto">
          <Button 
            variant="secondary" 
            size="sm" 
            fullWidth
            onClick={handleViewDeal}
          >
            View Deal
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DealCard;