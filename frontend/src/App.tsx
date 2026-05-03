import { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header, ProductDetailPage } from './components';
import { fetchProduct } from './data/mockData';
import { Product } from './types/product';
import './App.css';

function App() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProduct('prod-1');
        setProduct(data);
        setError(null);
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          {product && <ProductDetailPage product={product} />}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;