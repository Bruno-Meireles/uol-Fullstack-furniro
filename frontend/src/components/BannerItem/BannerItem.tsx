import { Link } from "react-router-dom";
import "./BannerItem.css";
const BannerItem: React.FC<IPropsBanner> = ({
  imgUrl,
  p,
  title,
  rectangleSrc,
  linkHome,
  linkShop,
  type,
  icon,
}) => {
  const className = type === "tipo1" ? "type1" : "type2";
  return (
    <section className={`container ${className}`}>
      <div className="content">
        <img src={imgUrl} alt={title} className="background-image-home" />

        {type === "tipo1" && (
          <img className="Rectangle" src={rectangleSrc} alt={title} />
        )}
        <p className="overlay-text">{p}</p>
        {title && <h1 className="banner-title">{title}</h1>}
        {linkHome && (
          <Link to={linkHome} className="banner-link-home">
            Home
          </Link>
        )}
        <img src={icon} alt={title} className="banner-icon" />
        {linkShop && (
          <Link to={linkShop} className="banner-link-shop">
            Shop
          </Link>
        )}
      </div>
    </section>
  );
};

interface IPropsBanner {
  imgUrl: string;
  title?: string;
  linkHome?: string;
  linkShop?: string;
  p?: string;
  rectangleSrc?: string;
  icon?: string;
  type: string;
}

export default BannerItem;
