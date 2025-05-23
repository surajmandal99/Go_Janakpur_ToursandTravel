// Common Types
export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  description: string;
  amenities: string[];
  roomsAvailable: number;
  isFeatured?: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SearchFilters {
  destination: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  priceRange: [number, number];
  rating: number | null;
  amenities: string[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  properties: number;
  isPopular?: boolean;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
}