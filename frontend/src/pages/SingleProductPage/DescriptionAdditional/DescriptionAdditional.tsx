import "./DescriptionAdditional.css";

const DescriptionAdditional: React.FC<IPropsDescription> = ({
  title,
  h4,
  paragraph,
  paragraph2,
}) => {
  return (
    <section className="description">
      <div className="content">
        <div className="description-container">
          <h1 className="desctipion-titles">
            {title} <span className="description-aditional">{h4}</span>
          </h1>
          <p className="description-paragraph"> {paragraph}</p>
          <p className="description-paragraph">{paragraph2}</p>
        </div>
      </div>
    </section>
  );
};

interface IPropsDescription {
  title: string;
  h4: string;
  paragraph: string;
  paragraph2: string;
}
export default DescriptionAdditional;
