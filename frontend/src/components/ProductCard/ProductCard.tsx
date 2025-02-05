const Product: React.FC<IProps> = ({ product, onSeeDetails }) => {
  const discountedPrice = product.discount_percent
    ? (
        (parseFloat(product.price) *
          (1 - parseFloat(product.discount_percent) / 100)) /
        100
      ).toFixed(2)
    : parseFloat(product.price).toFixed(2);

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
                {discountedPrice &&
                  parseFloat(discountedPrice).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
              </span>
            </p>
            <p className="original-price">
              R$
              <span className="price-value">
                {(parseFloat(product.price) / 100).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
          </>
        ) : (
          <p className="price">
            R$
            <span className="price-value-original">
              {parseFloat(product.price).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_percent?: string;
  image_link: string;
  is_new?: boolean;
}

interface IProps {
  product: ProductInterface;
  onSeeDetails: (productId: number) => void;
}

export default Product;
