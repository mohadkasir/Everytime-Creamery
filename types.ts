export enum ProductCategory {
  CLASSIC = 'Classic',
  PREMIUM = 'Premium',
  LUXURY = 'Luxury',
  ULTRA = 'Ultra'
}

export type ProductSize = '250ml' | '500ml';

export interface IProduct {
  id: string;
  name: string;
  category: ProductCategory;
  price250: number;
  price500: number;
  description: string;
  image: string; // Static image path
  imagePrompt: string; // Stored for reference/meta
  isBestseller?: boolean;
}

export interface ICartItem extends IProduct {
  quantity: number;
  selectedSize: ProductSize;
}

export interface IConfig {
  deliveryFee: number;
  freeThreshold: number;
  openHour: number;
  closeHour: number;
  pincodes: string[];
  phones: {
    primary: string;
    secondary: string;
  };
}

export interface ICartTotals {
  subtotal: number;
  shipping: number;
  total: number;
}