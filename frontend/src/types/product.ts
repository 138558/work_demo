export interface ProductVariant {
  id: string;
  sku: string;
  price: number;
  stock: number;
  image?: string;
}

export interface ProductSize {
  id: string;
  name: string;
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  images: string[];
  variants: ProductVariant[];
  sizes: ProductSize[];
  colors: ProductColor[];
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
  image?: string;
}