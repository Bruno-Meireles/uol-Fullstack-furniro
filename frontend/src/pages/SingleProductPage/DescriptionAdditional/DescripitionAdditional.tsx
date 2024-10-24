import "./DescripitionAdditional.css";

const DescripitionAdditional: React.FC<IPropsDescripition> = ({
  title,
  h4,
  paragraph,
  paragraph2,
}) => {
  return (
    <section className="descripttion">
      <div className="content">
        <div className="descripittion-container">
          <h1 className="desctipittion-titles">
            {title} <span className="descripittion-adittional">{h4}</span>
          </h1>
          <p className="descripittion-paragraph"> {paragraph}</p>
          <p className="descripittion-paragraph">{paragraph2}</p>
        </div>
      </div>
    </section>
  );
};

interface IPropsDescripition {
  title: string;
  h4: string;
  paragraph: string;
  paragraph2: string;
}
export default DescripitionAdditional;
