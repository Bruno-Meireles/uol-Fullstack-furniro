import Banner from "../../components/Banner/Banner";
import Browser from "./Browse/Browse";
import Support from "../../components/Support/Support";
import ProductsList from "./ProductList/ProductList";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Browser />
      <ProductsList title="Our Products" limit={8} />
      <Support />
    </div>
  );
};

export default Home;
