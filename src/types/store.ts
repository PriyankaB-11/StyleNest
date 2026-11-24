export type PageRoute =
  | 'home'
  | 'men'
  | 'women'
  | 'product'
  | 'search'
  | 'cart'
  | 'checkout'
  | 'confirmation';

export type Department = 'men' | 'women';

export interface ProductColorOption {
  name: string;
  swatchClass: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  department: Department;
  category: 'outerwear' | 'tailoring' | 'knitwear' | 'dresses' | 'accessories';
  categoryLabel: string;
  price: number;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  collectionKicker: string;
  description: string;
  composition: string;
  origin: string;
  image: string;
  gallery: string[];
  colors: ProductColorOption[];
  sizes: { label: string; available: boolean }[];
  defaultSize: string;
}

export interface CartItem {
  productId: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ShippingAddress {
  email: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface OrderReceipt {
  orderNumber: string;
  dateLabel: string;
  estimatedDelivery: string;
  shipping: ShippingAddress;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
}
