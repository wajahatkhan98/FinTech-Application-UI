import { cards } from "../../utils/constants";
import AppCard from "../appcard/ApCard";
import "./style.css";
import Smoke from '../../assets/Smoke.mp4'
const AlInOne = () => {
  return (
    <>
      <section

       className="all-in-one"
      >
        <div className="items-box">
          <video
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              objectFit:"fill"
            }}
          >
            <source src={Smoke} />
          </video>
          <div className="box-content">
            <h2
              className="all-in-one-heading size-80"
              // data-aos-duration="1000"
              // data-aos-delay="200"
              // data-aos="fade-up"
            >
              ALL IN ONE APP
            </h2>
            <ul className="card-list">
              {cards.map((item) => (
                <AppCard title={item?.title} key={item?.title} Img={item?.image} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default AlInOne;
