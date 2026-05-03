interface StockInfoProps {
  stock: number;
}

export const StockInfo = ({ stock }: StockInfoProps) => {
  const getStockStatus = () => {
    if (stock === 0) {
      return { text: 'Out of stock', className: 'out-of-stock' };
    }
    if (stock <= 5) {
      return { text: `Only ${stock} left in stock`, className: 'low-stock' };
    }
    return { text: 'In stock', className: 'in-stock' };
  };

  const status = getStockStatus();

  return (
    <div className={`stock-info ${status.className}`}>
      {status.text}
    </div>
  );
};