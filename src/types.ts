export interface CarSpec {
  engine: string;
  power: string;
  transmission: string;
  fuelEconomy: string;
  drivetrain: string;
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: string;
  image: string;
  category: 'Sedan' | 'Hatchback' | 'SUV' | 'Sports';
  isNewArrival: boolean;
  specs: CarSpec;
  description: string;
}
