interface QuantitySelectorProps {
  quantity: number;
  maxStock: number;
  onQuantityChange: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, maxStock, onQuantityChange }: QuantitySelectorProps) => {
  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < maxStock) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="quantity-selector">
      <h3 className="selector-label">Quantity</h3>
      <div className="quantity-controls">
        <button 
          onClick={handleDecrement} 
          className="quantity-button"
          disabled={quantity <= 1}
        >
          -
        </button>
        <span className="quantity-value">{quantity}</span>
        <button 
          onClick={handleIncrement} 
          className="quantity-button"
          disabled={quantity >= maxStock}
        >
          +
        </button>
      </div>
    </div>
  );
};