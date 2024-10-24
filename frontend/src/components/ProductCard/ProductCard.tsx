const Product: React.FC<IProps> = ({ product, onSeeDetails }) => {
  const calculateDiscountedPrice = () => {
    if (product.discount_percent && product.price) {
      const originalPrice = parseFloat(product.price);
      const discount =
        (originalPrice * parseFloat(product.discount_percent)) / 100;
      return (originalPrice - discount).toFixed(2);
    }
    return product.price;
  };

  return (
    <div className="product-card" key={product.id}>
      <div className="product-image">
        <img src={product.image_link} alt={product.name} />
        {product.discount_percent && (
          <span className="discount_percent">-{product.discount_percent}%</span>
        )}
        {product.is_new && <span className="new">New</span>}
        <div className="hover-actions">
          <button
            className="button-details"
            onClick={() => onSeeDetails(product.id)}
          >
            See Details
          </button>
        </div>
      </div>
      <h3 className="product-title">{product.name}</h3>
      <p className="product-sub-title">{product.description}</p>
      <div className="price-container">
        {product.discount_percent ? (
          <>
            <p className="price">
              R$
              <span className="price-value-discount">
                {calculateDiscountedPrice()}
              </span>
            </p>
            <p className="original-price">
              R$
              <span className="price-value">
                {parseFloat(product.price).toLocaleString("pt-BR")}
              </span>
            </p>
          </>
        ) : (
          <p className="price">
            R$
            <span className="price-value">
              {parseFloat(product.price).toLocaleString("pt-BR")}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_percent?: string;
  image_link: string;
  is_new?: boolean;
}

interface IProps {
  product: Product;
  onSeeDetails: (productId: number) => void;
}

export default Product;
