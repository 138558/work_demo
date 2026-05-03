import { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="product-gallery">
      <div className="main-image">
        <img src={images[currentImageIndex]} alt="Product" />
      </div>
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
          >
            <img src={image} alt={`Product view ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};