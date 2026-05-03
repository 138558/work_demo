import { ProductColor } from '../types/product';

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColorId: string;
  onColorSelect: (colorId: string) => void;
}

export const ColorSelector = ({ colors, selectedColorId, onColorSelect }: ColorSelectorProps) => {
  return (
    <div className="color-selector">
      <h3 className="selector-label">Color</h3>
      <div className="color-options">
        {colors.map(color => (
          <button
            key={color.id}
            onClick={() => onColorSelect(color.id)}
            className={`color-button ${selectedColorId === color.id ? 'selected' : ''}`}
            style={{ backgroundColor: color.hex, border: color.hex === '#ffffff' ? '1px solid #ddd' : 'none' }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};