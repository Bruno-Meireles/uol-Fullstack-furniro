import "./Browse.css";

const BrowseItem: React.FC<BrowseItemProps> = ({ imageUrl, title, link }) => {
  return (
    <a href={link} className="browser-item">
      <img src={imageUrl} alt={title} className="browser-image" />
      <h4 className="browser-title">{title}</h4>
    </a>
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
          link="#"
        />
        <BrowseItem
          imageUrl="/assets/images/Image-room.png"
          title="Living"
          link="#"
        />
        <BrowseItem
          imageUrl="/assets/images/Mask-plant.png"
          title="Bedroom"
          link="#"
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
