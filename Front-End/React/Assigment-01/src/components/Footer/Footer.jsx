export default function Footer() {
  return (
    <>
      <footer className="pt-5 main-bg-color text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 text-center">
              <h5 className="mb-3">Location</h5>
              <p className="mb-0">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-12 col-md-4 text-center">
              <h5 className="mb-3">AROUND THE WEB</h5>
              <ul className="list-unstyled d-flex justify-content-center gap-3">
                <li>
                  <a href="#" className="circle p-3 text-decoration-none">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="circle p-3 text-decoration-none">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="circle p-3 text-decoration-none">
                    <i className="fa-brands fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="circle p-3 text-decoration-none">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 text-center">
              <h5 className="mb-3">ABOUT FREELANCER</h5>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <p className="text-center third-bg-color py-2 m-0">
          copyright reserved by Yassin Gamal
        </p>
      </footer>
    </>
  );
}
