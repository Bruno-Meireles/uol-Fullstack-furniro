import Browser from "./Browse/Browse";
import Support from "../../components/Support/Support";
import ProductsList from "./ProductList/ProductList";
import BannerItem from "../../components/BannerItem/BannerItem";

const Home: React.FC = () => {
  return (
    <div>
      <BannerItem
        imgUrl="/assets/images/scandinavian.png"
        rectangleSrc="/assets/images/rectangle.png"
        p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis."
        type="tipo1"
      />
      <Browser />
      <ProductsList title="Our Products" limit={8} />
      <Support />
    </div>
  );
};

export default Home;
