import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
  const { handleEnlanceClick } = props;

  const location = useLocation();

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 13 }}>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "white"}}>
        <div className="container-lg">
          <button
            className="navbar-toggler mb-4 mt-3 border border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse mt-1"
            id="navbarSupportedContent"
            style={{ marginBottom: 70}}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginRight: 25 }}>
                <Link
                  to="/#inicio"
                  id="nav-link1"
                  className={location.hash === "" || location.hash === "#inicio" ? "active" : "link"}
                  onClick={() => {
                    handleEnlanceClick('#inicio');
                  }}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#nosotros"
                  id="nav-link2"
                  className={location.hash === "#nosotros" ? "active" : "link"}
                  onClick={() => {
                    handleEnlanceClick('#nosotros');
                  }}
                >
                  Nosotros
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/#equipo"
                  id="nav-link3"
                  className={location.hash === "#equipo" ? "active" : "link"}
                  style={{ marginRight: 30 }}
                  onClick={() => {
                    handleEnlanceClick('#equipo');
                  }}
                >
                  Equipo
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/#contacto"
                  id="nav-link4"
                  className={location.hash === "#contacto" ? "active" : "link"}
                  onClick={() => {
                    handleEnlanceClick('#contacto');
                  }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div id="title2">
            <img src="./images/logo.png" alt="Mydolife" id="logo" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
