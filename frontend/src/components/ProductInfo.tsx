import { Product } from '../types/product';

interface ProductInfoProps {
  product: Product;
  selectedVariantPrice: number;
}

export const ProductInfo = ({ product, selectedVariantPrice }: ProductInfoProps) => {
  return (
    <div className="product-info">
      <h1 className="product-name">{product.name}</h1>
      <div className="product-price">${selectedVariantPrice.toFixed(2)}</div>
      <p className="product-description">{product.description}</p>
    </div>
  );
};