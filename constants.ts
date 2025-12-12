import { IConfig, IProduct, ProductCategory } from './types.ts';

export const APP_CONFIG: IConfig = {
  deliveryFee: 40,
  freeThreshold: 250,
  openHour: 15, // 3 PM
  closeHour: 23, // 11 PM
  pincodes: ['600013'], // Royapuram
  phones: {
    primary: '919941712416',
    secondary: '917401314139'
  }
};

export const INVENTORY: IProduct[] = [
  // Classic
  {
    id: 'c1',
    name: 'OG Vanilla',
    category: ProductCategory.CLASSIC,
    price250: 149,
    price500: 289,
    description: 'The original classic. Pure, creamy, and nostalgic.',
    imagePrompt: 'Macro shot of vanilla ice cream scoop, real bean specks, creamy texture, rich cream background, soft gold lighting, photorealistic food photography --ar 4:5',
    image: '/images/c1.png'
  },
  {
    id: 'c2',
    name: 'Tender Coconut',
    category: ProductCategory.CLASSIC,
    price250: 149,
    price500: 289,
    description: 'Fresh tender coconut bits blended into creamy perfection.',
    imagePrompt: 'Scoop of white coconut ice cream, bits of fresh tender coconut visible, tropical lighting, soft focus leaf shadow, photorealistic food photography --ar 4:5',
    isBestseller: true,
    image: '/images/c2.png'
  },
  // Premium
  {
    id: 'p1',
    name: 'Dates and Honey',
    category: ProductCategory.PREMIUM,
    price250: 169,
    price500: 329,
    description: 'A royal blend of Arabian dates and organic honey.',
    imagePrompt: 'Rich beige ice cream, glossy honey drizzle, chopped dates, warm golden hour lighting, cinematic composition, photorealistic food photography --ar 4:5',
    image: '/images/p1.png'
  },
  {
    id: 'p2',
    name: "Oreo N' Cream",
    category: ProductCategory.PREMIUM,
    price250: 169,
    price500: 329,
    description: 'Crunchy crushed Oreos swirled in vanilla cream.',
    imagePrompt: 'Cookies and cream ice cream, large chunk of oreo cookie, high contrast texture, bright studio lighting, photorealistic food photography --ar 4:5',
    isBestseller: true,
    image: '/images/p2.png'
  },
  // Luxury
  {
    id: 'l1',
    name: 'Strawberry Cheese Cream',
    category: ProductCategory.LUXURY,
    price250: 189,
    price500: 349,
    description: 'Real strawberries meeting rich cream cheese.',
    imagePrompt: 'Pink strawberry cheesecake ice cream, fresh strawberry slices, crumbly biscuit topping, pastel aesthetic, photorealistic food photography --ar 4:5',
    image: '/images/l1.png'
  },
  {
    id: 'l2',
    name: 'Milo Magic',
    category: ProductCategory.LUXURY,
    price250: 189,
    price500: 349,
    description: 'The malted magic of Milo in a frozen treat.',
    imagePrompt: 'Malted chocolate ice cream, dusting of Milo powder, vintage spoon, warm brown tones, cozy atmosphere, photorealistic food photography --ar 4:5',
    image: '/images/l2.png'
  },
  {
    id: 'l3',
    name: "Cookies N' Caramel",
    category: ProductCategory.LUXURY,
    price250: 189,
    price500: 349,
    description: 'Decadent caramel ribbons with cookie crunch.',
    imagePrompt: 'Caramel swirl ice cream, dripping golden caramel sauce, cookie crumbles, dramatic side lighting, photorealistic food photography --ar 4:5',
    image: '/images/l3.png'
  },
  // Ultra
  {
    id: 'u1',
    name: 'Hazel Nutella',
    category: ProductCategory.ULTRA,
    price250: 219,
    price500: 399,
    description: 'Premium hazelnuts and authentic Nutella swirl.',
    imagePrompt: 'Swirls of dark hazelnut chocolate, glossy texture, whole roasted hazelnuts, studio lighting, hyper-detailed, photorealistic food photography --ar 4:5',
    isBestseller: true,
    image: '/images/u1.png'
  }
];