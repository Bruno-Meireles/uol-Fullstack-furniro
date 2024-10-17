import "./Support.css";
const Support: React.FC = () => {
  return (
    <section>
      <div className="suport-content">
        <div className="suport-container">
          <div className="suport-container">
            <img src="/assets/icons/trophy.svg" alt="trophy" />
            <div className="suport-container-itens">
              <p className="suporte-title">High Quality</p>
              <p className="suporte-p">crafted from top materials</p>
            </div>
          </div>
          <div className="suport-container">
            <img src="/assets/icons/guarantee.svg" alt="trophy" />
            <div className="suport-container-itens">
              <p className="suporte-title">Warranty Protection</p>
              <p className="suporte-p">Over 2 years</p>
            </div>
          </div>
          <div className="suport-container">
            <img src="/assets/icons/shipping.svg" alt="trophy" />
            <div className="suport-container-itens">
              <p className="suporte-title">Free Shipping</p>
              <p className="suporte-p">Order over 150 $</p>
            </div>
          </div>
          <div className="suport-container">
            <img src="/assets/icons/customer-support.svg" alt="trophy" />
            <div className="suport-container-itens">
              <p className="suporte-title">24 / 7 Support</p>
              <p className="suporte-p">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
