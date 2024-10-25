import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsList from "../Home/ProductList/ProductList";
import axios from "axios";
import "./SingleProductPage.css";
import ProductDetailItem from "./ProductDetailItem/ProductDetailItem";
import DescriptionAdditional from "./DescriptionAdditional/DescriptionAdditional";

const SingleProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (action: string) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <section className="singleBar">
        <div className="content">
          <nav className="singleBarItems">
            <Link to={"/"} className="singleBarLinks">
              Home
            </Link>
            <img src="/assets/icons/arrow.svg" alt="arrow" />
            <Link to={"/shop"} className="singleBarLinks">
              Shop
            </Link>
            <img src="/assets/icons/arrow.svg" alt="arrow" />
            <img src="/assets/icons/line.svg" alt="line" />
            <p>{product.name}</p>
          </nav>

          <ProductDetailItem
            product={product}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
          />
        </div>
      </section>
      <div className="separador"></div>

      <DescriptionAdditional
        title="Description"
        h4="Additional Information"
        paragraph="Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        "
        paragraph2="Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel."
      />

      <ProductsList title="Related Products" limit={4} isSinglePage={true} />
    </div>
  );
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  discount_price?: string;
  discount_percent?: string;
  image_link: string;
  other_images_link: string[];
  is_new?: boolean;
  sku: string;
 }

export default SingleProductPage;
