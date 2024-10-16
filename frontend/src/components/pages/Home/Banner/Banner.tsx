import "./Banner.css";
const Banner: React.FC = () => {
  return (
    <section className="container">
      <div className="content">
        <img
          src="/assets/images/scandinavian.png"
          alt="Image Flower"
          className="background-image"
        />
        <img src="/assets/images/rectangle.png" alt="Rectangle" />
        <div className="overlay-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </div>
      </div>
    </section>
  );
};

export default Banner;
