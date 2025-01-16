import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [navHeight, setNavHeight] = useState("120px");
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 100) {
        setNavHeight("90px");
      } else {
        setNavHeight("120px");
      }
    };
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top "
        style={{ height: navHeight, transition: "height 0.4s ease-in-out" }}
      >
        <div className="container ">
          <NavLink className="navbar-brand text-white fw-bolder fs-2" to="/">
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
