import "./Browse.css";
import { useNavigate } from "react-router-dom";

const BrowseItem: React.FC<BrowseItemProps> = ({ imageUrl, title, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="browser-item" onClick={handleClick}>
      <img src={imageUrl} alt={title} className="browser-image" />
      <h4 className="browser-title">{title}</h4>
    </div>
  );
};
const Browse: React.FC = () => {
  return (
    <section className="browser-section">
      <h1 className="browser-title">Browse The Range</h1>
      <div className="browser-container">
        <BrowseItem
          imageUrl="/assets/images/Mask-table.png"
          title="Dining"
          link="/products/category/3" 
        />
        <BrowseItem
          imageUrl="/assets/images/Image-room.png"
          title="Living"
          link="/products/category/2" 
        />
        <BrowseItem
          imageUrl="/assets/images/Mask-plant.png"
          title="Bedroom"
          link="/products/category/1"
        />
      </div>
    </section>
  );
};

interface BrowseItemProps {
  imageUrl: string;
  title: string;
  link: string;
}

export default Browse;
