import { ProductSize } from '../types/product';

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSizeId: string;
  onSizeSelect: (sizeId: string) => void;
}

export const SizeSelector = ({ sizes, selectedSizeId, onSizeSelect }: SizeSelectorProps) => {
  return (
    <div className="size-selector">
      <h3 className="selector-label">Size</h3>
      <div className="size-options">
        {sizes.map(size => (
          <button
            key={size.id}
            onClick={() => onSizeSelect(size.id)}
            className={`size-button ${selectedSizeId === size.id ? 'selected' : ''}`}
          >
            {size.name}
          </button>
        ))}
      </div>
    </div>
  );
};