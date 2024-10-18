import "./Support.css";

interface SupportItemProps {
  icon: string;
  title: string;
  description: string;
}

const SupportItem: React.FC<SupportItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="support-container">
      <img src={icon} alt={title} />
      <div className="support-container-itens">
        <h4 className="supporte-title">{title}</h4>
        <span className="supporte-p">{description}</span>
      </div>
    </div>
  );
};

const Support: React.FC = () => {
  return (
    <section>
      <div className="support-content">
        <div className="support-container">
          <SupportItem
            icon="/assets/icons/trophy.svg"
            title="High Quality"
            description="crafted from top materials"
          />
          <SupportItem
            icon="/assets/icons/guarantee.svg"
            title="Warranty Protection"
            description="Over 2 years"
          />
          <SupportItem
            icon="/assets/icons/shipping.svg"
            title="Free Shipping"
            description="Order over 150 $"
          />
          <SupportItem
            icon="/assets/icons/customer-support.svg"
            title="24 / 7 Support"
            description="Dedicated support"
          />
        </div>
      </div>
    </section>
  );
};

export default Support;
