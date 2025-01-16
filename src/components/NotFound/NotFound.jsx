import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function NotFound() {

  return (
    <section className="main-section d-flex flex-column align-items-center justify-content-center text-white">
      <div className="container">
        <div className="text-center">
          <img
            src="/images/404-error.png"
            alt="404 Error"
            className="mb-3"
            style={{ width: "250px" }}
          />
          <h1 className="text-uppercase mb-3 fs-1 fw-bolder">
            Sorry Page Not Found 😢
          </h1>
          <div className="star-line mb-3 d-flex align-items-center justify-content-center">
            <div
              className="line me-2"
              style={{ height: "2px", width: "50px", backgroundColor: "white" }}
            ></div>
            <FontAwesomeIcon icon={faStar} className="text-warning" />
            <div
              className="line ms-2"
              style={{ height: "2px", width: "50px", backgroundColor: "white" }}
            ></div>
          </div>
          <p className="mt-3">
            This page could not be found.
            <br />
            Please check the URL or return to the
            homepage.
          </p>
          <Link to="/" className="btn btn-outline-dark mt-2">
            Go Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
