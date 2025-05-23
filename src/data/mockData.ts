import { Property, Destination, Deal } from '../types';

// Mock Properties
export const properties: Property[] = [
  {
    id: '1',
    name: 'Grand Plaza Hotel',
    location: 'New York, USA',
    price: 199,
    rating: 4.7,
    reviewCount: 384,
    images: [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg'
    ],
    description: 'Luxury hotel in the heart of Manhattan with stunning views of the city skyline.',
    amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Room Service'],
    roomsAvailable: 5,
    isFeatured: true,
    coordinates: {
      lat: 40.7128,
      lng: -74.006
    }
  },
  {
    id: '2',
    name: 'Beachfront Resort',
    location: 'Miami, USA',
    price: 279,
    rating: 4.9,
    reviewCount: 512,
    images: [
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      'https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg'
    ],
    description: 'Luxury beachfront resort with private beach access and oceanview rooms.',
    amenities: ['Beach Access', 'Pool', 'Spa', 'Gym', 'Restaurant', 'Bar'],
    roomsAvailable: 2,
    isFeatured: true,
    coordinates: {
      lat: 25.7617,
      lng: -80.1918
    }
  },
  {
    id: '3',
    name: 'Mountain View Lodge',
    location: 'Denver, USA',
    price: 159,
    rating: 4.5,
    reviewCount: 246,
    images: [
      'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg',
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg',
      'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg'
    ],
    description: 'Cozy mountain lodge with stunning views and proximity to hiking trails.',
    amenities: ['Free WiFi', 'Fireplace', 'Parking', 'Breakfast', 'Hiking Trails'],
    roomsAvailable: 8,
    coordinates: {
      lat: 39.7392,
      lng: -104.9903
    }
  },
  {
    id: '4',
    name: 'City Center Suites',
    location: 'Chicago, USA',
    price: 189,
    rating: 4.3,
    reviewCount: 178,
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg'
    ],
    description: 'Modern suites in downtown Chicago with easy access to attractions.',
    amenities: ['Free WiFi', 'Parking', 'Gym', 'Business Center', 'Breakfast'],
    roomsAvailable: 3,
    coordinates: {
      lat: 41.8781,
      lng: -87.6298
    }
  },
  {
    id: '5',
    name: 'Harbor View Inn',
    location: 'San Francisco, USA',
    price: 229,
    rating: 4.6,
    reviewCount: 325,
    images: [
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      'https://images.pexels.com/photos/261156/pexels-photo-261156.jpeg'
    ],
    description: 'Charming inn with spectacular views of the San Francisco Bay and Golden Gate Bridge.',
    amenities: ['Free WiFi', 'Breakfast', 'Parking', 'Restaurant', 'Bar'],
    roomsAvailable: 1,
    coordinates: {
      lat: 37.7749,
      lng: -122.4194
    }
  }
];

// Popular Destinations
export const destinations: Destination[] = [
  {
    id: '1',
    name: 'New York',
    image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg',
    description: 'Experience the vibrant energy of the city that never sleeps.',
    properties: 1243,
    isPopular: true
  },
  {
    id: '2',
    name: 'Paris',
    image: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg',
    description: 'Discover romance, art, and culinary delights in the City of Light.',
    properties: 987,
    isPopular: true
  },
  {
    id: '3',
    name: 'Tokyo',
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg',
    description: 'Explore the perfect blend of tradition and futuristic innovation.',
    properties: 1567,
    isPopular: true
  },
  {
    id: '4',
    name: 'Rome',
    image: 'https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg',
    description: 'Immerse yourself in the ancient history and delicious cuisine.',
    properties: 845,
    isPopular: true
  },
  {
    id: '5',
    name: 'Bali',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
    description: 'Relax on stunning beaches and experience exotic culture.',
    properties: 723,
    isPopular: true
  },
  {
    id: '6',
    name: 'London',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
    description: 'Explore historic landmarks and vibrant neighborhoods.',
    properties: 1102
  }
];

// Special Deals
export const deals: Deal[] = [
  {
    id: '1',
    title: 'Summer Escape',
    description: 'Get 20% off on beach resorts for your summer vacation.',
    discount: '20% OFF',
    validUntil: 'August 31, 2025',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg'
  },
  {
    id: '2',
    title: 'City Break',
    description: 'Enjoy 15% off on city hotels for weekend getaways.',
    discount: '15% OFF',
    validUntil: 'December 15, 2025',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
  },
  {
    id: '3',
    title: 'Early Bird Special',
    description: 'Book 3 months in advance and save 25% on any destination.',
    discount: '25% OFF',
    validUntil: 'Ongoing',
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg'
  }
];