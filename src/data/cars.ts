import { Car } from '../types';

export const cars: Car[] = [
  {
    id: 'toyota-corolla-2024',
    make: 'Toyota',
    model: 'Corolla Altis',
    year: 2024,
    price: '$24,500',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop',
    category: 'Sedan',
    isNewArrival: true,
    description: 'The world\'s best-selling sedan, now more refined and efficient than ever. Perfect for city commutes and long journeys.',
    specs: {
      engine: '1.8L 4-Cylinder',
      power: '138 hp',
      transmission: 'CVT',
      fuelEconomy: '32/41 MPG',
      drivetrain: 'FWD'
    }
  },
  {
    id: 'suzuki-swift-2024',
    make: 'Suzuki',
    model: 'Swift Sport',
    year: 2024,
    price: '$19,800',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=2069&auto=format&fit=crop',
    category: 'Hatchback',
    isNewArrival: true,
    description: 'Agile, stylish, and incredibly fun to drive. The Swift Sport brings a punchy performance to the compact hatchback segment.',
    specs: {
      engine: '1.4L Boosterjet',
      power: '127 hp',
      transmission: '6-Speed Manual',
      fuelEconomy: '38 MPG Combined',
      drivetrain: 'FWD'
    }
  },
  {
    id: 'honda-civic-type-r',
    make: 'Honda',
    model: 'Civic Type R',
    year: 2024,
    price: '$45,000',
    image: 'https://images.unsplash.com/photo-1618843479619-f41907cb3a0a?q=80&w=2070&auto=format&fit=crop',
    category: 'Sports',
    isNewArrival: false,
    description: 'The ultimate hot hatch. Engineered for the track, refined for the street. A masterpiece of Japanese engineering.',
    specs: {
      engine: '2.0L Turbocharged',
      power: '315 hp',
      transmission: '6-Speed Manual',
      fuelEconomy: '22/28 MPG',
      drivetrain: 'FWD'
    }
  },
  {
    id: 'mazda-cx-5-2024',
    make: 'Mazda',
    model: 'CX-5',
    year: 2024,
    price: '$29,300',
    image: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=2071&auto=format&fit=crop',
    category: 'SUV',
    isNewArrival: false,
    description: 'Elegance meets versatility. The Mazda CX-5 offers a premium interior and engaging driving dynamics that stand out in its class.',
    specs: {
      engine: '2.5L 4-Cylinder',
      power: '187 hp',
      transmission: '6-Speed Automatic',
      fuelEconomy: '24/30 MPG',
      drivetrain: 'i-ACTIV AWD'
    }
  },
  {
    id: 'nissan-z-2024',
    make: 'Nissan',
    model: 'Proto Spec Z',
    year: 2024,
    price: '$52,000',
    image: 'https://images.unsplash.com/photo-1627454809935-7798782a937a?q=80&w=2070&auto=format&fit=crop',
    category: 'Sports',
    isNewArrival: true,
    description: 'A modern icon that pays homage to its heritage. The all-new Z delivers thrilling performance with a twin-turbocharged heart.',
    specs: {
      engine: '3.0L V6 Twin-Turbo',
      power: '400 hp',
      transmission: '9-Speed Automatic',
      fuelEconomy: '19/28 MPG',
      drivetrain: 'RWD'
    }
  }
];
