import Banner from "../../Banner/Banner";
import Browser from "./Browse/Browse";
import Products from "./ProductsList/ProductsList"; 
import Support from "../../Support/Support";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Browser />
      <Products title={"Our Products"}  /> 
      <Support />
    </div>
  );
};
export default Home;
