import { useState } from "react";
import logo from "../../assets/solix.png";
import { headerLinks } from "../../utils/constants";
import { Sidebar } from "../sidebar/Sidebar";
import SignInBtn from "../signInBtn/SignInBtn";
import { Link } from "react-router-dom";
import "./style.css";
const Header = ({ style }) => {
  const [active, setActive] = useState(-1);
  const [subActive, setSubActive] = useState(-1);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <header className={`header ${style}`}>
        <Link to={"/"}>
          <div className="header-logo-div">
            <img src={logo} alt="" className="header-logo" />
          </div>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="signin">
            <SignInBtn />
          </div>
          <div style={{ width: "100px" }}>
            <input
              style={{ position: "absolute" }}
              type="checkbox"
              name="menu-toggle"
              id="menu-toggle"
            />
            <label
              onClick={() => {
                if (!isToggled) {
                  document.getElementsByTagName("html")[0].style.overflow =
                    "hidden !important";
                  document.body.style.overflow = "hidden !important";
                }
                // else {
                //   document.body.style.maxHeight = "auto";
                //   document.body.style.overflowY = "scroll";
                // }
                else {
                  document.body.style.overflow = "auto !important";
                  document.getElementsByTagName("html")[0].style.overflow =
                    "unset !important";
                }
                setIsToggled((pre) => !pre);
              }}
              htmlFor="menu-toggle"
              className={`${isToggled ? "" : ""} menu-icon`}
            >
              <span></span>
            </label>
            <Sidebar />
          </div>
        </div>
        <div className="header-list">
          <ul className="list">
            {headerLinks.map((link, i) =>
              i !== headerLinks.length - 1 ? (
                <Link to={link.link} key={link.name + i}>
                  <li
                    onMouseEnter={() => {
                      setActive(i);
                      setSubActive(-1);
                      console.log(active, subActive);
                    }}
                    onMouseLeave={() => setActive(-1)}
                    className="list-item"
                  >
                    {link?.name}{" "}
                    {link?.child?.length > 0 ? (
                      <span>
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                            fill="#02ffe2"
                          />
                        </svg>
                      </span>
                    ) : (
                      ""
                    )}
                    {link?.child?.length && active == i ? (
                      <ul
                        className={`header-sub-list ${
                          active == i ? "flex" : "none"
                        }`}
                      >
                        {link.child.map((link1, index1) => (
                          <Link key={link1.name + index1} to={link1.link}>
                            <li
                              onMouseEnter={() => {
                                setSubActive(index1);
                                setActive(i);
                              }}
                              className="sub-list-item1"
                            >
                              {link1?.name}{" "}
                              {link1?.child?.length > 0 ? (
                                <span className="arrow-fa">
                                  <svg
                                    width="14"
                                    height="8"
                                    viewBox="0 0 14 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                                      fill="#02ffe2"
                                    />
                                  </svg>
                                </span>
                              ) : (
                                ""
                              )}
                              {link1?.child?.length && subActive == index1 ? (
                                <ul
                                  className={`header-sub-list1 ${
                                    subActive !== index1 ? "none" : "flex"
                                  }`}
                                  onMouseLeave={() => {
                                    setSubActive(-1);
                                    setActive(-1);
                                  }}
                                >
                                  {link1.child.map((link2, index2) => (
                                    <Link
                                      key={link2.name}
                                      to={link1.link + link2.link}
                                    >
                                      <li className="sub-list-item1">
                                        {link2?.name}
                                      </li>
                                    </Link>
                                  ))}
                                </ul>
                              ) : (
                                ""
                              )}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                </Link>
              ) : (
                <SignInBtn key={link.name + i} />
              )
            )}

            <li className="language">en</li>
          </ul>
        </div>
      </header>
      {/* <div
        className={
          active > -1 && headerLinks[active]?.child.length > 0
            ? "mega-menu"
            : "none"
        }
      >
        <div className="list1">
          {active > -1 &&
            headerLinks[active]?.child.map((item, index) => {
              return (
                <div className="list1-sub-list">
                  <span className="size-36 sublist-heading">{item?.name}</span>
                  {item?.child.map((item1, index1) => {
                    return (
                      <p className="size-27 sublist-items">{item1?.name}</p>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div> */}
    </>
  );
};
export default Header;
