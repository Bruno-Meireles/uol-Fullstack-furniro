import "./Browse.css";

interface BrowseItemProps {
  imageUrl: string;
  paragraph: string;
  link: string;
}
const BrowseItem: React.FC<BrowseItemProps> = ({
  imageUrl,
  paragraph,
  link,
}) => {
  return (
    <div className="browser-item">
      <a href={link}>
        <img src={imageUrl} alt={paragraph} className="browser-image" />
        <p className="browser-paragraph">{paragraph}</p>
      </a>
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
          paragraph="Dining"
          link="#"
        />
        <BrowseItem
          imageUrl="/assets/images/Image-room.png"
          paragraph="Living"
          link="#"
        />
        <BrowseItem
          imageUrl="/assets/images/Mask-plant.png"
          paragraph="Bedroom"
          link="#"
        />
      </div>
    </section>
  );
};

export default Browse;
