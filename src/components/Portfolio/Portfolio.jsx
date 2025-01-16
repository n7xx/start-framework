import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  const portfolioItems = [
    { id: 1, image: "/images/poert1.png" },
    { id: 2, image: "/images/port2.png" },
    { id: 3, image: "/images/port3.png" },
    { id: 4, image: "/images/poert1.png" },
    { id: 5, image: "/images/port2.png" },
    { id: 6, image: "/images/port3.png" },
  ];
  return (
    <section className="portfolio-section">
      <div className="container">
        <h1 className="text-center text-uppercase mb-3">portfolio component</h1>
        <div className="star-line mb-4">
          <div className="line dark"></div>
          <FontAwesomeIcon icon={faStar} />
          <div className="line dark"></div>
        </div>
        <div className="row g-4">
          {portfolioItems.map((item) => (
            <div key={item} className="col-lg-4 col-md-6">
              <div className="portfolio-item rounded-3 overflow-hidden position-relative">
                <img
                  src={item.image}
                  className="w-100"
                  alt={`Portfolio ${item.id}`}
                />
                <div className="overlay">
                  <FontAwesomeIcon icon={faPlus} className="text-white  icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
