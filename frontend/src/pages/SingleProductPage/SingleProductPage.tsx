import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsList from "../Home/ProductList/ProductList";

const SingleProductPage: React.FC = () => {
  return (
    <div>
      <Header />
          <ProductsList title="Related Products" limit={4} />
          <Footer />
    </div>
  );
};
export default SingleProductPage;
