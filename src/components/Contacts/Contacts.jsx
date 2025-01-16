import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Contacts() {
  const [isActive, setIsActive] = useState(false);
  const handleKeyDown = () => {
    setIsActive(true);
  };
  const handleBlur = () => {
    setIsActive(false); // Reset the state on blur
  };
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="text-center text-uppercase mb-3">Contact Me</h2>
        <div className="star-line mb-4">
          <div className="line dark"></div>
          <FontAwesomeIcon icon={faStar} />
          <div className="line dark"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className={`${isActive ? "form-floating" : ""} mb-5`}>
                <input
                  type="text"
                  className="form-control border-0 border border-bottom"
                  id="name"
                  placeholder="Your Name"
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                />
                {isActive && <label htmlFor="name">Your Name</label>}
              </div>
              <div className={`${isActive ? "form-floating" : ""} mb-5`}>
                <input
                  type="email"
                  className="form-control border-0 border border-bottom"
                  id="email"
                  placeholder="Email"
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                />
                {isActive && <label htmlFor="email">Your Email</label>}
              </div>
              <div className={`${isActive ? "form-floating" : ""} mb-5`}>
                <input
                  type="number"
                  className="form-control border-0 border border-bottom"
                  id="Age"
                  placeholder="Your Age"
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                />
                {isActive && <label htmlFor="Age">Your Age</label>}
              </div>
              <div className={`${isActive ? "form-floating" : ""} mb-5`}>
                <input
                  type="password"
                  className="form-control border-0 border border-bottom"
                  id="password"
                  placeholder="Password"
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                ></input>
                {isActive && <label htmlFor="password">Your Password</label>}
              </div>
              <Link type="submit" className="btn btn-primary mt-3">
                Send Message
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
