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
        <img
          className="Rectangle"
          src="/assets/images/rectangle.png"
          alt="Rectangle"
        />
        <a href="#" className="overlay-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </a>
      </div>
    </section>
  );
};

export default Banner;
