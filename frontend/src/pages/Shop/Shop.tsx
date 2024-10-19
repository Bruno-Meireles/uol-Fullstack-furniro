import Banner from "../../components/Banner/Banner";
import Support from "../../components/Support/Support";
// import ProductsList from "../Home/ProductList/ProductList";

const Shop: React.FC = () => {
  return (
    <section>
      <Banner />
      {/* <ProductsList  limit={16} /> */}
      <Support />
    </section>
  );
};

export default Shop;
