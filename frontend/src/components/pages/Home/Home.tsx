import Banner from "./Banner/Banner";
import Browser from "./Browse/Browse";
import Product from "./Product/Product";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Browser />
      <Product />
    </div>
  );
};
export default Home;
