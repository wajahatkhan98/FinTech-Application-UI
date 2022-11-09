import { useEffect, useRef, useState } from "react";
import "./style.css";
const Accordian = ({ index }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.style.zIndex = `${index + 1}`;
  }, []);
  return (
    <div className="main-accordian">
      <div
        ref={ref}
        onClick={() => {
          ref.current.classList.toggle("auto-height");
          ref.current.style.backgroundColor = "#1e1e1e";
          ref.current.style.zIndex = "11";
        }}
        onBlur={() => {
          ref.current.classList.remove("auto-height");
          ref.current.style.backgroundColor = "#1e1e1e";
          ref.current.style.zIndex = "1";

        }}
        className={`accordian-main`}
        tabIndex="0"
      >
        <div className="accordian-head">
          <span className="accordian-title size-15">What is Solix</span>
          <div className="accordian-arrow-down">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="accordian-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, omnis
          assumenda? Reiciendis corrupti atque at ipsum consequatur quaerat iste
          pariatur maxime assumenda nemo id, ab odit cum voluptate a laudantium
          perspiciatis dignissimos magnam! Fuga dolorum, quisquam sequi, optio
          nobis corrupti cupiditate rerum eligendi eaque ipsum quaerat quod
          omnis eum labore!
        </div>
      </div>
    </div>
  );
};
export default Accordian;
