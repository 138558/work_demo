import { Product } from '../types/product';

export const mockProduct: Product = {
  id: 'prod-1',
  name: 'Premium Cotton T-Shirt',
  description: 'Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this shirt features a soft touch and durable construction. Perfect for everyday wear, it comes in a variety of colors and sizes to suit any style.',
  basePrice: 49,
  images: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800'
  ],
  variants: [
    { id: 'var-1', sku: 'TSHIRT-S-BLK', price: 49, stock: 10 },
    { id: 'var-2', sku: 'TSHIRT-M-BLK', price: 49, stock: 15 },
    { id: 'var-3', sku: 'TSHIRT-L-BLK', price: 49, stock: 8 },
    { id: 'var-4', sku: 'TSHIRT-S-WHT', price: 49, stock: 20 },
    { id: 'var-5', sku: 'TSHIRT-M-WHT', price: 49, stock: 25 },
    { id: 'var-6', sku: 'TSHIRT-L-WHT', price: 49, stock: 12 }
  ],
  sizes: [
    { id: 'size-s', name: 'S' },
    { id: 'size-m', name: 'M' },
    { id: 'size-l', name: 'L' }
  ],
  colors: [
    { id: 'color-black', name: 'Black', hex: '#000000' },
    { id: 'color-white', name: 'White', hex: '#ffffff' }
  ]
};

export const fetchProduct = async (_productId: string): Promise<Product> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockProduct;
};