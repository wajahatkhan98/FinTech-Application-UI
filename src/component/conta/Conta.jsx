import ContaCards from "../contacard/ContaCards";
import "./style.css";
const Conta = () => {
  return (
    <>
      <section className="conta-section">
        <span
          data-aos-duration="1000"
          data-aos="fade-right"
          className="conta-heading size-90"
        >
          Conta Solix.
        </span>
        <h2
          data-aos-duration="1000"
          data-aos="fade-left"
          data-aos-anchor-placement="center-bottom"
          className="conta-dollar size-36"
        >
          Dollar and Real all in one app.
        </h2>
        <div className="conta-card-list">
          <div
            data-aos-duration="1000"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            className="list-left"
          >
            <ContaCards />
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            className="list-right"
          >
            <ContaCards />
          </div>
          <div data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom" className="list-mid">
            <ContaCards />
          </div>
        </div>
      </section>
    </>
  );
};
export default Conta;
