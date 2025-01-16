import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about-section text-white vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="container ">
        <div className=" text-center">
          <h1 className="text-center text-uppercase mb-3">about component</h1>
          <div className="star-line mb-4">
            <div className="line"></div>
            <FontAwesomeIcon icon={faStar} />
            <div className="line"></div>
          </div>
          <div className="row ">
            <div className="col-md-6 mb-4 mb-md-0">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
