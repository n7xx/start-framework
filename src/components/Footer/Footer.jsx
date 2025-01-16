import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <>
   <footer className="text-white container-fluid px-0">
        <div className="footer-top py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 mb-4 mb-md-0">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h3>AROUND THE WEB</h3>
                <div className="social-icons">
                  <a href="#" className="mx-2"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="mx-2"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="mx-2"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="mx-2"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-3 text-center">
          <p className="m-0">Copyright © Your Website 2024</p>
        </div>
      </footer>
    </>
  );
}
