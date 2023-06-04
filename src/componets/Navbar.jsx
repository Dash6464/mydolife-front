import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
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
                <a className="btn btn-success" aria-current="page" href='#inicio'>
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#nosotros"
                  style={{ color: '#2F4944', fontSize: 24 }}
                >
                  Nosotros
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#equipo"
                  style={{ marginRight: 30, color: '#2F4944', fontSize: 24 }}
                >
                  Equipo
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contacto"
                  style={{ color: '#2F4944', fontSize: 24 }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div id='title2'>
            <img src="./images/logo.png" alt="Mydolife" id="logo" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
