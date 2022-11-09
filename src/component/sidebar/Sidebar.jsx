import React, { useState } from "react";
import { headerLinks } from "../../utils/constants";
import "./style.css";
import logo from "../../assets/solix.png";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  const [active, setActive] = useState(-1);
  const [subActive, setSubActive] = useState(-1);
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          {headerLinks.map((link, i) =>
            i !== headerLinks.length - 1 ? (
              <li
                // onMouseLeave={() => setActive(-1)}
                className="sidebar-list-item"
              >
                <div style={{ display: "flex" }}>
                  <Link key={link.name} to={link?.link}>
                    {link?.name}
                  </Link>
                  {link?.child?.length > 0 ? (
                    <span
                      onClick={() =>
                        active < 0
                          ? setActive(i)
                          : active == i
                          ? setActive(-1)
                          : setActive(i)
                      }
                      style={{
                        marginLeft: "auto",
                        transform:
                          active == i ? "rotate(0deg)" : "rotate(-90deg)",
                      }}
                    >
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                {link?.child?.length && active == i > 0 ? (
                  <ul
                    className={`sidebar-sub-list ${
                      active !== i ? "none" : "flex"
                    }`}
                  >
                    {link.child.map((link1, index1) => (
                      <li key={link1.name} className="sidebar-sub-list-item1">
                        <div style={{ display: "flex" }}>
                          <Link key={link1.name} to={link1?.link}>
                            {link1?.name}
                          </Link>
                          {link1?.child?.length > 0 ? (
                            <span
                              onClick={() =>
                                subActive < 0
                                  ? setSubActive(index1)
                                  : subActive == index1
                                  ? setSubActive(-1)
                                  : setSubActive(index1)
                              }
                              style={{
                                marginLeft: "auto",
                                // transform: "rotate(-90deg)",
                                transform:
                                  subActive == index1
                                    ? "rotate(0deg)"
                                    : "rotate(-90deg)",
                              }}
                            >
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
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        {link1?.child?.length && subActive == index1 ? (
                          <ul
                            style={{
                              marginLeft: "4rem",
                              flexDirection: "column",
                            }}
                            className={`sidebar-sub-list1 ${
                              subActive !== index1 ? "none" : "flex"
                            }`}
                          >
                            {link1.child.map((link2, index2) => (
                              <Link
                                key={link2.name}
                                to={link1.link + link2?.link}
                              >
                                <li
                                  key={link2.name}
                                  className="sidebar-sub-list-item1"
                                >
                                  {link2?.name}
                                </li>
                              </Link>
                            ))}
                          </ul>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ) : (
              ""
            )
          )}

          {/* <li className="language">en</li> */}
        </ul>
      </div>
    </>
  );
};
