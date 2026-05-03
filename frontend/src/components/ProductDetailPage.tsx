import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { ProductGallery } from './ProductGallery';
import { ProductInfo } from './ProductInfo';
import { ColorSelector } from './ColorSelector';
import { SizeSelector } from './SizeSelector';
import { QuantitySelector } from './QuantitySelector';
import { StockInfo } from './StockInfo';
import { AddToCartButton } from './AddToCartButton';
import { useCart } from '../context/CartContext';

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const [selectedColorId, setSelectedColorId] = useState(product.colors[0].id);
  const [selectedSizeId, setSelectedSizeId] = useState(product.sizes[0].id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const selectedColor = product.colors.find(c => c.id === selectedColorId);
  const selectedSize = product.sizes.find(s => s.id === selectedSizeId);
  
  const selectedVariant = product.variants.find(
    v => v.sku.includes(selectedSize?.name ?? '') && 
         (v.sku.includes('BLK') && selectedColor?.name === 'Black' || 
          v.sku.includes('WHT') && selectedColor?.name === 'White')
  ) || product.variants[0];

  const currentStock = selectedVariant ? selectedVariant.stock : 0;
  const maxQuantity = Math.min(currentStock, 10);

  useEffect(() => {
    setQuantity(1);
  }, [selectedColorId, selectedSizeId]);

  const handleAddToCart = () => {
    if (!selectedVariant) return;
    
    addToCart({
      id: `cart-${Date.now()}`,
      productId: product.id,
      variantId: selectedVariant.id,
      name: product.name,
      price: selectedVariant.price,
      quantity: quantity,
      size: selectedSize?.name,
      color: selectedColor?.name,
      image: product.images[0]
    });
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-column">
          <ProductGallery images={product.images} />
        </div>
        <div className="product-column">
          <ProductInfo product={product} selectedVariantPrice={selectedVariant.price} />
          
          <div className="selectors-container">
            <ColorSelector
              colors={product.colors}
              selectedColorId={selectedColorId}
              onColorSelect={setSelectedColorId}
            />
            
            <SizeSelector
              sizes={product.sizes}
              selectedSizeId={selectedSizeId}
              onSizeSelect={setSelectedSizeId}
            />
            
            <StockInfo stock={currentStock} />
            
            <QuantitySelector
              quantity={quantity}
              maxStock={maxQuantity}
              onQuantityChange={setQuantity}
            />
            
            <AddToCartButton
              onAddToCart={handleAddToCart}
              disabled={currentStock === 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};