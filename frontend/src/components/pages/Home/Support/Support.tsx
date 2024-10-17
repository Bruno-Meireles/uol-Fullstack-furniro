import "./Support.css";

interface SupportItem {
  icon: string;
  title: string;
  description: string;
}
const supportItems: SupportItem[] = [
  {
    icon: "/assets/icons/trophy.svg",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: "/assets/icons/guarantee.svg",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: "/assets/icons/shipping.svg",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: "/assets/icons/customer-support.svg",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];
const Support: React.FC = () => {
  return (
    <section>
      <div className="suport-content">
        <div className="suport-container">
          {supportItems.map((item, index) => (
            <div className="suport-container" key={index}>
              <img src={item.icon} alt={item.title} />
              <div className="suport-container-itens">
                <p className="suporte-title">{item.title}</p>
                <p className="suporte-p">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
