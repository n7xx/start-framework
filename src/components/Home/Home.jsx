import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

  return (
    <section className="main-section d-flex flex-column align-items-center justify-content-center text-white">
      <div className="container">
        <div className=" text-center">
          <img
            src="/images/avataaars.svg"
            alt="Avatar"
            className="mb-3"
            style={{ width: "250px" }}
          />
          <h1 className="text-uppercase mb-3 fs-1 fw-bolder">
            Start Framework
          </h1>
          <div className="star-line mb-3">
            <div className="line"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="line"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </section>
  );
}
