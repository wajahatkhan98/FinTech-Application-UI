import Accordian from "../accordian/Accordian";
import faqLogo from "../../assets/question-group.svg";

export const FAQ = () => {
  return (
    <div className="accordian-faq-section">
      <div className="faq-logo" data-aos-duration="1000"
              data-aos="fade-down">
        <img src={faqLogo} alt="" />
      </div>
      <h2 className="gradient-text size-90 faq-heading" data-aos-duration="1000"
              data-aos="fade-up">FAQs</h2>
      <div className="accordian-list" data-aos-duration="1000"
              data-aos="fade-left">
        <Accordian index={0} />
        <Accordian index={1} />
        <Accordian index={2} />
        <Accordian index={3} />
        <Accordian index={4} />
        <Accordian index={5} />
        <Accordian index={6} />
        <Accordian index={7} />
        <Accordian index={9} />
      </div>
    </div>
  );
};
