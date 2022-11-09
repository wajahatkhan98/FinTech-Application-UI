import React from "react";
import "./Carto.css";
import Vector from "../../assets/Lines.png";

const Carto = () => {
  return (
    <>
      <div className="carto">
        <center  data-aos-duration="1000"  data-aos="fade-up">
          <h3 className="size-36">SAVE MORE WITH NO-FEE TRANSFER</h3>
        </center>
        <center  data-aos-duration="1000" data-aos="fade-down">
          <h1 className="size-90 from90-at-500">CARTAO INTERNATIONAL</h1>
        </center>
        <center  data-aos-duration="1000" data-aos="fade-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vestibulum, arcu eget blandit <br />
            convallis, lorem nisi vestibulum nunc, non sagittis purus leo dictum
            leo.
          </p>
        </center>
        <div className="carto-body">
          <div className="main">
            <div className="section"  data-aos-duration="1000"  data-aos="fade-right">
              <div className="card card-supervisor">
                <span className="dot"></span>

                <div className="card-body">
                  <div className="card-title text-bold size-36">Chega de linhas</div>
                  <div className="card-text text-muted size-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vestibulum, arcu eget blandit convallis, lorem nisi
                    vestibulum nunc, non sagittis purus leo dictum leo.{" "}
                  </div>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>

            <div className="section"  data-aos-duration="1000"  data-aos="fade-up">
              <div className="card card-team_builder">
                <span className="dot"></span>
                <div className="card-body">
                  <div className="card-title text-bold size-36">Online e Offline</div>
                  <div className="card-text text-muted size-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vestibulum, arcu eget blandit convallis, lorem nisi
                    vestibulum nunc, non sagittis purus leo dictum leo.
                  </div>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>

            <div className="section"  data-aos-duration="1000"  data-aos="fade-left">
              <div className="card card-calculator">
                <span className="dot"></span>

                <div className="card-body">
                  <div className="card-title text-bold size-36">Economia para voce</div>
                  <div className="card-text text-muted size-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean vestibulum, arcu eget blandit convallis, lorem nisi
                    vestibulum nunc, non sagittis purus leo dictum leo.
                  </div>
                </div>
              </div>
            </div>
            <div className="img-section-img">
              <div className="line-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carto;
