const LineHeading = ({ heading, subHeading, style }) => {
  return (
    <>
      <div className="mid-details">
        <div className="details-wrapper" style={{ ...style }}>
          {heading && (
            <h2
              className="deatails-heading size-90 gradient-text"
              data-aos-duration="1000"
              data-aos="fade-down"
            >
              {heading}
            </h2>
          )}
          <h3
            data-aos-duration="1000"
            data-aos="fade-left"
            className="deatails-sub-heading size-36"
          >
            {subHeading}
          </h3>
        </div>
      </div>
    </>
  );
};
export default LineHeading;
