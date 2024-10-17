import Banner from "./Banner/Banner";
import Browser from "./Browse/Browse";
import Product from "./Product/Product";
import Support from "./Support/Support";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Browser />
      <Product />
      <Support />
    </div>
  );
};
export default Home;
