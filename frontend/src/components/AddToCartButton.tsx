import { useState } from 'react';

interface AddToCartButtonProps {
  onAddToCart: () => void;
  disabled: boolean;
}

export const AddToCartButton = ({ onAddToCart, disabled }: AddToCartButtonProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClick = () => {
    setIsAdding(true);
    setTimeout(() => {
      onAddToCart();
      setIsAdding(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }, 500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isAdding}
      className={`add-to-cart-button ${disabled ? 'disabled' : ''} ${showSuccess ? 'success' : ''}`}
    >
      {isAdding ? 'Adding...' : showSuccess ? 'Added!' : 'Add to Cart'}
    </button>
  );
};