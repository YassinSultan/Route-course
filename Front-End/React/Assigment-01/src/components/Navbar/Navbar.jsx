import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg main-bg-color fixed-top">
        <div className="container">
          <NavLink className="navbar-brand text-light fw-bolder" to={"/"}>
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light"
                  aria-current="page"
                  to={"/"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light"
                  aria-current="page"
                  to={"portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light"
                  aria-current="page"
                  to={"contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
